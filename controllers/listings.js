const Listing = require("../models/listing");
const { listingSchema } = require("../schema.js");
const MAP_TOKEN = process.env.MAP_TOKEN;

module.exports.index = async (req, res, next) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    throw new ExpressError(400, "errMsg");
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }
  console.log(listing);
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  let url = req.file?.path;
  let filename = req.file?.filename;
  console.log(url, "...", filename);

  let result = listingSchema.validate(req.body);
  if (result.error) {
    throw new ExpressError(400, result.error);
  }

  let geo = null;
  try {
    const place = `${req.body.listing.location}, ${req.body.listing.country}`;
    const response = await fetch(
      `https://api.maptiler.com/geocoding/${encodeURIComponent(place)}.json?key=${process.env.MAP_TOKEN}`
    );
    const data = await response.json();

    if (data?.features?.length > 0) {
      geo = data.features[0].geometry;
      const [lon, lat] = geo.coordinates;
      console.log("Latitude:", lat);
      console.log("Longitude:", lon);
    } else {
      console.log("No coordinates found for location.");
    }
  } catch (err) {
    console.error("Error during geocoding:", err);
  }

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  if (geo) {
    newListing.geometry = geo;
  }

  const savedListing = await newListing.save();
  console.log(savedListing);
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};


module.exports.renderEditForm = async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    throw new ExpressError(400, "errMsg");
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res, next) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};

var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {   
        name: "Cloud's Rest",
        image: "https://media.istockphoto.com/photos/abstract-network-connection-background-picture-id509731276?k=6&m=509731276&s=612x612&w=0&h=C8_3Gb8V7DHKZnO1BP-BHYKYfTvxxqJAM29OtvaC7Qs=",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {   
        name: "Abstract",
        image: "https://media.istockphoto.com/photos/abstract-background-picture-id537447438?k=6&m=537447438&s=612x612&w=0&h=YF98lsh0OIxChOs4XmOFmuzLxSj8sieD-CiK-V8iGfU=",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {   
        name: "Extraordinary",
        image: "https://images.pexels.com/photos/207153/pexels-photo-207153.jpeg?auto=compress&cs=tinysrgb&h=350",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
];

function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function(err) {
        
        if(err) {
            console.log("Remove campgrounds.");
        }
        console.log("Removed campgrounds");
        //Add campgrounds
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("Added a campground!");
                    //Add a comment
                    Comment.create({text: "This place is great but I wish there's internet.", author: "Anonymous"}, function(err, comments) {
                        if(err) {
                            console.log(err);
                        } else {
                            campground.comments.push(comments);
                            campground.save();
                            console.log("Created new comment.");
                        }
                    });
                }
            });
        });
        
    });
}

module.exports = seedDB;


$(function () {
  var ccAPIUrl = "/apis/cc.cat.profile.json";
  var $jqxhr = $.getJSON(ccAPIUrl); // Get JSON api
  var $cards = $(".cc-scroller > .mdl-card");

  // Add cards to the card scroller
  $jqxhr.done(function (data) {
    var cats = data.cats;

    // Iterate cards
    $.each($cards, function (index, card) {
      var $card = $(this); // Not `card` argument
      var catID = cats[index].id;
      var cat = cats[index][catID];

      // Add data cat-id  and cat-score to the card
      $card.data({"cat-id": catID, "cat-score": cat.score});

      // Card title
      var $title = $("<div/>", {"class": "mdl-card__title"});

      // Prepare cat gender
      var gender = cat.gender ? "boy" : "girl";

      // Card image
      var $cardImg = $("<img/>", {
        "class": "cc-card-img responsive-img",
        "src": cat.img1,
        "alt": cat.name + " the cat " + gender
      }).appendTo($title);

      // Card action
      var $action = $("<div/>", {
        "class": "mdl-card__actions",
        "text": cat.name
      });

      // Append title and action to the card
      $card.append($title, $action);
    });
  });

  // Show big image and profile on clicking the card, and increase the score
  $cards.click(function () {
    var $card = $(this);
    var $ccBody = $(".cc-body");
    $ccBody.html(""); // Empty cc-body element

    // Get cats array from Json api
    $jqxhr.done(function (data) {
      // Get the clicked cat
      var index = $card.index()
      var catID = data.cats[index].id;
      var cat = data.cats[index][catID];

      // Prepare cat gender
      var gender = cat.gender ? "boy" : "girl";

      // Create image container and append image
      var $imgContainer = $("<div/>", {"class": "cc-img-container mdl-shadow--2dp"});
      var $catImg = $("<img/>", {
        "class": "cc-body-img responsive-img",
        "src": cat.img1,
        "alt": cat.name + " the cat " + gender
      }).appendTo($imgContainer);

      // Add data cat-score to the image container
      var totalScore = $card.data("cat-score");
      totalScore = isNaN(totalScore) ? 0: parseInt(totalScore) + 1;
      $imgContainer.data({"cat-id": catID, "cat-score": totalScore});
      $card.data("cat-score", totalScore);

      // Create info container, and append score and profile
      var $infoContainer = $("<div/>", {"class": "cc-cat-info"});
      var $score = $("<div/>", {"class": "cc-score mdl-card__title-text mdl-shadow--2dp"}).text("Score: " + totalScore);
      var $profile = $("<div/>", {"class": "cc-profile mdl-card mdl-shadow--2dp"});

      var $profileTitle = $("<div/>", {"class": "mdl-card__title"});
      var $profileTitleText = $("<div/>", {"class": "mdl-card__title-text"}).text("Profile");
      $profileTitle.append($profileTitleText);

      var $profileAction = $("<div/>", {"class": "mdl-card__actions mdl-card--border"});

      function profileActionText () {
        return $("<div/>", {"class": "mdl-card__supporting-text"});
      }

      var $name = profileActionText().html("<strong>Name:</strong> " + cat.name);
      var $age = profileActionText().html("<strong>Age:</strong> " + cat.age);
      var $sex = profileActionText().html("<strong>Gender:</strong> " + gender.toUpperCase());
      var $love = profileActionText().html("<strong>Love:</strong> " + cat.love);
      $profileAction.append($name, $age, $sex, $love);

      $profile.append($profileTitle, $profileAction);
      $infoContainer.append($score, $profile);

      // Append imgage and info containers to cc-body
      $ccBody.append($imgContainer, $infoContainer);
    });
  });

  // Increase score by 1 when image container is clicked
  $(".cc-body").on( "click", ".cc-img-container", function() {
    var $imgContainer = $(".cc-img-container");
    var $score = $(".cc-score");
    var totalScore = $imgContainer.data("cat-score");
    var catID = $imgContainer.data("cat-id");

    // Calculate score
    totalScore = isNaN(totalScore) ? 0: parseInt(totalScore) + 1;
    $score.text("Score: " + totalScore);
    $imgContainer.data("cat-score", totalScore);

    // Update the card with latest score
    $.each($cards, function (index) {
      var card = $(this).data("cat-id") == catID ? $(this) : undefined;
      if (card) {
        card.data("cat-score", totalScore);
        return;
      }
    })
  });

});

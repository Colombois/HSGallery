var myhtml = document.getElementById('Cards_Container');
var set_index = 1;
var class_index = 0;
var class_selected = "";
var mana_selected = -1;
var rarity_selected = "";
window.load = getData();
/*Fetch calling the json */

function getData() {
  fetch('../js/cards.collectible.json', {
      method: 'GET'
    })
    .then(resposne => resposne.json())
    .then(data => {
      /*  console.log(data);*/
      pageLoad(data);
      loadMore(data);
      filterData(data);
      resetFilter(data);
      searchEngine(data);
    })

  /*Function to create html elements into the page*/
  function pageLoad(cardData) {
    myhtml.innerHTML = "";
    var images = '';
    var class_Array = ["DRUID","HUNTER","MAGE","PALADIN","PRIEST","ROGUE","SHAMAN","WARLOCK","WARRIOR", "NEUTRAL"];
    for (var i = 0; i < cardData.length; i++) {
      if (cardData[i].set == "BOOMSDAY") {
        images = '<img class="card_img" id="' + cardData[i].dbfId + '" src="' + 'uploads/rel/' + cardData[i].dbfId + '.png' + '" alt="' + cardData[i].name + '"/>';
        myhtml.innerHTML += images;

      }
    }
  }

  /*Search function*/
  function searchEngine(srch_data) {
    document.getElementById("search_card").addEventListener("change", function() {
      myhtml.innerHTML = "";
      $("#loadData").removeClass("loadbtn");
      $("#loadData").addClass("hide");
      var boxValue = document.getElementById("search_card").value;
      var srch_img = '';
      if (boxValue == "" || boxValue == undefined) {
        alert("Enter something");
        /*  pageLoad(srch_data);*/
      } else {
        for (var i = 0; i < srch_data.length; i++) {
          if (srch_data[i].name.toLowerCase().includes(boxValue) || srch_data[i].name.includes(boxValue) || srch_data[i].id.includes(boxValue)) {
            srch_img = '<img class="card_img" id="' + srch_data[i].dbfId + '" src="' + 'uploads/rel/' + srch_data[i].dbfId + '.png' + '" alt="' + srch_data[i].name + '"/>';
            myhtml.innerHTML += srch_img;
          }
        }
      }
    }, false);
  }

  /* function to filter the card images based on class on click icons */
  function filterData(dataFilter) {
    /*Class buttons reading values*/
    document.getElementById("druid_btn").addEventListener("click", function() {
      class_selected = "DRUID";
      $("#druid_btn, #hunter_btn, #mage_btn, #paladin_btn, #priest_btn, #rogue_btn, #shaman_btn, #warlock_btn, #warrior_btn, #neutral_btn").removeClass("filterItem_active");
      $("#druid_btn").addClass("filterItem_active");
    }, false);

    document.getElementById("hunter_btn").addEventListener("click", function() {
      class_selected = "HUNTER";
      $("#druid_btn, #hunter_btn, #mage_btn, #paladin_btn, #priest_btn, #rogue_btn, #shaman_btn, #warlock_btn, #warrior_btn, #neutral_btn").removeClass("filterItem_active");
      $("#hunter_btn").addClass("filterItem_active");
    }, false);

    document.getElementById("mage_btn").addEventListener("click", function() {
      class_selected = "MAGE";
      $("#druid_btn, #hunter_btn, #mage_btn, #paladin_btn, #priest_btn, #rogue_btn, #shaman_btn, #warlock_btn, #warrior_btn, #neutral_btn").removeClass("filterItem_active");
      $("#mage_btn").addClass("filterItem_active");
    }, false);

    document.getElementById("paladin_btn").addEventListener("click", function() {
      class_selected = "PALADIN";
      $("#druid_btn, #hunter_btn, #mage_btn, #paladin_btn, #priest_btn, #rogue_btn, #shaman_btn, #warlock_btn, #warrior_btn, #neutral_btn").removeClass("filterItem_active");
      $("#paladin_btn").addClass("filterItem_active");
    }, false);

    document.getElementById("priest_btn").addEventListener("click", function() {
      class_selected = "PRIEST";
      $("#druid_btn, #hunter_btn, #mage_btn, #paladin_btn, #priest_btn, #rogue_btn, #shaman_btn, #warlock_btn, #warrior_btn, #neutral_btn").removeClass("filterItem_active");
      $("#priest_btn").addClass("filterItem_active");
    }, false);

    document.getElementById("rogue_btn").addEventListener("click", function() {
      class_selected = "ROGUE";
      $("#druid_btn, #hunter_btn, #mage_btn, #paladin_btn, #priest_btn, #rogue_btn, #shaman_btn, #warlock_btn, #warrior_btn, #neutral_btn").removeClass("filterItem_active");
      $("#rogue_btn").addClass("filterItem_active");
    }, false);

    document.getElementById("shaman_btn").addEventListener("click", function() {
      class_selected = "SHAMAN";
      $("#druid_btn, #hunter_btn, #mage_btn, #paladin_btn, #priest_btn, #rogue_btn, #shaman_btn, #warlock_btn, #warrior_btn, #neutral_btn").removeClass("filterItem_active");
      $("#shaman_btn").addClass("filterItem_active");
    }, false);

    document.getElementById("warlock_btn").addEventListener("click", function() {
      class_selected = "WARLOCK";
      $("#druid_btn, #hunter_btn, #mage_btn, #paladin_btn, #priest_btn, #rogue_btn, #shaman_btn, #warlock_btn, #warrior_btn, #neutral_btn").removeClass("filterItem_active");
      $("#warlock_btn").addClass("filterItem_active");
    }, false);

    document.getElementById("warrior_btn").addEventListener("click", function() {
      class_selected = "WARRIOR";
      $("#druid_btn, #hunter_btn, #mage_btn, #paladin_btn, #priest_btn, #rogue_btn, #shaman_btn, #warlock_btn, #warrior_btn, #neutral_btn").removeClass("filterItem_active");
      $("#warrior_btn").addClass("filterItem_active");
    }, false);

    document.getElementById("neutral_btn").addEventListener("click", function() {
      class_selected = "NEUTRAL";
      $("#druid_btn, #hunter_btn, #mage_btn, #paladin_btn, #priest_btn, #rogue_btn, #shaman_btn, #warlock_btn, #warrior_btn, #neutral_btn").removeClass("filterItem_active");
      $("#neutral_btn").addClass("filterItem_active");
    }, false);

    /*Mana buttons reading values*/
    document.getElementById("0_mana").addEventListener("click", function() {
      $("#1_mana, #2_mana, #3_mana, #4_mana, #5_mana, #6_mana, #7_mana").removeClass("filterItem_active");
      $("#0_mana").addClass("filterItem_active");
      mana_selected = 0;
    }, false);

    document.getElementById("1_mana").addEventListener("click", function() {
      $("#0_mana, #2_mana, #3_mana, #4_mana, #5_mana, #6_mana, #7_mana").removeClass("filterItem_active");
      $("#1_mana").addClass("filterItem_active");
      mana_selected = 1;
    }, false);

    document.getElementById("2_mana").addEventListener("click", function() {
      $("#1_mana, #0_mana, #3_mana, #4_mana, #5_mana, #6_mana, #7_mana").removeClass("filterItem_active");
      $("#2_mana").addClass("filterItem_active");
      mana_selected = 2;
    }, false);

    document.getElementById("3_mana").addEventListener("click", function() {
      $("#1_mana, #2_mana, #0_mana, #4_mana, #5_mana, #6_mana, #7_mana").removeClass("filterItem_active");
      $("#3_mana").addClass("filterItem_active");
      mana_selected = 3;
    }, false);

    document.getElementById("4_mana").addEventListener("click", function() {
      $("#1_mana, #2_mana, #3_mana, #0_mana, #5_mana, #6_mana, #7_mana").removeClass("filterItem_active");
      $("#4_mana").addClass("filterItem_active");
      mana_selected = 4;
    }, false);

    document.getElementById("5_mana").addEventListener("click", function() {
      $("#1_mana, #2_mana, #3_mana, #4_mana, #0_mana, #6_mana, #7_mana").removeClass("filterItem_active");
      $("#5_mana").addClass("filterItem_active");
      mana_selected = 5;
    }, false);

    document.getElementById("6_mana").addEventListener("click", function() {
      $("#1_mana, #2_mana, #3_mana, #4_mana, #5_mana, #0_mana, #7_mana").removeClass("filterItem_active");
      $("#6_mana").addClass("filterItem_active");
      mana_selected = 6;
    }, false);

    document.getElementById("7_mana").addEventListener("click", function() {
      $("#1_mana, #2_mana, #3_mana, #4_mana, #5_mana, #6_mana, #0_mana").removeClass("filterItem_active");
      $("#7_mana").addClass("filterItem_active");
      mana_selected = 7;
    }, false);

    /*rarity buttons reading values*/
    document.getElementById("common_gem").addEventListener("click", function() {
      $("#rare_gem, #epic_gem, #legendary_gem").removeClass("filterItem_active");
      $("#common_gem").addClass("filterItem_active");
      rarity_selected = "COMMON";
    }, false);

    document.getElementById("rare_gem").addEventListener("click", function() {
      $("#common_gem, #epic_gem, #legendary_gem").removeClass("filterItem_active");
      $("#rare_gem").addClass("filterItem_active");
      rarity_selected = "RARE";
    }, false);

    document.getElementById("epic_gem").addEventListener("click", function() {
      $("#common_gem, #rare_gem, #legendary_gem").removeClass("filterItem_active");
      $("#epic_gem").addClass("filterItem_active");
      rarity_selected = "EPIC";
    }, false);

    document.getElementById("legendary_gem").addEventListener("click", function() {
      $("#common_gem, #epic_gem, #rare_gem").removeClass("filterItem_active");
      $("#legendary_gem").addClass("filterItem_active");
      rarity_selected = "LEGENDARY";
    }, false);

    document.getElementById("filter_btn").addEventListener("click", function() {
      myhtml.innerHTML = "";
      $("#loadData").removeClass("loadbtn");
      $("#loadData").addClass("hide");
      var cards_Array = dataFilter;
      var filtered_image = "";
      var set_selected = $('#sets option:selected').val();
      for (var i = 0; i < cards_Array.length; i++) {

        /*Class only*/
        if (cards_Array[i].cardClass == class_selected && mana_selected == -1 && rarity_selected == "" && set_selected == "") {
          filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
          myhtml.innerHTML += filtered_image;
        }
        /* Class + Rarity*/
        if (cards_Array[i].cardClass == class_selected && mana_selected == -1 && cards_Array[i].rarity == rarity_selected && set_selected == "") {
          filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
          myhtml.innerHTML += filtered_image;
        }

        /* Class + Set*/
        if (cards_Array[i].cardClass == class_selected && mana_selected == -1 && rarity_selected == "" && cards_Array[i].set == set_selected) {
          filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
          myhtml.innerHTML += filtered_image;
        }


        /*Class + Mana*/
        if (mana_selected == 7) {
          if (cards_Array[i].cardClass == class_selected && cards_Array[i].cost >= 7 && rarity_selected == "" && set_selected == "") {
            filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
            myhtml.innerHTML += filtered_image;
          }
        } else {
          if (cards_Array[i].cardClass == class_selected && cards_Array[i].cost == mana_selected && rarity_selected == "" && set_selected == "") {
            filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
            myhtml.innerHTML += filtered_image;
          }
        }

        /*Class + Mana + Rarity*/
        if (mana_selected == 7) {
          if (cards_Array[i].cardClass == class_selected && cards_Array[i].cost >= 7 && cards_Array[i].rarity == rarity_selected && set_selected == "") {
            filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
            myhtml.innerHTML += filtered_image;
          }
        } else {
          if (cards_Array[i].cardClass == class_selected && cards_Array[i].cost == mana_selected && cards_Array[i].rarity == rarity_selected && set_selected == "") {
            filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
            myhtml.innerHTML += filtered_image;
          }
        }

        /*Class + Mana + Set*/
        if (mana_selected == 7) {
          if (cards_Array[i].cardClass == class_selected && cards_Array[i].cost >= 7 && rarity_selected == "" && cards_Array[i].set == set_selected) {
            filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
            myhtml.innerHTML += filtered_image;
          }
        } else {
          if (cards_Array[i].cardClass == class_selected && cards_Array[i].cost == mana_selected && rarity_selected == "" && cards_Array[i].set == set_selected) {
            filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
            myhtml.innerHTML += filtered_image;
          }
        }
        /* Class + Set + Rarity*/
        if (cards_Array[i].cardClass == class_selected && mana_selected == -1 && cards_Array[i].rarity == rarity_selected && cards_Array[i].set == set_selected) {
          filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
          myhtml.innerHTML += filtered_image;
        }

        /*Class + Mana + Rarity + Sets*/
        if (mana_selected == 7) {
          if (cards_Array[i].cardClass == class_selected && cards_Array[i].cost >= 7 && cards_Array[i].rarity == rarity_selected && cards_Array[i].set == set_selected) {
            filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
            myhtml.innerHTML += filtered_image;
          }
        } else {
          if (cards_Array[i].cardClass == class_selected && cards_Array[i].cost == mana_selected && cards_Array[i].rarity == rarity_selected && cards_Array[i].set == set_selected) {
            filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
            myhtml.innerHTML += filtered_image;
          }
        }

        /*Mana*/
        if (mana_selected == 7) {
          if (class_selected == "" && cards_Array[i].cost >= 7 && rarity_selected == "" && set_selected == "") {
            filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
            myhtml.innerHTML += filtered_image;
          }
        } else {
          if (class_selected == "" && cards_Array[i].cost == mana_selected && rarity_selected == "" && set_selected == "") {
            filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
            myhtml.innerHTML += filtered_image;
          }
        }

        /*Mana + Rarity*/
        if (mana_selected == 7) {
          if (class_selected == "" && cards_Array[i].cost >= 7 && cards_Array[i].rarity == rarity_selected && set_selected == "") {
            filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
            myhtml.innerHTML += filtered_image;
          }
        } else {
          if (class_selected == "" && cards_Array[i].cost == mana_selected && cards_Array[i].rarity == rarity_selected && set_selected == "") {
            filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
            myhtml.innerHTML += filtered_image;
          }
        }

        /*Mana + Set*/
        if (mana_selected == 7) {
          if (class_selected == "" && cards_Array[i].cost >= 7 && rarity_selected == "" && cards_Array[i].set == set_selected) {
            filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
            myhtml.innerHTML += filtered_image;
          }
        } else {
          if (class_selected == "" && cards_Array[i].cost == mana_selected && rarity_selected == "" && cards_Array[i].set == set_selected) {
            filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
            myhtml.innerHTML += filtered_image;
          }
        }

        /*Mana + Rarity +Set*/
        if (mana_selected == 7) {
          if (class_selected == "" && cards_Array[i].cost >= 7 && cards_Array[i].rarity == rarity_selected && cards_Array[i].set == set_selected) {
            filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
            myhtml.innerHTML += filtered_image;
          }
        } else {
          if (class_selected == "" && cards_Array[i].cost == mana_selected && cards_Array[i].rarity == rarity_selected && cards_Array[i].set == set_selected) {
            filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
            myhtml.innerHTML += filtered_image;
          }
        }
        /*sets*/
        if (class_selected == "" && mana_selected == -1 && rarity_selected == "" && cards_Array[i].set == set_selected) {
          filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
          myhtml.innerHTML += filtered_image;
        }

        /*Rarity*/
        if (class_selected == "" && mana_selected == -1 && cards_Array[i].rarity == rarity_selected && set_selected == "") {
          filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
          myhtml.innerHTML += filtered_image;
        }
        /*Rarity + Set*/
        if (class_selected == "" && mana_selected == -1 && cards_Array[i].rarity == rarity_selected && cards_Array[i].set == set_selected) {
          filtered_image = '<img class="card_img" id="' + cards_Array[i].dbfId + '" src="' + 'uploads/rel/' + cards_Array[i].dbfId + '.png' + '" alt="' + cards_Array[i].name + '"/>';
          myhtml.innerHTML += filtered_image;
        }

      }

    }, false);
  }

  /*Reset filter button click calling CreateHTML function */
  function resetFilter(resetData) {
    document.getElementById("reset_btn").addEventListener("click", function() {
      pageLoad(resetData);
      class_selected = "";
      mana_selected = -1;
      rarity_selected = "";
      $("#druid_btn, #hunter_btn, #mage_btn, #paladin_btn, #priest_btn, #rogue_btn, #shaman_btn, #warlock_btn, #warrior_btn, #neutral_btn").removeClass("filterItem_active");
      $("#0_mana, #1_mana, #2_mana, #3_mana, #4_mana, #5_mana, #6_mana, #7_mana").removeClass("filterItem_active");
      $("#common_gem, #rare_gem, #epic_gem, #legendary_gem").removeClass("filterItem_active");
      $("#loadData").addClass("filterbtn");
      $("#loadData").removeClass("hide");

    }, false);
  }

  /*Filter animation on arrow click*/
  document.getElementById("filter_arrow").addEventListener("click", function() {
    if ($(this).hasClass("arrow")) {
      $(this).removeClass("arrow");
      $(this).addClass("arrow_active");
      $("#filter-wrap").removeClass("filter-wrapp");
      $("#filter-wrap").addClass("filter-wrapp_active");
      $("#mana_rarity_container").removeClass("mana_rarity");
      $("#mana_rarity_container").addClass("mana_rarity_active");
      $("#format_container").removeClass("format_sets");
      $("#format_container").addClass("format_sets_active");
    } else {
      $(this).removeClass("arrow_active");
      $(this).addClass("arrow");
      $("#filter-wrap").removeClass("filter-wrapp_active");
      $("#filter-wrap").addClass("filter-wrapp");
      $("#mana_rarity_container").addClass("mana_rarity");
      $("#mana_rarity_container").removeClass("mana_rarity_active");
      $("#format_container").addClass("format_sets");
      $("#format_container").removeClass("format_sets_active");
    }

  }, false);

  /*funtion to load more conent when the button "load more" is clicked */
  function loadMore(btndata) {
    document.getElementById("loadData").addEventListener("click", function() {
      var setarray = ["BOOMSDAY", "GILNEAS", "LOOTAPALOOZA", "ICECROWN", "UNGORO", "GANGS", "KARA", "OG", "LOE", "TGT", "BRM", "NAXX", "GVG", "HOF", "EXPERT1", "CORE"];
      var images = '';

      for (var i = 0; i < btndata.length; i++) {
        if (btndata[i].set == setarray[set_index]) {
          images = '<img class="card_img" id="' + btndata[i].dbfId + '" src="' + 'uploads/rel/' + btndata[i].dbfId + '.png' + '" alt="' + btndata[i].name + '"/>';
          myhtml.innerHTML += images;
        }
      }
      set_index++;
      console.log(setarray[set_index - 1]);
    }, false);
  }
}

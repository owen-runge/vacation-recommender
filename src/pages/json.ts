export const json = {
 "focusFirstQuestionAutomatic": false,
"elements": [
{
    "type": "radiogroup",
    "name": "climate-choices",
    "title": "Please choose your preferred climate for your vacation destination.",
    "isRequired": true,
    "requiredErrorText": "This question is required.",
    "choices": [
    "Hot",
    "Warm",
    "Temperate",
    "Cool",
    "Cold"
    ],
    "showNoneItem": true,
    "noneText": "No Preference",
},
{
    "type": "radiogroup",
    "name": "climate-humidity",
    "title": "Do you prefer the weather be",
    "isRequired": true,
    "requiredErrorText": "This question is required.",
    "choices": [
    "Wet",
    "Dry"
    ],
    "showNoneItem": true,
    "noneText": "No Preference"
},
{
    "type": "radiogroup",
    "name": "time-of-year",
    "title": "During which season do you plan on vacationing?",
    "isRequired": true,
    "requiredErrorText": "This question is required.",
    "choices": [
    "Spring",
    "Summer",
    "Fall",
    "Winter"
    ],
},
{
    "type": "checkbox",
    "name": "transport-choices",
    "title": "What modes of transport do you plan on utilizing?",
    "description": "select all that apply",
    "isRequired": true,
    "requiredErrorText": "This question is required.",
    "choices": [
    "Car",
    "Bike",
    "Walking",
    {
    "value": "Public-Transport",
    "text": "Public Transport"
    }
    ],
    "showNoneItem": true,
    "noneText": "No Preference",
    "maxSelectedChoices": 4,
    "minSelectedChoices": 1
},
{
    "type": "ranking",
    "name": "transport-ranking",
    "visibleIf": "{transport-choices} anyof ['Car', 'Bike', 'Walking', 'Public-Transport']",
    "title": "Please rank your preferred modes of transport from your answer(s) to the last question.",
    "isRequired": true,
    "requiredIf": "{transport-choices} anyof ['Car', 'Bike', 'Walking', 'Public-Transport']",
    "requiredErrorText": "This question is required.",
    "choicesFromQuestion": "transport-choices",
    "choices": [
    "Item 1",
    "Item 2",
    "Item 3"
    ],
    "choicesFromQuestionMode": "selected"
},
{
    "type": "rating",
    "name": "budget",
    "title": "How large is your budget for this trip?",
    "isRequired": true,
    "requiredErrorText": "This question is required.",
    "minRateDescription": "Very Small",
    "maxRateDescription": "Very Large"
},
{
    "type": "rating",
    "name": "kids-attraction-importance",
    "title": "How important is the availability of attractions suitable for kids?",
    "isRequired": true,
    "requiredErrorText": "This question is required.",
    "minRateDescription": "Not at all",
    "maxRateDescription": "Very Important"
},
{
    "type": "rating",
    "name": "adrenaline-attraction-importance",
    "title": "How important is the availability of high-adrenaline attractions?",
    "isRequired": true,
    "requiredErrorText": "This question is required.",
    "minRateDescription": "Not at all",
    "maxRateDescription": "Very Important"
},
{
    "type": "checkbox",
    "name": "activity-type-choices",
    "title": "Please choose your preferred activity type(s).",
    "description": "select all that apply",
    "isRequired": true,
    "requiredErrorText": "This question is required.",
    "choices": [
    {
    "value": "spas_wellness",
    "text": "Spas & Wellness"
    },
    {
    "value": "sights_landmarks",
    "text": "Sights & Landmarks"
    },
    {
    "value": "nightlife",
    "text": "Nightlife"
    },
    {
    "value": "fun_games",
    "text": "Fun & Games"
    },
    {
    "value": "nature_parks",
    "text": "Nature & Parks"
    },
    {
    "value": "museums",
    "text": "Museums"
    },
    {
    "value": "classes_workshops",
    "text": "Classes & Workshops"
    },
    {
    "value": "boat_tours_water_sports",
    "text": "Boat Tours & Water Sports"
    },
    {
    "value": "zoos_aquariums",
    "text": "Zoos & Aquariums"
    },
    {
    "value": "water_amusement_parks",
    "text": "Water & Amusement Parks"
    },
    {
    "value": "casinos_gambling",
    "text": "Casinos & Gambling"
    }
    ],
    "noneText": "No Preference",
    "colCount": 2,
    "maxSelectedChoices": 11,
    "minSelectedChoices": 1
},
{
    "type": "ranking",
    "name": "activity-type-ranking",
    "visibleIf": "{activity-type-choices} anyof ['Spas-Wellness', 'Sights-Landmarks', 'Nightlife', 'Fun-Games', 'Nature-Parks', 'Museums', 'Classes-Workshops', 'BoatTours-WaterSports', 'Casinos-Gambling', 'Water-AmusementParks', 'Zoos-Aquariums']",
    "title": "Please rank your preferred activity types from your answer(s) to the last question.",
    "requiredIf": "{activity-type-choices} anyof ['Spas-Wellness', 'Sights-Landmarks', 'Nightlife', 'Fun-Games', 'Nature-Parks', 'Museums', 'Classes-Workshops', 'BoatTours-WaterSports', 'Item 11', 'Water-AmusementParks', 'Zoos-Aquariums']",
    "requiredErrorText": "This question is required.",
    "choicesFromQuestion": "activity-type-choices",
    "choices": [
    "Item 1",
    "Item 2",
    "Item 3"
    ],
    "choicesFromQuestionMode": "selected"
},
{
    "type": "rating",
    "name": "hotel-importance",
    "title": "How important is the quality of your hotel to your overall trip?",
    "isRequired": true,
    "requiredErrorText": "This question is required.",
    "minRateDescription": "Not at all",
    "maxRateDescription": "Very Important"
},
{
    "type": "tagbox",
    "name": "cuisine-choices",
    "title": "Please choose your favorite cuisines from the choices below.",
    "description": "select up to 5",
    "isRequired": true,
    "requiredErrorText": "This question is required.",
    "choices": [
    "Afghan",
    "Albanian",
    "American",
    "Anhui",
    "Arabic",
    "Argentinian",
    "Armenian",
    "Asian",
    "Australian",
    "Balti",
    "Bangladeshi",
    "Bar",
    "Barbecue",
    "Basque",
    "Beer restaurants",
    "Belgian",
    "Brazilian",
    "Brew Pub",
    "British",
    "Burmese",
    "Cafe",
    "Cajun & Creole",
    "Campania",
    "Canadian",
    "Cantonese",
    "Caribbean",
    "Caucasian",
    "Central American",
    "Central Asian",
    "Central European",
    "Central-Italian",
    "Chilean",
    "Chinese",
    "Coffee & Tea",
    "Columbian",
    "Contemporary",
    "Cuban",
    "Czech",
    "Danish",
    "Deli",
    "Diner",
    "Dining Bars",
    "Eastern European",
    "Ecuadorian",
    "Ethiopian",
    "European",
    "Fast Food",
    "Filipino",
    "French",
    "Fujian",
    "Fusion",
    "Gastropub",
    "Georgian",
    "German",
    "Greek",
    "Grill",
    "Guatemalan",
    "Hawaiian",
    "Healthy",
    "Hong Kong",
    "Hungarian",
    "Indian",
    "Indonesian",
    "International",
    "Irish",
    "Israeli",
    "Italian",
    "Jamaican",
    "Japanese",
    "Japanese Fusion",
    "Japanese Sweets Parlour",
    "Kaiseki",
    "Korean",
    "Kyushu Cuisine",
    "Latin",
    "Lazio",
    "Lebanese",
    "Malaysian",
    "Medicinal Foods",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Mongolian",
    "Moroccan",
    "Neapolitan",
    "Nepali",
    "Nigerian",
    "Northern-Italian",
    "Pakistani",
    "Persian",
    "Peruvian",
    "Pizza",
    "Polish",
    "Polynesian",
    "Portuguese",
    "Pub",
    "Puerto Rican",
    "Quick Bites",
    "Romana",
    "Romanian",
    "Russian",
    "Salvadorian",
    "Scandinavian",
    "Scottish",
    "Seafood",
    "Shanghai",
    "Singaporean",
    "Soups",
    "South American",
    "Southern-Italian",
    "Southwestern",
    "Spanish",
    "Sri Lankan",
    "Steakhouse",
    "Streetfood",
    "Sushi",
    "Swedish",
    "Szechuan",
    "Taiwanese",
    "Thai",
    "Tibetan",
    "Tunisian",
    "Turkish",
    "Tuscan",
    "Ukrainian",
    "Uzbek",
    "Vietnamese",
    "Wine Bar",
    "Xinjiang"
    ],
    "colCount": 3,
    "maxSelectedChoices": 5,
    "minSelectedChoices": 1,
    "closeOnSelect": true
},
{
    "type": "rating",
    "name": "healthcare-importance",
    "title": "How important is the availability of health services during your trip?",
    "isRequired": true,
    "requiredErrorText": "This question is required.",
    "minRateDescription": "Not at all",
    "maxRateDescription": "Very Important"
},
{
    "type": "rating",
    "name": "safety-importance",
    "title": "How concerned are you about safety during your trip?",
    "isRequired": true,
    "requiredErrorText": "This question is required.",
    "minRateDescription": "Not at all",
    "maxRateDescription": "Very Concerned"
}
],
"navigateToUrl": "/results",
"showQuestionNumbers": "off",
"widthMode": "static",
"width": "750px"
}
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
    "value": "Spas-Wellness",
    "text": "Spas & Wellness"
    },
    {
    "value": "Sights-Landmarks",
    "text": "Sights & Landmarks"
    },
    "Nightlife",
    {
    "value": "Fun-Games",
    "text": "Fun & Games"
    },
    {
    "value": "Nature-Parks",
    "text": "Nature & Parks"
    },
    "Museums",
    {
    "value": "Classes-Workshops",
    "text": "Classes & Workshops"
    },
    {
    "value": "BoatTours-WaterSports",
    "text": "Boat Tours & Water Sports"
    },
    {
    "value": "Zoos-Aquariums",
    "text": "Zoos & Aquariums"
    },
    {
    "value": "Water-AmusementParks",
    "text": "Water & Amusement Parks"
    },
    {
    "value": "Casinos-Gambling",
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
    "Bangladeshi",
    "Bar",
    "Barbecue",
    "Basque",
    {
    "value": "Beer-restaurants",
    "text": "Beer restaurants"
    },
    "Belgian",
    "Brazilian",
    {
    "value": "Brew-Pub",
    "text": "Brew Pub"
    },
    "British",
    "Burmese",
    "Cafe",
    {
    "value": "Cajun-Creole",
    "text": "Cajun & Creole"
    },
    "Campania",
    "Canadian",
    "Cantonese",
    "Caribbean",
    "Caucasian",
    {
    "value": "Central-American",
    "text": "Central American"
    },
    {
    "value": "Central-Asian",
    "text": "Central Asian"
    },
    {
    "value": "Central-European",
    "text": "Central European"
    },
    "Central-Italian",
    "Chilean",
    "Chinese",
    "Columbian",
    "Contemporary",
    "Cuban",
    "Czech",
    "Danish",
    "Deli",
    "Diner",
    {
    "value": "Dining-Bars",
    "text": "Dining Bars"
    },
    {
    "value": "Eastern-European",
    "text": "Eastern European"
    },
    "Ecuadorian",
    "Ethiopian",
    "European",
    {
    "value": "Fast-Food",
    "text": "Fast Food"
    },
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
    {
    "value": "Hong-Kong",
    "text": "Hong Kong"
    },
    "Hungarian",
    "Indian",
    "Indonesian",
    "International",
    "Irish",
    "Israeli",
    "Italian",
    "Jamaican",
    "Japanese",
    {
    "value": "Japanese-Fusion",
    "text": "Japanese Fusion"
    },
    {
    "value": "Japanese-Sweets-Parlour",
    "text": "Japanese Sweets Parlour"
    },
    "Kaiseki",
    "Korean",
    {
    "value": "Kyushu-Cuisine",
    "text": "Kyushu Cuisine"
    },
    "Latin",
    "Lazio",
    "Lebanese",
    "Malaysian",
    {
    "value": "Medicinal-Foods",
    "text": "Medicinal Foods"
    },
    "Mediterranean",
    "Mexican",
    {
    "value": "Middle-Eastern",
    "text": "Middle Eastern"
    },
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
    {
    "value": "Puerto-Rican",
    "text": "Puerto Rican"
    },
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
    {
    "value": "South-American",
    "text": "South American"
    },
    "Southern-Italian",
    "Southwestern",
    "Spanish",
    {
    "value": "Sri-Lankan",
    "text": "Sri Lankan"
    },
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
    {
    "value": "Wine-Bar",
    "text": "Wine Bar"
    },
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
"showQuestionNumbers": "off",
"widthMode": "static",
"width": "750px"
}
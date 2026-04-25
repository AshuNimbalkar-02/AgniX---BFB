export const cropData = [
  {
    id: 1,
    name: { en: "Wheat", hi: "गेहूं", mr: "गहू" },
    season: "Rabbi",
    difficulty: "Medium",
    profit: "High",
    region: ["North India", "Maharashtra", "Punjab"],
    npkRange: { n: [100, 150], p: [40, 70], k: [30, 50] },
    tempRange: [15, 25],
    humidityRange: [30, 60],
    phRange: [6.0, 7.5],
    suitableSoil: ["Black Soil", "Alluvial Soil"],
    marketDemand: "High",
    prices: { min: 2200, avg: 2500, max: 2900 },
    msp: 2275,
    schemes: [
      { en: "PM-Kisan Samman Nidhi", hi: "पीएम-किसान सम्मान निधि", mr: "पीएम-किसान सन्मान निधी" },
      { en: "Pradhan Mantri Fasal Bima Yojana (PMFBY)", hi: "प्रधानमंत्री फसल बीमा योजना", mr: "प्रधानमंत्री पीक विमा योजना" }
    ],
    roadmap: {
      en: ["Level 1: Soil preparation in October", "Level 2: Sowing between Nov 1-15", "Level 3: First irrigation at CRI stage (21 days)", "Level 4: Fertilization and weeding", "Level 5: Regular watering during grain filling", "Level 6: Harvest in April"],
      hi: ["स्तर 1: अक्टूबर में मिट्टी की तैयारी", "स्तर 2: 1-15 नवंबर के बीच बुवाई", "स्तर 3: CRI चरण (21 दिन) पर पहली सिंचाई", "स्तर 4: उर्वरक और निराई", "स्तर 5: दाने भरते समय नियमित पानी", "स्तर 6: अप्रैल में कटाई"],
      mr: ["पातळी १: ऑक्टोबरमध्ये मातीची पूर्वमशागत", "पातळी २: १-१५ नोव्हेंबर दरम्यान पेरणी", "पातळी ३: मुकुटमुळे फुटण्याच्या वेळी (२१ दिवस) पहिले पाणी", "पातळी ४: खत व्यवस्थापन आणि खुरपणी", "पातळी ५: दाणे भरण्याच्या अवस्थेत नियमित पाणी", "पातळी ६: एप्रिलमध्ये काढणी"]
    },
    why: {
      en: "Wheat is ideal for Rabbi season in Paithan and Gangapur due to irrigation facilities.",
      hi: "सिंचाई सुविधाओं के कारण पैठण और गंगापुर में रबी सीजन के लिए गेहूं आदर्श है।",
      mr: "पैठण आणि गंगापूरमध्ये सिंचनाच्या सोयींमुळे रब्बी हंगामासाठी गहू उत्तम आहे."
    }
  },
  {
    id: 2,
    name: { en: "Cotton", hi: "कपास", mr: "कापूस" },
    season: "Kharif",
    difficulty: "High",
    profit: "Very High",
    region: ["Maharashtra", "Gujarat", "South India"],
    npkRange: { n: [80, 120], p: [40, 60], k: [40, 60] },
    tempRange: [25, 35],
    humidityRange: [50, 80],
    phRange: [5.5, 8.5],
    suitableSoil: ["Black Soil"],
    marketDemand: "Stable",
    prices: { min: 6500, avg: 7200, max: 8500 },
    msp: 7121,
    schemes: [
      { en: "Cotton Subsidy Scheme", hi: "कपास सब्सिडी योजना", mr: "कापूस अनुदान योजना" },
      { en: "Weather Based Crop Insurance", hi: "मौसम आधारित फसल बीमा", mr: "हवामान आधारित पीक विमा" }
    ],
    roadmap: {
      en: ["Level 1: Deep plowing in May", "Level 2: Sowing with first monsoon rain", "Level 3: Gap filling and thinning (15 days)", "Level 4: Weed management at 45 days", "Level 5: Pest control for bollworm", "Level 6: Picking/Harvesting from Oct-Dec"],
      hi: ["स्तर 1: मई में गहरी जुताई", "स्तर 2: पहली मानसून बारिश के साथ बुवाई", "स्तर 3: गैप फिलिंग और विरलीकरण (15 दिन)", "स्तर 4: 45 दिनों पर खरपतवार प्रबंधन", "स्तर 5: बोलवर्म के लिए कीट नियंत्रण", "स्तर 6: अक्टूबर-दिसंबर से तुड़ाई/कटाई"],
      mr: ["पातळी १: मे महिन्यात खोल नांगरणी", "पातळी २: पहिल्या मान्सून पावसासह पेरणी", "पातळी ३: नांग्या भरणे आणि विरळणी (१५ दिवस)", "पातळी ४: ४५ दिवसांनी तण व्यवस्थापन", "पातळी ५: बोंडअळीसाठी कीड नियंत्रण", "पातळी ६: ऑक्टोबर-डिसेंबरपासून वेचणी/काढणी"]
    },
    why: {
      en: "Chh. Sambhajinagar is a major cotton belt. Vaijapur and Gangapur are prime zones.",
      hi: "छ. संभाजीनगर एक प्रमुख कपास क्षेत्र है। वैजापूर और गंगापूर प्रमुख क्षेत्र हैं।",
      mr: "छ. संभाजीनगर हा कापसाचा प्रमुख पट्टा आहे. वैजापूर आणि गंगापूर हे मुख्य भाग आहेत."
    }
  },
  {
    id: 3,
    name: { en: "Tur (Pigeon Pea)", hi: "अरहर (तुअर)", mr: "तूर" },
    season: "Kharif",
    difficulty: "Medium",
    profit: "High",
    region: ["Maharashtra", "Madhya Pradesh"],
    npkRange: { n: [20, 30], p: [40, 60], k: [20, 40] },
    tempRange: [25, 30],
    humidityRange: [50, 70],
    phRange: [6.5, 7.5],
    suitableSoil: ["Black Soil", "Loamy Soil"],
    marketDemand: "High",
    prices: { min: 6500, avg: 7500, max: 9000 },
    msp: 7000,
    schemes: [
      { en: "Pulse Development Scheme", hi: "दलहन विकास योजना", mr: "कडधान्य विकास योजना" },
      { en: "PM-AASHA", hi: "पीएम-आशा", mr: "पीएम-आशा" }
    ],
    roadmap: {
      en: ["Level 1: Land preparation in June", "Level 2: Sowing with intercrops", "Level 3: First weeding at 25 days", "Level 4: Monitoring for pod borer", "Level 5: Irrigation at flowering stage", "Level 6: Harvest in Dec-Jan"],
      hi: ["स्तर 1: जून में भूमि की तैयारी", "स्तर 2: अंतर-फसलों के साथ बुवाई", "स्तर 3: 25 दिनों पर पहली निराई", "स्तर 4: फली छेदक की निगरानी", "स्तर 5: फूल आने की अवस्था में सिंचाई", "स्तर 6: दिसंबर-जनवरी में कटाई"],
      mr: ["पातळी १: जूनमध्ये जमीन तयार करणे", "पातळी २: आंतरपिकासह पेरणी", "पातळी ३: २५ दिवसांनी पहिली खुरपणी", "पातळी ४: शेंगा पोखरणाऱ्या अळीवर लक्ष", "पातळी ५: फुलोरा अवस्थेत पाणी व्यवस्थापन", "पातळी ६: डिसेंबर-जानेवारीमध्ये काढणी"]
    },
    why: {
      en: "Tur is a drought-tolerant crop suitable for Khultabad and Phulambri.",
      hi: "तुअर एक सूखा-सहिष्णु फसल है जो खुलताबाद और फुलंब्री के लिए उपयुक्त है।",
      mr: "तूर हे कमी पावसात येणारे पीक खुलताबाद आणि फुलंब्रीसाठी उत्तम आहे."
    }
  },
  {
    id: 4,
    name: { en: "Soybean", hi: "सोयाबीन", mr: "सोयाबीन" },
    season: "Kharif",
    difficulty: "Medium",
    profit: "High",
    region: ["Maharashtra", "Madhya Pradesh"],
    npkRange: { n: [15, 30], p: [50, 70], k: [30, 50] },
    tempRange: [20, 30],
    humidityRange: [60, 80],
    phRange: [6.0, 7.5],
    suitableSoil: ["Black Soil", "Loamy Soil"],
    marketDemand: "High",
    prices: { min: 4200, avg: 4600, max: 5100 },
    msp: 4892,
    schemes: [
      { en: "Oilseeds Production Subsidy", hi: "तिलहन उत्पादन सब्सिडी", mr: "तेलबिया उत्पादन अनुदान" },
      { en: "MIS Scheme", hi: "एमआईएस योजना", mr: "एमआयएस योजना" }
    ],
    roadmap: {
      en: ["Level 1: Seed treatment with fungicides", "Level 2: Sowing after 100mm rainfall", "Level 3: Early weeding (20 days)", "Level 4: Monitoring for yellow mosaic virus", "Level 5: Moisture management at pod filling", "Level 6: Harvesting in Sept-Oct"],
      hi: ["स्तर 1: कवकनाशी के साथ बीज उपचार", "स्तर 2: 100 मिमी वर्षा के बाद बुवाई", "स्तर 3: जल्दी निराई (20 दिन)", "स्तर 4: पीला मोज़ेक वायरस की निगरानी", "स्तर 5: फली भरते समय नमी प्रबंधन", "स्तर 6: सितंबर-अक्टूबर में कटाई"],
      mr: ["पातळी १: बुरशीनाशकासह बीजप्रक्रिया", "पातळी २: १०० मिमी पावसानंतर पेरणी", "पातळी ३: सुरुवातीची खुरपणी (२० दिवस)", "पातळी ४: पिवळा मोझॅक व्हायरसवर देखरेख", "पातळी ५: शेंगा भरताना ओलावा व्यवस्थापन", "पातळी ६: सप्टेंबर-ऑक्टोबरमध्ये काढणी"]
    },
    why: {
      en: "Soybean fixes nitrogen and grows well in Phulambri and Sillod's climate.",
      hi: "सोयाबीन नाइट्रोजन स्थिर करता है और फुलंब्री और सिल्लोड की जलवायु में अच्छा बढ़ता है।",
      mr: "सोयाबीन हवेतील नत्र जमिनीत स्थिर करते आणि फुलंब्री व सिल्लोडच्या हवामानात चांगले येते."
    }
  },
  {
    id: 5,
    name: { en: "Onion", hi: "प्याज", mr: "कांदा" },
    season: "Rabbi",
    difficulty: "Medium",
    profit: "High",
    region: ["Maharashtra", "Gujarat"],
    npkRange: { n: [100, 150], p: [50, 80], k: [80, 100] },
    tempRange: [15, 30],
    humidityRange: [60, 70],
    phRange: [6.0, 7.5],
    suitableSoil: ["Loamy Soil", "Black Soil"],
    marketDemand: "Very High",
    prices: { min: 1500, avg: 2200, max: 3500 },
    msp: null,
    schemes: [
      { en: "Onion Storage Subsidy (Kanda Chal)", hi: "प्याज भंडारण सब्सिडी (कांदा चाल)", mr: "कांदा चाळ अनुदान योजना" },
      { en: "Export Incentive", hi: "निर्यात प्रोत्साहन", mr: "निर्यात प्रोत्साहन" }
    ],
    roadmap: {
      en: ["Level 1: Nursery bed preparation", "Level 2: Transplanting 6-week seedlings", "Level 3: Irrigation every 10 days", "Level 4: Nitrogen top-dressing at 30 days", "Level 5: Neck fall stage monitoring", "Level 6: Harvesting and curing"],
      hi: ["स्तर 1: नर्सरी बेड की तैयारी", "स्तर 2: 6 सप्ताह के पौधों का प्रत्यारोपण", "स्तर 3: हर 10 दिन में सिंचाई", "स्तर 4: 30 दिनों पर नाइट्रोजन टॉप-ड्रेसिंग", "स्तर 5: नेक फॉल स्टेज की निगरानी", "स्तर 6: कटाई और क्यूरिंग"],
      mr: ["पातळी १: रोपवाटिका तयार करणे", "पातळी २: ६ आठवड्यांच्या रोपांची पुनर्लागवड", "पातळी ३: दर १० दिवसांनी पाणी देणे", "पातळी ४: ३० दिवसांनी नत्राचा हप्ता", "पातळी ५: कांदा मान टाकण्याच्या स्थितीवर लक्ष", "पातळी ६: काढणी आणि सुकवणी (क्यूरिंग)"]
    },
    why: {
      en: "Onion is a primary cash crop for Vaijapur and Gangapur farmers.",
      hi: "वैजापुर और गंगापुर के किसानों के लिए प्याज एक प्राथमिक नकदी फसल है।",
      mr: "वैजापूर आणि गंगापूरमधील शेतकऱ्यांसाठी कांदा हे मुख्य नगदी पीक आहे."
    }
  },
  {
    id: 6,
    name: { en: "Maize (Corn)", hi: "मक्का", mr: "मका" },
    season: "Kharif",
    difficulty: "Low",
    profit: "Medium",
    region: ["Maharashtra", "Karnataka"],
    npkRange: { n: [100, 120], p: [40, 60], k: [20, 40] },
    tempRange: [18, 27],
    humidityRange: [50, 80],
    phRange: [5.8, 6.5],
    suitableSoil: ["Black Soil", "Red Soil", "Loamy Soil"],
    marketDemand: "High",
    prices: { min: 1900, avg: 2200, max: 2500 },
    msp: 2090,
    schemes: [
      { en: "Price Support Scheme (PSS)", hi: "मूल्य समर्थन योजना (PSS)", mr: "किंमत आधार योजना (PSS)" },
      { en: "National Food Security Mission", hi: "राष्ट्रीय खाद्य सुरक्षा मिशन", mr: "राष्ट्रीय अन्न सुरक्षा अभियान" }
    ],
    roadmap: {
      en: ["Level 1: Fine seedbed preparation", "Level 2: Sowing in June-July", "Level 3: Nitrogen top-dressing (30 days)", "Level 4: Inter-cultivation for aeration", "Level 5: Water management at silking stage", "Level 6: Harvest when husks turn brown"],
      hi: ["स्तर 1: महीन बीज शय्या की तैयारी", "स्तर 2: जून-जुलाई में बुवाई", "स्तर 3: नाइट्रोजन टॉप-ड्रेसिंग (30 दिन)", "स्तर 4: वातन के लिए अंतः-खेती", "स्तर 5: सिल्क बनने के समय जल प्रबंधन", "स्तर 6: भूसा भूरा होने पर कटाई"],
      mr: ["पातळी १: चांगली मशागत", "पातळी २: जून-जुलैमध्ये पेरणी", "पातळी ३: ३० दिवसांनी नत्राचा हप्ता", "पातळी ४: हवा खेळती राहण्यासाठी कोळपणी", "पातळी ५: तुरा येताना पाणी व्यवस्थापन", "पातळी ६: काढणी आणि मळणी"]
    },
    why: {
      en: "Sillod and Kannad talukas are famous for high-yield Maize production.",
      hi: "सिल्लोड और कन्नड़ तालुका उच्च उपज वाले मक्का उत्पादन के लिए प्रसिद्ध हैं।",
      mr: "सिल्लोड आणि कन्नड तालुके मक्याच्या विक्रमी उत्पादनासाठी ओळखले जातात."
    }
  },
  {
    id: 7,
    name: { en: "Ginger", hi: "अदरक", mr: "आले" },
    season: "Annual",
    difficulty: "Very High",
    profit: "Exorbitant",
    region: ["Maharashtra"],
    npkRange: { n: [75, 100], p: [50, 75], k: [150, 200] },
    tempRange: [20, 30],
    humidityRange: [60, 90],
    phRange: [6.0, 7.0],
    suitableSoil: ["Loamy Soil", "Black Soil"],
    marketDemand: "High",
    prices: { min: 6000, avg: 8500, max: 12000 },
    msp: null,
    schemes: [
      { en: "National Horticulture Mission (NHM)", hi: "राष्ट्रीय बागवानी मिशन", mr: "राष्ट्रीय फलोत्पादन अभियान" },
      { en: "Cold Storage Subsidy", hi: "कोल्ड स्टोरेज सब्सिडी", mr: "शीतगृह अनुदान" }
    ],
    roadmap: {
      en: ["Level 1: Bed preparation with FYM in May", "Level 2: Rhizome planting in June", "Level 3: Mulching with green leaves", "Level 4: Regular earthing up (90 days)", "Level 5: Disease monitoring for rhizome rot", "Level 6: Harvesting after 8-10 months"],
      hi: ["स्तर 1: मई में FYM के साथ बेड तैयार करना", "स्तर 2: जून में प्रकंद रोपण", "स्तर 3: हरी पत्तियों के साथ मल्चिंग", "स्तर 4: नियमित मिट्टी चढ़ाना (90 दिन)", "स्तर 5: प्रकंद सड़न के लिए रोग निगरानी", "स्तर 6: 8-10 महीने बाद कटाई"],
      mr: ["पातळी १: मे मध्ये शेणखत घालून गादीवाफे", "पातळी २: जूनमध्ये बेणे लागवड", "पातळी ३: हिरव्या पाल्याचे आच्छादन", "पातळी ४: ९० दिवसांनी भरणी करणे", "पातळी ५: कंदकुजव्या रोगावर देखरेख", "पातळी ६: ८-१० महिन्यांनी काढणी"]
    },
    why: {
      en: "Ginger is a highly profitable cash crop for Khultabad and Sillod talukas.",
      hi: "अदरक खुलताबाद और सिल्लोड तालुकों के लिए एक अत्यधिक लाभदायक नकदी फसल है।",
      mr: "खुलताबाद आणि सिल्लोड तालुक्यांसाठी आले हे अत्यंत फायदेशीर नगदी पीक आहे."
    }
  },
  {
    id: 8,
    name: { en: "Pomegranate", hi: "अनार", mr: "डाळिंब" },
    season: "Annual",
    difficulty: "High",
    profit: "Very High",
    region: ["Maharashtra"],
    npkRange: { n: [600, 800], p: [200, 300], k: [200, 300] },
    tempRange: [25, 35],
    humidityRange: [30, 50],
    phRange: [6.5, 7.5],
    suitableSoil: ["Red Soil", "Loamy Soil", "Sandy Soil"],
    marketDemand: "Stable",
    prices: { min: 8000, avg: 10500, max: 15000 },
    msp: null,
    schemes: [
      { en: "Horticulture Infrastructure Fund", hi: "बागवानी बुनियादी ढांचा कोष", mr: "फलोत्पादन पायाभूत सुविधा निधी" },
      { en: "Export Promotion Scheme", hi: "निर्यात संवर्धन योजना", mr: "निर्यात प्रोत्साहन योजना" }
    ],
    roadmap: {
      en: ["Level 1: Scientific pruning of trees", "Level 2: Bahar treatment (water stress)", "Level 3: Nutrient management via fertigation", "Level 4: Pest control for fruit borer", "Level 5: Fruit thinning for size quality", "Level 6: Harvesting after 5-6 months of flowering"],
      hi: ["स्तर 1: पेड़ों की वैज्ञानिक छंटाई", "स्तर 2: बहार उपचार (पानी का तनाव)", "स्तर 3: फर्टिगेशन के माध्यम से पोषक तत्व प्रबंधन", "स्तर 4: फल छेदक के लिए कीट नियंत्रण", "स्तर 5: आकार की गुणवत्ता के लिए फलों का विरलीकरण", "स्तर 6: फूल आने के 5-6 महीने बाद कटाई"],
      mr: ["पातळी १: झाडांची शास्त्रीय छाटणी", "पातळी २: बहार धरणे (पाण्याचा ताण)", "पातळी ३: ठिबकद्वारे खत व्यवस्थापन", "पातळी ४: फळपोखरणारी अळी रोखणे", "पातळी ५: फळांची विरळणी करणे", "पातळी ६: फुले लागल्यापासून ५-६ महिन्यांनी काढणी"]
    },
    why: {
      en: "Vaijapur taluka has the ideal dry climate for high-quality Pomegranate.",
      hi: "वैजापुर तालुका में उच्च गुणवत्ता वाले अनार के लिए आदर्श शुष्क जलवायु है।",
      mr: "वैजापूर तालुक्यातील कोरडे हवामान दर्जेदार डाळिंबासाठी अत्यंत योग्य आहे."
    }
  },
  {
    id: 9,
    name: { en: "Sweet Orange (Mosambi)", hi: "मोसंबी", mr: "मोसंबी" },
    season: "Annual",
    difficulty: "High",
    profit: "Very High",
    region: ["Maharashtra"],
    npkRange: { n: [400, 600], p: [200, 400], k: [300, 500] },
    tempRange: [25, 38],
    humidityRange: [40, 60],
    phRange: [6.5, 7.5],
    suitableSoil: ["Loamy Soil", "Black Soil"],
    marketDemand: "Stable",
    prices: { min: 30000, avg: 45000, max: 60000 },
    msp: null,
    schemes: [
      { en: "Horticulture Subsidy", hi: "बागवानी सब्सिडी", mr: "फलोत्पादन अनुदान" },
      { en: "Fruit Crop Insurance", hi: "फलों की फसल का बीमा", mr: "फळपीक विमा" }
    ],
    roadmap: {
      en: ["Level 1: Planting in pits (July-Aug)", "Level 2: Drip irrigation setup", "Level 3: Training and pruning (1-3 years)", "Level 4: Fertilizer dose twice a year", "Level 5: Managing citrus psylla and fruit rot", "Level 6: Harvesting at full maturity"],
      hi: ["स्तर 1: गड्ढों में रोपण (जुलाई-अगस्त)", "स्तर 2: ड्रिप सिंचाई सेटअप", "स्तर 3: प्रशिक्षण और छंटाई (1-3 वर्ष)", "स्तर 4: साल में दो बार उर्वरक की खुराक", "स्तर 5: साइट्रस साइला और फल सड़न का प्रबंधन", "स्तर 6: पूर्ण परिपक्वता पर तुड़ाई"],
      mr: ["पातळी १: खड्ड्यांमध्ये लागवड (जुलै-ऑगस्ट)", "पातळी २: ठिबक सिंचन बसवणे", "पातळी ३: झाडांना आकार देणे आणि छाटणी", "पातळी ४: वर्षातून दोनदा खत मात्रा", "पातळी ५: डिंक्या आणि फळगळ रोखणे", "पातळी ६: पूर्ण पक्व झाल्यावर काढणी"]
    },
    why: {
      en: "Paithan and Chh. Sambhajinagar are famous as the Mosambi hubs of India.",
      hi: "पैठण और छ. संभाजीनगर भारत के मोसंबी हब के रूप में प्रसिद्ध हैं।",
      mr: "पैठण आणि छ. संभाजीनगर हे भारताचे मोसंबी उत्पादनाचे मुख्य केंद्र आहेत."
    }
  },
  {
    id: 10,
    name: { en: "Sugarcane", hi: "गन्ना", mr: "ऊस" },
    season: "Annual",
    difficulty: "Medium",
    profit: "High",
    region: ["Maharashtra", "UP"],
    npkRange: { n: [250, 300], p: [100, 150], k: [100, 150] },
    tempRange: [20, 35],
    humidityRange: [50, 80],
    phRange: [6.0, 8.0],
    suitableSoil: ["Black Soil", "Alluvial Soil"],
    marketDemand: "High",
    prices: { min: 2800, avg: 3200, max: 3600 },
    msp: 3400, // FRP
    schemes: [
      { en: "Fair and Remunerative Price (FRP)", hi: "उचित और लाभकारी मूल्य (FRP)", mr: "रास्त आणि किफायतशीर किंमत (FRP)" },
      { en: "Sugarcane Drip Subsidy", hi: "गन्ना ड्रिप सब्सिडी", mr: "ऊस ठिबक अनुदान" }
    ],
    roadmap: {
      en: ["Level 1: Furrow preparation and basal dose", "Level 2: Set treatment and planting", "Level 3: First earthing up (4 months)", "Level 4: Trash mulching and propping", "Level 5: Heavy earthing up and borer control", "Level 6: Harvesting at peak maturity (12 months)"],
      hi: ["स्तर 1: नाली तैयार करना और बेसल डोज", "स्तर 2: सेत उपचार और रोपण", "स्तर 3: पहली मिट्टी चढ़ाना (4 महीने)", "स्तर 4: ट्रैश मल्चिंग और सहारा देना", "स्तर 5: भारी मिट्टी चढ़ाना और बोरर नियंत्रण", "स्तर 6: पूर्ण परिपक्वता पर कटाई (12 महीने)"],
      mr: ["पातळी १: सरी पाडणे आणि पायाभूत खत मात्रा", "पातळी २: बेणे प्रक्रिया आणि लागवड", "पातळी ३: ४ महिन्यांनी पहिली बालभरणी", "पातळी ४: पाचट आच्छादन आणि बांधणी", "पातळी ५: मोठी भरणी आणि खोडकिडा नियंत्रण", "पातळी ६: १२ महिन्यांनी साखर उतारा पाहून तोडणी"]
    },
    why: {
      en: "Paithan and Gangapur have abundant water from Jayakwadi dam, making them Sugarcane hubs.",
      hi: "जायकवाडी बांध से प्रचुर मात्रा में पानी होने के कारण पैठण और गंगापुर गन्ना केंद्र हैं।",
      mr: "जायकवाडी धरणामुळे पैठण आणि गंगापूरमध्ये मुबलक पाणी आहे, त्यामुळे येथे ऊस मोठ्या प्रमाणात होतो."
    }
  },
  {
    id: 11,
    name: { en: "Custard Apple (Sitaphal)", hi: "शरीफा (सीताफल)", mr: "सीताफळ" },
    season: "Kharif",
    difficulty: "Low",
    profit: "High",
    region: ["Maharashtra"],
    npkRange: { n: [250, 400], p: [125, 250], k: [125, 250] },
    tempRange: [20, 40],
    humidityRange: [50, 70],
    phRange: [6.5, 8.5],
    suitableSoil: ["Sandy Soil", "Red Soil", "Black Soil"],
    marketDemand: "High",
    prices: { min: 3000, avg: 5000, max: 8000 },
    msp: null,
    schemes: [
      { en: "Integrated Development of Fruits", hi: "फलों का एकीकृत विकास", mr: "फळांचा एकात्मिक विकास" },
      { en: "Post-Harvest Subsidy", hi: "कटाई के बाद सब्सिडी", mr: "काढणीपश्चात अनुदान" }
    ],
    roadmap: {
      en: ["Level 1: Digging pits in summer", "Level 2: Planting graft varieties", "Level 3: Basin irrigation in dry spells", "Level 4: Pruning in May for better fruiting", "Level 5: Control for mealy bug", "Level 6: Harvesting in Sept-Nov"],
      hi: ["स्तर 1: गर्मियों में गड्ढे खोदना", "स्तर 2: ग्राफ्ट किस्मों का रोपण", "स्तर 3: शुष्क मौसम में बेसिन सिंचाई", "स्तर 4: बेहतर फलन के लिए मई में छंटाई", "स्तर 5: मिली बग के लिए नियंत्रण", "स्तर 6: सितंबर-नवंबर में कटाई"],
      mr: ["पातळी १: उन्हाळ्यात खड्डे खोदणे", "पातळी २: कलमी जातींची लागवड", "पातळी ३: पावसाच्या खंडात पाणी देणे", "पातळी ४: मे महिन्यात झाडांची छाटणी", "पातळी ५: पिठ्या ढेकणापासून संरक्षण", "पातळी ६: सप्टेंबर-नोव्हेंबरमध्ये फळांची तोडणी"]
    },
    why: {
      en: "Dharur and Chh. Sambhajinagar hills produce world-class Sitaphal.",
      hi: "धारूर और छ. संभाजीनगर की पहाड़ियाँ विश्व स्तरीय सीताफल का उत्पादन करती हैं।",
      mr: "धारूर आणि छ. संभाजीनगरच्या डोंगररांगांमध्ये दर्जेदार सीताफळ तयार होते."
    }
  },
  {
    id: 12,
    name: { en: "Gram (Chana)", hi: "चना", mr: "हरभरा" },
    season: "Rabbi",
    difficulty: "Low",
    profit: "Medium",
    region: ["Maharashtra", "MP"],
    npkRange: { n: [20, 25], p: [50, 60], k: [20, 30] },
    tempRange: [15, 25],
    humidityRange: [30, 50],
    phRange: [6.0, 7.5],
    suitableSoil: ["Black Soil"],
    marketDemand: "High",
    prices: { min: 4800, avg: 5400, max: 6200 },
    msp: 5440,
    schemes: [
      { en: "Pulse Development Scheme", hi: "दलहन विकास योजना", mr: "कडधान्य विकास योजना" },
      { en: "Price Support Scheme", hi: "मूल्य समर्थन योजना", mr: "किंमत आधार योजना" }
    ],
    roadmap: {
      en: ["Level 1: Seed treatment (Rhizobium)", "Level 2: Sowing in moisture", "Level 3: Nipping (removing tips) at 30 days", "Level 4: Monitoring for pod borer", "Level 5: Single irrigation at podding", "Level 6: Harvest when leaves turn yellow"],
      hi: ["स्तर 1: बीज उपचार (राइजोबियम)", "स्तर 2: नमी में बुवाई", "स्तर 3: 30 दिनों पर निपिंग (सिरे हटाना)", "स्तर 4: फली छेदक की निगरानी", "स्तर 5: फली बनते समय एक सिंचाई", "स्तर 6: पत्तियां पीली होने पर कटाई"],
      mr: ["पातळी १: बीजप्रक्रिया (रायझोबियम)", "पातळी २: जमिनीत ओलावा असताना पेरणी", "पातळी ३: ३० दिवसांनी शेंडे खुडणे (निपिंग)", "पातळी ४: घाटी अळीवर लक्ष ठेवणे", "पातळी ५: घाटे भरताना एक पाणी", "पातळी ६: पाने पिवळी पडल्यावर काढणी"]
    },
    why: {
      en: "Gram is the best rotation crop for Cotton farmers in Chh. Sambhajinagar.",
      hi: "छ. संभाजीनगर में कपास किसानों के लिए चना सबसे अच्छा रोटेशन फसल है।",
      mr: "छ. संभाजीनगरमधील कापूस उत्पादकांसाठी हरभरा हे फेरपालटीचे सर्वोत्तम पीक आहे."
    }
  },
  {
    id: 13,
    name: { en: "Tomato", hi: "टमाटर", mr: "टोमॅटो" },
    season: "Annual",
    difficulty: "High",
    profit: "Variable",
    region: ["Maharashtra", "Karnataka"],
    npkRange: { n: [150, 200], p: [100, 150], k: [150, 200] },
    tempRange: [20, 30],
    humidityRange: [60, 80],
    phRange: [6.0, 7.0],
    suitableSoil: ["Loamy Soil", "Red Soil"],
    marketDemand: "Very High",
    prices: { min: 500, avg: 1500, max: 4000 },
    msp: null,
    schemes: [
      { en: "Vegetable Subsidy Scheme", hi: "सब्जी सब्सिडी योजना", mr: "भाजीपाला अनुदान योजना" },
      { en: "Cold Chain Development", hi: "कोल्ड चेन विकास", mr: "कोल्ड चेन विकास" }
    ],
    roadmap: {
      en: ["Level 1: Raising nursery", "Level 2: Transplanting with staking", "Level 3: Pruning and training", "Level 4: Intensive fertilization", "Level 5: Managing early blight", "Level 6: Frequent picking"],
      hi: ["स्तर 1: नर्सरी तैयार करना", "स्तर 2: स्टेकिंग के साथ प्रत्यारोपण", "स्तर 3: छंटाई और प्रशिक्षण", "स्तर 4: गहन उर्वरीकरण", "स्तर 5: अर्ली ब्लाइट का प्रबंधन", "स्तर 6: बार-बार तुड़ाई"],
      mr: ["पातळी १: रोपवाटिका तयार करणे", "पातळी २: आधार देऊन पुनर्लागवड (स्टेकिंग)", "पातळी ३: झाडांची छाटणी आणि वळण देणे", "पातळी ४: खत व्यवस्थापन", "पातळी ५: करपा रोगाचे नियंत्रण", "पातळी ६: वारंवार तोडणी"]
    },
    why: {
      en: "Tomato is a fast cash crop for irrigated farms in Chh. Sambhajinagar.",
      hi: "छ. संभाजीनगर में सिंचित खेतों के लिए टमाटर एक तेज नकदी फसल है।",
      mr: "छ. संभाजीनगरमधील बागायती शेतीसाठी टोमॅटो हे जलद पैसे देणारे पीक आहे."
    }
  },
  {
    id: 14,
    name: { en: "Grapes", hi: "अंगूर", mr: "द्राक्षे" },
    season: "Annual",
    difficulty: "Very High",
    profit: "Exorbitant",
    region: ["Maharashtra"],
    npkRange: { n: [500, 700], p: [300, 500], k: [600, 800] },
    tempRange: [15, 35],
    humidityRange: [40, 60],
    phRange: [6.5, 7.5],
    suitableSoil: ["Loamy Soil", "Sandy Soil"],
    marketDemand: "Stable",
    prices: { min: 40000, avg: 70000, max: 120000 },
    msp: null,
    schemes: [
      { en: "Grape Export Subsidy", hi: "अंगूर निर्यात सब्सिडी", mr: "द्राक्ष निर्यात अनुदान" },
      { en: "Drip Irrigation Fund", hi: "ड्रिप सिंचाई कोष", mr: "ठिबक सिंचन निधी" }
    ],
    roadmap: {
      en: ["Level 1: Foundation pruning (April)", "Level 2: Canopy management", "Level 3: Fruit pruning (Oct)", "Level 4: GA treatment for berry size", "Level 5: Managing downy mildew", "Level 6: Harvesting and packing"],
      hi: ["स्तर 1: फाउंडेशन छंटाई (अप्रैल)", "स्तर 2: कैनोपी प्रबंधन", "स्तर 3: फल छंटाई (अक्टूबर)", "स्तर 4: बेरी के आकार के लिए GA उपचार", "स्तर 5: डाउनी मिल्ड्यू का प्रबंधन", "स्तर 6: कटाई और पैकिंग"],
      mr: ["पातळी १: खरड छाटणी (एप्रिल)", "पातळी २: ओलांड्यांचे व्यवस्थापन", "पातळी ३: फळ छाटणी (ऑक्टोबर)", "पातळी ४: मण्यांच्या आकारासाठी जिब्रेलिक ट्रीटमेंट", "पातळी ५: केवडा रोगाचे नियंत्रण", "पातळी ६: तोडणी आणि पॅकिंग"]
    },
    why: {
      en: "The climate in Chh. Sambhajinagar is now rivaling Nashik for quality grapes.",
      hi: "छ. संभाजीनगर की जलवायु अब नासिक को गुणवत्तापूर्ण अंगूर के लिए टक्कर दे रही है।",
      mr: "छ. संभाजीनगरचे हवामान आता दर्जेदार द्राक्ष उत्पादनात नाशिकला टक्कर देत आहे."
    }
  },
  {
    id: 15,
    name: { en: "Jowar (Sorghum)", hi: "ज्वार", mr: "ज्वारी" },
    season: "Rabbi",
    difficulty: "Low",
    profit: "Medium",
    region: ["Maharashtra"],
    npkRange: { n: [80, 100], p: [40, 50], k: [30, 40] },
    tempRange: [20, 30],
    humidityRange: [40, 60],
    phRange: [6.5, 7.5],
    suitableSoil: ["Black Soil"],
    marketDemand: "Stable",
    prices: { min: 2500, avg: 3200, max: 4500 },
    msp: 3180,
    schemes: [
      { en: "Price Support Scheme", hi: "मूल्य समर्थन योजना", mr: "किंमत आधार योजना" },
      { en: "Staple Food Security", hi: "मुख्य खाद्य सुरक्षा", mr: "अन्न सुरक्षा अभियान" }
    ],
    roadmap: {
      en: ["Level 1: Soil moisture conservation", "Level 2: Sowing in Sept-Oct", "Level 3: Thinning at 15 days", "Level 4: Weeding and inter-culturing", "Level 5: Protection from birds", "Level 6: Harvesting and threshing"],
      hi: ["स्तर 1: मृदा नमी संरक्षण", "स्तर 2: सितंबर-अक्टूबर में बुवाई", "स्तर 3: 15 दिनों पर विरलीकरण", "स्तर 4: निराई और अंतः-खेती", "स्तर 5: पक्षियों से सुरक्षा", "स्तर 6: कटाई और गहाई"],
      mr: ["पातळी १: जमिनीत ओलावा टिकवणे", "पातळी २: सप्टेंबर-ऑक्टोबरमध्ये पेरणी", "पातळी ३: १५ दिवसांनी विरळणी", "पातळी ४: कोळपणी आणि खुरपणी", "पातळी ५: पक्षांपासून राखण", "पातळी ६: काढणी आणि मळणी"]
    },
    why: {
      en: "Rabbi Jowar is the staple food and main fodder crop in Gangapur and Vaijapur.",
      hi: "रबी ज्वार गंगापुर और वैजापुर में मुख्य भोजन और मुख्य चारा फसल है।",
      mr: "रब्बी ज्वारी हे गंगापूर आणि वैजापूरमधील मुख्य अन्न आणि चाऱ्याचे पीक आहे."
    }
  }
];

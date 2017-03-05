// @flow weak
export const EXAMPLE_STORE_KEY = 'states-by-age-d3';

export const VIEW = [500, 400];        // ViewBox: Width, Height
export const TRBL = [30, 20, 10, 30];  // Margins: Top, Right, Bottom, Left

export const AGES = [
  'Under 5 Years',
  '5 to 13 Years',
  '14 to 17 Years',
  '18 to 24 Years',
  '16 Years and Over',
  '18 Years and Over',
  '15 to 44 Years',
  '45 to 64 Years',
  '65 Years and Over',
  '85 Years and Over',
];

export const DATA = [{
  State: 'AL',
  Total: 4661900,
  'Under 5 Years': 0.06660460327334349,
  '5 to 13 Years': 0.11847937536197688,
  '14 to 17 Years': 0.055564040412707266,
  '18 to 24 Years': 0.09670263197408782,
  '16 Years and Over': 0.787490079152277,
  '18 Years and Over': 0.7593519809519723,
  '15 to 44 Years': 0.4029056822325661,
  '45 to 64 Years': 0.2608305626461314,
  '65 Years and Over': 0.1376406615328514,
  '85 Years and Over': 0.018249855209249446,
}, {
  State: 'AK',
  Total: 686293,
  'Under 5 Years': 0.07589032672633991,
  '5 to 13 Years': 0.124786352184854,
  '14 to 17 Years': 0.06142128799215495,
  '18 to 24 Years': 0.10820014192189051,
  '16 Years and Over': 0.7699408270228605,
  '18 Years and Over': 0.7379020330966511,
  '15 to 44 Years': 0.44471821802058303,
  '45 to 64 Years': 0.2668816380175814,
  '65 Years and Over': 0.0732587976272525,
  '85 Years and Over': 0.007058209831660821,
}, {
  State: 'AZ',
  Total: 6500180,
  'Under 5 Years': 0.07936857133187081,
  '5 to 13 Years': 0.12748400813515934,
  '14 to 17 Years': 0.05578953198219126,
  '18 to 24 Years': 0.09260405096474252,
  '16 Years and Over': 0.7654724946078416,
  '18 Years and Over': 0.7373578885507786,
  '15 to 44 Years': 0.4123528886892363,
  '45 to 64 Years': 0.2344059702962072,
  '65 Years and Over': 0.13269986369608225,
  '85 Years and Over': 0.01892024528551517,
}, {
  State: 'AR',
  Total: 2855390,
  'Under 5 Years': 0.0707679161165375,
  '5 to 13 Years': 0.12019619036278757,
  '14 to 17 Years': 0.05505517635069115,
  '18 to 24 Years': 0.09251275657615947,
  '16 Years and Over': 0.7821691607801387,
  '18 Years and Over': 0.7539807171699838,
  '15 to 44 Years': 0.3985403044767965,
  '45 to 64 Years': 0.2546496275464998,
  '65 Years and Over': 0.14260924076921191,
  '85 Years and Over': 0.020548856723599927,
}, {
  State: 'CA',
  Total: 36756666,
  'Under 5 Years': 0.07358281624345364,
  '5 to 13 Years': 0.12242378021989263,
  '14 to 17 Years': 0.0587643340666425,
  '18 to 24 Years': 0.10484596181819102,
  '16 Years and Over': 0.7751731617878509,
  '18 Years and Over': 0.7452290694700112,
  '15 to 44 Years': 0.4377839927048879,
  '45 to 64 Years': 0.23993857331891855,
  '65 Years and Over': 0.11193877050764071,
  '85 Years and Over': 0.016662637465541624,
}, {
  State: 'CO',
  Total: 4939456,
  'Under 5 Years': 0.07253430337267909,
  '5 to 13 Years': 0.1188701751771855,
  '14 to 17 Years': 0.05298174535819329,
  '18 to 24 Years': 0.09438164850542247,
  '16 Years and Over': 0.7824977082496534,
  '18 Years and Over': 0.7556137760919421,
  '15 to 44 Years': 0.43105111170136956,
  '45 to 64 Years': 0.2611813932546418,
  '65 Years and Over': 0.1034717183430726,
  '85 Years and Over': 0.013622147864056284,
}, {
  State: 'CT',
  Total: 3501252,
  'Under 5 Years': 0.0604460918551421,
  '5 to 13 Years': 0.11528961640007632,
  '14 to 17 Years': 0.05624216708765893,
  '18 to 24 Years': 0.09285535574131767,
  '16 Years and Over': 0.7964211087919407,
  '18 Years and Over': 0.7680221246571226,
  '15 to 44 Years': 0.3972013439763833,
  '45 to 64 Years': 0.2767487173159773,
  '65 Years and Over': 0.1365245917745995,
  '85 Years and Over': 0.022595060281293662,
}, {
  State: 'DE',
  Total: 873092,
  'Under 5 Years': 0.06794129370100746,
  '5 to 13 Years': 0.1139582082987818,
  '14 to 17 Years': 0.05430584634838024,
  '18 to 24 Years': 0.0967412368914158,
  '16 Years and Over': 0.7914286237876421,
  '18 Years and Over': 0.7637946516518305,
  '15 to 44 Years': 0.40152126007339434,
  '45 to 64 Years': 0.26403632148731176,
  '65 Years and Over': 0.1393759191471231,
  '85 Years and Over': 0.018460826579558626,
}, {
  State: 'DC',
  Total: 591833,
  'Under 5 Years': 0.06142273242620807,
  '5 to 13 Years': 0.08522505504086457,
  '14 to 17 Years': 0.04262182068252362,
  '18 to 24 Years': 0.12768635746908333,
  '16 Years and Over': 0.8326774613784632,
  '18 Years and Over': 0.8107303918504037,
  '15 to 44 Years': 0.4871306601693383,
  '45 to 64 Years': 0.23662587250119543,
  '65 Years and Over': 0.11937151189609231,
  '85 Years and Over': 0.018829636062875844,
}, {
  State: 'FL',
  Total: 18328340,
  'Under 5 Years': 0.062226911984391384,
  '5 to 13 Years': 0.1057758094841104,
  '14 to 17 Years': 0.050471564800740276,
  '18 to 24 Years': 0.08769463028293888,
  '16 Years and Over': 0.8072792189581817,
  '18 Years and Over': 0.781525713730758,
  '15 to 44 Years': 0.3868420162436969,
  '45 to 64 Years': 0.25898995762845956,
  '65 Years and Over': 0.17392720781041818,
  '85 Years and Over': 0.02844589308142472,
}, {
  State: 'GA',
  Total: 9685744,
  'Under 5 Years': 0.0764547359500726,
  '5 to 13 Years': 0.12910314375436724,
  '14 to 17 Years': 0.05759598849608249,
  '18 to 24 Years': 0.09497215701757139,
  '16 Years and Over': 0.7658440074402132,
  '18 Years and Over': 0.7368461317994777,
  '15 to 44 Years': 0.43237638739987344,
  '45 to 64 Years': 0.24665301911758147,
  '65 Years and Over': 0.10128535298888759,
  '85 Years and Over': 0.012639091018717819,
}, {
  State: 'HI',
  Total: 1288198,
  'Under 5 Years': 0.06769689131639701,
  '5 to 13 Years': 0.10404068318690139,
  '14 to 17 Years': 0.04969034263366346,
  '18 to 24 Years': 0.09690591042681326,
  '16 Years and Over': 0.8037809405075927,
  '18 Years and Over': 0.7785720828630381,
  '15 to 44 Years': 0.4109476959287314,
  '45 to 64 Years': 0.2575822971313416,
  '65 Years and Over': 0.14754486499746158,
  '85 Years and Over': 0.024593269047149584,
}, {
  State: 'ID',
  Total: 1523816,
  'Under 5 Years': 0.07989547294423999,
  '5 to 13 Years': 0.13203168886532232,
  '14 to 17 Years': 0.0588666873165789,
  '18 to 24 Years': 0.09686602581939027,
  '16 Years and Over': 0.7591211799849851,
  '18 Years and Over': 0.7292061508738588,
  '15 to 44 Years': 0.4079705161253065,
  '45 to 64 Years': 0.2462062348735018,
  '65 Years and Over': 0.11953542947442473,
  '85 Years and Over': 0.016734960126419462,
}, {
  State: 'IL',
  Total: 12901563,
  'Under 5 Years': 0.06932245341126497,
  '5 to 13 Years': 0.12083179379118639,
  '14 to 17 Years': 0.05627015889470136,
  '18 to 24 Years': 0.10165272223218226,
  '16 Years and Over': 0.7819965689428482,
  '18 Years and Over': 0.7535755939028472,
  '15 to 44 Years': 0.42281853756789,
  '45 to 64 Years': 0.25106826203925836,
  '65 Years and Over': 0.12210210499301519,
  '85 Years and Over': 0.018518763966815493,
}, {
  State: 'IN',
  Total: 6376792,
  'Under 5 Years': 0.06948462487093823,
  '5 to 13 Years': 0.12234976458382209,
  '14 to 17 Years': 0.05667316732300505,
  '18 to 24 Years': 0.0950106260326509,
  '16 Years and Over': 0.7801563858441675,
  '18 Years and Over': 0.7514924432222346,
  '15 to 44 Years': 0.40822407254305926,
  '45 to 64 Years': 0.2584184963222887,
  '65 Years and Over': 0.12762514442998926,
  '85 Years and Over': 0.018606534445533115,
}, {
  State: 'IA',
  Total: 3002555,
  'Under 5 Years': 0.0670498958387107,
  '5 to 13 Years': 0.11503835899758706,
  '14 to 17 Years': 0.05524728106562578,
  '18 to 24 Years': 0.10204575769636193,
  '16 Years and Over': 0.7908577861188222,
  '18 Years and Over': 0.7626644640980764,
  '15 to 44 Years': 0.3939201779817522,
  '45 to 64 Years': 0.26260468167943635,
  '65 Years and Over': 0.14805857011778303,
  '85 Years and Over': 0.02621067723988403,
}, {
  State: 'KS',
  Total: 2802134,
  'Under 5 Years': 0.07227670054322884,
  '5 to 13 Years': 0.12209765842746992,
  '14 to 17 Years': 0.055608332792079176,
  '18 to 24 Years': 0.10460384835271976,
  '16 Years and Over': 0.778301465954162,
  '18 Years and Over': 0.750017308237222,
  '15 to 44 Years': 0.40654479764351026,
  '45 to 64 Years': 0.25468553609499045,
  '65 Years and Over': 0.1308666894588196,
  '85 Years and Over': 0.022239835782300203,
}, {
  State: 'KY',
  Total: 4269245,
  'Under 5 Years': 0.06666307508704701,
  '5 to 13 Years': 0.11560264168488808,
  '14 to 17 Years': 0.0538565952527906,
  '18 to 24 Years': 0.08933523374741904,
  '16 Years and Over': 0.7913736503761204,
  '18 Years and Over': 0.7638776879752743,
  '15 to 44 Years': 0.40644305960421573,
  '45 to 64 Years': 0.2656870242864956,
  '65 Years and Over': 0.13254498160681807,
  '85 Years and Over': 0.017511058746921295,
}, {
  State: 'LA',
  Total: 4410796,
  'Under 5 Years': 0.07044442771780876,
  '5 to 13 Years': 0.12295762488222081,
  '14 to 17 Years': 0.057793649944363784,
  '18 to 24 Years': 0.10684579382043513,
  '16 Years and Over': 0.7782305053328242,
  '18 Years and Over': 0.7488042974556066,
  '15 to 44 Years': 0.41420800236510597,
  '45 to 64 Years': 0.255910951220596,
  '65 Years and Over': 0.12249807064303132,
  '85 Years and Over': 0.01638026333568816,
}, {
  State: 'ME',
  Total: 1316456,
  'Under 5 Years': 0.05428134324276694,
  '5 to 13 Years': 0.10152713041681606,
  '14 to 17 Years': 0.052984680080458445,
  '18 to 24 Years': 0.08559496101654746,
  '16 Years and Over': 0.818695801454815,
  '18 Years and Over': 0.7912068462599585,
  '15 to 44 Years': 0.3781721531141185,
  '45 to 64 Years': 0.3022592475555583,
  '65 Years and Over': 0.15130547469873662,
  '85 Years and Over': 0.021815389196448647,
}, {
  State: 'MD',
  Total: 5633597,
  'Under 5 Years': 0.06599460344785046,
  '5 to 13 Years': 0.11572056006136044,
  '14 to 17 Years': 0.056247012343978456,
  '18 to 24 Years': 0.09646944927015547,
  '16 Years and Over': 0.7908441090124125,
  '18 Years and Over': 0.7620378241468106,
  '15 to 44 Years': 0.4154762933876882,
  '45 to 64 Years': 0.26870115132481076,
  '65 Years and Over': 0.12062719431297624,
  '85 Years and Over': 0.016310005845288543,
}, {
  State: 'MA',
  Total: 6497967,
  'Under 5 Years': 0.05902892396960465,
  '5 to 13 Years': 0.10799562386204793,
  '14 to 17 Years': 0.05258767857700724,
  '18 to 24 Years': 0.1024749740957441,
  '16 Years and Over': 0.8072301690667251,
  '18 Years and Over': 0.7803877735913402,
  '15 to 44 Years': 0.416719721722194,
  '45 to 64 Years': 0.26954707526215504,
  '65 Years and Over': 0.1340570058296695,
  '85 Years and Over': 0.022021810821753942,
}, {
  State: 'MI',
  Total: 10003422,
  'Under 5 Years': 0.06253120182273626,
  '5 to 13 Years': 0.11790995121469433,
  '14 to 17 Years': 0.05849688236685406,
  '18 to 24 Years': 0.09741466470173907,
  '16 Years and Over': 0.7910393063493673,
  '18 Years and Over': 0.7610619645957154,
  '15 to 44 Years': 0.40456885653729296,
  '45 to 64 Years': 0.27051742893581815,
  '65 Years and Over': 0.1303875813696553,
  '85 Years and Over': 0.018668011806359863,
}, {
  State: 'MN',
  Total: 5220393,
  'Under 5 Years': 0.06866743557429489,
  '5 to 13 Years': 0.11623684270513733,
  '14 to 17 Years': 0.05543088422653237,
  '18 to 24 Years': 0.0971744847562243,
  '16 Years and Over': 0.7878970031566589,
  '18 Years and Over': 0.7596648374940355,
  '15 to 44 Years': 0.41039707163809314,
  '45 to 64 Years': 0.2666232216616642,
  '65 Years and Over': 0.1246111164427659,
  '85 Years and Over': 0.020468573917710793,
}, {
  State: 'MS',
  Total: 2938618,
  'Under 5 Years': 0.07514178433535765,
  '5 to 13 Years': 0.12642065079571418,
  '14 to 17 Years': 0.05934932679239016,
  '18 to 24 Years': 0.10411833045329472,
  '16 Years and Over': 0.7690642335955201,
  '18 Years and Over': 0.739088238076538,
  '15 to 44 Years': 0.4091511724218663,
  '45 to 64 Years': 0.24846135156049545,
  '65 Years and Over': 0.1264533192133173,
  '85 Years and Over': 0.017775362432272585,
}, {
  State: 'MO',
  Total: 5911605,
  'Under 5 Years': 0.06757048212795003,
  '5 to 13 Years': 0.11680009066911609,
  '14 to 17 Years': 0.05608341558679918,
  '18 to 24 Years': 0.09480724777788774,
  '16 Years and Over': 0.7881835812778425,
  '18 Years and Over': 0.7595460116161347,
  '15 to 44 Years': 0.4028554005215166,
  '45 to 64 Years': 0.26301013007465823,
  '65 Years and Over': 0.1362125852454621,
  '85 Years and Over': 0.020582904304330213,
}, {
  State: 'MT',
  Total: 967440,
  'Under 5 Years': 0.06317084263623583,
  '5 to 13 Years': 0.10965848011246175,
  '14 to 17 Years': 0.05494500950963367,
  '18 to 24 Years': 0.09843711237906226,
  '16 Years and Over': 0.8007359629537749,
  '18 Years and Over': 0.7722256677416688,
  '15 to 44 Years': 0.384564417431572,
  '45 to 64 Years': 0.28760543289506324,
  '65 Years and Over': 0.14193334987182668,
  '85 Years and Over': 0.020927396014223103,
}, {
  State: 'NE',
  Total: 1783432,
  'Under 5 Years': 0.07406618250653796,
  '5 to 13 Years': 0.12070266766548991,
  '14 to 17 Years': 0.055868684648475525,
  '18 to 24 Years': 0.10466168600765266,
  '16 Years and Over': 0.7779433137904893,
  '18 Years and Over': 0.7493624651794966,
  '15 to 44 Years': 0.4033610476878289,
  '45 to 64 Years': 0.2533071067469912,
  '65 Years and Over': 0.1350469207684958,
  '85 Years and Over': 0.02299386800281704,
}, {
  State: 'NV',
  Total: 2600167,
  'Under 5 Years': 0.07660084909930785,
  '5 to 13 Years': 0.125241955612851,
  '14 to 17 Years': 0.05498723735821584,
  '18 to 24 Years': 0.08167898446522857,
  '16 Years and Over': 0.7707301107967296,
  '18 Years and Over': 0.7431699579296253,
  '15 to 44 Years': 0.41900308710940487,
  '45 to 64 Years': 0.2512750142586995,
  '65 Years and Over': 0.11411459340880797,
  '85 Years and Over': 0.012279980478176978,
}, {
  State: 'NH',
  Total: 1315809,
  'Under 5 Years': 0.05722487078291758,
  '5 to 13 Years': 0.10961697328411646,
  '14 to 17 Years': 0.05610692737319778,
  '18 to 24 Years': 0.09052529660459839,
  '16 Years and Over': 0.8058061618365584,
  '18 Years and Over': 0.7770512285597682,
  '15 to 44 Years': 0.39546545129270283,
  '45 to 64 Years': 0.295065621226181,
  '65 Years and Over': 0.12918136294857385,
  '85 Years and Over': 0.018604523908865193,
}, {
  State: 'NJ',
  Total: 8682661,
  'Under 5 Years': 0.06419932783279228,
  '5 to 13 Years': 0.11651451093161416,
  '14 to 17 Years': 0.05511040912457598,
  '18 to 24 Years': 0.08860428847792169,
  '16 Years and Over': 0.7920534960422847,
  '18 Years and Over': 0.7641757521110176,
  '15 to 44 Years': 0.40426558171509863,
  '45 to 64 Years': 0.26894612147128627,
  '65 Years and Over': 0.13255625205222224,
  '85 Years and Over': 0.02019081477441075,
}, {
  State: 'NM',
  Total: 1984356,
  'Under 5 Years': 0.0747461644987089,
  '5 to 13 Years': 0.12161426679486947,
  '14 to 17 Years': 0.056845142706248276,
  '18 to 24 Years': 0.10234907446042948,
  '16 Years and Over': 0.7758179479891713,
  '18 Years and Over': 0.7467944260001733,
  '15 to 44 Years': 0.40610203007928014,
  '45 to 64 Years': 0.2527792392090935,
  '65 Years and Over': 0.131050577618129,
  '85 Years and Over': 0.01806581077185747,
}, {
  State: 'NY',
  Total: 19490297,
  'Under 5 Years': 0.06200495559405791,
  '5 to 13 Years': 0.10987467251012131,
  '14 to 17 Years': 0.054285011665035174,
  '18 to 24 Years': 0.1025700121450176,
  '16 Years and Over': 0.801632679071027,
  '18 Years and Over': 0.7738353602307856,
  '15 to 44 Years': 0.41857910118044894,
  '45 to 64 Years': 0.26270784893631943,
  '65 Years and Over': 0.1337933434262187,
  '85 Years and Over': 0.020418057251769945,
}, {
  State: 'NC',
  Total: 9222414,
  'Under 5 Years': 0.07078656412518458,
  '5 to 13 Years': 0.11904583767330332,
  '14 to 17 Years': 0.053452816149871386,
  '18 to 24 Years': 0.09578804421488778,
  '16 Years and Over': 0.7838359891455751,
  '18 Years and Over': 0.7567147820516407,
  '15 to 44 Years': 0.4154734324440434,
  '45 to 64 Years': 0.2581411981721922,
  '65 Years and Over': 0.12350909425666642,
  '85 Years and Over': 0.016053714352879844,
}, {
  State: 'ND',
  Total: 641481,
  'Under 5 Years': 0.06531136541846135,
  '5 to 13 Years': 0.10500388943709946,
  '14 to 17 Years': 0.052681217370428746,
  '18 to 24 Years': 0.1288097387140071,
  '16 Years and Over': 0.804067462637241,
  '18 Years and Over': 0.7770035277740105,
  '15 to 44 Years': 0.4102413009894291,
  '45 to 64 Years': 0.25973489472018657,
  '65 Years and Over': 0.14696616111778837,
  '85 Years and Over': 0.027704639732119892,
}, {
  State: 'OH',
  Total: 11485910,
  'Under 5 Years': 0.0647532498513396,
  '5 to 13 Years': 0.11670751381475217,
  '14 to 17 Years': 0.056254576259086135,
  '18 to 24 Years': 0.09417921610042217,
  '16 Years and Over': 0.7909827780297773,
  '18 Years and Over': 0.7622846600748221,
  '15 to 44 Years': 0.39969580120338744,
  '45 to 64 Years': 0.2684867807600791,
  '65 Years and Over': 0.13676208502417309,
  '85 Years and Over': 0.01990691203396161,
}, {
  State: 'OK',
  Total: 3642361,
  'Under 5 Years': 0.07317973149833308,
  '5 to 13 Years': 0.12050590262744412,
  '14 to 17 Years': 0.055063734758855586,
  '18 to 24 Years': 0.1015594006195432,
  '16 Years and Over': 0.7794823192978401,
  '18 Years and Over': 0.7512506311153672,
  '15 to 44 Years': 0.40610087797447864,
  '45 to 64 Years': 0.25222321455781016,
  '65 Years and Over': 0.13470301268874776,
  '85 Years and Over': 0.019169983425585766,
}, {
  State: 'OR',
  Total: 3790060,
  'Under 5 Years': 0.06424251858809624,
  '5 to 13 Years': 0.11191564249642486,
  '14 to 17 Years': 0.05274982454103629,
  '18 to 24 Years': 0.08922338960333082,
  '16 Years and Over': 0.7982654628158921,
  '18 Years and Over': 0.7710920143744426,
  '15 to 44 Years': 0.40481654643989806,
  '45 to 64 Years': 0.27341757122578536,
  '65 Years and Over': 0.13297889743170294,
  '85 Years and Over': 0.020112874202519223,
}, {
  State: 'PA',
  Total: 12448279,
  'Under 5 Years': 0.05924208478939137,
  '5 to 13 Years': 0.10807445752139713,
  '14 to 17 Years': 0.054561839431780085,
  '18 to 24 Years': 0.09671569861183221,
  '16 Years and Over': 0.8060391319956759,
  '18 Years and Over': 0.7781216182574314,
  '15 to 44 Years': 0.3918029954180815,
  '45 to 64 Years': 0.2742548588443431,
  '65 Years and Over': 0.15348073416413627,
  '85 Years and Over': 0.024922481252227718,
}, {
  State: 'RI',
  Total: 1050788,
  'Under 5 Years': 0.05798886169236801,
  '5 to 13 Years': 0.10602328918868506,
  '14 to 17 Years': 0.05348176796841989,
  '18 to 24 Years': 0.108967746110538,
  '16 Years and Over': 0.8098217718512202,
  '18 Years and Over': 0.782506081150527,
  '15 to 44 Years': 0.4138846275366677,
  '45 to 64 Years': 0.2686755082852107,
  '65 Years and Over': 0.1405097888441817,
  '85 Years and Over': 0.024744287144504887,
}, {
  State: 'SC',
  Total: 4479800,
  'Under 5 Years': 0.06764230546006518,
  '5 to 13 Years': 0.115586186883343,
  '14 to 17 Years': 0.05477923121567927,
  '18 to 24 Years': 0.09780503593910442,
  '16 Years and Over': 0.7901252288048574,
  '18 Years and Over': 0.7619922764409125,
  '15 to 44 Years': 0.4058498147238716,
  '45 to 64 Years': 0.2647482030447788,
  '65 Years and Over': 0.1331075047993214,
  '85 Years and Over': 0.01709987052993437,
}, {
  State: 'SD',
  Total: 804194,
  'Under 5 Years': 0.07282571120898688,
  '5 to 13 Years': 0.1174318634558328,
  '14 to 17 Years': 0.056335908997082795,
  '18 to 24 Years': 0.10304603118153083,
  '16 Years and Over': 0.7821620156330438,
  '18 Years and Over': 0.7534065163380975,
  '15 to 44 Years': 0.39033491918616653,
  '45 to 64 Years': 0.26135236025138214,
  '65 Years and Over': 0.14436814997376254,
  '85 Years and Over': 0.025671666289477413,
}, {
  State: 'TN',
  Total: 6214888,
  'Under 5 Years': 0.06698978324307694,
  '5 to 13 Years': 0.11680789742309113,
  '14 to 17 Years': 0.05411392771679876,
  '18 to 24 Years': 0.08859564323604867,
  '16 Years and Over': 0.7896567082142107,
  '18 Years and Over': 0.7620883916170331,
  '15 to 44 Years': 0.4062190662164789,
  '45 to 64 Years': 0.26494813744028856,
  '65 Years and Over': 0.1318810572290281,
  '85 Years and Over': 0.017081884661477406,
}, {
  State: 'TX',
  Total: 24326974,
  'Under 5 Years': 0.08333576547580476,
  '5 to 13 Years': 0.13474532426433308,
  '14 to 17 Years': 0.05839271255027444,
  '18 to 24 Years': 0.10090531604958348,
  '16 Years and Over': 0.7528873915843376,
  '18 Years and Over': 0.7235261977095877,
  '15 to 44 Years': 0.4332975815241139,
  '45 to 64 Years': 0.23252082235957502,
  '65 Years and Over': 0.10162476434594783,
  '85 Years and Over': 0.013683247246451613,
}, {
  State: 'UT',
  Total: 2736424,
  'Under 5 Years': 0.09827278228812494,
  '5 to 13 Years': 0.1509393281158183,
  '14 to 17 Years': 0.061278880758245065,
  '18 to 24 Years': 0.12044368855118943,
  '16 Years and Over': 0.7206935036383251,
  '18 Years and Over': 0.6895090088378116,
  '15 to 44 Years': 0.44891873481594957,
  '45 to 64 Years': 0.19696435932443218,
  '65 Years and Over': 0.08997216805582761,
  '85 Years and Over': 0.01202225970829082,
}, {
  State: 'VT',
  Total: 621270,
  'Under 5 Years': 0.05252949603232089,
  '5 to 13 Years': 0.10066154811917524,
  '14 to 17 Years': 0.05433547410948541,
  '18 to 24 Years': 0.0992788964540377,
  '16 Years and Over': 0.8207091924606049,
  '18 Years and Over': 0.7924734817390184,
  '15 to 44 Years': 0.390841341123827,
  '45 to 64 Years': 0.3035604487581889,
  '65 Years and Over': 0.1394707615046598,
  '85 Years and Over': 0.01990117018365606,
}, {
  State: 'VA',
  Total: 7769089,
  'Under 5 Years': 0.06727584147896877,
  '5 to 13 Years': 0.11423797564939725,
  '14 to 17 Years': 0.05315990072967371,
  '18 to 24 Years': 0.09891442870586242,
  '16 Years and Over': 0.7923421909570092,
  '18 Years and Over': 0.7653262821419603,
  '15 to 44 Years': 0.4227464764530307,
  '45 to 64 Years': 0.2617488356742985,
  '65 Years and Over': 0.12106657550196684,
  '85 Years and Over': 0.015663741270051094,
}, {
  State: 'WA',
  Total: 6549224,
  'Under 5 Years': 0.06613287314649796,
  '5 to 13 Years': 0.11455922106191511,
  '14 to 17 Years': 0.054629678264172976,
  '18 to 24 Years': 0.09319852245090411,
  '16 Years and Over': 0.7926650546690722,
  '18 Years and Over': 0.764678227527414,
  '15 to 44 Years': 0.4173613545665868,
  '45 to 64 Years': 0.2691633390459694,
  '65 Years and Over': 0.11969005793663494,
  '85 Years and Over': 0.017537955641767636,
}, {
  State: 'WV',
  Total: 1814468,
  'Under 5 Years': 0.05810794128086028,
  '5 to 13 Years': 0.10452044345780692,
  '14 to 17 Years': 0.05019322468073287,
  '18 to 24 Years': 0.08707180286453109,
  '16 Years and Over': 0.8130305962959942,
  '18 Years and Over': 0.7871783905805999,
  '15 to 44 Years': 0.3846361578159549,
  '45 to 64 Years': 0.2835569434126146,
  '65 Years and Over': 0.15710775830711812,
  '85 Years and Over': 0.02121944283393259,
}, {
  State: 'WI',
  Total: 5627967,
  'Under 5 Years': 0.0643708465241534,
  '5 to 13 Years': 0.11376861307111431,
  '14 to 17 Years': 0.0554105949803899,
  '18 to 24 Years': 0.0984216858414415,
  '16 Years and Over': 0.7947660318548421,
  '18 Years and Over': 0.7664499454243424,
  '15 to 44 Years': 0.4047905753534091,
  '45 to 64 Years': 0.27044188425411875,
  '65 Years and Over': 0.13328898339311512,
  '85 Years and Over': 0.020816397821806703,
}, {
  State: 'WY',
  Total: 532668,
  'Under 5 Years': 0.07181396291874113,
  '5 to 13 Years': 0.1143113534133832,
  '14 to 17 Years': 0.055032402922646,
  '18 to 24 Years': 0.10133892030307809,
  '16 Years and Over': 0.787098154948298,
  '18 Years and Over': 0.7588422807452296,
  '15 to 44 Years': 0.4009627009694594,
  '45 to 64 Years': 0.27649305007997477,
  '65 Years and Over': 0.12317991694639062,
  '85 Years and Over': 0.016867917727364887,
}];

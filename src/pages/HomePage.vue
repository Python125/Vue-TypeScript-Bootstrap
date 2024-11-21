<template>
  <div class="layout-container">
    <aside class="side-section">
      <div>
        <img class="universal-logo" :src="universalLogo" alt="Universal logo" />
      </div>
      <div class="text-white"><h3 class="location-title">Location</h3></div>
      <div class="universal-link text-white">
        The Wizarding World of Harry Potter™ - Diagon Alley™ in
        <a class="universal-title" href="/"
          >Universal Studios Florida</a
        >
      </div>
      <a href="/"><span class="map-link">Explore Interactive Map</span></a>
      <div>
        <h3 class="park-title text-white fw-bold h6 mt-4">Park Hours</h3>
        <div class="park-hours text-white fw-light h6">
          Open Today | 9 am-7 pm
        </div>
        <a href="/"><span class="park-link">All Park Hours</span></a>
      </div>
    </aside>

    <div class="dining-section text-white">
      <div class="dining-label">DINING</div>
      <div>
        <h1 class="leaky-title">Leaky Cauldron™</h1>
      </div>
      <ul class="dining-features">
        <li class="type">
          <div class="icon">
            <svg id="gds-svg-372" fill="#ffffff" stroke="none" width="27" height="27" viewBox="0 0 24 24" version="1.1" focusable="false" class="dinning-quick-serve"><g><path d="M16.2021661,6.45583796 L16.2021661,2.99013399 C16.2021661,2.81684879 16.2888087,2.81684879 16.4620939,2.81684879 C17.4151625,2.90349139 19.66787,2.99013399 19.66787,2.99013399 L19.7545126,1.690495 C19.7545126,1.690495 17.5884477,1.6038524 16.6353791,1.5172098 C16.0288809,1.4305672 15.5956679,1.690495 15.4223827,1.8637802 C14.9025271,2.2103506 14.9025271,2.81684879 14.9025271,2.90349139 L14.9025271,6.45583796 L16.2021661,6.45583796 Z M15.7689531,17.8926611 C15.7689531,17.1995203 15.2490975,16.5063795 14.5559567,16.3330943 C14.1227437,13.8204589 11.3501805,11.8276791 7.97111913,11.8276791 C4.67870036,11.8276791 1.90613718,13.7338163 1.47292419,16.2464517 C0.606498195,16.4197369 0,17.1128777 0,17.8926611 C0,18.6724445 0.606498195,19.3655853 1.38628159,19.5388705 L1.38628159,19.9720834 C1.38628159,21.0984372 2.42599278,22.0515058 3.72563177,22.0515058 L12.3032491,22.0515058 C13.6028881,22.0515058 14.6425993,21.0984372 14.6425993,19.9720834 L14.6425993,19.4522279 C15.2490975,19.2789427 15.7689531,18.6724445 15.7689531,17.8926611 Z M7.27797834,13.1273181 C7.62454874,13.1273181 7.97111913,13.3872459 7.97111913,13.7338163 C7.97111913,14.0803867 7.62454874,14.3403145 7.27797834,14.3403145 C6.93140794,14.3403145 6.58483755,14.0803867 6.58483755,13.7338163 C6.58483755,13.4738885 6.84476534,13.1273181 7.27797834,13.1273181 Z M5.28519856,13.9937441 C5.63176895,13.9937441 5.97833935,14.2536719 5.97833935,14.6002423 C5.97833935,14.9468127 5.63176895,15.2067405 5.28519856,15.2067405 C4.93862816,15.2067405 4.59205776,14.9468127 4.59205776,14.6002423 C4.50541516,14.3403145 4.85198556,13.9937441 5.28519856,13.9937441 Z M13.8628159,18.8457297 L1.81949458,18.8457297 C1.29963899,18.8457297 0.866425993,18.4125167 0.866425993,17.9793037 C0.866425993,17.4594481 1.29963899,17.1128777 1.81949458,17.1128777 L13.8628159,17.1128777 C14.3826715,17.1128777 14.8158845,17.5460907 14.8158845,17.9793037 C14.8158845,18.4125167 14.3826715,18.8457297 13.8628159,18.8457297 Z M9.96389892,11.2211809 C12.8231047,11.8276791 14.9891697,13.7338163 15.4223827,16.0731665 C16.2888087,16.4197369 16.8953069,17.1995203 16.8953069,18.0659463 C16.8953069,18.9323723 16.3754513,19.6255131 15.5090253,19.9720834 L15.5090253,19.9720834 C15.5090253,20.7518668 15.1624549,21.4450076 14.6425993,21.9648632 L20.2743682,21.9648632 L22.0938628,10.4413975 L9.79061372,10.4413975 L9.96389892,11.2211809 Z M19.1480144,13.3872459 C19.1480144,13.3006033 19.234657,13.2139607 19.4079422,13.2139607 C19.4945848,13.2139607 19.66787,13.3006033 19.5812274,13.4738885 L18.8880866,19.1923001 C18.8880866,19.2789427 18.801444,19.3655853 18.6281588,19.3655853 L18.6281588,19.3655853 C18.5415162,19.3655853 18.368231,19.2789427 18.4548736,19.1056575 L19.1480144,13.3872459 Z M22.5270758,7.14897876 L9.44404332,7.14897876 C8.66425993,7.14897876 7.97111913,7.75547695 7.97111913,8.44861775 C7.97111913,9.14175854 8.57761733,9.74825673 9.44404332,9.74825673 L22.5270758,9.74825673 C23.3068592,9.74825673 24,9.14175854 24,8.44861775 C23.9133574,7.75547695 23.3068592,7.14897876 22.5270758,7.14897876 Z"></path></g></svg>
          </div>
          <div class="text">
            <div class="title">Dining Type</div>
            <div class="description">Quick Service</div>
          </div>
        </li>
        <li class="type">
          <div class="icon">
            <svg id="gds-svg-375" fill="#ffffff" stroke="none" width="27" height="27" viewBox="0 0 24 24" version="1.1" focusable="false" class="menu"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(4.000000, 0.000000)" fill-rule="nonzero"><g><path d="M13.1128358,3.54929577 L12.16,3.54929577 L12.16,0.552112676 C12.0352239,0.157746479 11.6268657,-0.0676056338 11.2185075,0.0225352113 L0.680597015,2.58028169 C0.226865672,2.73802817 0,3.17746479 0,3.66197183 L0,10.9971831 L0,10.9633803 L0,22.4 C0,23.2788732 0.714626866,23.9887324 1.59940299,23.9887324 L13.5779104,23.9887324 C14.4626866,23.9887324 15.1773134,23.2788732 15.1773134,22.4 L15.1773134,5.58873239 C15.1773134,4.46197183 14.2471642,3.54929577 13.1128358,3.54929577 Z M10.6059701,1.27323944 C10.8555224,1.21690141 10.9916418,1.35211268 11.0710448,1.6 L11.0710448,3.54929577 L2.22328358,3.54929577 C2.03044776,3.56056338 1.61074627,3.54929577 1.62208955,3.54929577 L10.6059701,1.27323944 Z M13.8728358,22.4 C13.8728358,22.5690141 13.7367164,22.7042254 13.5665672,22.7042254 L1.59940299,22.7042254 C1.42925373,22.7042254 1.29313433,22.5690141 1.29313433,22.4 L1.29313433,5.58873239 C1.29313433,5.17183099 1.63343284,4.83380282 2.05313433,4.83380282 L13.1128358,4.83380282 C13.5325373,4.83380282 13.8728358,5.17183099 13.8728358,5.58873239 L13.8728358,22.4 Z"></path></g><g transform="translate(2.949254, 8.338028)"><path d="M8.46208955,6.23098592 L8.46208955,1.35211268 C8.46208955,0.664788732 7.89492537,0.101408451 7.20298507,0.101408451 C6.51104478,0.101408451 5.9438806,0.664788732 5.9438806,1.35211268 L5.9438806,6.23098592 C5.43343284,6.76056338 5.14985075,7.48169014 5.16119403,8.21408451 C5.16119403,9.61126761 6.08,10.7492958 7.20298507,10.7492958 C8.32597015,10.7492958 9.24477612,9.62253521 9.24477612,8.21408451 C9.26746269,7.48169014 8.9838806,6.76056338 8.46208955,6.23098592 Z M7.20298507,0.788732394 C7.42985075,0.788732394 7.62268657,0.98028169 7.62268657,1.2056338 L7.62268657,6.2084507 C7.49791045,6.16338028 7.36179104,6.12957746 7.23701493,6.12957746 C7.08955224,6.12957746 6.93074627,6.16338028 6.79462687,6.23098592 L6.78328358,1.2056338 C6.78328358,0.98028169 6.9761194,0.788732394 7.20298507,0.788732394 Z M7.20298507,10.0619718 C6.52238806,10.0619718 5.95522388,9.25070423 5.95522388,8.29295775 C5.95522388,7.95492958 6.02328358,7.61690141 6.17074627,7.31267606 C6.38626866,6.9971831 6.78328358,6.55774648 7.22567164,6.54647887 C7.55462687,6.54647887 7.88358209,6.7943662 8.20119403,7.27887324 C8.36,7.5943662 8.43940299,7.93239437 8.43940299,8.28169014 C8.45074627,9.26197183 7.88358209,10.0619718 7.20298507,10.0619718 Z"></path><path d="M4.3558209,0.687323944 C4.31044776,0.36056338 4.02686567,0.112676056 3.69791045,0.112676056 L1.02089552,0.112676056 C0.691940299,0.112676056 0.408358209,0.36056338 0.362985075,0.687323944 L0.0340298507,3.0084507 C0.0340298507,3.04225352 0.0340298507,3.07605634 0.0340298507,3.09859155 C0.0340298507,4 0.555820896,4.81126761 1.37253731,5.1943662 L1.37253731,10.0732394 C1.37253731,10.4338028 1.66746269,10.7380282 2.04179104,10.7380282 L2.71104478,10.7380282 C3.08537313,10.7267606 3.38029851,10.4338028 3.36895522,10.0619718 L3.36895522,10.0619718 L3.36895522,5.18309859 C4.17432836,4.81126761 4.70746269,4 4.71880597,3.12112676 C4.71880597,3.08732394 4.71880597,3.05352113 4.71880597,3.03098592 L4.3558209,0.687323944 Z M2.68835821,4.73239437 L2.68835821,10.0732394 L2.01910448,10.0732394 L2.01910448,4.73239437 C1.25910448,4.56338028 0.714626866,3.89859155 0.703283582,3.12112676 L1.03223881,0.8 L1.36119403,0.8 L1.36119403,3.43661972 L1.70149254,3.43661972 L1.70149254,0.788732394 L2.18925373,0.788732394 L2.18925373,3.43661972 L2.51820896,3.43661972 L2.51820896,0.788732394 L3.01731343,0.788732394 L3.01731343,3.43661972 L3.34626866,3.43661972 L3.34626866,0.788732394 L3.67522388,0.788732394 L4.01552239,3.13239437 C4.01552239,3.90985915 3.45970149,4.57464789 2.68835821,4.73239437 Z"></path></g></g></g></svg>
          </div>
          <div class="text">
            <div class="title">Menus</div>
            <div class="description">
              <a class="description-link fw-bold" href="/">Breakfast, </a>
              <a class="description-link fw-bold" href="/">Lunch & Dinner</a>
            </div>
          </div>
        </li>
        <li class="type">
          <div class="icon">
            <svg id="gds-svg-378" fill="#ffffff" stroke="none" width="27" height="27" viewBox="0 0 24 24" version="1.1" focusable="false" class="healthy-food-options"><g><path d="M20.3983649,6.33857594 C18.8147862,4.25491986 16.4810914,3.42145743 14.3140891,4.25491986 L12.563818,5.00503605 C12.7305105,3.1714187 13.0638955,1.67118632 15.2308978,1.08776262 C15.2308978,1.08776262 14.6474741,-0.0790847824 14.3140891,0.0042614607 C11.8137018,0.754377648 11.8137018,2.67134124 11.5636631,4.83834356 C10.7302007,4.3382661 10.0634307,3.7548424 8.72989083,3.83818864 C6.39619603,3.58814991 4.89596365,4.9216898 3.56242376,6.75530715 C0.811997742,10.8392731 2.89565382,15.9233939 5.14600238,19.5906286 C6.1461573,21.2575534 6.97961973,23.0911708 8.81323708,23.841287 C9.73004575,24.0913257 11.1469319,24.0913257 11.8970481,23.507902 C13.3139342,22.8411321 13.5639729,24.174672 15.0642053,23.841287 C17.0645151,23.2578633 17.7312851,21.5909384 18.9814787,19.8406673 C21.3151735,16.0900864 23.3154834,10.5892343 20.3983649,6.33857594 Z"></path></g></svg>
          </div>
          <div class="text">
            <div class="title">Healthy Options</div>
          </div>
        </li>
        <li class="type">
          <div class="icon">
            <svg id="gds-svg-380" fill="#ffffff" stroke="none" width="27" height="27" viewBox="0 0 24 24" version="1.1" focusable="false" class="dietary-leaf"><g transform="translate(2.000000, 2.000000)"><path d="M17.5022883,9.99542334 C17.5022883,8.97025172 17.1270023,7.83524027 16.3489703,6.53546911 C15.7906178,5.60183066 15.0217391,4.58581236 14.0606407,3.50572082 C12.4496568,1.70251716 10.875286,0.356979405 10.8112128,0.302059497 C10.5732265,0.100686499 10.2894737,0 9.99656751,0 C9.71281465,0 9.41990847,0.100686499 9.19107551,0.302059497 C9.12700229,0.356979405 7.54347826,1.70251716 5.9416476,3.50572082 C4.9805492,4.57665904 4.21167048,5.60183066 3.65331808,6.53546911 C2.87528604,7.83524027 2.5,8.97025172 2.5,9.99542334 C2.5,13.9221968 5.52974828,17.1533181 9.37414188,17.4736842 L9.37414188,19.3684211 C9.37414188,19.7162471 9.65789474,20 9.99656751,20 C10.3443936,20 10.6281465,19.7162471 10.6281465,19.3684211 L10.6281465,17.4736842 C14.47254,17.1533181 17.5022883,13.9221968 17.5022883,9.99542334 Z M10.3169336,16.2379863 L10.3169336,14.0503432 C11.7814645,13.9588101 13.1086957,13.2448513 14.0057208,12.0640732 C14.1064073,11.9176201 14.0789474,11.7254005 13.9416476,11.6155606 C13.8043478,11.5148741 13.6029748,11.5423341 13.5022883,11.6796339 C12.7242563,12.7048055 11.5800915,13.3272311 10.3169336,13.4187643 L10.3169336,10.2974828 C11.278032,10.2059497 12.1567506,9.7208238 12.7517162,8.93363844 C12.8524027,8.79633867 12.8249428,8.60411899 12.687643,8.49427918 C12.5503432,8.39359268 12.3581236,8.42105263 12.2482838,8.5583524 C11.7723112,9.18993135 11.076659,9.58352403 10.3077803,9.66590389 L10.3077803,6.56292906 C10.3077803,6.38901602 10.1704805,6.25171625 9.99656751,6.25171625 C9.82265446,6.25171625 9.68535469,6.38901602 9.68535469,6.56292906 L9.68535469,9.66590389 C8.91647597,9.58352403 8.2208238,9.18993135 7.74485126,8.5583524 C7.64416476,8.42105263 7.44279176,8.39359268 7.30549199,8.49427918 C7.16819222,8.60411899 7.14073227,8.79633867 7.24141876,8.93363844 C7.83638444,9.7208238 8.71510297,10.2059497 9.68535469,10.2974828 L9.68535469,13.4187643 C8.41304348,13.3272311 7.26887872,12.7048055 6.5,11.6796339 C6.39016018,11.5423341 6.18878719,11.5148741 6.05148741,11.6155606 C5.91418764,11.7254005 5.88672769,11.9176201 5.99656751,12.0640732 C6.88443936,13.2448513 8.21167048,13.9588101 9.68535469,14.0503432 L9.68535469,16.2379863 C6.37185355,16.0732265 3.74485126,13.3455378 3.74485126,9.99542334 C3.74485126,6.54462243 9.99656751,1.25400458 9.99656751,1.25400458 C9.99656751,1.25400458 16.2482838,6.54462243 16.2482838,9.99542334 C16.2482838,13.3455378 13.6212815,16.0732265 10.3169336,16.2379863 Z"></path></g></svg>
          </div>
          <div class="text">
            <div class="title">Dietary Needs</div>
            <div class="description">
              <a class="description-link fw-bold" href="/">Dietary Accommodations</a>
            </div>
          </div>
        </li>
        <li class="type">
          <div class="icon">
            <svg id="gds-svg-383" fill="rgb(34, 34, 34)" stroke="none" width="27" height="27" viewBox="0 0 24 24" version="1.1" focusable="false" class="adult-beverage"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(2.000000, 3.000000)"><g><path d="M5.64888889,16.8910256 L1.79111111,16.8910256 C1.79111111,16.8910256 0.757777776,16.8910256 0.757777776,15.8400285 C0.757777776,15.8400285 0.757777776,15.2394587 1.51555556,14.8641025 L2.75555555,14.338604 C2.75555555,14.338604 3.37555556,14.1133903 3.23777778,13.662963 L3.23777778,9.15868945 C3.23777778,9.15868945 0.826666668,8.48304845 0.275555555,6.3059829 C0.275555555,6.3059829 -0.344444444,4.27905983 1.44666667,0 L5.51111111,0" stroke="#333333" stroke-width="1.86" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.51333334,16.8910256 L7.37111112,16.8910256 C7.37111112,16.8910256 8.40444444,16.8910256 8.40444444,15.8400285 C8.40444444,15.8400285 8.40444444,15.2394587 7.64666664,14.8641025 L6.40666668,14.338604 C6.40666668,14.338604 5.78666666,14.1133903 5.92444444,13.662963 L5.92444444,9.15868945 C5.92444444,9.15868945 8.33555556,8.48304845 8.88666666,6.3059829 C8.88666666,6.3059829 9.50666664,4.27905983 7.71555558,0 L3.58222222,0" stroke="#333333" stroke-width="1.86" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.8888889,2.47735043 C6.8888889,2.47735043 7.44,4.50427351 7.30222224,5.78048433 L7.29438816,5.78051814 C7.18883664,6.78832545 6.02980722,7.58219373 4.61555555,7.58219373 C3.13175053,7.58219373 1.92888889,6.70831992 1.92888889,5.63034188 L1.92864445,5.63215812 L1.86,5.63034188 C1.86,5.63034188 1.85831814,5.60651556 1.85758233,5.55800381 L1.85732164,5.48788571 C1.85952908,5.14589788 1.91166667,4.17818287 2.34222222,2.47735043 L6.8888889,2.47735043 Z" fill="#FFFFFF" fill-rule="nonzero"></path></g><g transform="translate(6.000000, 1.000000)" stroke="#333333"><path d="M2.29629629,6.28930041 L10.1037037,6.28930041 L10.1037037,15.18107 C10.1037037,15.18107 10.1037037,16.3377229 8.87901233,16.4100137 L3.67407407,16.4100137 C3.67407407,16.4100137 2.37283951,16.4100137 2.29629629,15.18107 L2.29629629,6.28930041 Z" stroke-width="1.78" fill="#FFFFFF" fill-rule="nonzero"></path><path d="M10.1037037,7.73511661 L12.3234568,7.73511661 C12.3234568,7.73511661 13.6246913,7.66282581 13.7777778,8.89176953 L13.7777778,13.0846365 C13.7777778,13.0846365 13.854321,14.4581619 12.3234568,14.4581619 L10.1037037,14.4581619" stroke-width="1.78"></path><line x1="6.2" y1="11.5665295" x2="6.2" y2="14.4581619" stroke-width="1.53" stroke-linecap="round" stroke-linejoin="round"></line><line x1="4.36296296" y1="11.5665295" x2="4.36296296" y2="14.4581619" stroke-width="1.53" stroke-linecap="round" stroke-linejoin="round"></line><line x1="8.03703707" y1="11.5665295" x2="8.03703707" y2="14.4581619" stroke-width="1.53" stroke-linecap="round" stroke-linejoin="round"></line><path d="M9.95061727,2.74705075 C10.1037037,1.01207133 8.95555553,0.289163237 7.7308642,0.289163237 C7.1524173,0.289163237 6.61857649,0.499803155 6.2136153,0.852861575 C5.86836345,1.15386344 5.61678783,1.55838229 5.51111111,2.02414266 C5.20493827,1.87956105 4.89876543,1.80727023 4.59259259,1.80727023 C3.75061729,1.80727023 2.98518519,2.3133059 2.60246913,2.96392318 C2.37283951,2.96392318 2.21975309,2.89163237 1.99012346,2.89163237 C1.14814815,2.89163237 0.306172839,3.39766804 0.306172839,4.33744856 L0.306172839,7.22908094 C0.306172839,8.16886147 1.07160494,8.89176953 2.06666667,8.89176953 C2.83209877,8.89176953 3.52098765,8.38573387 3.75061729,7.66282581 C3.82716049,7.51824414 3.82716049,7.37366254 3.82716049,7.22908094 L3.82716049,6.2170096 L10.0271605,6.2170096 C11.0987654,6.2170096 11.9407407,5.4218107 11.9407407,4.40973937 C11.9407407,3.39766804 11.3283951,2.74705075 9.95061727,2.74705075 Z" stroke-width="1.78" fill="#FFFFFF" fill-rule="nonzero" stroke-linecap="round" stroke-linejoin="round"></path></g></g></g></svg>
          </div>
          <div class="text">
            <div class="title">Alcoholic Beverages Available</div>
            <div class="description">
              <div class="description">21+ With Valid Photo ID</div>
            </div>
          </div>
        </li>
        <li class="type">
          <div class="icon">
            <svg class="icon-alert" fill="#ffffff" stroke="none" width="27" height="27" viewBox="0 0 24 24" role="img" aria-labelledby="alert-title"><title id="alert-title">Alert Icon</title><g transform="translate(2.000000, 2.000000)"><path d="M9.94565217,11.2482468 L13.6763675,11.2482468 L13.6763675,12.5035063 L9.94565217,12.5035063 L9.94565217,11.2482468 Z M8.70441795,6.24824684 L9.94565217,6.24824684 L9.94565217,12.5035063 L8.70441795,12.5035063 L8.70441795,6.24824684 Z M7.92601683,1.45862553 C7.24579243,0.575035063 6.17286115,0 4.97370266,0 C2.91900421,0 1.25,1.68302945 1.25,3.75175316 C1.25,4.42496494 1.42531557,5.0631136 1.73387097,5.61009818 C3.164446,3.51332398 5.36640954,1.99158485 7.92601683,1.45862553 Z M18.1574334,5.61009818 C18.4730014,5.0631136 18.648317,4.42496494 18.648317,3.75175316 C18.648317,1.68302945 16.9793128,0 14.9176017,0 C13.7184432,0 12.6525245,0.575035063 11.9723001,1.45862553 C14.5319074,1.99158485 16.733871,3.51332398 18.1574334,5.61009818 Z M9.94565217,18.2819074 C6.08870968,18.2819074 2.95406732,15.1332398 2.95406732,11.2482468 C2.95406732,7.37026648 6.08870968,4.22159888 9.94565217,4.22159888 C13.8096073,4.22159888 16.937237,7.37026648 16.937237,11.2482468 C16.937237,15.1332398 13.8096073,18.2819074 9.94565217,18.2819074 Z M9.94565217,2.50350631 C5.14200561,2.50350631 1.25,6.41654979 1.25,11.2482468 C1.25,16.0799439 5.14200561,20 9.94565217,20 C14.7563114,20 18.648317,16.0799439 18.648317,11.2482468 C18.648317,6.41654979 14.7563114,2.50350631 9.94565217,2.50350631 Z"></path></g></svg>
          </div>
          <div class="text">
            <div class="title">Hours</div>
            <div class="description">
              <a class="description-link fw-bold" href="/" aria-label="Download the mobile app to check hours">Download Mobile App</a>
            </div>
          </div>
        </li>
        <li class="type">
          <div class="icon">
            <svg id="gds-svg-389" fill="#ffffff" stroke="none" width="27" height="27" viewBox="0 0 24 24" version="1.1" focusable="false" class="phone"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(2.000000, 2.000000)" fill-rule="nonzero"><path d="M19.7516955,3.55764742 L19.7516955,3.55764742 C17.675542,0.268997493 14.6411639,-0.853956141 12.3254543,0.670052361 C8.17314736,3.39722547 3.38202401,8.20988389 0.667054097,12.3006436 C-0.850134968,14.6267618 0.267793817,17.6747788 3.54172811,19.7602641 L3.54172811,19.7602641 C4.42010073,20.3217409 6.25669802,20.000897 7.69403503,17.6747788 C8.73211176,16.0705593 9.2112241,13.904863 7.9335912,13.0225423 L7.13507064,12.3808545 C7.05521858,12.3006436 6.97536652,12.1402216 7.05521858,12.0600106 L11.926194,7.16714124 C12.006046,7.08693026 12.1657502,7.08693026 12.3254543,7.16714124 L12.9642707,7.96925097 C13.7627913,9.17241559 15.8389448,8.85157167 17.5956899,7.72861805 C19.5919914,6.52545345 20.470364,4.76081202 19.7516955,3.55764742 Z M16.6087555,6.52174055 C15.7464667,7.06891345 14.2570585,7.45975125 14.0218889,7.14708101 L13.3163798,6.28723787 C12.6892605,5.50556229 11.5918019,5.42739474 10.8862929,6.13090275 C10.8079029,6.20907031 6.10450893,10.8991238 6.02611903,10.9772913 C5.39899983,11.6807993 5.47738973,12.7751452 6.26128873,13.4004857 L7.12357763,14.1039937 C7.20196753,14.1821613 7.59391703,15.0420043 6.49645843,16.6835231 C5.71255943,17.934204 4.61510082,18.4032093 4.45832102,18.3250418 L4.45832102,18.3250418 C2.02823411,16.7616907 1.00916541,14.572999 2.10662401,13.0096478 C4.69349072,9.02310242 9.31849485,4.48938404 13.0028202,2.06618974 C14.0218889,1.36268172 16.216806,1.28451416 18.3333334,4.41121648 L18.3333334,4.41121648 C18.3333334,4.64571915 18.0197738,5.58372985 16.6087555,6.52174055 Z"></path></g></g></svg>
          </div>
          <div class="text">
            <div class="title">Phone Number</div>
            <div class="description">
              <a class="description-link fw-bold" href="/">(407) 224-4233</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="intro-summary text-white">
    <h1 class="cauldron-heading text-center">Fill up on Traditional British Food.</h1>
    <p class="cauldron-paragraph text-center">
      The Leaky Cauldron™ is a small, grubby-looking pub and inn. Once inside,
      you'll find yourself under a cathedral ceiling with views towards the
      guest rooms in the inn. The delicious traditional British fare served here
      includes Bangers and Mash, Fisherman's Pie, Vegan Chicken Curry and
      Ploughman's Platter, plus a Kid's Menu offering Fish And Chips and more.
    </p>
  </div>

  <div class="image-links">
    <!-- <div class="breakfast">
      <img :src="breakfast" alt="English Breakfast" class="breakfast-image" />
      <div>
        <router-link to="/breakfast">
          <a class="breakfast-link">Early Elixirs</a>
        </router-link>
      </div>
    </div> -->

    <!-- <div class="lunch">
      <img :src="lunch" alt="Fish and Chips" class="lunch-image" />
      <div>
        <router-link to="/lunch">
          <a class="lunch-link">Great Eats</a>
        </router-link>
      </div>
    </div> -->

    <!-- <div class="drink">
      <img :src="drinks" alt="Butterbeer" class="drink-image" />
      <div>
        <router-link to="/drinks">
          <a class="drink-link">Butterbeer & Beyond</a>
        </router-link>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from "vue-class-component";

// @Options({
//   components: {},
// })
export default /* class HomePage extends Vue */ {
  data() {
    return {
      leakyCauldronLogo: require("@/assets/leaky-logo.png"),
      universalLogo: require("@/assets/harry-potter-diagon-alley-logo.png"),
      breakfast: require("@/assets/images/english-breakfast.png"),
      lunch: require("@/assets/images/fish-and-chips.png"),
      drinks: require("@/assets/images/butterbeer.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
.layout-container {
  margin-top: 66px;
  margin-right: auto;
  margin-bottom: -350px;
  margin-left: auto;
  max-width: 1440px;
  width: 95.8333333333%;
}

.side-section {
  margin-left: -10%;
  padding-left: 8px;
  padding-right: 8px;
  width: 16.6666666667%;

  @media only screen and (max-width: 430px) {
    width: 60%;
    margin-left: 18%;
  }
}

.universal-logo {
  border-radius: 50%;
  width: 225px;
  margin-top: 10%;
  margin-left: -15%;
  overflow: hidden;

  @media only screen and (max-width: 430px) {
    width: 150px;
    margin-top: -3.5rem;
    margin-left: 2rem;
  }
}

.location-title {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.0125rem;
  line-height: 1.25rem;
  font-style: normal;
  margin-top: 2rem;

  @media only screen and (max-width: 430px) {
    font-size: 1rem;
    margin-top: 1.5rem;
    margin-left: -4rem;
    margin-bottom: 0.5rem;
  }
}

.universal-link {
  font-size: 1rem;
  letter-spacing: 0.0125rem;
  line-height: 1.55rem;
  font-style: normal;

  @media only screen and (max-width: 430px) {
    margin-left: -4rem;
    font-size: 0.7rem;
    line-height: 1rem;
  }
}

.universal-title {
  color: #f08400;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
}

.map-link {
  text-align: left;
  min-height: 1.25rem;
  padding: 0.25rem 0;
  color: #f08400;
  font-size: 1rem;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 0.0125rem;
  line-height: 2rem;
  text-shadow: none;
  align-items: center;
  display: inline-flex;
  cursor: pointer;

  @media only screen and (max-width: 430px) {
    font-size: 0.7rem;
    margin-left: -4rem;
    line-height: 0.5rem;
  }
}

.park-title {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.0125rem;
  line-height: 1.25rem;
  font-style: normal;

  @media only screen and (max-width: 430px) {
    font-size: 1rem;
    margin-left: -4rem;
  }
}

.park-hours {
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.0125rem;
  line-height: 1.25rem;
  font-style: normal;

  @media only screen and (max-width: 430px) {
    font-size: 0.7rem;
    margin-left: -4rem;
    line-height: 0.5rem;
  }
}

.park-link {
  text-align: left;
  min-height: 1.25rem;
  padding: 0.25rem 0;
  color: #f08400;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.0125rem;
  line-height: 2rem;
  text-shadow: none;
  align-items: center;
  display: inline-flex;
  cursor: pointer;

  @media only screen and (max-width: 430px) {
    margin-left: -4rem;
    font-size: 0.7rem;
    line-height: 0.5rem;
  }
}

.dining-section {
  box-sizing: border-box;
  padding-left: 8px;
  padding: 8px;
  width: 41.6666666667%;
  margin-top: -25rem;
  margin-left: 30%;

  @media only screen and (max-width: 430px) {
    margin-top: -3.5rem;
    margin-left: 5%;
  }
}

.dining-label {
  margin-top: 64px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.0125rem;
  line-height: 0.875;
  font-style: normal;
  margin-bottom: 16px;
  align-items: center;
  box-sizing: border-box;
  background-color: #f08400;
  border-radius: 8px;
  display: inline-flex;
  justify-content: center;
  min-height: 24px;
  padding: 8px 14px;

  @media only screen and (max-width: 430px) {
    font-size: 0.7rem;
    margin-left: -0.7rem;
  }
}

.leaky-title {
  font-size: 1.80rem;
  font-weight: 900;
  letter-spacing: 0.0125rem;
  line-height: 2.125rem;
  font-style: normal;
  margin-bottom: 16px;

  @media only screen and (max-width: 430px) {
    font-size: 1.1rem;
    margin-left: -0.7rem;
    line-height: 0.5rem;
  }
}

.dining-features {
  color: white;
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  row-gap: 16px;
  list-style-type: none;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  list-style-position: outside;
  line-height: 1.6;

  @media only screen and (max-width: 430px) {
    margin-left: -1rem;
    display: block;
  }
}

svg {
  @media only screen and (max-width: 430px) {
    width: 20px;
  }
}

.type {
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  width: 50%;

  @media only screen and (max-width: 430px) {
    width: 181%;
  }
}

.icon {
  display: block;
  float: left;
  margin-top: 1px;
  margin-right: 12px;
  margin-left: -30px;
  position: relative;
  width: 24px;
  line-height: 0;
}

.title {
  margin-top: 5px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.0125rem;
  line-height: 1.125rem;

  @media only screen and (max-width: 430px) {
    font-size: 14px;
  }
}

.description {
  font-size: 0.9rem;
  // font-weight: 400;
  letter-spacing: 0.0125rem;
  line-height: 1.25rem;
  margin: 6px 0 0;

  @media only screen and (max-width: 430px) {
    font-size: 12px;
  }
}

.description-link {
  color: #f08400;
}

.intro-summary {
  background-color: #0a0a0a;
  opacity: 0.8;
  padding: 2rem;
  padding-left: 35rem;
  padding-right: 35rem;
  z-index: -1;
  margin-top: 17%;

  @media only screen and (max-width: 430px) {
    margin-top: 85%;
    padding: 1rem;
}
}

.cauldron-heading {
  font-size: 2rem;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0.0125rem;
  line-height: 2.125rem;

  @media only screen and (max-width: 430px) {
    margin-right: 2.5rem;
    font-size: 80%;
  }
}

.cauldron-paragraph {
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.0225rem;
  line-height: 2.3rem;

  @media only screen and (max-width: 430px) {
    margin-right: 2.5rem;
    font-size: 60%;
  }
}

.image-links {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  margin-top: 5rem;
}

.breakfast {
  background-color: black;
  border: 6px black solid;
}

.breakfast-image {
  width: 400px;
}

.breakfast-link {
  font-size: 1.5rem;
  color: white;
}

.lunch {
  background-color: black;
  border: 6px black solid;
}

.lunch-image {
  width: 400px;
}

.lunch-link {
  font-size: 1.5rem;
  color: white;
}

.drink {
  background-color: black;
  border: 6px black solid;
}

.drink-image {
  width: 400px;
}

.drink-link {
  font-size: 1.5rem;
  color: white;
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
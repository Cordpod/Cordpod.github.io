import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

function Intermediate() {

  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === "391") {
      setShowSuccess(true);
      setShowError(false); // Reset error state on successful login
    } else {
      setShowSuccess(false);
      setShowError(true); // Set error state if password is wrong
    }
  };

  return (
    <div>
      
      
      {showSuccess ? (
        <div>
        <p className="success-message"></p>
        <li><a class="nav-link js-scroll-trigger" href="/actual">i want to go paRaSAilng</a></li>
        </div>
      ) : (
        <div>
    <p>this hertz man</p>
          <pre>
      <p>Uwwdgbaeo jd utt pedke tukm dh uxaujade, jzrgr am ed kuf u lrr mzdstb lr ultr jd htf. Ajm kaeom ugr jdd mvutt jd orj ajm huj tajjtr ldbf dhh jzr ogdseb. Jzr lrr, dh wdsgmr, htarm uefkuf lrwusmr lrrm bde'j wugr kzuj zsvuem jzaep am avcdmmaltr. Frttdk, ltuwp. Frttdk, ltuwp. Frttdk, ltuwp. Frttdk, ltuwp. Ddz, ltuwp ueb frttdk! Trj'm mzupr aj sc u tajjtr. <br />

Luggf! Lgruphumj am grubf!<br />
Wdvaeo!<br />
Zueo de u mrwdeb.<br />
Zrttd?<br />

- Luggf?<br />
- Ubuv?<br />

- Wue fds lrtarxr jzam am zuccreaeo?<br />
- A wue'j. A'tt cawp fds sc.<br /><br />

Tddpaeo mzugc.<br />
Smr jzr mjuagm. Fdsg hujzrg<br />
cuab oddb vderf hdg jzdmr.<br />
Mdggf. A'v rywajrb.<br />
Zrgr'm jzr ogubsujr.<br />
Kr'gr xrgf cgdsb dh fds, mde.<br />
U crghrwj grcdgj wugb, utt L'm.<br />
Xrgf cgdsb.<br />
Vu! A odj u jzaeo odaeo zrgr.<br /><br />

- Fds odj taej de fdsg hsqq.<br />
- Dk! Jzuj'm vr!<br /><br />

- Kuxr jd sm! Kr'tt lr ae gdk 118,000.<br />
- Lfr!<br /><br />

Luggf, A jdtb fds,<br />
mjdc htfaeo ae jzr zdsmr!<br /><br />

- Zrf, Ubuv.<br />
- Zrf, Luggf.<br /><br />

- Am jzuj hsqq ort?<br />
- U tajjtr. Mcrwaut buf, ogubsujade.<br /><br />

Erxrg jzdsozj A'b vupr aj.<br />
Jzgrr bufm ogubr mwzddt, jzgrr bufm zaoz mwzddt. Jzdmr krgr ukpkugb. Jzgrr bufm wdttror. A'v otub A jddp<br />
u buf ueb zajwzzaprb ugdseb jzr zaxr. Fds bab wdvr luwp bahhrgrej.<br /><br />

- Za, Luggf.<br />
- Ugjar, ogdkaeo u vsmjuwzr? Tddpm oddb.<br /><br />

- Zrug uldsj Hguepar?<br />
- Fruz.<br /><br />

- Fds odaeo jd jzr hsergut?<br />
- Ed, A'v edj odaeo.<br /><br />

Rxrgfldbf pedkm, mjaeo mdvrder, fds bar.<br />
Bde'j kumjr aj de u mnsaggrt. Mswz u zdjzrub.<br />
A osrmm zr wdstb zuxr ismj odjjre dsj dh jzr kuf.<br />
A tdxr jzam aewdgcdgujaeo ue uvsmrvrej cugp aejd dsg buf.<br />
Jzuj'm kzf kr bde'j errb xuwujadem.<br />
Ldf, nsajr u laj dh cdvc... sebrg jzr wagwsvmjuewrm.<br /><br />

- Krtt, Ubuv, jdbuf kr ugr vre.<br />
- Kr ugr!<br /><br />

- Lrr-vre.<br />
- Uvre!<br /><br />

Zuttrtsiuz!<br /><br />

Mjsbrejm, huwstjf, bamjaeosamzrb lrrm, ctrumr krtwdvr Brue Lsqqkrtt.<br /><br />

Krtwdvr, Erk Zaxr Wajf ogubsujaeo wtumm dh...<br />
...9:15. Jzuj wdewtsbrm dsg wrgrvdearm. Ueb lroaem fdsg wugrrg uj Zdery Aebsmjgarm!<br /><br />

Katt kr cawp dsg idl jdbuf?<br />
A zrugb aj'm ismj dgarejujade.<br /><br />

Zrubm sc! Zrgr kr od.<br />
Prrc fdsg zuebm ueb uejreeum aemabr jzr jguv uj utt javrm.<br /><br />

- Kdebrg kzuj aj'tt lr tapr?<br />
- U tajjtr mwugf.<br /><br />

Krtwdvr jd Zdery, u baxamade dh Zdermwd ueb u cugj dh jzr Zryuode Ogdsc.<br /><br />

Jzam am aj!<br />
Kdk.<br />
Kdk.<br />
Kr pedk jzuj fds, um u lrr, zuxr kdgprb fdsg kzdtr tahr jd orj jd jzr cdaej kzrgr fds wue kdgp hdg fdsg kzdtr tahr. Zderf lroaem kzre dsg xutauej Cdttre Idwpm lgaeo jzr erwjug jd jzr zaxr. Dsg jdc-mrwgrj hdgvstu am usjdvujawuttf wdtdg-wdggrwjrb, mwrej-ubismjrb ueb lslltr-wdejdsgrb aejd jzam mddjzaeo mkrrj mfgsc kajz ajm bamjaewjaxr odtbre otdk fds pedk um...<br /><br />

Zderf!<br /><br />

- Jzuj oagt kum zdj.<br />
- Mzr'm vf wdsmae!<br />
- Mzr am?<br />
- Frm, kr'gr utt wdsmaem.<br />
- Gaozj. Fds'gr gaozj.<br /><br />

qqq qqqqqqqqq q jzam am fdsg e, od wdsej ueb haeb dsj kzuj'm fdsg jzgrr baoaj e xutsr.</p>
</pre>
        <Form className="bypass-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="password"
              placeholder="password?"
              value={password}
              onChange={handlePasswordChange}
            />
            <Form.Text className="text-muted">
            n?
            </Form.Text>
          </Form.Group>
          {showError && (
              <p className="error-message">lolz.</p>
            )}
          <button type="submit">Submit</button>
        </Form>
        </div>
      )}
    </div>
  );
}
export default Intermediate;
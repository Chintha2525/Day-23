
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="app">
      <Start
        main="FREE"
        doller="$0"
        month="/month"
        symbol1=" ✔ "
        user="Single User"
        symbol2=" ✔ "
        storage="5GB Storage"
        symbol3=" ✔ "
        publicProject="Unlimited Public Project"
        symbol4=" ✔ "
        access="Community Access"
        symbol5="❌ "
        privateProject="Unlimited Private Project"
        symbol6="❌ "
        support="Dedicated Phone Support"
        symbol7="❌ "
        subdomains="Free Subdomain"
        symbol8="❌ "
        report="Monthly Status Report"
      />

      <Start
        main="PLUS"
        doller="$9"
        month="/month"
        symbol1=" ✔ "
        user="5 Users"
        symbol2=" ✔ "
        storage="50GB Storage"
        symbol3=" ✔ "
        publicProject="Unlimited Public Project"
        symbol4=" ✔ "
        access="Community Access"
        symbol5=" ✔ "
        privateProject="Unlimited Private Project"
        symbol6=" ✔ "
        support="Dedicated Phone Support"
        symbol7=" ✔ "
        subdomains="Free Subdomain"
        symbol8="❌ "
        report="Monthly Status Report"
      />

      <Start
        main="PRO"
        doller="$49"
        month="/month"
        symbol1=" ✔ "
        user="Unlimited Users"
        symbol2=" ✔ "
        storage="150GB Storage"
        symbol3=" ✔ "
        publicProject="Unlimited Public Project"
        symbol4=" ✔ "
        access="Community Access"
        symbol5=" ✔ "
        privateProject="Unlimited Private Project"
        symbol6=" ✔ "
        support="Dedicated Phone Support"
        symbol7=" ✔ "
        subdomains="Unlimited Free Subdomain"
        symbol8=" ✔ "
        report="Monthly Status Report"
      />

    </div>
  );
}



export default App;

function Start(props) {
  return (
    <section className="card">
      <h5 className='card-1 card-1a'>{props.main}</h5>
      <h1 className='card-1'>{props.doller}<span className='size'>{props.month}</span></h1>
      <hr />
      <p><span>{props.symbol2}</span>{props.user}</p>
      <p><span>{props.symbol2}</span>{props.storage}</p>
      <p><span>{props.symbol3}</span>{props.publicProject}</p>
      <p><span>{props.symbol4}</span>{props.access}</p>
      <p><span>{props.symbol5}</span>{props.privateProject}</p>
      <p><span>{props.symbol6}</span>{props.support}</p>
      <p><span>{props.symbol7}</span>{props.subdomains}</p>
      <p><span>{props.symbol8}</span>{props.report}</p>
      <Button variant="primary" size="lg">
        button
      </Button>{' '}
    </section>

  )

}




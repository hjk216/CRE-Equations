import React from 'react';
import './App.css';
import Calculate from './features/calculate/Calculate';

function App() {
  //Title , Abbreviation, Button Title, VarOneTitle, VarTwoTitle, VarThreeTitle (if applicable)
  const GIM = {'title':'Gross Income Multiplier (GIM)', 'abrv': 'GIM', 'button': 'Calculate GIM', 'varOneTitle': 'Value', 'varTwoTitle': 'PGI'};
  const Ro = {'title': 'Cap Rate (Ro)', 'abrv':'Ro', 'button': 'Calculate Ro', 'varOneTitle': 'NOI', 'varTwoTitle': 'V'};
  const DR = {'title': 'Default Ratio (DR)', 'abrv':'DR', 'button': 'Calculate DR', 'varOneTitle': 'OE', 'varTwoTitle': 'EGI', 'varThreeTitle': 'ADS'};
  const OER = {'title': 'Operating Expense Ratio (OER)', 'abrv':'OER', 'button': 'Calculate OER', 'varOneTitle': 'OE', 'varTwoTitle': 'EGI'};
  const VR = {'title': 'Vacancy Rate (VR)', 'abrv':'VR', 'button': 'Calculate VR', 'varOneTitle': 'VACL', 'varTwoTitle': 'PGI'};
  const DCR = {'title': 'Debt Coverage Ratio (DCR)', 'abrv':'DCR', 'button': 'Calculate DCR', 'varOneTitle': 'NOI', 'varTwoTitle': 'ADS'};
  const Rm = {'title': 'Mortgage Constant (Rm)', 'abrv':'Rm', 'button': 'Calculate Rm', 'varOneTitle': 'ADS', 'varTwoTitle': 'Vm'};
  const Re = {'title': 'Cash-on-Cash (Re)', 'abrv':'Re', 'button': 'Calculate Re', 'varOneTitle': 'Btcf', 'varTwoTitle': 'Cfo'};
  const BEOR = {'title': 'Break Even Occupancy Ratio (BEOR)', 'abrv':'BEOR', 'button': 'Calculate BEOR', 'varOneTitle': 'OE', 'varTwoTitle': 'PGI', 'varThreeTitle': 'DS'};
  const Payback = {'title': 'Equity Payback Period (Payback)', 'abrv':'Payback', 'button': 'Calculate Payback', 'varOneTitle': 'Cfo', 'varTwoTitle': 'Btcf'};
  
  return (
    <div className="App">
      <h1 className='mainTitle'>CRE Equations</h1>
      <Calculate info={GIM} />
      <Calculate info={Ro} />
      <Calculate info={DR} />
      <Calculate info={OER} />
      <Calculate info={VR} />
      <Calculate info={DCR} />
      <Calculate info={Rm} />
      <Calculate info={Re} />
      <Calculate info={BEOR} />
      <Calculate info={Payback} />
    </div>
  );
}

export default App;

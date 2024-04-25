import React, { useState } from 'react';

function Appx() {
  const [value, setValue] = useState('');
  const headerStyle = {
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    fontSize: '28px',
    color: '#333',
    textDecoration: 'underline',
  };


  return (
    <div>
    <h1 style={headerStyle}>Calculator for Students</h1>
    <div style={{ width: '100%', height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(140deg, rgb(255, 255, 255), rgb(255, 255, 255))' }}>
  
      <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: 'rgb(211, 211, 211)' }}>
        <form action="">
          <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '5px 0px 15px 0px' }}>
            <input type="text" value={value} style={{ textAlign: 'right', flex: 1, fontSize: '40px', padding: '5px 10px', backgroundColor: 'rgb(64, 64, 64)' }} />
          </div>
          <div>
            <input type="button" value="AC" onClick={e => setValue('')} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
            <input type="button" value="DE" onClick={e => setValue(value.slice(0, -1))} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
            <input type="button" value="." onClick={e => setValue(value + e.target.value)} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
            <input type="button" value="/" onClick={e => setValue(value + e.target.value)} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
          </div>
          <div>
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
            <input type="button" value="8" onClick={e => setValue(value + e.target.value)} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
            <input type="button" value="9" onClick={e => setValue(value + e.target.value)} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
            <input type="button" value="*" onClick={e => setValue(value + e.target.value)} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
          </div>
          <div>
            <input type="button" value="4" onClick={e => setValue(value + e.target.value)} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
            <input type="button" value="5" onClick={e => setValue(value + e.target.value)} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
            <input type="button" value="6" onClick={e => setValue(value + e.target.value)} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
            <input type="button" value="+" onClick={e => setValue(value + e.target.value)} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
          </div>
          <div>
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
            <input type="button" value="3" onClick={e => setValue(value + e.target.value)} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
            <input type="button" value="-" onClick={e => setValue(value + e.target.value)} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
          </div>
          <div>
            <input type="button" value="00" onClick={e => setValue(value + e.target.value)} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
            <input type="button" value="0" onClick={e => setValue(value + e.target.value)} style={{ border: 'none', outline: 0, width: '60px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
            <input type="button" value="=" className='equal' onClick={e => setValue(eval(value))} style={{ border: 'none', outline: 0, width: '123px', height: '60px', fontSize: '16px', backgroundColor: 'rgb(216, 130, 0)', margin: '2px', borderRadius: '10px', color: 'white', fontWeight: 'bolder', cursor: 'pointer' }} />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
} 

export default Appx;

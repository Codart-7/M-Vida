import React from 'react'


const Dashboard = () => {
  const [times, setTimes] = React.useState([])
  const [addBtnState, setAddBtnState] = React.useState(false)
  const [complete, setComplete] = React.useState(false)
  const [drugForm, setDrugForm] = React.useState('Tablet')
  const [userDrugs, setUserDrugs] = React.useState([
      {
        name: "Vitamin D",
        form: "Tablet",
        dosage: "2",
        time: ["08:00", "12:00", "16:00", "20:00"]
      },
      {
        name: "Amlodipine",
        form: "Tablet",
        dosage: "2",
        time: ["08:00", "11:00"]
      },
      {
        name: "Prednisone",
        form: "Tablet",
        dosage: "2",
        time: ["08:00", "20:00"]
      }
  ])

  const getNextDose = (times) => {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const currentTime = `${hours}:${minutes}`
    const nextDose = times.find((time) => {
      return time > currentTime
    })
    return nextDose ?? times[0]
  }

  const generateTimes = () => {
    const time = document.getElementById('time').value
    setTimes(Array(Number(time)).fill('a'))
    setComplete(true)
  }

  const completeForm = () => {
    const name = document.getElementById('name').value
    const form = document.getElementById('form').value
    const dosage = document.getElementById('dosage').value
    const times = document.querySelectorAll('.times')
    const time = []
    times.forEach((timeInput) => {
      time.push(timeInput.value)
    })
    const newDrug = {
      name,
      form,
      dosage,
      time
    }
    setUserDrugs([...userDrugs, newDrug])
    setAddBtnState(false)
    setComplete(false)
  }


  return (
    <div className='mt-12'>
        <h2 className='text-2xl'>Medication List</h2>
        <table className="table-auto border-separate border-spacing-y-4 border border-slate-400 w-full my-4">
          <thead className=''>
            <tr>
              <th>Drug</th>
              <th>Dosage</th>
              <th>Next dose</th>
            </tr>
          </thead>
          <tbody>
            {
              userDrugs.map((drug, index) => {
                return (
                  <tr key={index} className={`${index % 2 === 0 && 'bg-slate-200'}`}>
                    <td className='py-4 text-center'>{drug.name}</td>
                    <td className='py-4 text-center'>{`${drug.dosage} ${drug.form}`}</td>
                    <td className='py-4 text-center'>{getNextDose(drug.time)}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div className='flex justify-center'>
          <button className='w-12 bg-blue-600 text-white rounded-md' onClick={() => setAddBtnState(true)}>+</button>
        </div>
        {
          addBtnState && 
          <div className='flex justify-center items-center gap-2 mt-3 flex-wrap bg-slate-200 rounded-md py-3'>
            <div className='w-5/12'>
              <label htmlFor="name">Drug Name*</label>
              <input type="text" name="name" id="name" className='w-full border border-slate-400 rounded-md p-2'/>
            </div>
            <div className='w-5/12'>
              <label htmlFor="form">Form*</label>
              <select name="form" id="form" className='w-full border border-slate-400 rounded-md p-2' onChange={(e) => setDrugForm(e.target.value)}>
                <option value="Tablet">Tablet</option>
                <option value="Capsule">Capsule</option>
                <option value="Syrup">Syrup</option>
                <option value="Injection">Injection</option>
                <option value="Cream">Cream</option>
              </select>
            </div>
            <div className='w-10/12 mb-6'>
                <label htmlFor="">Dosage</label>
                <div className='flex gap-2 items-center'>
                  <input type="number" name="dosage" id="dosage" className='w-1/12 border border-slate-400 rounded-md p-2'/>
                  <p>
                    {drugForm}
                  </p>
                  <input type="number" name="time" id="time" className='w-1/12 border border-slate-400 rounded-md p-2'/>
                  <p>times a day</p>
                  <button className='bg-blue-600 text-white rounded-md px-2 py-1' onClick={() => generateTimes()}>done</button>
                </div>
                {
                  complete &&
                  <div className='flex gap-2 flex-wrap mt-3'>
                    {
                      times.map((time, index) => {
                        return (
                          <input key={index} type="time" className='border-2 border-blue-300 rounded-md p-1 times'/>
                        )
                      })
                    }
                    <button className='bg-green-600 text-white rounded-md px-2 py-1' onClick={() => completeForm()}>complete</button>
                  </div>
                }
                <button className='bg-red-600 text-white rounded-md px-2 py-1 mt-4' onClick={() => setAddBtnState(false)}>cancel</button>
            </div>
          </div>    
        }
    </div>
  )
}

export default Dashboard
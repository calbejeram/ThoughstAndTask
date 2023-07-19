import React from 'react';

function ThoughtsHandler({TotArr}) {
  return (
    <div>
        <table className='table'>
            <thead className='t'>
                <tr>
                  <th>Date Added</th>
                  <th>Thoughts</th>
                </tr>
            </thead>
            <tbody>
              {TotArr.map((input) => (
                  <tr key={input}>
                    <td style={{textAlign: 'center'}}>{input.dateAdded}</td>
                    <td style={{textAlign: 'center'}}>{input.thoughtsInput}</td>
                  </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ThoughtsHandler;

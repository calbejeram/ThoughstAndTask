import React from 'react'

function TaskHandler({TaskArr}) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                  <th>Date Added</th>
                  <th>Task</th>
                </tr>
            </thead>
            <tbody>
              {TaskArr.map((input) => (
                  <tr key={input}>
                    <td style={{textAlign: 'center'}}>{input.taskDateAdded}</td>
                    <td style={{textAlign: 'center'}}>{input.taskInput}</td>
                  </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TaskHandler

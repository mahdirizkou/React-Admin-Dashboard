import React, { createContext, useState, useEffect } from 'react';

// @ts-ignore
export const DataContext = createContext();

export const Datachild = ({ children }) => {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => {
            const vardata = data.map(user => ({
              id: user.id,
              col1: user.id,
              col2: user.username,
              col3: user.email,
              col4: user.address.city,
              col5: Math.random() > 0.5 ? 'ADMIN' : 'MANAGER',
            }));
            console.log('Fetched Data:', vardata);
            setTeamData(vardata);
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);
    return (
        <DataContext.Provider value={teamData}>
            {children}
        </DataContext.Provider>
    );
};

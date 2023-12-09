import { useEffect, useState } from 'react';


function Clock() {

  const [Name, setName] = useState("");
  const [date, setDate] = useState(null);

    useEffect((data) => {
        console.log('data :>> ', data);
        const intervalId = setInterval(() => {
            // setState(prevState => ({
            //   date: new Date().toISOString(),
            //   Name: prevState.Name
            // }));
            setName("ibrahim");
            setDate(new Date().toISOString())

          }, 1000);

        return () => clearInterval(intervalId);

    }, []);


    const changeName = (name) => {
      //  this.setState({ Name: name });
      setName(name);
    };

    return (
        <h1>
            <span> {Name} </span> <br></br>
            <span> {date} </span>
            <button onClick={() => changeName("Hasiv")}>Click me to change name</button>
        </h1>
    )
}

export default Clock;
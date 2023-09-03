function handlerClick() {
    alert("tou clicked the button");
}

const ButtonUp = () => {
    return <button onClick={handlerClick}>Click</button>;
};

const DescriptionApp = () => {
    return <h1>Hello from Description</h1>;
};

const Images = () => {
    return (
        <>
            <img src={img} width="20%" alt="" />
            <img src={require("../src/assets/1.jpg")} width="20%" alt="" />
        </>
    );
};

const CurrentTime = () => {
    let time = new Date().toLocaleTimeString();
    return <p>{time}</p>;
};

const SomeComponent = (props) => {
    return (
        <div>
            <h2>Create App</h2>
            <h2>
                {props.firstname} {props.lastname}
            </h2>
        </div>
    );
};

const RandomInt = props => {
    let cur = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min
    return <h2>{cur}</h2>
}

const ReloadBtn = () => {
    const reloadPage = () => window.location.reload();
    return <button onClick={reloadPage}>Reload</button>
}


    //   <Images />
    //   <DescriptionApp />
    //   <CurrentTime />
    //   <ButtonUp />
    //   <SomeComponent firstname={name} lastname={surname} />
    //   <RandomInt min={5} max={100000} />
    //   <ReloadBtn />
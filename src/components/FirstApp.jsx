
import PropTypes from 'prop-types';    

export const FirstApp = (  ) => {
    // console.log(props);
    const relleno = {
        title: "Hola soy un titulo",
        subTitle: "Soy un subtitulo",
        name: "Bastian Rojas"
    };
    return (
        <>
            <h1>{relleno.title}</h1>
            {/* <code> { JSON.stringify( newMessage) } </code> */}
            <p>{relleno.subTitle }</p>
            <p>{relleno.name}</p>
        </>
    )
}

FirstApp.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
}



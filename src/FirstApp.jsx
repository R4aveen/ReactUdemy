
import PropTypes from 'prop-types';    

export const FirtsApp = ( { title, subTitle, name} ) => {
    // console.log(props);
    return (
        <>
            <h1>{title}</h1>
            {/* <code> { JSON.stringify( newMessage) } </code> */}
            <p>{subTitle }</p>
            <p>{name}</p>
        </>
    )
}

FirtsApp.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string.isRequired,
}

FirtsApp.defaultProps ={
    name: 'Bastian Rojas',
    subTitle: 'No hay subtitulo',
    title: 'No hay titulo',

}



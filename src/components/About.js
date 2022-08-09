
function About({about, image = "https://via.placeholder.com/215 (Links to an external site.)"}) {

    return (
        <aside>
            <img src={image} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}

export default About
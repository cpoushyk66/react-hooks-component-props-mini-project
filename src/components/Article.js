
function Article({title, date = "January 1, 1970", preview, minutes}) {

    let readTime =''
    let icon
    let div
    if (minutes < 30)
    {
        icon = "☕️"
        div = 5
    }
    else
    {
        icon = "🍱"
        div = 10
    }

    for (let i = 0; i < (Math.round(minutes / div)); i++)
    {
        readTime = readTime + icon
    }

    readTime = `${readTime} ${minutes} min read`
    return (
        <article>
            <h3>{title}</h3>

            <small>{date}</small>

            <p>{preview}</p>

            <p>{readTime}</p>
        </article>
    )
}

export default Article
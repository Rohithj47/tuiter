

const WhoToFollowListItem = (
    {
        who = { imgSrc:"nasa-logo-web-rgb.png", userName: 'NASA', handle: 'NASA' }
    }
) => {

    return (
        <>
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    {console.log(`/images/${who.imgSrc}`)}
                    <img src={`/images/${who.imgSrc}`} height={48} width={40} className="rounded-circle" />
                </div>
                <div className="col-7">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-3">
                <button class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>  
            </div>
        </li>
        </>
    )

}

export default WhoToFollowListItem
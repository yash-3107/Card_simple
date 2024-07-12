import "./BasketballPlayerCard_.css"
function Card({name,image,position,stats}){
return(
        <div className="card">
            <h1>
                {name}
            </h1>
            <img src={image} alt="" />
            <h4>{position}</h4>
            <div className="player-stats">
                    <p>Points per Game: {stats.pointsPerGame}</p>
                    <p>Assists per Game: {stats.assistsPerGame}</p>
                    <p>Rebounds per Game: {stats.reboundsPerGame}</p>
            </div>
        </div>
)
}
export default Card
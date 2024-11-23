export default function GameOver({winner, onRestart}) {


    return(
    <div id="game-over">
        <h2>
            Game Over!
            {winner &&<p>{winner} won!</p>}

            {!winner && <p>It&apos;s a draw!</p>}

            <p>

                <button onClick={onRestart}> Rematch</button>
            </p>

        </h2>


    </div>
    );
}
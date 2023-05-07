export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
    return (
        <div>
            <img
                src={sprites.other['official-artwork'].front_default}
                width="240"
                height="240"
                alt={name}
            />
            <h2>{name}</h2>
            <ul>
                {stats.map(el => (
                    <li key={el.stat.name}>
                        {el.stat.name}: {el.base_stat}
                    </li>
                ))};
            </ul>
        </div>
    )
};
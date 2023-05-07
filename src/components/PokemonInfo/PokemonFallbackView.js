import errorImage from '../../sadcat.jpg';

export default function PokemonFallbackView({ message }) {
    return (
        <div role="alert">
            <img src={errorImage} width="240" alt="sadcat" />
            <p>{message}</p>
        </div>
    )
}
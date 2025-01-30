import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { type Component, createSignal, Show } from "solid-js";


interface Props {
    pokemon: FavoritePokemon;
}


export const FavoritePokemonCard: Component<Props> = ({pokemon}) => {

    const [isVisible, setIsVisible] = createSignal(true)
    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
    const deleteFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]') as FavoritePokemon[];
        const updatedFavorites = favorites.filter(favorite => favorite.id !== pokemon.id);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setIsVisible(false);
    }

    return (
        <Show when={isVisible()}>
            <div class="flex flex-col items-center justify-center my-5">
                <a href={`/pokemons/${pokemon.name}`}>
                <img
                    src={imageSrc}
                    alt={pokemon.name}
                    width="96"
                    height="96"
                    style={`view-transition-name: ${pokemon.name}-image`}
                    />
                <p>#{pokemon.id} {pokemon.name}
                </p>
                </a>
                <button onClick={deleteFavorite} class="text-red-400">Borrar</button>
            </div>
        </Show>
    )
}
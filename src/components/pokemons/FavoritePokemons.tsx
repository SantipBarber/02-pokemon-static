import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { For, createSignal } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
    let favoritePokemons: FavoritePokemon[] = [];
    favoritePokemons = JSON.parse(
        localStorage.getItem("favoritePokemons") ?? "[]"
    );

    return favoritePokemons;
}

export const FavoritePokemons = () => {
    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());
    return (
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <For each={pokemons()}>
                {(pokemon) => (
                <FavoritePokemonCard pokemon={pokemon} />
            )}
            </For>
        </div>
    )
}
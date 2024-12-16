<script setup>
import { useFavoritesStore } from '@/stores/favorites.js';
import {useTvFavoritesStore} from '@/stores/tvFavorites.js'
import { useRouter } from 'vue-router';

const favoritesStore = useFavoritesStore();
const favoriteTvStore = useTvFavoritesStore()
const router = useRouter();

const openMovie = (movieId) => router.push({ name: 'MovieDetails', params: { movieId } });
const openTv = (tvId) => router.push({ name: 'TvDetails', params: { tvId } });
</script>

<template>
    <h1>Favoritos</h1>
    <div class="movie-list">
        <div v-for="movie in favoritesStore.movies" :key="movie.id" class="movie-card">
            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title"
                @click="openMovie(movie.id)" />
            <div class="movie-details">
                <p class="movie-title">{{ movie.title }}</p>
                <p>{{ movie.release_date }}</p>
                <button @click="favoritesStore.toggleFavorite(movie)" class="button-fav">Remover dos Favoritos</button>
            </div>
        </div>
        <div class="movie-list">
        <div v-for="tv in favoriteTvStore.tvs" :key="tv.id" class="movie-card">
            <img :src="`https://image.tmdb.org/t/p/w500${tv.poster_path}`" :alt="tv.name" @click="openTv(tv.id)" />
            <div class="movie-details">
                <p class="movie-title">{{ tv.original_name }}</p>
                <p class="movie-release-date">{{ tv.first_air_date }}</p>
                <button @click="favoriteTvStore.toggleFavorite(tv)" class="button-favtv">Remover dos Favoritos</button>
            </div>
        </div>
    </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chewy&family=Gorditas:wght@400;700&family=Modak&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Boogaloo&family=Chewy&family=Gorditas:wght@400;700&family=Modak&display=swap');

h1{font-family: "Gorditas", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 55px;
  margin-left: 40%;
}
.movie-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.movie-card {
    width: 15rem;
    height: 30rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0 0.5rem #000;
}

.movie-card img {
    width: 100%;
    height: 20rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem #000;
}

.movie-details {
    padding: 0 0.5rem;
}

.movie-title {
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 1.3rem;
    height: 3.2rem;
}

.button-fav {
    background-color: rgb(210, 10, 30);
    height: 45px;
    border-radius: 10px;
    border: none;
    font-family: "Boogaloo", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    margin-left: 13%;
    margin-top: 3%;
    color: #fff;
}
.button-favtv {
    background-color: rgb(64, 105, 182);
    height: 45px;
    border-radius: 10px;
    border: none;
    font-family: "Boogaloo", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    margin-left: 13%;
    margin-top: 3%;
    color: #fff;
}
</style>
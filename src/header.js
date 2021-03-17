<template>
    <div>
        <header>
            <h1>{{ msg }}</h1>
            <router-link to="/"
                exact>List</router-link>
            <router-link to="/add" exact>Add
Item</router-link>
        </header>
    </div>
</template>
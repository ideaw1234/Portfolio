<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
        <div class="logo">
            <img :src="logo" alt="vue"/>
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-symbols-outlined">
                    navigate_next
                </span>
            </button>
        </div>
        <h3>Menu</h3>
        <div class="menu">
            <router-link class="button" to="/" >
                <span class="material-symbols-outlined">home</span>
                <span class="text">Home</span>           
            </router-link>
            <router-link class="button" to="/about" >
                <span class="material-symbols-outlined">description</span>
                <span class="text">About</span>           
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import logo from '../assets/logo.png'
import {ref} from 'vue'
const is_expanded = ref(localStorage.getItem("is_expanded")=== "true")
const ToggleMenu =()=>{
	is_expanded.value = !is_expanded.value
    localStorage.setItem("is_expanded",is_expanded.value)
}

</script>

<style lang="scss" scoped>
aside{
    display: flex;
    flex-direction: column;
    background-color: var(--dark);
    color: var(--light);
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;
    transition: 0.2s ease-in-out;

    .logo{
        margin-bottom: 1rem;
        img{
            width: 2rem;
        }
    }
    .menu-toggle-wrap{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-in-out;
        .menu-toggle{
            transition: 0.2s ease-in-out;

            .material-symbols-outlined{
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-in-out;
            }
            &:hover{
                .material-symbols-outlined{
                    color: #FADBD8;
                    transform: translateX(0.5rem);
                }
            }
        }
    }

	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}
    h3{
        color: var(--grey);
        font-size: 1rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }
    .menu{
        margin: 0 -1rem;
        .button{
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: 0.5rem 1rem;
            transition: 0.2s ease-in-out;
            .material-symbols-outlined{
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
                
            }
            .text{
                color: var(--light);
                transition: 0.2s ease-in-out;
            }
            &:hover, &.router-link-exact-active{
                background-color: var(--dark-alt);
                .material-symbols-outlined,.text{
                    color: #FADBD8;
                }
            }
            &.router-link-exact-active{
                border-right: 5px solid #FADBD8;
            }
        }

    }
    &.is-expanded{
        width: var(--sidebar-width);
        .menu-toggle-wrap{
            top:-3rem;
            .menu-toggle{
                transform: rotate(-180deg);
            }
        }
		h3, .button .text {
			opacity: 1;
		}
        .button{
            .material-symbols-outlined{
                margin-right: 1rem;
            }
        }
}
    .menu-toggle-wrap{
        display: flex;
        justify-content: flex-end;
    }
    
    @media  (max-width:1024px) {
        position: absolute;
        z-index: 99;
    }
}
</style>
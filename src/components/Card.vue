<template>
    <div class="card">
        
        <div class="card__img" :style="styleObject">
            <!-- <img class="img" :src="img" alt=""> -->
        </div>
        
        <div class="card__info">
            <p class="card__title">{{this.title}}</p>
            <p class="card__subtitle">{{this.subtitle}}</p>
        </div> 
    </div>
</template>
<script>


export default {
    name:'Card',
    props: {
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        },
        id: {
            type: Number
        }
    },
    data() {
       return {
           styleObject: {
                background: `url('${this.img}')`,
                backgroundSize: `contain`
            }
       }
    }
}
</script>

<style lang="scss">
    .card {
        font-family: Tahoma;
        
        &__img {
            position: relative;
            border-radius: 4px 4px 0px 0px;
            background: #f4f4f4;
            background-repeat: no-repeat !important;
            background-position: center !important;
            height: 84px;
            text-align: center;
            vertical-align: middle
        }
        &__info {
            padding: 10px;
            box-shadow: 0px 1px 8px rgba(78, 116, 152, 0.2);
            border-radius: 8px;
        }

        &__title {
            color: #108CE5;
            margin: 4px 0;
            font-size: 15px;
        }

        &__subtitle{
            font-size: 12px;
            margin: 0;
        }
    }
    .img {
        max-width: 100%;
        height: 84px;
        object-fit: cover;
    }

</style>
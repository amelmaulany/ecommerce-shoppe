<template>
   <div class="range_container">
    <div class="sliders_control">
        <input id="fromSlider" type="range" value="40" min="0" max="1000"/>
        <input id="toSlider" type="range" value="180" min="0" max="1000"/>
    </div>
    <div class="filter">
        <div class="form_control">
            <p>Price:</p>
            <div class="form_control_container">
                <div class="price-range-desc">
                    <p>$</p>
                    <input class="form_control_container__time__input" type="text" id="fromInput" value="40" min="0" max="1000"/>
                </div>
            </div>
            -
            <div class="form_control_container">
                <div class="price-range-desc">
                    <p>$</p>
                    <input class="form_control_container__time__input" type="text" id="toInput" value="180" min="0" max="1000"/>
                </div>
            </div>
        </div>
        <p class="filter-font">Filter</p>
    </div>
</div>
</template>

<script>

    import {
        fillSlider,
        setToggleAccessible,
        controlFromSlider,
        controlToSlider,
        controlFromInput,
        controlToInput
    } from '../../js/slider.js';

    export default {
        name: 'RangeSlider',
        mounted() {
            const fromSlider = document.querySelector('#fromSlider');
            const toSlider = document.querySelector('#toSlider');
            const fromInput = document.querySelector('#fromInput');
            const toInput = document.querySelector('#toInput');

            fillSlider(fromSlider, toSlider, '#C6C6C6', '#000', toSlider);
            setToggleAccessible(toSlider);

            fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
            toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
            fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
            toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);
        }
        
                }
</script>

<style>
    .range_container {
        display: flex;
        flex-direction: column;
        width: 261px;
        margin-top: 16px;
    }

    .sliders_control {
        position: relative;
        min-height: 20px;
    }

    .form_control {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 24px;
        color: #635a5a;
        gap: 5px;
        width: 100%;
    }

    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        pointer-events: all;
        width: 2px;
        height: 12px;
        background-color: #000;
        cursor: pointer;
    }

    input[type=range]::-moz-range-thumb {
        -webkit-appearance: none;
        pointer-events: all;
        width: 15px;
        height: 24px;
        background-color: #ccc;
        border-radius: 50%;
        box-shadow: 0 0 0 1px #ccc;
        cursor: pointer;  
    }

    input[type=range]::-webkit-slider-thumb:hover {
        background: #f7f7f7;
        font-size: 14px;
    }

    input[type=range]::-webkit-slider-thumb:active {
        box-shadow: inset 0 0 3px #ccc, 0 0 9px #ccc;
        -webkit-box-shadow: inset 0 0 3px #ccc, 0 0 9px #ccc;
    }

    input[type="text"] {
        color: #707070;
        width: 30px;
        height: 30px;
        font-size: 14px;
        border: none;
    }

    input[type=text]::-webkit-inner-spin-button, 
    input[type=text]::-webkit-outer-spin-button {  
        opacity: 1;
    }

    input[type="range"] {
        -webkit-appearance: none; 
        appearance: none;
        height: 2px;
        width: 100%;
        position: absolute;
        background-color: #ccc;
        pointer-events: none;
    }

    #fromSlider {
        height: 0;
        z-index: 1;
    }

    p {
        font-size: 14px;
        color: #707070;
    }

    .price-range-desc {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 3px;
    }

    .filter {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .filter-font {
        font-size: 14px;
        color: #A18A68;
        cursor: pointer;
    }

</style>
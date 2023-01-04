<?php
/**
 * Plugin Name:       Overview
 * Description:       Market overview.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Manish Kumar
 */

function show_overview() {
    return '<div id="my-overview-app"></div>';
}

function overview_func()
{
    wp_enqueue_script(
        'overview-plugin',
        plugin_dir_url( __FILE__ ) . '/build/overviewApp.js',
        ['wp-element'],
        null,
        true
    );
}

function show_intraday() {
    return '<div id="my-intraday-app"></div>';
}

function intraday_func()
{
    wp_enqueue_script(
        'intraday-plugin',
        plugin_dir_url( __FILE__ ) . '/build/intradayApp.js',
        ['wp-element'],
        null,
        true
    );
}

function show_daily() {
    return '<div id="my-daily-app"></div>';
}

function daily_func()
{
    wp_enqueue_script(
        'daily-plugin',
        plugin_dir_url( __FILE__ ) . '/build/dailyPriceApp.js',
        ['wp-element'],
        null,
        true
    );
}

add_shortcode('overview-app', 'show_overview');
add_action('wp_enqueue_scripts', 'overview_func');
add_shortcode('intraday-app', 'show_intraday');
add_action('wp_enqueue_scripts', 'intraday_func');
add_shortcode('daily-app', 'show_daily');
add_action('wp_enqueue_scripts', 'daily_func');

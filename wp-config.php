<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'pan' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'h}=z?8?UeN7Eu5<,bL(>&/?hW^%r5y?OTS->v>}?77WD*!!B;#H6HeQnAFI@N}@C' );
define( 'SECURE_AUTH_KEY',  'L9Zgc^j$YD{E+HLN],L9UcTE25N^MT:T<$^+P-5cJUO>[*yRgiS5QvCa_W9V2-2_' );
define( 'LOGGED_IN_KEY',    '%aMaAFM{|e6io=LC(;#)M]91-n#Ii$d}-~7!W,=TtVCGU(~5F^;wX eBVnO&HHnh' );
define( 'NONCE_KEY',        'k<N7j)e^<:*:JK3cVt#3A;g,BO QTAumJvs}*|Mx|;7Hv-.jG^dvY<h]`lnrQC6/' );
define( 'AUTH_SALT',        '5tNq1cR4De4PZ<XP5*)4-AI@_U|r,TO+0,DNsaRUl%,u$2n5kmY#:;j]#rPmQ:,I' );
define( 'SECURE_AUTH_SALT', 'gKmKDBnN6_T<1[miqy0I>r9B0%]34>qF9HgUuM5XIt<YgW,wg=r,B4i+|qa*tmKQ' );
define( 'LOGGED_IN_SALT',   'ScStY#-01:hrgD7}qj|XBU1r|%<5DP`? .;~+5oNLoEo0D 2+wPz`*e*i7O:xt31' );
define( 'NONCE_SALT',       '(B8pUn(@(P*qQhGTs1o;s9V^E7bjOm/kb|YzA$q3F=H~H7C1P^vm[7?54.*t(@]9' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

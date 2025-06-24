<?php
// REST API用のテーマ設定
add_theme_support('post-thumbnails');
add_theme_support('editor-styles');
add_theme_support('custom-logo');
add_theme_support('title-tag');

// WORKS
register_post_type( 'works',
	array(
			'labels' => array(
			'name' => __( 'works' ),
			'singular_name' => __( 'works' )
	),
	'public' => true,
	'show_in_rest' => true,
	'has_archive' => true,
	'menu_position' =>9,
	'supports' => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
	)
);

register_taxonomy(
	'works_category',
	array('works'),
	array(
		'hierarchical' => true,
		'update_count_callback' => '_update_post_term_count',
		'label' => 'カテゴリー',
		'singular_label' => 'カテゴリー',
		'public' => true,
		'show_ui' => true
	)
);


// ACFをRESTAPIに公開
function expose_acf_fields_in_rest_api() {
    // WORKS投稿のACFフィルドをREST APIに公開
    register_rest_field( 'works', 'acf', array(
        'get_callback' => function( $post_arr ) {
            return get_fields( $post_arr['id'] ); //当ポストのACFフィルドの全てを返す
        },
        'update_callback' => null,
        'schema' => null,
    ));

    // WORKS以外の投稿タイプに適用する場合は下のパターンを利用します
    // register_rest_field( 'custom_post_type', 'acf', array( ... ) );
}

add_action( 'rest_api_init', 'expose_acf_fields_in_rest_api' );
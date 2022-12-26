const config = {
    app_name: 'Memeshib-Blue Edition Rarity',
    app_description: 'MemeShib is an open source package for easy rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: 'collection.json',
    collection_contract_address: '0x87a8A1c2193102fCFF25Ed0A7dfe0Cc13005b3EA',
    collection_name: 'Memeshib-Blue Edition',
    collection_description: 'Set of 340 unique arts for MemeShib NFT collection [Blue Edition]',
    collection_id_from: 1,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database.sqlite',
    ga: 'G-BW69Z04YTP',
    main_og_image: '',
    item_path_name: 'memeshib',
    page_item_num: 60,
    content_image_is_video: false,
    content_image_frame: 'circle', // circle, rectangle
    use_wallet: false
};

module.exports = config;
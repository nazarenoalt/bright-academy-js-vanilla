const emojiList = [
    '001-zzz.svg',
    '002-drop.svg',
    '003-drops.svg',
    '004-anger.svg',
    '005-explosion.svg',
    '006-shooting-star.svg',
    '007-star.svg',
    '008-shining.svg',
    '009-fire.svg',
    '010-poo.svg',
    '011-kiss-3.svg',
    '012-alien.svg',
    '013-skull.svg',
    '014-monkey-2.svg',
    '015-monkey-1.svg',
    '016-monkey.svg',
    '017-tengu.svg',
    '018-monster.svg',
    '019-cat-8.svg',
    '020-cat-7.svg',
    '021-cat-6.svg',
    '022-kissing-1.svg',
    '023-cat-5.svg',
    '024-cat-4.svg',
    '025-cat-3.svg',
    '026-cat-2.svg',
    '027-cat-1.svg',
    '028-cat.svg',
    '029-princess.svg',
    '030-baby-1.svg',
    '031-man-2.svg',
    '032-old-woman.svg',
    '033-in-love.svg',
    '034-bald.svg',
    '035-woman-2.svg',
    '036-man-1.svg',
    '037-girl.svg',
    '038-boy-1.svg',
    '039-baby.svg',
    '040-guard.svg',
    '041-doctor.svg',
    '042-policeman.svg',
    '043-injury.svg',
    '044-wink.svg',
    '045-boy.svg',
    '046-straight-1.svg',
    '047-flirt.svg',
    '048-angel.svg',
    '049-muted.svg',
    '050-surprised-1.svg',
    '051-sad-13.svg',
    '052-straight.svg',
    '053-grinning.svg',
    '054-surprised.svg',
    '055-happy-5.svg',
    '056-devil-1.svg',
    '057-devil.svg',
    '058-sad-12.svg',
    '059-sad-11.svg',
    '060-sad-10.svg',
    '061-dizzy-1.svg',
    '062-dizzy.svg',
    '063-sleep-1.svg',
    '064-cool.svg',
    '065-mask.svg',
    '066-happy-4.svg',
    '067-goofy.svg',
    '068-happy-3.svg',
    '069-nervous-1.svg',
    '070-angry-2.svg',
    '071-angry-1.svg',
    '072-angry.svg',
    '073-scream.svg',
    '074-sad-9.svg',
    '075-sad-8.svg',
    '076-sad-7.svg',
    '077-happy-2.svg',
    '078-sad-6.svg',
    '079-laughing-1.svg',
    '080-nervous.svg',
    '081-sad-5.svg',
    '082-sleep.svg',
    '083-crying.svg',
    '084-laughing.svg',
    '085-sad-4.svg',
    '086-sad-3.svg',
    '087-sad-2.svg',
    '088-happy-1.svg',
    '089-thinking.svg',
    '090-footprint.svg',
    '091-sad-1.svg',
    '092-chat.svg',
    '093-users.svg',
    '094-user.svg',
    '095-diamond.svg',
    '096-engagement-ring.svg',
    '097-kiss-2.svg',
    '098-email.svg',
    '099-cupid.svg',
    '100-heart-9.svg',
    '101-heart-8.svg',
    '102-smile-1.svg',
    '103-heart-7.svg',
    '104-heart-6.svg',
    '105-heart-5.svg',
    '106-broken-heart.svg',
    '107-heart-4.svg',
    '108-heart-3.svg',
    '109-heart-2.svg',
    '110-heart-1.svg',
    '111-heart.svg',
    '112-lipstick.svg',
    '113-sad.svg',
    '114-umbrella.svg',
    '115-ribbon.svg',
    '116-sunglasses.svg',
    '117-purse.svg',
    '118-clutch.svg',
    '119-handbag.svg',
    '120-briefcase.svg',
]

function setBoxEmoji() {
    const emojiBox = document.createElement('div');
    emojiBox.classList.add('emoji-box');
    emojiBox.setAttribute('id','emoji_box')

    emojiList.forEach((emoji) => {
        const image = document.createElement('img');
        image.src = `assets/icons/emojis/svg/${emoji}`
        image.classList.add('emoji');
        image.setAttribute('value', emoji)
        emojiBox.append(image);
    })

    emoji_box_container.append(emojiBox);
}

function emojiSelector() {
    const emojis = document.querySelectorAll('.emoji');
    const item = document.querySelector('#item-background');

    const itemEmoji = document.createElement('img');
    itemEmoji.classList.add('item-emoji')
    emojis.forEach(emoji => {
        emoji.addEventListener('click', () => {
                emojis.forEach(emoji => emoji.classList.remove('emoji-selected'))
                emoji.classList.add('emoji-selected');
                itemEmoji.src = `assets/icons/emojis/svg/${emoji.getAttribute('value')}`
                item.setAttribute('emoji', emoji.getAttribute('value'))
        })
    })
    
    item.append(itemEmoji);
    
    
}


setBoxEmoji();
emojiSelector();
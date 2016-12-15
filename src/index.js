/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License").
 You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file.
 This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, 
 either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */



/**
 * App ID for the skill
 */
var APP_ID = "amzn1.ask.skill.4fb3965a-eb4c-4ddd-adcf-8805b7b39fe8";

/**
 * Array containing quote.
 */
var QUOTE = [
    "It's only when you have the courage to step off the ledge that you'll realize you've had wings all along.",
    "Trust is knowing that we're exactly where we are supposed to be in life, especially when it doesn't feel like it.",
    "In every moment, you are the only one who gets to choose your attitude. Choose wisely.",
    "The greatest personal fulfillment comes when we contribute to improving the welfare of others.",
    "Who and what you are will be determined by you, not by your circumstances.",
    "Follow your passion. Listen to your heart. Trust the process. Be grateful. Life is magic and your dreams matter.",
    "Life is about right now in this very moment. Not tomorrow, not yesterday but now. Live it!",
    "Having a great dream and belief in yourself is great, but nothing happens until you take action.",
    "Your words are simply the thoughts of yours that will become things the soonest.",
    "Refuse to be defined by someone else's vision of what's possible.",
    "In all moments, for all reasons--love completely.",
    "If we aim high and fall short, we still achieve more than by aiming low and falling short.",
    "May you recognize the passion and the possibility in your day today and have the courage to follow it.",
    "In every moment, for every reason--choose LOVE.",
    "Set your goals high and do something everyday to move forward.",
    "When was the last time worry ever solved a problem? Breathe and know that you are perfect in this moment.",
    "Limitations seem real when we lack faith and belief. With faith and belief, anything is possible.",
    "Today, be the person of your dreams. See and act from their eyes.",
    "Praise is one of the best, yet inexpensive gift we can give to others.",
    "There is nothing more important in the world tha loving yourself",
    "In times of turmoil, it matters not that we forgot we are initiate, unlimited beings. What matter most, " +
    "is how quickly we remember.",
    "Most times, regrets are things we didn't do, not those we did.",
    "Take the time today to be good to you, in thoughts, deeds and actions--but especially in your thoughts.",
    "Remember, perspective can cause two people to look at the same thing and see two totally different things.",
    "Every good thing you do creates ripples that you may not see. Do them anyway.",
    "For today, think positive thoughts, believe in yourself and others, share hugs and spread love. That's it -- nothing else.",
    "Everything starts from gratitude. Everything. From there, all else lines up for you.",
    "Life is more meaningful when our goal is fulfillment rather than gratification.",
    "Focus on the WHY of life and not the HOW, remembering that where focus goes, energy rows.",
    "Change your thoughts and you'll change your world.",
    "Collaboration and cooperation will beat competition every time. Think abundantly. Speak authentically. Serve willingly."
    + "You had enough. You are enough",
    "Nothing has the power to radically change a life more than an attitude adjustment.",
    " The fastest way to get unstuck is to go do something for someone else.",
    "Success often comes to those who are too naive to know that what they're trying to do is impossible.",
    "Sometimes the greatest gift you can give another is to ask for help. There is pleasure in giving.",
    "True wealth is celebrating the present moment.",
    "You can summit the biggest mountain by simply taking the first step.",
    "Either way you're going off the ledge. So why not jump now so God doesn't have to push you? Your wings are beautiful!",
    "To achieve your dream, see the world as you want it to be, not as it may appear to be.",
    "We make room for love when we !rst invite understanding into our hearts.",
    "The greatest limitations in life are the ones we place on ourselves.",
    "As you close your eyes tonight, may you know how blessed you are and celebrate with gratitude.",
    "Remember, you are an initiate being and deserve a day filled with unlimited potential.",
    "Start with your beliefs, which will lead your thoughts, which will create your actions, which will produce your results.",
    "Change requires you to shift your identity of who you are.",
    "When we focus on what we can do instead of what we can't, a world of possibility opens unto us.",
    "Adversity can be turned to opportunity simply by adjusting our perception and our attitude.",
    "Play and don't take yourself or the world so seriously. Create reasons to laugh!",
    "Challenging people are in your life for a reason--love them.",
    "Never underestimate the power of an unlimited being--YOU.",
    "Take time each day to connect to the Divine. Trust that there is a plan even if you only see a fraction of it.",
    "The fastest way to get to the life you want is to just play make believe that you already have it today.",
    "Integrity is holding fast to our convictions regardless of the consequences and never compromising " +
    "our ideals or values, even if it affects the bottom line.",
    "If you have to doubt something, let it be your own perceived limitations. Expand, stretch and believe!",
    "When you start your day with gratitude everything falls into place with grace and ease.",
    "Go make your life the one you have always wanted, knowing you have the power to make it happen.",
    "The music of success is sweetest when you play in a band of winners. Surround yourself with excellence!",
    "With the right attitude anything is possible.",
    "Action is the step many forget when they wonder what happened to their dream.",
    "Your expectations for any given situation will greatly influence the end result.",
    "In this very moment you hold the power to change someone else's life for the better. Go do it.",
    "Change your beliefs and you’ll change your thoughts. Change your thoughts and you’ll change your" +
    " habits. Change your habits and your life opens to unlimited possibility.",
    "Giving is the reason for living.",
    "Above all else, be true to you.",
    "Allow adversity to be your teacher.",
    "Find people who believe in you until you can believe in yourself.",
    "The more clear you are in the vision of what you want in life, the brighter the spotlight will be to " +
    "lead you on the right path.",
    "We often learn too late that we spent too much time worrying about the things that mattered least.",
    "Chances are, when you fall asleep with a prayer of gratitude on your lips, you'll wake with a song of joy in your heart.",
    "Fear less, hope more; eat less, chew more; whine less, breath more; talk less, say more; hate less, love more; "
    + "and all good things shall be yours.",
    "Abundance flows more freely to you when it continues to flow outward from you, as you pass it on.",
    "Don't let your fear of the hazards keep your ship in the harbor. Cast off your lines and sail away!",
    "If you can’t change the circumstances, change your attitude. Funny thing is, when you do, you’ll find that the "
    + "circumstances often change.",
    "Size matters, so keep your dreams big and your worries small.",
    "Know that deep inside, you are resilient, brave and so much stronger and more powerful than your fears.",
    "Beyond words, beyond actions, beyond feelings--know in your core that you are loved.",
    "We can get so much further in life through collaboration rather than competition. One plus one equals eleven, not two.",
    "Problems do not de!ne who you are unless you allow them to. Remember your magnificence.",
    "To improve what shows up in the exterior of your world, !rst, be still and improve the interior.",
    "The shortest path to success--focus on the 'what' and the 'why', not the 'how'. Works every time.",
    "Your actions, thoughts and words today are but seeds for tomorrow’s garden.",
    "No matter what the past may look like, without our permission, our yesterday does not have the power to determine our tomorrow.",
    "When we celebrate in advance, things have a way of lining up for us more quickly.",
    "When we look for the good and expect it to show up, we'll always !nd it.",
    "If we knew how loved, how Divine, how unlimited we really are, we'd see one another through tears of joy.",
    "At the end of life we're going to ask--Did I live? Did I love? Ask it now. The clock is ticking, you'd better start living.",
    "“Can't” isn't a word. You have the power to do, be or create anything.",
    "If you wait for everything to be perfect before taking action on your dream, you'll never take the first step.",
    "When we change our beliefs on the inside, we will transform our results on our outside world.",
    "It's impossible to be of service to others and feel sorry for yourself. Choose one.",
    "If we allow our definition of what's possible to be based on how big someone else can dream, our dream will die.",
    "Gratitude must be part magic, for when I !ll my heart with gratitude, anything is possible.",
    "For the next moment, allow yourself to be a human being rather than a human doing.",
    "When you focus on faith rather than fear, you tap into a strength to carry you over even the tallest of mountains.",
    "The power to change the world starts with us !rst changing our belief and ourselves.",
    "Our dreams have no limitations except those that we place on them.",
    "Each day take the time to reconnect and remember, you are an in!nite being with unlimited potential.",
    "Treat all others as if the entire world were watching your actions.",
    "Ask, give thanks, repeat. Ask, give thanks, repeat.",
    "Abundance isn't something that you have, it's who you already are.",
    "Adversity could be the greatest gift our life, in retrospect.",
    "Push yourself to do one thing outside your comfort zone today.",
    "A decision is nothing more than a choice to eliminate other options and follow your path with determination.",
    "We imagine the worst. If you're going to use your imagination, imagine GOOD things happening!",
    "Choose to love with all your heart, even if it sometimes breaks.",
    "We're only here to learn to love.",
    "What's happening on the outside doesn't have the power the affect what's happening on the inside, unless we allow it to.",
    "When Universal timing and our timing are different, that doesn't mean that things aren't working. Trust the process.",
    "What other people think about you isn't about you. It's about them.",
    "May you be blessed with thoughts and opportunities and take action that will create abundance in your life.",
    "Your thoughts become things. You decide. You rule. It's pretty cool.",
    "Beating yourself up doesn't bene!t anyone. Focus on what you choose to create instead.",
    "Being kind to you is really being kind to me, for we are but individual parts of the same whole.",
    "Illusions can appear real but we get to choose whether or not to buy into them.",
    "When we learn to !nd the blessing in any situation, we've mastered this journey called life.",
    "What would you do if you knew that your wildest dreams could come true and that you couldn't fail? ",
    "Imperfect action is better than perfect inaction.",
    "With belief and action all things are possible.",
    "Sometimes the fastest way to reach your dream is to help someone else reach his or her dream.",
    "If you don't ask for what you want, the answer is already NO. Why not ask, and maybe the answer will be YES!?",
    "The two most powerful words in any language--“Thank you!”",
    "Realize that you have the power to do, be or create anything in your life. Anything.",
    "Nobody's perfect. We all fall down. What matters most is how quickly we get back up, learn from our mistakes and move on!",
    "You can't worry yourself out of a bad situation, but you can believe yourself out of it!",
    "How we see ourselves determines how we see the world.",
    "Gratitude, kindness and caring are more powerful than any problem you think you have.",
    "Life works better when we go with the flow rather than fight the current.",
    "Love is letting others know how much you appreciate them.",
    "Forget early--there are enough worms for all of us.",
    "Adversity forces us to focus on things we need to learn.",
    "We can't choose the number of our age, but we CAN choose the age of our attitude.",
    "Change is inevitable and those who adapt quickly are most likely to succeed.",
    "Worry is the number one thief of our time and has the power to rob you of beauty of today.",
    "Live well, laugh often, love deeply.",
    "With laughter or love, the more you give the more you'll receive.",
    "Sometimes we may forget who we are. But what matters most is how quickly we remember our magnificence.",
    "When you surround yourself with people who support your dreams, you will achieve success more quickly.",
    "You will go through pain in your life, but how you choose to respond to it is your choice.",
    "Even the largest of !res starts from a tiny spark. The same potential is within you, so set your dreams on fire!",
    "Laughter is not only contagious, but is experienced in a deeper way when it is shared.",
    "Life is magical when we are bold and have the courage to move forward into the unknown, rather than backwards into security.",
    "Kindness is God's reminder that we see through our eyes but connect through our hearts.",
    "Realize that what’s happening around you doesn't de!ne who you are.",
    "Instead of cursing the darkness, be the one to light a candle.",
    "Change your attitude to “I’ll see it when I believe it ”--not the other way around.",
    "Pain may be inevitable but remember, suffering is optional.",
    "You are Divine energy in human form--you are only as limited as your thoughts.",
    "Make your life a garden where you plant seeds of possibility and water them with gratitude.",
    "You are an unlimited being filled with in!nite possibility--with the power to be, do or create anything " +
    "that you desire in your life.",
    "The best thing about a hug is that when you give one away you still have an endless supply.",
    "Just as in nature where the antidote and the poison grow side by side, you'll never be given a dream without "
    + "the ability to make it happen.",
    "Success looks at adversity as a step to something greater, not a wall to stop progress.",
    "Choose consciously and wisely. You are only one choice away from changing your world.",
    "Nothing in life is to be feared--it is only to be understood.",
    "One of the amazing things about this chess game called life, is that we get to choose if we want to "
    + "be the chess master or the pawn.",
    "Even if life is a bumpy road or your dreams are taking a circuitous route, take time to live in the "
    +"moment and enjoy the scenery along the way.",
    "Someone in the world is better off today because of something you've done.",
    "Know that there is enough for all of us--enough money, enough opportunity, enough love for all of us to be happy.",
    "Adversity happens to everyone and it is not an excuse for abandoning our dreams.",
    "We may not choose our circumstances but we do choose our attitude and our response.",
    "Make a choice. Change your thought and change your world.",
    "We make the greatest difference in the world when we !nd a cause that's bigger than our fears and step forward with faith.",
    "Love eradicates fear like light dispels darkness, so shine your love on the world!",
    "Each day, do your best and let go of the rest.",
    "You are not the troubles that happen to you. You are magnificence unfolding. Allow it to happen.",
    "Life works best when we focus on where we're going rather than where we've been.",
    "The number one way to improve your life is through the conscious practice of gratitude.",
    "On your deathbed, regrets are usually of things you didn't do, not things you did! So, go do it!",
    "Adversity is the Universe's way of directing us down a different path.",
    "Happiness and love are choices that we get to make in each and every moment.",
    "Let your thoughts and actions come only from a place of love.",
    "If you've hit a wall or the door has closed, keep looking until you !nd the window, for there' always a solution.",
    "When the dream is BIG enough, we !nd the motivation to get through the tough times.",
    "Give to others with no expectation of receiving anything in return.",
    "ALL people have adversity. What separates the good from the great is how we choose to react to it.",
    "Blessings happen more frequently when we take the time to notice them.",
    "The quality of your life will be in direct proportion to the level of your gratitude.",
    "Be not afraid to surrender your beliefs on how things “should” be, to the greater will of the Universe.",
    "Love is all there is.",
    "You were born an infinite being with unlimited potential--and you still are that magnificence.",
    "You can only do one thing at any time--dream, plan or worry. Kinda makes worry a silly third choice, no?",
    "Sometimes the only change we need is a change in how we see the world.",
    "More forward with confidence, knowing in the core of your being that you have the power to achieve your dreams.",
    "When the purpose is big enough, we find the courage to move mountains.",
    "Take love with you in all things that you do and leave only ripples of kindness behind you.",
    "Today, please share appreciation, spread the love and happiness and watch what happens.",
    "Just as the birds receive what they need each day, live your life knowing that abundance is already yours.",
    "Adversity provides the opportunity for the best part of us to shine.",
    "When you accept that you're exactly where you're supposed to be in this moment and that you have all "
    + "that you need, miracles happen.",
    "Take responsibility for your actions and inaction, realizing that at all times, you get to choose how to act or react.",
    "Inspiration is the rocket fuel that makes ordinary days extraordinary.",
    "Love everyone. Life is just too short for anything else.",
    "Live in the present. It's the only thing that truly exists. Never look back unless you are planning to go that way.",
    "All things are possible--if you never give up!",
    "Don't put off until tomorrow that which you can enjoy today!",
    "Challenge is nothing more than a seed of opportunity.",
    "Play BIG, make it fun or don't play at all. Might as well make it worth the effort, no?",
    "There are few things in life that can't be solved by a bubble bath.",
    "Dream big and make life fun! Do something outrageous each day. Follow your passion. Believe in yourself.",
    "Love is the answer to any of your questions today. Just start there first and watch magic unfold.",
    "Just because no one's ever done it before doesn't mean it's impossible. Go for it!",
    "Knowing that what we focus on grows, count your blessings instead of your problems.",
    "Feeling stuck? The best way to get unstuck is to go do something for someone else!",
    "Live purposefully. Give abundantly. Love unconditionally. Hug joyfully. Celebrate gratefully.",
    "Happiness is found in your heart, not in your circumstances.",
    "When your burning desire for success is greater than your deepest fear of failure, you can create anything in your life!",
    "No one deserves loving kindness today more than you do.",
    "Tomorrow, when you are a beautiful butterfly, it will be hard to remember your days as a caterpillar.",
    "Even enlightened people have problems. The only difference is in their reaction to them.",
    "We do have a choice in everything, everyday--even when it appears that we don't.",
    "What you get from life will be in direct proportion to what you give TO life.",
    "You cannot discover new lands unless you take your ship out of the harbor. Sail on brave one!",
    "Appreciate where you've been, anticipate where you're going, but most importantly, cherish where you are in this moment.",
    "Laugh more and love more, you will live a longer, healthier and happier life.",
    "Once you understand that abundance is there for everyone, life gets much easier.",
    "If you're going through a rough time, the Universe just might be preparing you for something greater.",
    "Your worst day may be someone else's best day. It's all perspective. How we see ourselves changes how we see the world.",
    "The false belief have in our heads are our only cause of unhappiness. Change our thought,change our world.",
    "Know that the real gift you give isn't the presents--it's your presence.",
    "Love's the only road to travel.",
    "Serendipity happens to us all every day.The key to the frequency and importance is simple: Pay attention.",
    "Even if you don't know how to complete a project, just take the first step. There is power in action.",
    "Everything happens for a reason, even if you don't understand it in the moment.",
    "Rather than fighting the wind, it's much easier to trim the sails.",
    "May you be safe, may you be happy, may you be healthy, may you live with ease and know that you are loved.",
    "Do something today that makes you grow. Stretch your boundaries and reach outside of the box.",
    "Every day, dream and be inspired. Read a good story, sing a song, play in Nature and share love.",
    "The first step to loving someone is understanding who they are. Listen with your heart.",
    "What's possible for you in your life? Ask. Trust. Infinite possibilities are born of faith.",
    "Happiness is a choice that you get to make.",
    "Nothing can dissipate adversity faster than changing your focus.",
    "Life is richer when we celebrate our successes rather than focusing on our failures.",
    "For all that you do, and all that you are, no one deserves loving kindness today more than you do.",
    "The only way to bring something into your life is to first believe that it's possible, for without vision " +
    "and belief, nothing happens.",
    "No matter the question, love is always the answer. Start there !rst and watch magic unfold.",
    "You only lose when you give up.",
    "Go with the flow and be willing to allow change into your life, for change is the only thing that's constant.",
    "The more you worry, the less you dream. Choose to dream.",
    "Focus on what you DO have instead of what you don't.",
    "Anything is possible. The most audacious dreams can be realized, by intention, preparation, action and unwavering belief.",
    "There is greater value in implementation than in simply having an idea. Make it happen.",
    "A single candle can light the way for the masses. Today, shine brightly.",
    "Thinking that we have to create abundance is like thinking we have to create sunshine. We ARE abundance.",
    "The problem is not that there are problems.The problem is expecting otherwise and thinking that " +
    "having problems is a problem.",
    "Belief, not worry, is the only way out of a bad situation.",
    "What we choose to do in each moment de!nes where we're going in our life.",
    "Live to give and give to life. Giving is the reason for living.",
    "Praise is one of the best inexpensive gift we can shower on others. Catch someone doing something right.",
    "If I have any regrets at the end of my life, I want them to be for the things I did do, not those that I didn't.",
    "Limitations are nothing more than arti!cial boundaries that we create to feel safe. Remember, you " +
    "can do anything!",
    "Wake with gratitude, work with joy, live with integrity, play with gusto and insomnia will never be " +
    "a problem.",
    "You don't have the ability to change the wind, but you get to choose how to trim your sails.",
    "Never, ever give up on your dreams. Never, ever!",
    "It is your attitude that will determine your altitude in life. Con!dence and optimism will take you " +
    "to the top of the mountain.",
    "We have a infinite amount of time, so the more we worry, the less time we have to dream. For me, I think " +
    "I'd rather dream.",
    "The most important person to love, is YOU. Once you do that, it's easier to love everyone else.",
    "For the next hour--disconnect. Rather than being available to the world--realize that you ARE the world.",
    "Happiness is something that happens from a choice within, rather than from circumstance outside of ourselves.",
    "Nothing eliminates pain and difficulty in our life faster than a greater purpose.",
    "Dream incessantly, Believe completely, Act daily, Risk intuitively, Celebrate continually.",
    "Kindness and love will conquer fear and illusion any day.",
    "May peace and understanding be yours in this moment.",
    "Nothing is greater than LOVE. Spread some today.",
    "For every thought you have today, unseen forces will line up to make it happen for you, so, think good thoughts.",
    "A positive attitude can overcome a negative situation.",
    "Do something special to inspire someone else today, and chances are, it will touch your life too.",
    "For all things, for all reasons, express your gratitude.",
    "Miracles first show up as baby steps of possibility.",
    "When we learn to label challenging situations or problems as fascinating rather then frustrating, " +
    "something shifts within that allows the solution to reveal itself.",
    "Everyday, if we find someone who's having a bad day and send them some love, we just might change the world.",
    "When you're able to look at the world as cooperative rather then competitive, everything changes " +
    "and there is enough for everyone.",
    "The worst things that ever happen to us are the stories we tell ourselves. Misery comes only from believing our thinking.",
    "Believe that you can do it, for when you believe, doors will open unto you.",
    "When you feel sad or stuck, remember your life can change in the flash of a moment, and perhaps that moment is now.",
    "The gift of oneself is the greatest thing we can give. Be present.",
    "Send a blessing today to the person in your life who you'd least want to bless--and see what happens. " +
    "Love is always the answer.",
    "If you are worthy of the breath of life, you are worthy of all else. Let it in.",
    "When we think with no limits, we allow God to show us a bigger, better dream of possibility.",
    "Live simply, love deeply and know your own inner wisdom.",
    "The only thing that makes a good day different from a bad day, Is simply our perception.",
    "Follow your heart--not your fears. Fear is nothing more than False Evidence Appearing Real.",
    "To achieve success, attitude is more important than assets, aptitude, age or anything else.",
    "Just the fear of failure--not failure itself--has the ability to stop greatness in its tracks.",
    "It's easy to show kindness and love others when you !rst love yourself.",
    "Live your life with no regrets. Bless the past and let it go.",
    "Sometimes we forget who we are. Remember--you are an in!nite being with unlimited possibility.",
    "Our strength and resilience are always in direct proportion to our level of adversity.",
    "The fear of the storm is always worse than the storm itself.",
    "If you must follow something rather than lead, let it be your own bliss.",
    "Dream big and make life fun! Do something outrageous each day.",
    "Your life will improve exponentially when you improve the life of another.",
    "Believing that you lack abundance is like a !sh believing that it lacks water. You are abundance.",
    "As we grow, the obstacles in our path shrink in proportion, so that what once appeared as a boulder " +
    "becomes a mere stepping stone.",
    "Follow your passion, listen to your dreams, believe in yourself and all good things will come your way.",
    "The fastest way to get from fear to abundance is by a shortcut called gratitude.",
    "Focus on what you want, not what you don't want. Simple, easy.",
    "When everything we do comes from a place of love rather than fear, we will have achieved peace on Earth.",
    "Your taking a deep breath doesn't diminish my air supply any more than your success prevents mine. We are abundance.",
    "We stumble, we fall, we get back up again. Guess which part is the most important?",
    "Change happens !rst in our mind, then in our world. Believe it and then you'll see it.",
    "The world needs you to live out your dream, as no one can sing your song or dance your dance quite like you can.",
    "Think good thoughts. Do good things. Be good to the world and to yourself. Easy.",
    "The fact that we share the same fears should unite us, not divide us.",
    "In the midst of constant change, the one thing that remains the same is the essence of who we are and " +
    "the greater sense of knowing found deep within ourselves.",
    "Bless your enemies. Forgive others and yourself. You can't swim with an anchor tied to your feet.",
    "Luck isn't something that happens to you--it's something you create.",
    "It's not about who gets there first, but who's had the most fun on the journey.",
    "On this beautiful day, take time to be grateful, for from that alone, the magic of the Universe wil be revealed to you.",
    "Where focus goes, energy flows.",
    "When you can look a coming storm in the face without fear, you have mastered your life.",
    "You touch everyone you interact with in either a positive or negative way. Make it positive.",
    "No matter what it might feel like, know that you are never alone.",
    "Sometimes we need to be reminded that we are spiritual beings having a human experience.",
    "It helps to know that as we go through painful times, we get to choose how to respond to them.",
    "When our burning desire for success is greater than our deepest fear of failure, we have the power " +
    "to create anything in our life!",
    "What's happening outside of you is irrelevant compared to what's happening inside.",
    "Dream incessantly, believe completely, act daily, celebrate continually.",
    "Circumstances can’t affect whether or not you are happy, when your happiness is not dependent upon a reason.",
    "Collaboration is the new black. Competition only exists in our minds. There is plenty for all of us.",
    "You are the painter of the masterpiece called life, and your attitude is the brush.",
    "If you can see the life of your dreams it tends to show up even faster. Dream it. See it. Live it!",
    "When you can be happy right now, in spite of problems, you'll find they disappear much more quickly.",
    "Seek knowledge while knowing that all the answers to all the questions are already inside of you.",
    "In retrospect, some of the greatest blessings in my life have come from adversity.",
    "If we could stand in another's shoes, we wouldn't be so quick to judge one another ever again.",
    "Rather than rowing your own boat, take action by setting your sails and stepping into the wind. Sail on!",
    "What if all your problems could be solved by one tiny idea? The answer is within--pay attention and listen.",
    "Life is like a trapeze: you have to let go of one place to get to another. Swing, release, catch... swing,release, catch.",
    "Think without boundaries. Dream without limitations.",
    "Be grateful, for from gratitude alone the magic of the Universe will be revealed to you.",
    "The greatest gift you can ever give to others is the gift of just being you.",
    "Inspire others to be their best by first being YOUR best.",
    "Meditate and pray on understanding, not outcome, knowing there is blessing in everything.",
    "Rather than seeking gratification, which is meeting, create lasting fulfillment instead.",
    "Enjoy the journey, knowing that what appears to be the shortest path isn't always the best route.",
    "The nutritional choices we make today will directly affect the health of our bodies tomorrow. Choose wisely.",
    "You'll always find what you're looking for, either the good or the bad, in any situation... but finding the good is more fun.",
    "Adversity is but an opportunity, not an excuse.",
    "Be present and remember to breathe.",
    "You are a spiritual being enjoying a human experience--part of something so much greater that will live forever.",
    "If you're going to take the time to do it, do it right the first time.",
    "Never allow the size of your dreams to be limited by what someone else thinks is possible.",
    "Nature is the Universe's way of making sure we remember the magnificence of who we really are.",
    "Nature is the Universe's way of making sure we remember the magnificence of who we really are.",
    "We have a choice to make time for silence to hear God's whisper, or wait for him to get our attention with a sledgehammer.",
    "If your dreams don't scare you just a little bit, you're not playing big enough in the world.",
    "When we give without being asked miracles happen.",
    "Carrying yesterday's problems with you today is like trying to try while carrying a sack of rocks.",
    "Not making a choice IS making a choice--and it's not always the best one.",
    "Don’t wait until you lose something to realize how much you have to be grateful for in this moment.",
    "Miracles can happen from just sending wishes of loving kindness to another.",
    "To believe is to know in your heart that it’s already done.",
    "Rather than telling others how to live their life, lovingly show them by example.",
    "Never let the quality of the music determine the quality of the dance.",
    "Many proudly say they don’t fear death, yet live their lives as if they fear living.",
    "When we realize we only have 86,400 seconds each day--and when they're gone, they're gone--it makes us " +
    "more conscious of the value of time.",
    "Sometimes the lesson is in asking the question, not in finding the answer.",
    "Money doesn't change people, but rather, only amplifies that which a person already is.",
    "The older we get, the greater importance we place on time spent with loved ones.",
    "Negative people present us with an expedited personal growth opportunity.",
    "Our light shines the brightest when we are working on something bigger than ourselves.",
    "Adversity is but a gentle hand to shape you into something greater."
];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * SpaceGeek is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var Quote = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Quote .prototype = Object.create(AlexaSkill.prototype);
Quote .prototype.constructor = Quote ;

Quote .prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    //console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

Quote .prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    //console.log("onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewQuoteRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
Quote .prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    //console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

Quote .prototype.intentHandlers = {
    "MotivationIntent": function (intent, session, response) {
        handleNewQuoteRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say I need some motivation, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new fact from the list and returns to the user.
 */
function handleNewQuoteRequest(response) {
    // Get a random space fact from the space facts list
    var quoteIndex = Math.floor(Math.random() * QUOTE.length);
    var randomQuote = QUOTE[quoteIndex];

    // Create speech output
    var speechOutput = "Here is a little motivation for you today: " + randomQuote;
    var cardTitle = "Your Motivation";
    response.tellWithCard(speechOutput, cardTitle, speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the motivation
    var quote = new Quote();
    quote.execute(event, context);
};



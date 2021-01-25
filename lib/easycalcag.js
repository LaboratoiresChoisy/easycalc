/****
 * Easycalc
 * Fully loaded hygiene product consumptions calculator
 * Copyright 2020, KERSIA
 ******/

//region vars
var App                  = 'Easycalc',
    Company              = 'KERSIA',
    version              = '2.1.11 - 22/01/2021',
    mostRecentVersion    = 0,
    $demoCircle,
    $demoTarget,
    addFileProcess       = false,
    animal               = 0,
    animalMenuProcess    = false,
    animals              = ['cow', 'goat', 'sheep'],
    animalScope          = animals.length,
    animalType           = animals[ 0 ],
    AS                   = '*',
    backupData,
    blob                 = 'B',
    BR                   = '<br>',
    calendarThemes       = ['dark', 'light'],
    category             = 0,
    changeDataProcess    = false,
    changedEauDouce      = false,
    CI                   = '●',
    CL                   = ':',
    clearBoth            = '<div style="clear:both"/>',
    clickTimes           = 0,
    closeTabProcess      = false,
    cmpHeader            = 'compress',
    CO                   = ',',
    countries            = ['FR-fr', 'EN-en', 'DE-de', 'ES-es', 'CH-de', 'CH-fr'],
    country              = countries[ 0 ],
    countrymenu          = countries.slice( 0 ),
    countryScope         = countries.length,
    CR                   = '\r\n',
    CR2                  = CR + CR,
    currCat              = category,
    currencies           = ['€|R', 'CHF|R', '$|L', '£|L', 'Dh|R', 'DIN|R', '$ CA|L', '¥|L', '元|L'],
    LI                   = '|',
    currency             = currencies[ 0 ].split( LI )[ 0 ],
    currencyPos          = currencies[ 0 ].split( LI )[ 1 ],
    currentScrollDP,
    dataClusters,
    dataDate,
    dataDay,
    dataHour,
    dataMail,
    dataMailsource,
    dataMin,
    dataMonth,
    dataRobots,
    dataSec,
    dataStorageClear     = ['backupData', 'animalType', 'dataUser', 'dataMail', 'dataMailsource', 'months', 'country', 'currency', 'hello', 'resetProcess', 'pd', 'Optionuser', 'Optionmonths', 'Optioncountry', 'Optioncurrency', 'Optionsound', 'OptionlowresPDF', 'Optionhelpacidalk', 'Optionbreedingwidget', 'Optiontooltips', 'Optionpriceperkg', 'Optionshippingbottom', 'Optionagreement', 'Optiontax', 'Optionglobaldiscount', 'Optionudderdiscount', 'OptioncostGMilk', 'OptioncostGDCM', 'OptioncostDCM', 'Optionautoprice', 'Optiondate', 'Optionlocaldocs', 'Optionfilecontactdate', 'Optionoldprodmosaic', 'Optionfiledate', 'Optionskipintro', 'OptionAOC', 'Optiondistriblogo', 'Optioncontact', 'Optionproductmosaic', 'Optionnodemotooltips', 'Optiondemoloop', 'OptionFSoptions', 'Optioncalendar', 'Optiondemobig', 'Optioncopycci', 'Optionmailfilerec', 'Optionpwdprices', 'history', 'Optionstatictabs', 'Optionspeeddemo', 'showConsole'],
    dataTank,
    dataTime,
    dataTimeF,
    dataUser,
    dataYear,
    delayTimer3          = 500,
    deleteProcess,
    demoProcess          = false,
    demoSequence         = [],
    DH                   = '-',
    diagProcess          = false,
    diagStatus,
    discountProcess      = false,
    DOCFDSLink           = 'https://kite.kersia-group.com/4dcgi/SEARCHDOC?start',
    docFolder            = 'documentations',
    docInfo              = [],
    docslideIndex,
    ED                   = '</div>',
    ES                   = '&',
    ether,
    fileData             = [],
    fileExt              = '.eas',
    filename             = [],
    flagProcess          = false,
    FPHeaderLink         = [],
    FSOptionsProcess     = false, // Old option, now always in fullscreen
    goProcess            = false,
    goSpecial            = false,
    HA                   = '#',
    headerPNG64          = 'data:image/png;base64,',
    hello,
    hideProduct          = 'Hidden-Product',
    historyProcess       = false,
    Ic                   = DH,
    SL                   = '/',
    imgFolder            = baseResourcePath + SL + 'images',
    infoData             = [],
    jpg                  = '.jpg',
    lang                 = 0,
    languages            = ['fr', 'en', 'de', 'es'],
    langScope            = languages.length,
    language             = country.substring( 3 ),
    libFolder            = 'lib',
    loadEnded            = null,
    loadError            = 'clear',
    loadPricesProcess    = false,
    loadProcess          = false,
    logoFolder           = baseResourcePath + SL + 'logo',
    Ls                   = 'LS',
    LSCerror,
    mailProcess          = false,
    MO                   = '[…]',
    months               = 12,
    monthschanged,
    mosaicProdProcess    = false,
    mouseDown            = 0,
    MU                   = 'µ',
    myBrowser            = whatsmyBrowser(),
    myData,
    N                    = '',
    NBSP                 = '&nbsp;',
    newfileData          = [],
    newProcess           = false,
    oldcountry,
    oldDataUser,
    oldfilename          = [],
    oldInfoData          = [],
    oldItemSearched,
    oldPriceData,
    oldTotalSum          = -1,
    oldUnredoData        = [],
    oldwarningType,
    Optionagreement,
    OptionAOC,
    Optionautoprice,
    optionBoxesHeight,
    Optionbreedingwidget,
    Optioncalendar,
    Optioncontact,
    Optioncopycci,
    OptioncostDCM,
    OptioncostGDCM,
    OptioncostGMilk,
    Optioncountry,
    Optioncurrency,
    Optiondate,
    Optiondemobig,
    Optiondemoloop,
    Optiondistriblogo,
    Optionfilecontactdate,
    Optionfiledate,
    OptionFSoptions,
    Optionglobaldiscount,
    Optionhelpacidalk,
    Optionlocaldocs,
    OptionlowresPDF,
    Optionmailfilerec,
    Optionmonths,
    Optionnodemotooltips,
    Optionoldprodmosaic,
    Optionpricecheckplus,
    Optionpriceperkg,
    Optionproductmosaic,
    Optionproductrange,
    Optionpwdprices,
    Optionshippingbottom,
    Optionskipintro,
    Optionsound,
    Optionspeeddemo,
    Optionstatictabs,
    Optiontax,
    Optiontooltips,
    Optionudderdiscount,
    Optionuser,
    overlapResult,
    pdf,
    PDFfilename,
    PO                   = '.',
    previewProcess       = false,
    previousfileData     = [],
    previousMonths       = 12,
    priceData            = N,
    priceFileExt         = '.ecp',
    priceSaveAlert       = -9999,
    productRangeDB       = 0,
    resetProcess         = 'false',
    RO                   = '¤',
    saveError            = 'clear',
    searchProcess        = false,
    sendProcess          = false,
    session              = 0,
    sessionIndex         = 0,
    sessionMax           = 10,
    sessionQuitOK        = [],
    setPricesProcess     = false,
    showConsole          = 'false',
    showRightMenuWarning = false,
    sliderSpeed          = 600,
    sliderVisible        = 0,
    smallImgExt          = '-s.png',
    soundFolder          = 'sounds',
    SP                   = ' ',
    SPcurrency           = SP + currency,
    SU                   = '>',
    subCatClassNames     = ['subconsforcalc', 'subconsforcalc2', 'consforcalc', 'unitprice', 'boxpackagingNum', 'boxpackagingVal', 'eaudouce'],
    switchFileProcess    = false,
    TB                   = '\t',
    thumbsFolder         = 'thumbs',
    timer1               = null,
    timer10              = null,
    timer11              = null,
    timer12              = null,
    timer13              = null,
    timer14              = null,
    timer15              = null,
    timer16              = null,
    timer17              = null,
    timer18              = null,
    timer19              = null,
    timer2               = null,
    timer20              = null,
    timer3               = null,
    timer4               = null,
    timer5               = null,
    timer6               = null,
    timer7               = null,
    timer8               = null,
    timer9               = null,
    timerChronos         = 0,
    timerConsole         = null,
    timerInternet,
    tooltipelement,
    totalSum             = 0,
    unredoData           = [],
    unredoPosition       = [],
    unredoProcess        = false,
    US                   = '_',
    versionShort         = version.split( SP )[ 0 ],
    versiontest          = version.toUpperCase().indexOf( 'TEST' ) > 0 ? '(Test)' : '',
    warningType          = 0,
    windowLoaded,
    youTubeURL           = 'https://www.youtube.com/watch?v=',
    forceClose           = false,
    debugClose           = false;

oldfilename[ 0 ]    = N;
fileData[ 0 ]       = N;
unredoPosition[ 0 ] = 0;
unredoData[ 0 ]     = [];
FPHeaderLink[ 0 ]   = 'https://hypred.sharepoint.com/:b:/g/';
FPHeaderLink[ 1 ]   = 'https://hypred.sharepoint.com/:b:/r/Marketing/FARM/01%20DAIRY/HYGIEN/PRODUCT%20DATASHEET/Premium%20PDS%20FRENCH/';

//endregion

/*
function createDatabase() {
	console.log( 'Create dabatase' );
	return true;
}
*/

$( window ).on( 'load', function () {
	
	windowLoaded = true;
	
	setSliderSpeed( sliderSpeed );
	
	$( '.completer' ).completer();
	
	selectSliderItems();
	switchCategory();
	scrollWindow();
	showHideSliderInit();
	updatePreviewInit();
	detectCrossOriginFailure();
	intro(); // Play the intro (or not)
	// $('.menu-my-logo').hide();
	$( '.menu-other-documentations' ).hide();
	
	setTimeout( function () {
		// dataRobots=1;
		// updateDisplayData()
		// fullCalc();
		// $('.bxslider').find('img[alt="HYPRED QUICK SPRAY"]').eq(0).click();
		// $('.bxslider').find('img[alt="HYPRASIL MAÏS+"]').eq(0).click();
		// $('.bxslider').find('img[alt="BOLIFAST RUMEN"]').eq(0).click();
		// $('#viewswitcher').click()
		setTimeout( function () {
			// $('.bxslider').find('img[alt="AGAVOX N"]').eq(1).click();
			// $('.bxslider').find('img[alt="HYPRODERM"]').eq(0).click();
			// $('.hoovesProtocol').eq(0).click()
		}, 500 )
	}, 500 );
	
} );

$( function () {
	
	preventCloseWindow();
	disableMouseWheel();
	textDatabaseSetup();
	createStructure();
	loadOptionData();
	retrieveDateTime();
	intro();
	languageModule();
	priceTaxforTexts(); // Text database is loaded at this time
	productDatabaseSetup();
	customRangeSetup();
	docDatabaseSetup();
	appendSliderItems();
	appendCategories();
	oldCatManagement();
	appendDataValues();
	appendControls();
	appendTexts();
	modalInit();
	addProductInit();
	adjustLayout();
	addDiscountInit();
	removeDiscountInit();
	closeBoxInit();
	lightbox();
	scrollToCategory();
	letMeSeeWhatsmissingInit( '#estimatevalue', '.alertInput', 700 );
	letMeSeeWhatsmissingInit( '#missing-setPrices', '.setPriceWarningImg', 700, 148 );
	letMeSeeWhatsSelected();
	changePeriod();
	searchInit();
	infoInputDefaults();
	dragBarInit();
	updateMonths( months * 10 );
	adjustInputInit();
	rightmenudocArrowsInit();
	rightmenuoptionArrowsInit();
	printInit();
	exitPreviewModeInit();
	choosePackagingInit();
	flashPackagingInit();
	blobCheck();
	windowScrollResize();
	TopWarningInit();
	loadInit();
	saveInit();
	backupDataInit();
	unredoInit();
	findDistribLogoSrc();
	rightMenuInit();
	updateCurrencies();
	$( '.contactdate', '#contact-container' ).glDatePicker();
	updateLanguages();
	updateDisplayData();
	optionChangeInit();
	updateData();
	updateDateField();
	updateVendorFields();
	userInfoChangeInit();
	parameterSetInit();
	wastebinInit();
	tooltipInit();
	artNumberSetInit();
	checkInternet();
	specificInit();
	goModuleInit();
	goInputInit();
	addFileInit();
	switchFileInit();
	closeFileInit();
	cloneFileInit();
	mailBoxInit();
	consoleOnOff();
	santaInit();
	mainEventInit();
	soundIcon();
	
} );

function consoleOnOff() {
	
	var consoleCont = $( '#console-container' );
	
	// Stop timer and hide
	if ( showConsole == 'false' ) {
		clearInterval( timerConsole );
		consoleCont.removeClass( 'flexDisplay' );
	} else {
		consoleCont.addClass( 'flexDisplay' );
		timerConsole = setInterval( function () {
			if ( !myData ) return;
			//$('#console2').text(category)
			//$('#console2').text('currCat: '+currCat+' Category: '+category+' sliderVisible: '+sliderVisible);
		}, 500 );
	}
	
}

function findAttributesInArray( element, myArray ) {
	
	for ( var idx = myArray.length; idx--; ) {
		if ( myArray[ idx ].toLowerCase().indexOf( element ) >= 0 ) {
			return myArray[ idx ].split( CO );
		}
	}
	// Nothing found: N='' is for safety text reasons
	return N;
	
}

function showAlert( msg ) {
	if ( isApp ) {
		//handle with electron
		var options = { title: 'Alert', message: msg, type: 'warning' };
		return dialog.showMessageBox( remote.getCurrentWindow(), options );
	} else {
		return alert( msg );
	}
}

function saveProductImgDB() {
	
	// Do not launch if unappropriate CORS management
	if ( !$( 'body' ).data( 'cors-Img-OK' ) ) {
		showAlert( 'Souci CORS, changez de navigateur…' );
		return;
	}
	
	var productString = TB + 'imgProduct=[];' + CR2,
	    count         = 0,
	    ratio         = 0.512;
	
	for ( var i = 6; i < prodText.length; i += prodText.length / prodDataNumb ) {
		
		var canvas = document.createElement( 'canvas' ),
		    ctx    = canvas.getContext( '2d' ),
		    img    = new Image();
		img.src    = imgFolder + SL + prodText[ i ];
		$( img ).on( 'load', function () {
			var srcImg    = this.src.replace( imgFolder + SL, N ).replace( smallImgExt, N );
			canvas.width  = this.width * ratio;
			canvas.height = this.height * ratio;
			ctx.scale( ratio, ratio );
			ctx.drawImage( this, 0, 0 );
			productString += TB + 'imgProduct[' + count + ']="' + srcImg + CO + canvas.toDataURL().replace( headerPNG64, N ) + '";' + CR;
			count++;
			if ( count == prodDataNumb ) {
				productString = productString.slice( 0, -2 );
				saveFile( productString, 'product-img.js', 'application/javascript' );
			}
		} );
	}
	
}

function mainEventInit() {
	
	$( document )
		.on( 'keydown', function ( e ) {
			
			var mySlider = $( '#slider-container' ).find( '.slider' ).eq( category );
			
			// Escape key
			if ( e.keyCode === 27 ) {
				
				if ( FSOptionsProcess ) {
					$( '#close-fullscreenoptions' ).click();
				} else if ( diagProcess ) {
					$( '#close-diagnostic' ).click();
				} else if ( historyProcess ) {
					$( '#close-History' ).click();
				} else if ( $( '#lightbox-cartdetail' ).isVisible() ) {
					hideLightboxCartDetail( 0 );
				} else if ( $( '#lightbox-container' ).isVisible() && !demoProcess ) {
					$( '#close-lightbox' ).click();
				} else if ( mosaicProdProcess ) {
					$( '#close-mosaic' ).click();
				} else if ( $( '#rightmenu-container' ).css( 'opacity' ) > 0 ) {
					hideRightMenu();
				} else if ( demoProcess ) {
					endDemoTour( 'exit' );
				} else if ( goProcess && $( '#go-out' ).isVisible() ) {
					$( '#go-out' ).click();
				} else if ( $( '#modal-container' ).isVisible() ) {
					$( '#modal-container' ).click();
				} else if ( $( '#AnimalType-container' ).isVisible() ) {
					$( '#AnimalType-container' ).click();
				} else if ( $( '#search-container' ).isVisible() ) {
					toggleSearch();
				}
				
			} else if ( e.keyCode === 13 ) {
				
				if ( $( '#search-container' ).data( 'running' ) && $( '#search-container' ).find( '.resultbox' ).length === 1 ) {
					$( '#search-container' ).find( 'img' ).click(); // We can directly press enter to open the lightbox if unique result
				}
				
			} else if ( e.keyCode === 113 ) { // Showing the SAP code (box top right) on pressing F2 key
				var myBox = $( ':focus' ).closest( '.catbox' );
				if ( myBox.length ) {
					myBox.find( '.SAPCode' ).stop( 1, 1 ).fadeIn().delay( 2000 ).fadeOut();
				}
			} else if ( sliderVisible ) { // Moving through slider's items - and up / down to show/hide slider
				if ( e.keyCode === 39 ) {
					mySlider.find( '.bx-next' ).click();
				}
				if ( e.keyCode === 37 ) {
					mySlider.find( '.bx-prev' ).click();
				}
				if ( e.keyCode === 40 ) {
					mySlider.trigger( 'mouseout' );
				}
			} else {
				if ( e.keyCode === 38 ) {
					$( '#open-slider' ).trigger( 'mouseover' );
				}
			}
			
			// Any key makes focus in go module mode on start
			if ( goProcess ) {
				if ( $( '#goboxinput' ).val() == App ) {
					$( '#goboxinput' ).focus();
				}
			}
			
		} )
		.on( 'change', '.forfreecheck', function () {
			var myCatBox    = $( this ).closest( '.catbox' );
			var myUnitPrice = myCatBox.find( '.unitprice' );
			
			if ( $( this ).prop( 'checked' ) ) {
				myCatBox.find( '.close-discount' ).click();
				myCatBox.find( '.discounticon' ).addClass( 'notdisplayed' );
			} else {
				myCatBox.find( '.discounticon' ).removeClass( 'notdisplayed' );
			}
			myUnitPrice.blur();
		} )
		
		.on( 'change', '.specialCalcCheck', function () {
			var myCatBox = $( this ).closest( '.catbox' );
			myCatBox.find( '.unitprice' ).blur();
		} )
		// Disallow non-numeric values (except spaces)
		.on( 'keydown', '.numberOnly', function ( e ) {
			// Allow: backspace, delete, tab, escape, enter (and . => add '110')
			if ( $.inArray( e.keyCode, [46, 8, 9, 27, 13, 110] ) !== -1 ||
			     // Allow: Ctrl+A, Command+A
			     (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
			     // Allow: home, end, left, right, down, up
			     (e.keyCode >= 35 && e.keyCode <= 40) ) {
				// let it happen, don't do anything
				return;
			}
			// Ensure that it's a number and stop keypress
			if ( (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) ) {
				e.preventDefault();
			}
		} )
		.on( 'click', '.modal-eraser', function () {
			$( this ).flash();
			$( this ).closest( '.modal' )
				.find( 'input' ).val( N ).end()
				.find( 'select' ).val( 'blank' );
			fileStatusUpdate();
		} )
		.on( 'click', '.monthsforbox', function () {
			$( '#calendar' ).click()
		} )
		.on( 'change', 'select', function () {
			fileStatusUpdate();
		} );
	
	$( '#sound' ).on( 'click', function () {
		Optionsound = (Optionsound == 'true') ? 'false' : 'true';
		if ( Optionsound === 'true' ) {
			playSound( 'soundon' );
		}
		updateOptions();
	} );
	
}

function detectCrossOriginFailure() {
	
	var canvas = document.createElement( 'canvas' ),
	    ctx    = canvas.getContext( '2d' ),
	    img    = new Image();
	img.src    = imgFolder + SL + 'less.png';
	img.onload = function () {
		canvas.width  = 10;
		canvas.height = 10;
		ctx.drawImage( this, 0, 0 );
		$( 'body' ).data( 'cors-Img-OK', false );
		canvas.toDataURL();
		$( 'body' ).data( 'cors-Img-OK', true );
	};
	
}

function ajaxCORS() {
	
	$.ajaxPrefilter( function ( options ) {
		if ( options.crossDomain ) {
			options.url = (window.location.protocol === 'http:' ? 'http:' : 'https:') + '//cors-anywhere.herokuapp.com/' + options.url;
		}
	} );
	
}

function emptySheet() {
	
	var textEst = N;
	$( '#contact' ).children().slice( 4 ).not( '.noinputvalue' ).each( function () {
		textEst += $( this ).val();
	} );
	textEst += ($( '#distribremarks' ).children().not( '.noinputvalue' ).val() || N);
	$( '#databox-subcont2' ).find( 'input' ).each( function () {
		textEst += $( this ).val();
	} );
	textEst += ($( '.catbox', '#categories' ).length || N);
	
	return (textEst === N);
	
}

function createmodalLTSurf() {
	
	var htmlX = N;
	
	// Create HTML
	htmlX += '<div class="modalLT-inputline"><div class="modalLT-label"/><input type="text" class="lactodiam1 modalLT-input modalLT-input-numb adjust" placeholder="mm"/><div class="modalLT-input-unit">Ø&nbsp;&nbsp;</div><input type="text" class="lactolength1 modalLT-input modalLT-input-numb adjust" placeholder="L"/><div class="modalLT-input-spacer">m&nbsp;&nbsp;x</div><input type="text" class="modalLT-input modalLT-input-circ modalLT-input-calc" disabled/><div class="modalLT-input-spacer">=</div><input type="text" class="modalLT-input modalLT-input-result modalLT-input-calc" disabled/><div class="modalLT-input-unit">m²</div>' + ED;
	htmlX += '<div class="modalLT-inputline"><div class="modalLT-label"/><input type="text" class="lactodiam2 modalLT-input modalLT-input-numb adjust" placeholder="mm"/><div class="modalLT-input-unit">Ø&nbsp;&nbsp;</div><input type="text" class="lactolength2 modalLT-input modalLT-input-numb adjust" placeholder="L"/><div class="modalLT-input-spacer">m&nbsp;&nbsp;x</div><input type="text" class="modalLT-input modalLT-input-circ modalLT-input-calc" disabled/><div class="modalLT-input-spacer">=</div><input type="text" class="modalLT-input modalLT-input-result modalLT-input-calc" disabled/><div class="modalLT-input-unit">m²</div>' + ED;
	htmlX += '<div class="modalLT-inputline"><div class="modalLT-label"/><input type="text" class="modalLT-input noopacity"/><div class="modalLT-input-spacer"/><input type="text" class="clust modalLT-input modalLT-input-numb" disabled/><div class="modalLT-input-spacer">&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;</div><input type="text" value="0.20" disabled class="modalLT-input modalLT-input-surf"/><div class="modalLT-input-spacer">=</div><input type="text" class="modalLT-input modalLT-input-result modalLT-input-calc" disabled/><div class="modalLT-input-unit">m²</div>' + ED;
	htmlX += '<div class="modalLT-inputline"><div class="modalLT-label"/><input type="text" class="modalLT-input noopacity"/><div class="modalLT-input-spacer"/><input type="text" class="lactomeas modalLT-input modalLT-input-numb adjust"/><div class="modalLT-input-spacer">&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;</div><input type="text" value="0.50" disabled class="modalLT-input modalLT-input-surf"/><div class="modalLT-input-spacer">=</div><input type="text" class="modalLT-input modalLT-input-result modalLT-input-calc" disabled/><div class="modalLT-input-unit">m²</div>' + ED;
	htmlX += '<div class="modalLT-inputline"><div class="modalLT-label"/><input type="text" class="modalLT-input noopacity"/><div class="modalLT-input-spacer noopacity"/><input type="text" class="modalLT-input modalLT-input-numb noopacity"/><div class="modalLT-input-spacer noopacity">m&nbsp;&nbsp;x</div><input type="text" placeholder="m²" class="modalLT-input modalLT-input-surf noopacity"/><div class="modalLT-input-spacer"/><input type="text" value="1" class="modalLT-input modalLT-input-result" disabled/><div class="modalLT-input-unit">m²</div>' + ED;
	htmlX += clearBoth;
	
	$( '#modalLT-inputcont' )
		.append( htmlX )
		.after( '<div id="modalLT-total-cont" class="modalLT-wait noopacity"><div id="modalLT-infocalc">&nbsp;</div></div>' + clearBoth );
	
	// Init events
	$( '#modalLT' ).find( '.modalLT-button' ).on( 'click', function ( e ) {
		var myButton = $( e.target ).attr( 'id' ).replace( 'modalLT-', N );
		switch ( myButton ) {
			case 'reset': {
				$( '#modalLT' ).find( '.adjust' ).fadeOut( 300, function () {
					resetmodalLT( $( this ) );
					$( this ).fadeIn( 300 );
				} );
				break;
			}
			case 'OK': {
				hideModal( myButton );
				break;
			}
		}
		
	} );
	// Fix tabindex behaviour
	$( '#modalLT' ).find( '.adjust' ).each( function ( index ) {
		$( this ).attr( 'tabindex', index + 2000 );
	} );
	
}

function volumeSum() {
	
	var totalSurf   = 0, totalVol,
	    diam, len, circ, surf, numb,
	    modalLTWait = $( '#modalLT' ).find( '.modalLT-wait' );
	
	// Update clusters number
	$( '#modalLT' ).find( '.clust' ).val( dataClusters );
	
	// Line calcs
	$( '#modalLT' ).find( '.modalLT-inputline' ).each( function ( index ) {
		var theInputs = $( this ).find( 'input' );
		// Reset calc inputs
		theInputs.filter( '.modalLT-input-calc' ).val( N );
		if ( index < 2 ) {
			diam = parseFloat( theInputs.eq( 0 ).val() || 0 );
			len  = parseFloat( theInputs.eq( 1 ).val() || 0 );
			circ = diam * Math.PI / 1000;
			surf = len * circ;
			if ( circ ) {
				theInputs.filter( '.modalLT-input-circ' ).val( circ.toFixed( 2 ) );
			}
			if ( surf ) {
				theInputs.filter( '.modalLT-input-result' ).val( surf.toFixed( 1 ) );
			}
		} else if ( index < 4 && index > 1 ) {
			numb = parseFloat( theInputs.eq( 1 ).val() || 0 );
			surf = numb * theInputs.eq( 2 ).val();
			if ( surf ) {
				theInputs.filter( '.modalLT-input-result' ).val( surf.toFixed( 1 ) );
			}
		}
	} );
	
	// Final volume
	$( '#modalLT' ).find( '.modalLT-input-result' ).each( function () {
		var result = $( this ).val();
		if ( result.length ) {
			totalSurf += result * 1;
		} else {
			totalSurf = 0;
			return false;
		}
	} );
	
	// Refresh or hide total info
	if ( totalSurf ) {
		totalVol = Math.round( totalSurf * 7.5 );
		$( '#modalLT-infocalc' ).data( 'totalVol', totalVol )
			.html( $( '#modalLT-infocalc' ).attr( 'data-text' ).replace( '&IT', totalSurf.toFixed( 1 ) ).replace( '&JT', totalVol ) );
		if ( modalLTWait.hasClass( 'noopacity' ) ) {
			modalLTWait.hide().removeClass( 'noopacity' ).fadeIn( 200 );
		}
	} else {
		modalLTWait.fadeOut( 200, function () {
			$( this ).addClass( 'noopacity' ).show();
		} );
	}
	
}

function resetmodalLT( target ) {
	
	target = target || $( '#modalLT' ).find( '.adjust' );
	target.val( N ).eq( 0 ).blur();
	$( '#modalLT-infocalc' ).data( 'totalVol', 0 );
	
}

function resetmodalVF() {
	
	$( '#modal-container' ).find( '.modal' ).find( 'input' ).val( N );
	$( '#modal-container' ).find( '.modal' ).find( 'select' ).val( 'blank' );
	fileStatusUpdate();
	
}

function showmodal( target, special ) {
	
	special = special || N;
	
	var targetColor = target.closest( '.catbox' ).css( 'color' ),
	    modalName   = target.attr( 'class' ),
	    modal       = $( '.modal' + DH + modalName + special );
	
	switch ( modalName ) {
		case 'lactoduc': {
			// Init
			volumeSum(); // (clusters impact on vol)
			modal.find( '.modalLT-label, .modalLT-input-spacer, .modalLT-input-unit' ).addBack().css( 'background', targetColor ) // Copy colors
				.find( '.modalLT-button' ).add( $( '#modalLT-title' ) ).css( 'color', targetColor );
			break;
		}
		case 'hoovesProtocol': {
			modal.find( 'img' ).attr( 'src', imgFolder + SL + 'hooves-protocol' + DH + language + '.png' );
			break;
		}
		case 'valorDetail': {
			modal.find( '.tableCell' ).css( 'background', targetColor );
			modal.find( '.modalnote' ).css( 'color', targetColor );
			modal.find( '.cut' ).css( 'background', '#444444' );
			modal.find( '.modal-eraser' ).attr( 'data-title', eraserText[ lang ] );
			modal.find( '.modal-undo' ).attr( 'data-title', $( '#undo' ).attr( 'data-title' ) );
			modal.find( '.modal-redo' ).attr( 'data-title', $( '#redo' ).attr( 'data-title' ) );
			unredoEnable();
			$( '#modalVF' + special + '-title' )
				.css( 'color', targetColor )
				.text( target.closest( '.catbox' ).find( '.imgbox' )[ 0 ].alt + SP + CL + SP + modalVFText[ lang + (special - 1) * langScope ] );
			break;
		}
	}
	
	// Gather all position/size info (need to briefly show the modalLT)
	$( '#modal-container' ).fadeIn( 200 ).data( 'target', target );
	
	var to   = target.offset(),
	    ty   = to.top,
	    mh   = modal.outerHeight(),
	    newy = ty - mh - $( document ).scrollTop() - 4;
	
	// Keep the modal visible
	newy = Math.max( newy, 4 );
	
	modal.css( {
			top:     newy + 20,
			opacity: 0
		} )
		.delay( 50 ).animate( {
		top:     newy,
		opacity: 1
	}, 200 );
	
	$( PO + $( '#modal-container' ).data( 'target' ).attr( 'class' ).split( SP )[ 0 ] ).addClass( 'triangledown' );
	
	hideSearch();
	hideRightMenu( 1 );
	hideTopWarning();
	
	disableMouseWheel();
	
}

function hideModal( myButton ) {
	
	// The button object stored
	var modalTarget = $( '#modal-container' ).data( 'target' ),
	    modalName   = modalTarget.attr( 'class' ).split( SP )[ 0 ];
	
	switch ( modalName ) {
		case 'lactoduc': {
			// Validate data (only when volume has changed)
			if ( myButton === 'OK' ) {
				// Recalculate product qties for all boxes
				// We refer to cat as one or several products involved
				modalTarget.closest( '.cat' ).find( '.subconsforcalc' ).blur();
			}
			break;
		}
		case 'valorDetail': {
			modalTarget.closest( '.catbox' ).find( '.subconsforcalc' ).val( 0 ).blur();
			break;
		}
		case 'hoovesProtocol': {
			modalTarget.closest( '.catbox' ).find( '.subconsforcalc' ).val( 0 ).blur();
		}
	}
	
	$( PO + modalTarget.attr( 'class' ).split( SP )[ 0 ] ).removeClass( 'triangledown' );
	
	$( '#modal-container' ).fadeOut( function () {
		$( '.modal' ).css( {
			opacity: 0,
			top:     -9999
		} );
		enableMouseWheel();
	} );
	
}

function modalLTEventInit() {
	
	$( '#modal-container' ).on( 'click', function ( e ) {
		// Click out of the modalLT form -> quit
		if ( e.target.id === this.id ) {
			hideModal();
		}
	} );
	
}

function diagnosticInit() {
	
	$( document ).on( 'click', '#diagnostic', function () {
		diagnostic();
	} );
	
}

function closeDiagnostic() {
	
	$( '#diagnostic-container' ).fadeOut( function () {
		enableMouseWheel();
		$( '#diagnostic-boxcontainer' ).children().remove();
		$( '#close-diagnostic' ).off();
		$( '#radial-bar' ).removeClass( 'radial-bar-ended' ).hide();
		$( '.end-diag, #close-diagnostic, #conclusion-diagnostic' ).hide().off();
		
		// Reset radial & file load type
		showProgress( 0, 0 );
		$( '#fileToLoad' ).attr( 'accept', fileExt );
		
		diagProcess = false;
	} );
	
}

function diagnostic() {
	
	diagProcess = true;
	
	if ( historyProcess ) {
		closeHistory();
	}
	if ( FSOptionsProcess ) {
		closeFullScreenOptions();
	}
	if ( setPricesProcess ) {
		closeSetPrices();
	}
	if ( mosaicProdProcess ) {
		closeMosaic();
	}
	
	hideRightMenu( 1 );
	hideTopWarning();
	
	$( '#diagnostic-boxcontainer' ).hide();
	findDistribLogoSrc();
	
	$( '#diagnostic-container' ).fadeIn( function () {
		
		checkPostDate();
		if ( !$( '.priceBox' ).length ) {
			createPriceList();
		}
		setPrices();
		
		setTimeout( function () {
			setPricesProcess = false;
		}, 300 );
		disableMouseWheel();
		
		showProgress( 0, diagEngine() );
		
		setTimeout( function () {
			
			$( '#close-diagnostic' ).show().on( 'click', function () {
				closeDiagnostic();
			} );
			$( '.diagfix, .diagDL' ).off().on( 'click', function () {
				if ( $( this ).hasClass( 'diagfix' ) ) {
					diagFix( $( this ) );
				} else {
					diagDL( $( this ) );
				}
			} );
			$( '#fixall-diagnostic' ).on( 'click', function () {
				$( '.diagfix' ).data( 'target', 'all' ).click();
			} );
			$( '#restart-diagnostic' ).on( 'click', function () {
				
				if ( $( this ).hasClass( 'running' ) ) {
					return;
				}
				$( '#conclusion-diagnostic' ).hide();
				$radial.addClass( 'running' );
				$( '#diagnostic-boxcontainer' ).hide().children().remove();
				findDistribLogoSrc();
				$( '#diagnostic-container' ).find( '.end-diag' ).addClass( 'running' );
				setTimeout( function () {
					$radial.removeClass( 'running' );
					showProgress( $( '#js-radial-percentvalue' ).text() * 1, diagEngine() );
					$( '.diagfix, .diagDL' ).off().on( 'click', function () {
						if ( $( this ).hasClass( 'diagfix' ) ) {
							diagFix( $( this ) );
						} else {
							diagDL( $( this ) );
						}
					} );
					$( '#diagnostic-boxcontainer' ).fadeIn( 250 );
				}, 500 );
				
			} );
			
			// Show diag results
			$( '#diagnostic-boxcontainer' )
				.slideDown( 200 ).parent()
				.find( '.end-diag' ).show();
			$( '#radial-bar' ).addClass( 'radial-bar-ended' );
			
		}, 3000 );
		
	} );
	
}

function diagEngine( action ) {
	
	var diagtopicicon,
	    diagexplain,
	    fix,
	    DL;
	
	diagStatus = 'O';
	action     = action || N;
	
	// Version test //
	// diagtopicicon=diagtopicText[0].split(CO)[lang]+LI+'ec';
	// if (Ic=='X' || !mostRecentVersion) {diagStatus='U';diagexplain=diagexplainText[0].split(CO)[lang];} else {
	// 	DL=false;
	// 	if (ether<=0) {diagStatus='O';} else {
	// 		if (ether>0) {diagStatus='W';diagexplain=diagexplainText[1].split(CO)[lang]+CL+NBSP+mostRecentVersion;}
	// 		if (ether>60) {diagStatus='D';diagexplain=diagexplainText[2].split(CO)[lang]+CL+NBSP+mostRecentVersion;}
	// 		// Allow download only if KERSIA
	// 		if (productRangeDB=='0') {diagStatus+=LI+'D';DL=true;}
	// 	}
	
	// }
	// addDiagStep(diagtopicicon,diagexplain,null,null,DL,'DL-newversion');
	
	// Browser //
	diagtopicicon = diagtopicText[ 1 ].split( CO )[ lang ] + LI + 'browser';
	if ( myBrowser == 'Safari' ) {
		diagStatus  = 'D';
		diagexplain = diagexplainText[ 3 ].split( CO )[ lang ];
	}
	addDiagStep( diagtopicicon, diagexplain );
	
	// Browser zoom //
	diagtopicicon = diagtopicText[ 2 ].split( CO )[ lang ] + LI + 'browser';
	dz            = 1.0;
	if ( isApp ) {
		dz = (Math.round( ((window.outerWidth) / window.innerWidth) * 100 ) / 100).toFixed( 2 );
	} else {
		dz = detectZoom.zoom().toFixed( 2 );
	}
	if ( dz > 1.04 ) {
		diagStatus  = 'W';
		diagexplain = diagexplainText[ 4 ].split( CO )[ lang ] + NBSP + '>100%';
	}
	if ( dz < 0.96 ) {
		diagStatus  = 'W';
		diagexplain = diagexplainText[ 5 ].split( CO )[ lang ] + NBSP + '<100%';
	}
	addDiagStep( diagtopicicon, diagexplain );
	
	// CORS for mail check //
	// diagtopicicon=diagtopicText[20].split(CO)[lang]+LI+'email';
	// if (!$('body').data('cors-dl-OK')) {diagStatus='W';diagexplain=diagexplainText[24].split(CO)[lang];}
	// addDiagStep(diagtopicicon,diagexplain);
	
	// Memorize options //
	diagtopicicon = diagtopicText[ 4 ].split( CO )[ lang ] + LI + 'memory';
	if ( Optionuser == 'false' || Optioncountry == 'false' || Optioncurrency == 'false' ) {
		diagStatus  = 'W';
		diagexplain = diagexplainText[ 7 ].split( CO )[ lang ];
	}
	addDiagStep( diagtopicicon, diagexplain, true, 'fix-memory' );
	
	// Removed 22-07-2019 (not wanted anymore by Kersia) + back 28-08-2019
	// Logo presence //
	diagtopicicon = diagtopicText[ 5 ].split( CO )[ lang ] + LI + 'logos';
	if ( $( '#warning-logo' ).css( 'display' ) == 'none' ) {
		diagexplain = diagexplainText[ 8 ].split( CO )[ lang ];
		fix         = false;
		if ( Optiondistriblogo == 'true' ) {
			diagStatus = 'W';
		} else {
			diagStatus = 'U';
		}
	}
	if ( $( '#warning-logo' ).css( 'display' ) != 'none' && Optiondistriblogo == 'false' ) {
		diagStatus  = 'W';
		diagexplain = diagexplainText[ 9 ].split( CO )[ lang ];
		fix         = true;
	}
	addDiagStep( diagtopicicon, diagexplain, fix, 'fix-logo' );
	
	// Check post date //
	diagtopicicon = diagtopicText[ 6 ].split( CO )[ lang ] + LI + 'day';
	if ( $( '.contactdate' ).hasClass( 'field-info' ) ) {
		diagStatus  = 'W';
		diagexplain = diagexplainText[ 10 ].split( CO )[ lang ];
	}
	addDiagStep( diagtopicicon, diagexplain, true, 'fix-currentdate' );
	
	// Mail/phone error //
	diagtopicicon = diagtopicText[ 7 ].split( CO )[ lang ] + LI + 'contact';
	if ( ($( '.phone.field-alert' ).length + $( '.mail.field-alert' ).length) ) {
		diagStatus  = 'W';
		diagexplain = diagexplainText[ 11 ].split( CO )[ lang ];
	}
	addDiagStep( diagtopicicon, diagexplain );
	
	// Pricelist uncomplete //
	diagtopicicon     = diagtopicText[ 8 ].split( CO )[ lang ] + LI + 'prices';
	var missingPrices = $( '#setPrices-subcontainer' ).data( 'warningNumb' );
	if ( missingPrices && Optionautoprice == 'true' ) {
		diagStatus  = 'W';
		diagexplain = diagexplainText[ 12 ].split( CO )[ lang ].replace( '&DT', missingPrices );
	}
	addDiagStep( diagtopicicon, diagexplain );
	
	// Missing prices //
	diagtopicicon = diagtopicText[ 9 ].split( CO )[ lang ] + LI + 'pen-small';
	if ( $( '.alertInput' ).length && action.indexOf( 'silent' ) < 0 ) {
		diagStatus  = 'D';
		diagexplain = diagexplainText[ 13 ].split( CO )[ lang ];
	}
	addDiagStep( diagtopicicon, diagexplain );
	
	// Load error //
	diagtopicicon = diagtopicText[ 11 ].split( CO )[ lang ] + LI + 'load-small';
	if ( loadError !== N && loadError != 'clear' ) {
		diagStatus  = 'D';
		diagexplain = diagexplainText[ 15 ].split( CO )[ lang ];
	}
	if ( loadError == 'unavailable' ) {
		diagStatus  = 'D';
		diagexplain = diagexplainText[ 16 ].split( CO )[ lang ];
	}
	addDiagStep( diagtopicicon, diagexplain );
	
	// Save error //
	diagtopicicon = diagtopicText[ 12 ].split( CO )[ lang ] + LI + 'save-small';
	if ( saveError && saveError != 'clear' ) {
		diagStatus  = 'W';
		diagexplain = diagexplainText[ 17 ].split( CO )[ lang ];
	}
	if ( saveError == 'unavailable' ) {
		diagStatus  = 'D';
		diagexplain = diagexplainText[ 16 ].split( CO )[ lang ];
	}
	addDiagStep( diagtopicicon, diagexplain );
	
	// No date in filename //
	diagtopicicon = diagtopicText[ 13 ].split( CO )[ lang ] + LI + 'save-small';
	if ( Optionfiledate == 'false' && Optionfilecontactdate == 'false' ) {
		diagStatus  = 'W';
		diagexplain = diagexplainText[ 18 ].split( CO )[ lang ];
	}
	addDiagStep( diagtopicicon, diagexplain, true, 'fix-filedate' );
	
	// Pricelist not saved //
	diagtopicicon = diagtopicText[ 19 ].split( CO )[ lang ] + LI + 'save-small';
	fix           = false;
	if ( priceSaveAlert > 0 && $( '#setPrices-subcontainer' ).data( 'warningNumb' ) != $( '#setPrices-subcontainer' ).find( '.setPriceWarning' ).length ) {
		diagStatus  = 'W';
		diagexplain = diagexplainText[ 19 ].split( CO )[ lang ];
		fix         = true;
	}
	addDiagStep( diagtopicicon, diagexplain, fix, 'fix-saveprices' );
	
	// Empty categories
	diagtopicicon = diagtopicText[ 14 ].split( CO )[ lang ] + LI + 'canister';
	if ( $( '#categories' ).data( 'emptycatnumbers' ) ) {
		diagStatus  = 'W';
		diagexplain = diagexplainText[ 20 ].split( CO )[ lang ];
	}
	addDiagStep( diagtopicicon, diagexplain );
	
	// Sort problems
	var diagCrit = 'OUWD';
	for ( var i = 0; i < diagCrit.length; i++ ) {
		$( PO + diagCrit.substr( i, 1 ) + '-diag' ).parent().each( function () {
			$( '#diagnostic-boxcontainer' ).prepend( $( this ) );
		} );
	}
	
	// End % calculation
	var diagDefault     = $( '.D-diag' ).length,
	    diagWarning     = $( '.W-diag' ).length,
	    diagUnavailable = $( '.U-diag' ).length,
	    diagFixall      = $( '.diagfix' ).length,
	    diagProblem     = diagWarning + diagDefault,
	    diagConclusion  = $( '#conclusion-diagnostic' ),
	    plur            = N;
	
	$( '#fixall-diagnostic' )
		.text( diagtopicText[ 16 + 5 * (diagFixall == 1) ].split( CO )[ lang ] )
		.css( 'margin-right', 9999 * !diagFixall );
	
	// Conclusion text
	if ( !diagProblem ) {
		if ( diagUnavailable ) {
			plur = '(' + diagexplainText[ 23 ].split( CO )[ lang ] + ') ';
		}
		diagConclusion.html( diagexplainText[ 21 ].split( CO )[ lang ].replace( '&DT', plur ) );
	} else {
		if ( diagProblem > 1 ) {
			plur = 's';
		}
		diagConclusion.html( diagexplainText[ 22 ].split( CO )[ lang ].replace( '&DT', diagProblem ).replace( new RegExp( '@', 'g' ), plur ) );
	}
	var diagPct = Math.round( 100 * Math.pow( 0.75, diagDefault ) * Math.pow( 0.95, diagWarning ) );
	
	if ( action.indexOf( 'silent' ) < 0 ) {
		recordHistory( diagConclusion.text() + SP + '(' + diagPct + '%)' );
	}
	
	return diagPct;
	
}

function addDiagStep( diagtopic, diagexplain, fix, whattofix, download, whattodownload ) {
	
	var htmlX,
	    status2  = diagStatus.split( LI )[ 1 ],
	    status   = diagStatus.split( LI )[ 0 ],
	    diagicon = diagtopic.split( LI )[ 1 ];
	
	diagtopic   = diagtopic.split( LI )[ 0 ];
	diagexplain = diagexplain || N;
	
	htmlX = '<div class="diagnostic-box" data-fix="' + whattofix + '" data-download="' + whattodownload + '"><div class="diagicon ' + status + '-diag"/>';
	htmlX += '<div class="diagtopic">' + diagtopic + '</div><div class="diagfix">' + diagtopicText[ 15 ].split( CO )[ lang ] + '</div><div class="diagDL">' + diagtopicText[ 18 ].split( CO )[ lang ] + ED;
	if ( status == 'O' ) {
		htmlX += '<div class="diagOK"/>';
	} else {
		htmlX += '<div class="diagExplain">' + diagexplain + ED;
	}
	htmlX += ED + clearBoth;
	$( '#diagnostic-boxcontainer' ).append( htmlX );
	
	// Assign the right icon to the diag line
	$( '.diagicon' ).last().css( 'backgroundImage', 'url(' + imgFolder + SL + diagicon + '.png)' );
	
	// Handle different cases O - OK | W - Warning | D - Default | U - Unavailable
	if ( status != 'O' ) {
		$( '.diagExplain' ).last().css( 'color', $( '.diagicon' ).last().css( 'backgroundColor' ) );
	}
	if ( status == 'U' || status == 'O' || !fix ) {
		$( '.diagfix' ).last().remove();
	}
	if ( status2 != 'D' ) {
		$( '.diagDL' ).last().remove();
	}
	
	diagStatus = 'O';
	
}

function diagFix( target ) {
	
	var whattofix = target.parent().attr( 'data-fix' );
	
	switch ( whattofix ) {
		case 'fix-memory':
			Optionuser     = 'true';
			Optioncountry  = 'true';
			Optioncurrency = 'true';
			break;
		case 'fix-logo':
			Optiondistriblogo = 'true';
			break;
		case 'fix-filedate':
			Optionfilecontactdate = 'true';
			updateFilename();
			loadSaveEnable();
			break;
		case 'fix-currentdate':
			resetDatePicker();
			break;
		case 'fix-saveprices':
			$( '#save-setPrices' ).click();
			break;
	}
	
	// Update options following fixes
	appendOptions();
	
	// Show results
	// Fix all => Restart diag only at the end
	if ( target.data( 'target' ) != 'all' || $( '.diagfix' ).index( target ) + 1 == $( '.diagfix' ).length ) {
		$( '#restart-diagnostic' ).click();
	}
	
}

function diagDL( target ) {
	
	var whattodownload = target.parent().attr( 'data-download' );
	
	// Update Easycalc
	if ( whattodownload == 'DL-newversion' ) {
		window.location.href = marginCurve.productD( 'aWG0nSfmA7UeOeYsbdCcALK2oWYsbdK0AdCmbH9cNMC3N7UjN7UeA0Ksn8cuNLxuFJnlpdcw' );
	}
	
}

function progressBar( percent ) {
	
	percent     = Math.round( percent );
	var calcdeg = 1.8 * percent;
	$( '#js-radial-mask, .js-radial-fill' ).css( 'transform', 'rotate(' + calcdeg + 'deg)' );
	$( '.js-radial-fill_fix' ).css( 'transform', 'rotate(' + calcdeg * 2 + 'deg)' );
	$( '#js-radial-percentvalue' ).text( percent );
	
}

function showProgress( start, end ) {
	
	$radial = $( '.radial-bar__fill' );
	$( '#radial-bar' ).fadeIn( 200 );
	
	var i         = start,
	    inc       = (end - i) && (end - i) / Math.abs( end - i ),
	    intProg   = 2000 / end,
	    timerProg = setInterval( function () {
		    if ( (Math.round( i - start ) / Math.round( end - start )) > 0.70 ) {
			    inc *= 0.97;
		    }
		    i += inc;
		    progressBar( i );
		    colorProgressBar( $radial, i );
		    if ( (inc > 0 && i >= end) || (inc < 0 && i <= end) || !inc || i == end ) {
			    progressBar( end );
			    clearInterval( timerProg );
			    if ( diagProcess ) {
				    $( '#diagnostic-container' )
					    .find( '.end-diag' )
					    .removeClass( 'running' );
				    $( '#conclusion-diagnostic' ).fadeIn().css( 'color', $radial.css( 'backgroundColor' ) );
			    }
		    }
	    }, intProg );
	
}

function midColor( color1, color2, ratio ) {
	
	var r1     = hexToRgb( color1 ).split( CO )[ 0 ],
	    r2     = hexToRgb( color2 ).split( CO )[ 0 ],
	    g1     = hexToRgb( color1 ).split( CO )[ 1 ],
	    g2     = hexToRgb( color2 ).split( CO )[ 1 ],
	    b1     = hexToRgb( color1 ).split( CO )[ 2 ],
	    b2     = hexToRgb( color2 ).split( CO )[ 2 ],
	    rFinal = Math.round( r1 * (1 - ratio) + r2 * (ratio) ),
	    gFinal = Math.round( g1 * (1 - ratio) + g2 * (ratio) ),
	    bFinal = Math.round( b1 * (1 - ratio) + b2 * (ratio) );
	
	return rgbToHex( rFinal, gFinal, bFinal );
	
}

function colorProgressBar( target, percent, low, mid, full ) {
	
	low  = low || '#E70000';
	mid  = mid || '#E8BD13';
	full = full || '#A7D100';
	var finalColor;
	
	if ( percent > 50 ) {
		finalColor = midColor( full, mid, (100 - percent) / 50 );
	} else {
		finalColor = midColor( mid, low, (50 - percent) / 50 );
	}
	
	target.css( 'background', finalColor );
	
}

function componentToHex( c ) {
	var hex = c.toString( 16 );
	return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex( r, g, b ) {
	return HA + componentToHex( r ) + componentToHex( g ) + componentToHex( b );
}

function hexToRgb( hex ) {
	hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );
	return parseInt( hex[ 1 ], 16 ) + CO + parseInt( hex[ 2 ], 16 ) + CO + parseInt( hex[ 3 ], 16 );
}

function testVersion() {
	
	var endVersion = '2018,09,28', // End date for use (included)
	    endDays;
	
	endDays = Math.ceil( (new Date( endVersion ) - Date.now()) / 1000 / 3600 / 24 ) >= 0 || (version.toUpperCase().indexOf( 'TEST' )) < 0;
	
	return endDays;
	
}

function convertVe( Ve ) {
	
	Ve = Ve.split( DH )[ 0 ];
	Ve = Ve.replace( /\./g, N ).replace( /\ /g, N );
	Ve = parseInt( Ve );
	return Ve;
	
}

function addPreview() {
	
	var loaderSpeed = 500;
	
	html2canvas( $( '#info' ), {
		scale:       0.6,
		allowTaint:  false,
		taintTest:   false,
		whenCreated: function ( canvas ) {
			$( '.preview' ).eq( sessionIndex ).empty().append( canvas );
		}
	} );
	
	// Show preview create indicator
	if ( Optiontooltips == 'true' ) {
		$( '#fileTab-maincontainer' ).find( '.previewCreate' ).eq( sessionIndex ).stop( 1, 1 ).animate( {
				height: 14
			}, loaderSpeed )
			.animate( {
				opacity: 0
			}, loaderSpeed * 3 / 5, function () {
				$( this ).css( {
					height:  0,
					opacity: 1
				} );
			} );
	}
	
}

function compileDataInfo() {
	
	infoData[ sessionIndex ] = dataAnimals + AS + dataClusters + AS + dataRobots + AS + dataTank + AS;
	$( '#contact, #distribremarks' ).children().each( function () {
		infoData[ sessionIndex ] += $( this ).val() + AS + $( this ).text();
	} );
	
}

function updatePreviewInit() {
	
	timer19 = setInterval( function () {
		
		// Do not do anything if user is currently writing content
		if ( $( '#contact, #distribremarks' ).children().is( ':focus' ) ) {
			return;
		}
		
		compileDataInfo();
		
		if ( animalMenuProcess || changeDataProcess || addFileProcess || loadProcess || loadEnded !== null || unredoProcess || flagProcess || infoData[ sessionIndex ] == oldInfoData[ sessionIndex ] ) {
			return;
		}
		
		// Record current data for future comparison
		oldInfoData[ sessionIndex ] = infoData[ sessionIndex ];
		
		addPreview();
		
	}, 1000 );
	
}

function goModuleInit() {
	
	// Only 3 subsequent clicks trigger goModule()
	$( '#logo' ).on( 'click', function () {
		if ( timer18 !== null ) {
			clickTimes++;
			clearTimeout( timer18 );
			timer18 = null;
		}
		if ( timer18 === null ) {
			timer18 = setTimeout( function () {
				clickTimes = 0;
			}, 500 );
		}
		if ( clickTimes == 3 ) {
			clearTimeout( timer18 );
			goModule();
		}
	} );
	
}

function goModule() {
	
	goProcess = true;
	
	hideRightMenu( 1 );
	hideTopWarning();
	
	if ( timerChronos > 0 ) {
		timerChronos = 0;
	}
	
	// Memorize scroll position
	currentScroll = $( document ).scrollTop();
	
	// Hide backtotop
	$( '#backtotop' ).css( 'visibility', 'hidden' );
	
	// Access menu colour management
	if ( goSpecial ) {
		$( '#go-subcontainer' ).addClass( goSpecial );
	}
	
	$( '#go-container' ).fadeIn();
	$( '#go-subcontainer' ).fadeIn( function () {
		disableMouseWheel();
		if ( !$( '.priceBox' ).length ) {
			createPriceList();
		}
	} );
	if ( clickTimes || goSpecial ) {
		$( '#go-out' ).show();
		$( '#go-boxcontainer #flagbox' ).hide();
	} else {
		$( '#flagbox' ).insertAfter( '#goboxinput' );
	}
	
}

function goInputInit() {
	
	var gotarget,
	    currVal;
	
	// For admin save feature
	detectCrossOriginFailure();
	
	$( '#goboxcheck' ).on( 'click', function () {
		
		// Use currVal to position cursor at the end (trick: http://stackoverflow.com/a/2345915)
		currVal = $( '#goboxinput' ).val();
		if ( $( this ).text() ) {
			$( this ).empty();
			$( '#goboxinput' ).attr( 'type', 'password' );
		} else {
			$( this ).text( '✓' );
			$( '#goboxinput' ).attr( 'type', 'text' );
			if ( $( '#goboxinput' ).val() == App ) {
				currVal = N;
			}
		}
		$( '#goboxinput' ).focus().val( N ).val( currVal );
	} );
	$( '#goboxinput' ).on( 'keypress', function ( e ) {
			
			if ( e.which == 13 && $( this ).val() ) {
				
				// Show/hide console = *c
				if ( !goSpecial && $( this ).val().replace( / /g, N ) == AS + marginCurve.productD( 'Nw==' ) ) {
					validAdmin();
					if ( showConsole != 'true' ) {
						showConsole = 'true';
					} else {
						showConsole = 'false';
					}
					setTimeout( function () {
						$( '#go-out' ).click();
						consoleOnOff();
					}, 500 );
					return;
				}
				
				// Reset and back to range 0: PWD = *reset
				if ( !goSpecial && $( this ).val().replace( / /g, N ) == AS + marginCurve.productD( 'ndKzOMF=' ) ) {
					validAdmin();
					setTimeout( function () {
						$( '#go-out' ).click();
						setTimeout( function () {
							resetApp( 0 );
						}, 500 );
					}, 500 );
					return;
				}
				
				// Reset and ask for range: PWD = *full reset
				if ( !goSpecial && $( this ).val().replace( / /g, N ) == AS + marginCurve.productD( 'OeKjbWYcn7K0' ) ) {
					validAdmin();
					setTimeout( function () {
						$( '#go-out' ).click();
						setTimeout( function () {
							resetApp( 1 );
						}, 500 );
					}, 500 );
					return;
				}
				
				// Save product images file: PWD = *create image file
				if ( !goSpecial && $( this ).val().replace( / /g, N ) == AS + marginCurve.productD( 'N8YcNMGcaL1sO7KdaLxc' ) ) {
					validAdmin();
					setTimeout( function () {
						$( '#go-out' ).click();
					}, 4000 );
					saveProductImgDB();
					return;
				}
				
				// Check if valid range password
				gotarget = validateGo( marginCurve.productE( $( this ).val() ) );
				
				// Do not validate other codes if in special mode (i.e. pricelist)
				if ( gotarget === false || (goSpecial && gotarget != productRangeDB) ) {
					
					$( this ).val( N );
					$( '#goboxinfo' ).fadeIn();
					// Shaking the box
					$( this ).ShakeIt( 15, 900, 6 );
					
				} else {
					
					// Case price list
					if ( goSpecial == 'priceList' ) {
						
						$( '#goboxinput' ).addClass( 'goboxValid' );
						$( '#go-subcontainer' ).animate( {
								height: $( window ).height(),
								top:    0
							}, 300, function () {
								setPrices();
								hideGoContainer();
							} )
							.children().css( 'visibility', 'hidden' );
						
						return;
					}
					
					// Case range change
					var firstlaunch;
					if ( Optionproductrange === undefined ) {
						firstlaunch = true;
					}
					Optionproductrange = gotarget;
					saveData( 'Optionproductrange', Optionproductrange );
					$( '#goboxinput' ).addClass( 'goboxValid' );
					
					$( '#go-subcontainer' ).fadeOut( function () {
						
						// Do not reload if already the right DB
						if ( gotarget == productRangeDB || goSpecial == 'priceList' ) {
							hideGoContainer();
							// No changes warning only in manual mode
							if ( clickTimes ) {
								showTopWarning( 19, null, 2100, null, 400 );
							}
						} else {
							location.reload();
						}
						animalMenu();
						
					} );
					
				}
				
			}
			
		} )
		.on( 'focus', function () {
			if ( $( this ).val() == App ) {
				$( this ).val( N ).focus();
			}
		} );
	$( '#go-out' ).on( 'click', function () {
		$( '#goboxinfo' ).hide();
		$( '#go-subcontainer' ).fadeOut( function () {
			hideGoContainer();
		} );
		
	} );
	
}

function validAdmin() {
	
	$( '#goboxinput' ).addClass( 'goboxValid' );
	
}

function hideGoContainer() {
	
	enableMouseWheel();
	goProcess = false;
	goSpecial = false;
	
	$( '#backtotop' ).css( 'visibility', 'visible' );
	
	// Removing caps lock message
	$( '#goboxinfo' ).hide();
	
	// Removing special bkg coloring
	$( '#go-subcontainer' ).removeClass( 'priceList' )
		.css( {
			height: 260,
			top:    '32%'
		} )
		.children().css( 'visibility', 'visible' );
	
	$( '#flagbox' ).insertAfter( '#logo' );
	
	$( '#go-container' ).fadeOut( function () {
		
		$( '#go-subcontainer' ).hide();
		$( '#goboxinput' ).val( $( '#goboxinput' ).attr( 'value' ) );
		if ( $( '#goboxcheck' ).text() ) {
			$( '#goboxcheck' ).click();
		}
		if ( !clickTimes ) {
			sayHello();
		}
		clickTimes = 0;
		$( '#go-out' ).hide();
		$( '#goboxinput' ).removeClass( 'goboxValid' );
		
	} );
	
}

function validateGo( govalue ) {
	
	for ( var i = 0; i < customRange.length; i++ ) {
		if ( govalue == customRange[ i ][ 0 ] ) {
			return i;
		}
	}
	return false;
	
}

function createPriceList() {
	
	var htmlX = N,
	    packaging,
	    packUnit;
	
	for ( var i = 0; i < prodText.length; i += prodText.length / prodDataNumb ) {
		
		// Create each box
		
		if ( prodText[ i ] != hideProduct && prodText[ i + 14 ] != 'NAP' && prodText[ i + 12 ] != 'old' ) {
			
			htmlX += '<div class="priceBox fasttransition">';
			htmlX += '<img class="priceBox-img lightboxenabled tooltipelement" src="' + imgFolder + SL + prodText[ i + 6 ] + '" data-title="' + prodText[ i + 7 ] + '" alt="' + prodText[ i ] + '">';
			htmlX += '<div class="priceBox-name">' + prodText[ i ] + ED;
			
			// Add packaging
			htmlX += '<div class="setPricesPackaging-container">';
			packaging = prodText[ i + 8 ].split( CO );
			packUnit  = prodText[ i + 4 ].split( CO )[ lang ].replace( AS, N );
			
			for ( var j = 0; j < packaging.length; j++ ) {
				if ( packaging.length == 1 && packaging[ j ] == 1 ) {
					packagingText = specialWindowsText[ lang + 2 * langScope ];
					packagingUnit = SP + 'unit-packaging';
				} else {
					packagingText = packaging[ j ] + SP + packUnit;
					packagingUnit = N;
				}
				htmlX += '<div class="setPricesPackaging-subcontainer"><div class="setPricesPackaging' + packagingUnit + '">' + packagingText + '</div><input class="setPriceValue"><div class="setPriceWarning fasttransition"/></div>';
			}
			htmlX += '</div></div>';
			
		}
		
	}
	
	$( '#setPrices-subcontainer' ).append( htmlX )
		.parent()
		.show()
		.find( '.setPriceValue' ).each( function () {
		$( this ).css( 'width', $( this ).prev().outerWidth() ); // Adjust input widths
	} );
	warningPriceList(); // Fist time: clear is shown/not shown
	$( '#setPrices-container' ).hide();
	
}

function setPrices() {
	
	setPricesProcess = true;
	currentScroll    = $( document ).scrollTop();
	
	$( '#fileToLoad' ).attr( 'accept', priceFileExt );
	
	// Reset existing prices
	$( '#setPrices-subcontainer' ).find( '.setPriceValue' ).val( N );
	
	if ( !diagProcess ) {
		$( '#gotobottom' ).addClass( 'gotobottomprices' );
		scrollWindow( 1, 1 )
		priceSaveAlert = 0;
		$( '#main-container' ).hide();
		
		// Relocate top warning/Black load info mask
		$( '#top-warning' ).add( $( '#UIcontainer' ) )
			.insertBefore( $( '#setPrices-subcontainer' ) )
			.css( 'position', 'fixed' );
	}
	
	priceInputInit();
	
	// Fill every price field
	scanPriceFile();
	warningYear();
	
	warningPriceList();
	
	if ( !diagProcess ) {
		
		sortPriceList();
		// Back to top
		scrollWindow( 1, 1 );
		$( '#setPrices-container' ).show();
		$( '#setPrices-mask' )
			.fadeOut( 300, function () {
				$( '#setPrices-widget' ).css( 'right', 0 );
			} );
		
		// Start events
		priceEventsInit();
		
	}
	
}

function closeSetPrices() {
	
	$( '#setPrices-container' ).fadeOut( 200, function () {
		
		setPricesProcess = false;
		
		hideTopWarning( 1 );
		
		$( '#setPrices-mask' ).show();
		$( '#setPrices-widget' ).css( 'right', -60 );
		// Unbind all events
		$( '#setPrices-subcontainer' )
			.find( '.setPriceValue' )
			.add( '#close-setPrices, #sort-setPrices, #setPricesYear, #clear-setPrices' ).off();
		
		// Reposition special elements
		$( '#top-warning' ).insertBefore( $( '#topmenu' ) ).css( 'position', 'relative' );
		$( '#UIcontainer' ).insertBefore( $( '#navbar' ) );
		
		$( '#main-container' ).fadeIn( 600 );
		$( '#gotobottom' ).removeClass( 'gotobottomprices' );
		
		$( '#fileToLoad' ).attr( 'accept', fileExt );
		
		setTimeout( function () {
			scrollWindow( currentScroll, 1 );
		}, 10 );
		
	} );
	
}

function showConfirm( msg ) {
	if ( isApp ) {
		//handle with electron
		var options = { type: 'question', title: 'Confirm', message: msg, buttons: ['Cancel', 'Ok'] };
		return dialog.showMessageBox( remote.getCurrentWindow(), options );
	} else {
		return confirm( msg );
	}
}

function priceEventsInit() {
	
	$( '#clear-setPrices' ).on( 'click', function () {
		if ( showConfirm( dialogText[ 2 ].split( CO )[ lang ] ) ) {
			
			// Reset timer for save warning
			priceSaveAlert = 0;
			
			$( '#setPrices-subcontainer' ).find( '.setPriceValue' )
				.fadeOut( function () {
					$( this ).val( N ).fadeIn();
				} );
			
			setTimeout( function () {
				$( '#setPricesYear' ).val( N ).trigger( 'blur' ); // A way to reset year
				warningPriceList();
				createPriceFile();
			}, 600 );
		}
		
	} );
	$( '#close-setPrices' ).on( 'click', function () {
		closeSetPrices();
	} );
	$( '#sort-setPrices' ).on( 'click', function () {
		sortPriceList();
	} );
	
	$( '#setPricesYear' )
		.on( 'keyup', function () {
			$( '#fakeYear' ).text( $( this ).val() );
			$( this ).css( 'width', $( '#fakeYear' ).width() );
		} )
		.on( 'blur', function ( e ) {
			var myYear = $( this ).val();
			if ( !myYear ) {
				$( this ).val( dataYear ).trigger( 'keyup' );
				return;
			}
			if ( myYear.length !== 4 || myYear < 2010 || myYear > 2100 ) {
				$( this ).val( $( this ).data( 'oldValue' ) ).trigger( 'keyup' );
			}
			if ( e.hasOwnProperty( 'originalEvent' ) ) {
				warningPriceList();
				createPriceFile();
			}
		} )
		.on( 'focus', function () {
			$( this ).data( 'oldValue', $( this ).val() );
		} )
		// In order to set current year, & adapt width accordingly
		.trigger( 'keyup' ).trigger( 'blur' );
	
}

function warningPriceList() {
	
	$( '#setPrices-subcontainer' )
		.find( '.setPriceWarning' ).removeClass( 'setPriceWarningImg' )
		.prev().each( function () {
		if ( !Number( $( this ).val() ) ) {
			$( this ).parent().find( '.setPriceWarning' ).addClass( 'setPriceWarningImg' );
		}
	} );
	
	// Handle warning info on the right
	var warningNumb   = $( '.setPriceWarningImg' ).length,
	    warningWidget = $( '#missing-setPrices' );
	warningWidget.text( warningNumb );
	if ( !warningNumb ) {
		warningWidget.slideUp();
	} else {
		if ( !warningWidget.isVisible() ) {
			warningWidget.slideDown();
		}
	}
	$( '#setPrices-subcontainer' ).data( 'warningNumb', warningNumb );
	
	// Also show/hide clear functionality
	var clearWidget = $( '#clear-setPrices' );
	if ( $( '.setPriceValue' ).length != $( '.setPriceWarningImg' ).length ) {
		clearWidget.slideDown( 300 );
	} else {
		if ( clearWidget.isVisible() ) {
			clearWidget.slideUp( 300 );
		}
	}
	
}

function warningYear() {
	
	// Warns in case year is different than today's year
	var priceYear = $( '#setPricesYear' );
	if ( priceYear.val() != dataYear ) {
		priceYear.removeClass( 'fasttransition' );
		priceYear.flash( 200, 5, function () {
			priceYear.addClass( 'fasttransition' );
		} );
	}
	
}

function sortPriceList() {
	
	var subCont = $( '#setPrices-subcontainer' );
	
	if ( subCont.data( 'sorted' ) === undefined ) {
		var names = [];
		unsorted  = [];
		sorted    = [];
		
		subCont.find( '.priceBox-name' ).each( function ( index ) {
			names.push( $( this ).text().replace( 'ANTI-GERM ', N ) + CL + index );
			unsorted.push( $( this ).parent() );
		} );
		names.sort();
		for ( var i = 0; i < names.length; i++ ) {
			names[ i ] = names[ i ].substr( names[ i ].indexOf( CL ) + 1 );
		}
		for ( i = 0; i < names.length; i++ ) {
			sorted[ i ] = subCont.find( '.priceBox' ).eq( names[ i ] );
		}
		subCont.data( 'sorted', false );
	}
	if ( !subCont.data( 'sorted' ) ) {
		for ( var j = 0; j < sorted.length; j++ ) {
			subCont.append( sorted[ j ] );
		}
		subCont.data( 'sorted', true );
	} else {
		for ( var k = 0; k < unsorted.length; k++ ) {
			subCont.append( unsorted[ k ] );
		}
		subCont.data( 'sorted', false );
		
	}
	
}

function priceInputInit() {
	
	$( '#setPrices-subcontainer' ).find( '.setPriceValue' )
		.off()
		.on( 'focus', function () { // Select existing value
			thisinput = $( this );
			setTimeout( function () {
				thisinput.select();
			}, 25 );
		} )
		.on( 'change', function () {
			if ( !parseFloat( $( this ).val().replace( CO, PO ) ) || parseFloat( $( this ).val() ) < 0 ) {
				$( this ).val( N );
				return;
			}
			// Replace ',' by '.' and .xx value conversion
			$( this ).val( parseFloat( ($( this ).val()).replace( CO, PO ) ).toFixed( 2 ) );
			// Tabulates
			$( '#setPrices-subcontainer' ).find( '.setPriceValue' ).eq( $( '.setPriceValue', '#setPrices-subcontainer' ).index( this ) + 1 ).focus();
		} )
		.on( 'blur', function () {
			warningPriceList();
			createPriceFile();
		} );
	
}

function mosaic( mosType ) {
	
	// Determine mosaic type
	mosaicProdProcess = (mosType == 'prod' || mosType == 'create');
	
	hideRightMenu( 1 );
	hideTopWarning();
	$( '#backtotop ,#gotobottom' ).addClass( 'notvisible' );
	
	$( '#mosaic-elementrange2' ).html( NBSP + specialWindowsText[ lang + 3 * langScope ].split( LI )[ 0 ] );
	
	if ( mosaicProdProcess ) {
		createProdMosaic( mosType );
	}
	
}

function createProdMosaic( mosType ) {
	
	var boxFamily        = [],
	    idx              = 0,
	    htmlX,
	    boxInt,
	    prodName,
	    create           = (mosType === 'create'),
	    allSelectedItems = N,
	    packaging,
	    addClass, addClass2, addClass3,
	    packagingText,
	    addClass4,
	    packagingUnit;
	
	// List all selected items (only when not in create mode)
	if ( !create ) {
		$( '.catbox, #categories' ).find( 'img' ).each( function () {
			allSelectedItems += this.alt + CI;
		} );
	} else {
		$( '#mosaic-elementrange1' ).text( '0' );
		showTopWarning( 57, null, null, null, 2000 );
	}
	
	addClass  = create ? SP + 'mosaic-create' : N;
	addClass2 = create ? SP + 'mosaic-packagingcreate' : N;
	addClass3 = create ? N : SP + 'lightboxenabled';
	
	for ( var i = 0; i < prodText.length; i += prodText.length / prodDataNumb ) {
		
		addClass4 = N;
		// Create each box
		
		if ( (prodText[ i ] != hideProduct || create) && prodText[ i + 14 ] != 'NAP' && (prodText[ i + 12 ] != 'old' || Optionoldprodmosaic == 'true') ) { // NAP stands for Not A Product
			// Create a [1,2,…,prodDataNumb] array
			boxFamily.push( idx );
			// Gather stored name
			if ( create && prodText[ i ] == hideProduct ) {
				prodName = prodText[ i + 12 ];
			} else {
				prodName = prodText[ i ];
			}
			idx++;
			
			htmlX += '<div class="mosaicProdBox' + addClass + '"><div class="mosaicProdBox-name">' + prodName + ED;
			htmlX += '<img class="mosaicProdBox-img' + addClass3 + '" src="' + imgFolder + SL + prodText[ i + 6 ] + '" data-title="' + prodText[ i + 7 ] + '" data-old="' + prodText[ i + 12 ] + '" data-AB="' + prodText[ i + 18 ] + '" data-biocide="' + prodText[ i + 19 ] + '" alt="' + prodText[ i ] + '">';
			
			// AB, old product?
			if ( prodText[ i + 18 ] == 'AB' ) {
				htmlX += '<div class="mosaicBox-AB">' + ABText[ lang ] + ED;
			}
			if ( prodText[ i + 12 ] == 'old' ) {
				htmlX += '<div class="mosaicBox-old"/>' + ED;
			}
			
			// Selected item?
			if ( allSelectedItems.indexOf( prodText[ i ] ) < 0 || create ) {
				// Add packaging and hide check
				addClass4 = 'notdisplayed';
				htmlX += '<div class="mosaic-packaging-container">';
				packaging = prodText[ i + 8 ].split( CO );
				
				for ( var j = 0; j < packaging.length; j++ ) {
					if ( packaging.length == 1 && packaging[ j ] == 1 ) {
						packagingText = specialWindowsText[ lang + 2 * langScope ];
						packagingUnit = SP + 'unit-packaging';
					} else {
						packagingText = packaging[ j ];
						packagingUnit = N;
					}
					htmlX += '<div class="mosaic-packaging' + packagingUnit + addClass2 + '">' + packagingText + ED;
				}
				htmlX += ED;
			}
			htmlX += '<div class="mosaicProdBox-check' + SP + addClass4 + '">✓</div>';
			htmlX += ED;
		}
		
	}
	
	$( '#Mosaic-subcontainer' ).append( '<div id="mosaic-list" class="veryslowtransition" style="display:' + (create ? 'block' : 'none') + '"><span/><div id="mosaiclist-save"/><input id="mosaiclist-name" class="nowidth fasttransition"/></div>' + htmlX );
	
	// Display mosaic container
	$( '#Mosaic-container' ).fadeIn();
	
	// Mix up boxes (random or linear when create mode)
	if ( !create ) {
		randomize( boxFamily );
	} else {
		boxFamily = boxFamily.reverse();
		$( '#mosaic-list' ).css( 'opacity', 1 );
		$( '#mosaiclist-save' ).addClass( 'saved' );
	}
	
	mosaicResize( 1, 1500 );
	mosaicFunctionsInit( mosType );
	
	// Random box fade in
	var theBoxes = $( '.mosaicProdBox', '#Mosaic-subcontainer' );
	boxInt       = setInterval( function () {
		idx--;
		theBoxes.eq( boxFamily[ idx ] ).animate( {
			opacity: 1,
			queue:   false
		}, 500 );
		if ( !create ) {
			$( '#mosaic-elementrange1' ).text( boxFamily.length - idx );
		}
		if ( !idx ) {
			if ( $( '#categories' ).data( 'emptycattitles' ) && (Optionproductmosaic == 'true' || create) ) {
				$( '#mosaicprod-cat2' ).text( $( '#categories' ).data( 'emptycattitles' ) )
					.parent().fadeIn();
			}
			clearInterval( boxInt );
			mosaicSlideInit();
		}
	}, 10 );
	
}

function mosaicResize( duration, delayInfo, noScrollTop ) {
	
	duration = duration || 500;
	
	documentWHeight   = $( window ).height();
	mosaicBoxWHeight  = documentWHeight - 190;
	mosaicBoxSBHeight = $( '#Mosaic-subcontainer' ).height();
	if ( mosaicBoxSBHeight <= mosaicBoxWHeight ) {
		mosaicBoxWHeight = mosaicBoxSBHeight;
		showHideMosaicSlide( 0, 0, delayInfo );
	} else {
		showHideMosaicSlide( 1, 500, delayInfo );
	}
	
	$( '#MosaicBox-window' ).css( 'height', mosaicBoxWHeight );
	
	mosaicBoxWTop = $( '#MosaicBox-window' ).offset().top;
	
	windowBorder = mosaicBoxWHeight / 6.7;
	
	// Reset window position
	if ( !noScrollTop ) {
		incBox = 0;
		$( '#Mosaic-subcontainer' ).stop( 1, 1 ).animate( { top: -incBox }, duration );
	}
	
}

function showHideMosaicSlide( action, speed, delayInfo ) {
	
	delayInfo = delayInfo || 0;
	
	if ( action ) {
		clearTimeout( timer16 );
		clearTimeout( timer17 );
		timer16 = setTimeout( function () {
			$( '#mosaic-window-info' ).fadeIn( speed );
			timer17 = setTimeout( function () {
				$( '#mosaic-window-info' ).fadeOut( speed );
			}, delayInfo + 4000 );
		}, delayInfo );
	} else {
		$( '#mosaic-window-info' ).stop( 1, 1 ).fadeOut( speed );
	}
	
}

function mosaicFunctionsInit( mosType ) {
	
	// Relocate top warning
	$( '#top-warning' ).insertBefore( $( '#Mosaic-container' ) ).css( 'position', 'fixed' );
	
	$( '#close-mosaic' ).off().on( 'click', function () {
		closeMosaic();
	} );
	
	// Selecting packaging in create mode
	if ( mosType === 'create' ) {
		
		$( '#mosaic-elementrange2' ).on( 'click', function () {
			createListFromRange( 6 );
		} );
		$( '#Mosaic-subcontainer' ).off().on( 'click', function ( e ) {
			
			var target = $( e.target );
			if ( target.hasClass( 'mosaic-packaging' ) ) {
				target.toggleClass( 'mosaic-chosen' ).addClass( 'fasttransition' );
				$( '#mosaiclist-save' ).removeClass( 'saved' );
			} else if ( target.hasClass( 'mosaicProdBox-img' ) ) {
				$( '#mosaiclist-save' ).removeClass( 'saved' );
				target = target.parent().find( '.mosaic-packaging' ).removeClass( 'fasttransition' );
				if ( target.hasClass( 'mosaic-chosen' ) ) {
					target.toggleClass( 'mosaic-chosen' );
				} else {
					target.addClass( 'mosaic-chosen' );
				}
			}
			
			// Count products
			$( '#mosaic-elementrange1' ).text( $( this ).find( '.mosaic-packaging' ).filter( '.mosaic-chosen' ).parent().length );
			updateMosaicList();
		} );
		$( '#mosaiclist-save' ).off().on( 'click', function () {
			
			if ( !$( '#mosaiclist-name' ).width() || !$( '#mosaiclist-name' ).val().length ) {
				$( '#mosaiclist-name' ).removeClass( 'nowidth' ).focus();
				$( this ).flash( 100, 6 );
				return;
			}
			
			// Empty list check
			if ( $( '#mosaic-list' ).find( 'span' ).html().length < 3 ) {
				$( this ).flash( 100, 6 );
				return;
			}
			
			// Prepare real js text to be included in core code
			var listHeader = '\t// ' + $( '#mosaiclist-name' ).val() + ' (numéro)' + CR + CR + '\tcustomRange.push([' + CR + '\t\t"??????", // mot de passe' + CR + '\t\t"',
			    myList     = listHeader + $( '#mosaic-list' ).find( 'span' ).html(),
			    myName     = getUrlFriendly( specialWindowsText[ lang + 20 * langScope ] + DH + $( '#mosaiclist-name' ).val() ) + '.ecl',
			    plusInfo   = '(' + myName + ')' + SP;
			
			myList = myList.replace( new RegExp( BR, 'g' ), '",' + CR + '\t\t"' ).slice( 0, -6 );
			myList = myList + CR + '\t]);' + CR + CR;
			
			saveFile( myList, myName );
			showTopWarning( 2 + saveError, 500, (!saveError) * 8000, plusInfo );
			
			$( '#mosaiclist-save' ).addClass( 'saved' );
		} );
	}
	
}

function createListFromRange( myRange ) {
	
	var theRange = customRange[ myRange ].slice( 0 );
	theRange.shift( 2 ); // Remove delivery item + password
	
	$.each( theRange, function ( index, value ) {
		value               = value.split( CL );
		var nameCreate      = value[ 0 ],
		    packagingCreate = AS;
		
		// Detect cases: no packaging mentioned ('*'), 1 packgaging ('*') and the other cases
		if ( value[ 1 ] ) {
			packagingCreate = (value[ 1 ].split( CO ).length) ? value[ 1 ].split( CO ) : value[ 1 ];
		}
		
		$( '.mosaicProdBox-img' ).each( function () {
			var myProdImg = $( this );
			
			if ( myProdImg[ 0 ].alt.indexOf( nameCreate ) >= 0 ) {
				// In some case (E.g. FRESH), there can be a product confusion (double click and remove)
				// We avoid this by checking the packaging lenght and the current status
				if ( myProdImg.parent().find( '.mosaic-packaging' ).length !== 1 || !myProdImg.parent().find( '.mosaic-chosen' ).length ) {
					if ( packagingCreate == AS ) {
						$( this ).click();
						return false;
					} else {
						$.each( packagingCreate, function ( index, value ) {
							myProdImg.parent().find( '.mosaic-packaging' ).each( function () {
								if ( $( this ).text() == value ) {
									$( this ).click();
									return false;
								}
							} );
						} );
					}
				}
			}
		} );
	} );
	
}

function updateMosaicList() {
	
	var listItem = N;
	
	$( '#mosaic-list' ).find( 'span' ).empty();
	$( '#Mosaic-subcontainer' ).find( '.mosaicProdBox' ).each( function () {
		
		var selectPack = $( this ).find( '.mosaic-chosen' );
		if ( selectPack.length ) {
			listItem = $( this ).find( '.mosaicProdBox-name' ).html();
			if ( listItem.indexOf( 'ANTI-GERM DT' ) >= 0 ) {
				listItem = 'ANTI-GERM&#8201;DT';
			}
			if ( listItem.indexOf( 'CM-TEST' ) >= 0 ) {
				listItem = 'CM-TEST';
			}
			listItem += CL;
			selectPack.each( function ( index ) {
				if ( index ) {
					listItem += CO;
				}
				var valPack = $( this ).html();
				if ( valPack == specialWindowsText[ lang + 2 * langScope ] ) {
					valPack = N;
				}
				listItem += valPack;
			} );
			listItem += BR;
			$( '#mosaic-list' ).find( 'span' ).append( listItem );
		}
		
	} );
	// Remove ANTI-GERM prefix and clean content
	$( '#mosaic-list' ).find( 'span' ).html( $( '#mosaic-list' ).find( 'span' ).html().replace( new RegExp( 'ANTI-GERM' + SP, 'g' ), N ).replace( new RegExp( '®', 'g' ), N ).replace( new RegExp( CL + BR, 'g' ), BR ) );
	
}

function closeMosaic() {
	
	// If we're creating a range
	if ( $( '#mosaiclist-save' ).isVisible() && $( '.mosaic-chosen' ).length && !$( '#mosaiclist-save' ).hasClass( 'saved' ) ) {
		if ( !showConfirm( dialogText[ 4 ].split( CO )[ lang ] ) ) {
			return;
		}
	}
	
	$( '#Mosaic-container' ).off().fadeOut( function () {
		
		hideTopWarning();
		removeMosaicEl();
		$( '#mosaic-low-container, #mosaic-window-info, #mosaic-list' ).hide();
		clearTimeout( timer17 ); // Timer for fading out #mosaic-window-info
		mosaicProdProcess = false;
		enableMouseWheel();
		$( document ).off( 'keyup' );
		$( '#close-mosaic' )
			.off()
			.removeClass( 'noselectpossible' );
		// Reposition top warning
		$( '#top-warning' ).insertBefore( $( '#topmenu' ) ).css( 'position', 'relative' );
		// 'hide' mosaic list
		$( '#mosaic-list' ).css( 'opacity', 0 );
		$( '#backtotop ,#gotobottom' ).removeClass( 'notvisible' );
		
	} );
	$( '#Mosaic-subcontainer, #mosaiclist-save' ).off();
	
}

function removeMosaicEl() {
	
	$( '#Mosaic-container' ).find( '.mosaicProdBox' ).add( $( '#Mosaic-info, #mosaic-list' ) ).remove();
	
}

function mosaicSlideInit() {
	
	var move       = false,
	    moveSpeed  = 500,
	    incBoxStep = 500,
	    incBox     = 0,
	    incBoxAdj;
	
	$( '#Mosaic-container' ).off().on( 'mousemove', function ( e ) {
		
		if ( move ) {
			return;
		}
		
		var windowMouseTop = e.pageY,
		    mosaicBoxSBTop = $( '#Mosaic-subcontainer' ).offset().top,
		    a              = mosaicBoxSBTop + mosaicBoxSBHeight,
		    b              = mosaicBoxWTop + mosaicBoxWHeight,
		    overflowBottom = a - b,
		    WslideUp       = windowMouseTop - mosaicBoxWTop,
		    WslideDown     = windowMouseTop - b;
		
		if ( WslideDown > -windowBorder && overflowBottom ) {
			
			showHideMosaicSlide();
			
			move      = true;
			incBoxAdj = incBoxStep;
			if ( overflowBottom < incBoxStep ) {
				incBoxAdj = overflowBottom;
			}
			incBox += incBoxAdj;
			$( '#Mosaic-subcontainer' ).animate( { top: -incBox }, moveSpeed, function () {
				move = false;
			} );
		}
		
		if ( WslideUp <= windowBorder && $( '#Mosaic-subcontainer' ).css( 'top' ) != '0px' ) {
			
			showHideMosaicSlide();
			
			move      = true;
			incBoxAdj = incBoxStep;
			if ( incBoxAdj > incBox ) {
				incBoxAdj = incBox;
			}
			
			incBox -= incBoxAdj;
			$( '#Mosaic-subcontainer' ).animate( { top: -incBox }, moveSpeed, function () {
				move = false;
			} );
		}
		
	} );
}

function animalMenuInit() {
	
	$( document ).on( 'click', '#animalchoice', function () {
		animalMenu();
	} );
	
}

function animalMenu() {
	
	var speed = 400,
	    oldAnimalType,
	    animalReady;
	
	animalMenuProcess = true;
	disableMouseWheel();
	hideRightMenu( 1 );
	$( '#backtotop, #gotobottom' ).addClass( 'notdisplayed' );
	
	// Invisible mask to avoid action before everything's really ready
	$( '#UIintro-container' ).show();
	
	// Display + vertical centering + width set
	$( '#AnimalType-container' )
		.off().on( 'click', function ( e ) { // Quit if click on everything but an animal
			e.stopPropagation();
			hideAnimalMenu( 'nochange' );
		} )
		.fadeIn( speed )
		.children()
		.css( 'marginTop', -$( '.animal-image' ).width() / animalScope - 90 ) // Strange but works!
		.find( '.animal' )
		.off().on( 'click', function ( e ) {
			if ( !animalReady ) {
				return;
			}
			e.stopPropagation();
			playSound( 'go' );
			$( '#small-data-widget' ).hide();
			oldAnimalType = animalType;
			animalType    = $( this ).find( '.animal-image' ).data('type');
			animal        = $.inArray( animalType, animals );
			// Waiting spinner
			$( '#AnimalType-container' ).find( '.animalgoSpinner' ).eq( animal ).show();
			// Short delay to let the spinner show with no trouble
			setTimeout( function () {
				if ( oldAnimalType !== animalType ) {
					selectSliderItems();
				}
				hideAnimalMenu();
			}, 50 );
		} )
		.css( 'width', 100 / animalScope + '%' );
	
	// Sequential flip of each animal
	var animalFlip = 0,
	    timer      = setInterval( function () {
		    if ( !animalFlip ) {
			    $( '#animal-logo, #Animal-App-version' ).css( 'visibility', 'visible' ).hide().fadeIn( 1000 );
			    playSound( 'info' );
		    }
		    $( '.animal-back-image' ).eq( animalFlip ).addClass( 'flip-forward' );
		    animalFlip++;
		    if ( animalFlip == animalScope ) {
			    clearInterval( timer );
			    animalReady = true;
			    // Remove 'mask' and allow events(hover, click)
			    $( '#UIintro-container' ).hide();
		    }
	    }, speed * 2 / animalScope );
	
}

function hideAnimalMenu( nochange ) {
	
	// Applying a short delay as many things to process (clean fadeOut)
	$( '#AnimalType-container' ).delay( !nochange * 500 ).fadeOut( 400, function () {
		enableMouseWheel();
		animalMenuProcess = false;
		$( this ).find( '.animal-back-image' ).removeClass( 'flip-forward' );
		$( '#animal-logo, #Animal-App-version' ).css( 'visibility', 'hidden' );
	} ).find( '.animalgoSpinner' ).hide();
	
	$( '#backtotop, #gotobottom' ).removeClass( 'notdisplayed' );
	
	if ( !nochange ) {
		if ( emptySheet() ) {
			unredoData[ sessionIndex ]     = [];
			oldUnredoData[ sessionIndex ]  = [];
			unredoPosition[ sessionIndex ] = 0;
			newEstimate();
		} else {
			addFile();
		}
	}
	
}

function overlap( element1, element2 ) {
	
	var d0       = element1.offset(),
	    d1       = element2.offset(),
	    y11      = d0.top,
	    y12      = y11 + element1.height(),
	    y21      = d1.top,
	    y22      = y21 + element2.height(),
	
	    yOverlap = Math.max( 0, Math.min( y12, y22 ) - Math.max( y11, y21 ) );
	
	return (yOverlap > 0) * (y22 - y11);
	
}

function setSliderSpeed( value ) {
	
	$( '#slider-container' ).data( 'speed', value );
}

function BottomWidgetsInit() {
	
	$( '#backtotop' ).off( 'click' ).on( 'click', function () {
		scrollWindow( 0, 700 );
	} );
	$( '#gotobottom' ).off( 'click' ).on( 'click', function () {
		$( 'html, body' ).animate( { scrollTop: $( document ).height() - $( window ).height() }, 700 );
	} );
	
	$( '#small-data-close' ).off( 'click' ).on( 'click', function () {
		$( 'input[name=breedingwidget]' ).click();
	} );
	
}

function artNumberSetInit() {
	
	$( document )
		.on( 'click', '.articleless, .articleplus', function () {
			incDecArticle( $( this ), 1 - 2 * ($( this ).is( '.articleless' )) );
		} );
	
}

function incDecArticle( control, inc ) {
	
	var box      = control.closest( '.catbox' ),
	    calcmode = box.find( 'img' ).attr( 'data-calcmode' );
	
	if ( calcmode == 'manual' ) {
		numberArticle = box.find( '.boxpackagingNum' );
		artNum        = Number( numberArticle.text() );
		if ( !artNum ) {
			return;
		}
		if ( artNum * inc == -1 ) {
			numberArticle.text( 0 );
			box.find( '.close' ).click();
			return;
		}
		artNum += inc;
		numberArticle.text( artNum );
	} else {
		numberArticle = box.find( '.consforcalc' );
		artNum        = Number( numberArticle.val() );
		if ( !artNum ) {
			return;
		}
		if ( artNum * inc == -1 ) {
			numberArticle.val( 0 );
			box.find( '.close' ).click();
			return;
		}
		artNum += inc;
		numberArticle.val( artNum );
	}
	fullCalc();
	// Adjust add to cart
	validateProduct( box );
	
}

function exitPreviewModeInit() {
	
	$( '#exit' ).on( 'click', function () {
		
		if ( previewProcess ) {
			
			if ( !demoProcess ) {
				$( document ).off( 'keyup' );
			}
			
			hideSliderMonth( 1 );
			
			previewProcess = false;
			
			updateOptions(); // Title:Preview instead of Print
			
			$( this ).hide();
			$( '#load, #save, #undo, #redo, #unredo-container, #search, #viewswitcher' ).removeClass( 'notdisplayed' );
			
			// Very basic preview when writing a mail
			if ( !$( '#exit' ).hasClass( 'borderRight' ) ) {
				$( '#mail, #print, #mailbox, #calendar, #estimatevalue, #estimatetext' ).removeClass( 'notdisplayed' );
				$( '#exit' ).addClass( 'borderRight' );
				$( '#topWidget' ).removeClass( 'onTheRight' );
			}
			
			$( '#estimates-wholecontainer' ).fadeOut( 200, function () {
				scrollWindow( currentScroll, 1 );
				$( '#main-container' ).fadeIn( 600, function () {
					$( '#small-data-widget' ).removeClass( 'outofscreen' );
					$( '#backup' ).removeClass( 'notdisplayed' );
					backupDataInit(); // Restart Backup
				} );
			} );
			
		}
	} );
	
}

function wastebinInit() {
	
	$( document ).on( 'click', '.wastebin', function () {
		$( this ).closest( '.cat' ).find( '.catbox' ).removeProduct();
	} );
	
}

function resetDataboxInit() {
	
	$( document )
		.on( 'click', '.reset', function () {
			var databox = $( this ).closest( '.databox' );
			databox.find( 'span' ).animate( {
				opacity: 0
			}, 200, function () {
				appendDataValues( databox.index() );
				databox.find( 'span' ).animate( {
					opacity: 1
				}, 200, function () {
					fullCalc();
				} );
			} );
		} );
	
}

function windowScrollResize() {
	
	// Adjust category when scrolling (wait until scroll is ended)…
	// …or resize Lightbox
	$( window ).on( 'scroll', function () {
			var scrollPos = $( document ).scrollTop();
			
			// Back to top/go to bottom & widget
			if ( scrollPos > 150 ) {
				$( '#backtotop, #small-data-widget' ).fadeIn();
			} else if ( $( '#backtotop' ).isVisible() ) {
				$( '#backtotop, #small-data-widget' ).fadeOut();
			}
			if ( scrollPos < $( document ).height() - $( window ).height() - 150 ) {
				$( '#gotobottom' ).fadeIn();
			} else if ( $( '#gotobottom' ).isVisible() ) {
				$( '#gotobottom' ).fadeOut();
			}
			
			if ( scrollPos > 2 ) {
				$( '#navbar' ).addClass( 'navbarstandard' );
			} else {
				$( '#navbar' ).removeClass( 'navbarstandard' );
			}
			
			if ( $( '#bigflag' ).length ) {
				$( '#bigflag' ).hide();
			}
			
			removeTooltip();
			if ( Optionstatictabs == 'true' ) {
				updateFileTabCont( scrollPos );
			}
			
			clearTimeout( timer4 );
			timer4 = setTimeout( function () {
				switchCategory();
			}, 50 );
			removeTooltip();
			
			// Switch from absolute to fixed positioning
			// When a product is selected in demo mode
			if ( demoProcess ) {
				if ( $demoTarget.hasClass( 'sliderImg' ) ) {
					$demoCircle.css( 'position', 'fixed' );
				}
			}
			
			// Remove addtocart
			if ( $( '#addtocart-container' ).isVisible() ) {
				hideAddtocart( 1 );
			}
			
		} )
		.resize( function () {
			switchCategory();
			lightboxResize();
			hideRightMenu( 1 );
			adjustTabElements();
			
			if ( demoProcess ) {
				if ( !checkWindowWidth() ) {
					endDemoTour( 'exit' );
					setTimeout( function () {
						showTopWarning( 30, 350, 3000 );
					}, 4000 );
					
				}
			}
			
			if ( mosaicProdProcess ) {
				mosaicResize();
			}
			
		} );
	
}

function closeBoxInit() {
	
	// closebox functionality
	$( document ).on( 'click', '.close', function () {
		$( this ).parent().removeProduct();
	} );
	
}

function validateAllProducts( box ) {
	
	box.each( function () {
		$( this ).data( 'validated', $( this ).find( 'boxpackagingVal' ).text() + $( this ).find( '.rawprice-container' ).text() + $( this ).find( '.discountprice-container' ).text() );
	} );
	
}

function validateProduct( field ) {
	
	if ( loadProcess || unredoProcess || Optiontooltips != 'true' ) {
		return;
	}
	
	// Identify box
	var addtocart     = $( '#addtocart-container' ),
	    estimatevalue = $( '#estimatevalue' ),
	    box           = field.closest( '.catbox' ),
	    boxImg        = box.find( 'img' ),
	    infoForComp   = box.find( 'boxpackagingVal' ).text() + box.find( '.rawprice-container' ).text() + box.find( '.discountprice-container' ).text(),
	    nbArticle,
	    nbUnit;
	
	// Counts alerts
	alertNumber = box.find( '.alertInput' ).length;
	
	// If alert or old product return
	if ( alertNumber || infoForComp == box.data( 'validated' ) ) {
		return;
	}
	
	// New data: New text
	// Raw price container text change: Modify text
	if ( !box.data( 'validated' ) ) {
		$( '#addtocart-itemtext' ).text( addtocartnewText[ lang ] );
	} else {
		$( '#addtocart-itemtext' ).text( addtocartmodifiedText[ lang ] );
	}
	
	// Display 'free' when discount is 100% or a free article
	$( '#addtocart-freetext' )
		.text( sheetText[ 17 * langScope + lang ] )
		.css( 'opacity', 1 - (parseInt( box.find( '.boxtotalprice' ).text() ) !== 0 && box.find( '.discount' ).val() != 100) );
	
	// Store data
	box.data( 'validated', infoForComp );
	
	// End here (only for recording values)
	if ( discountProcess ) {
		return;
	}
	
	// Hide and positioning
	addtocart
		.css( {
			left: estimatevalue.offset().left + (estimatevalue.width() - addtocart.width()) / 2,
			top:  estimatevalue.offset().top + 45 - $( document ).scrollTop()
		} );
	$( '#addtocart-subcontainer' )
		.stop( 1, 1 )
		.fadeOut( 300, function () {
			// Assign img + info to addtocart widget
			addtocart.find( 'img' )
				.attr( 'src', boxImg[ 0 ].src )
				.next()
				.text( box.find( '.productboxname' ).text() )
				.next()
				// Display the 5 first words of the short description
				.html( boxImg.attr( 'data-title' ).split( LI )[ lang ].split( /\s+/ ).slice( 0, 5 ).join( SP ) + '…' );
			
			// Show quantity in blue
			nbArticle = box.find( '.boxpackagingNum' ).text() * box.find( '.boxpackagingVal' ).text() || box.find( '.consforcalc' ).val();
			nbUnit    = box.find( '.multiply' ).text().split( /\s+/ ).slice( 0, 1 ).join( SP ) || box.find( '.multiply3' ).text();
			
			quantity = nbArticle + SP + nbUnit;
			
			// Reverse string if no unit i.e. '2 x' becomes 'x 2'
			if ( nbUnit == SP + 'x' ) {
				quantity = quantity.split( N ).reverse().join( N );
			}
			
			// When the packaging info is not really a packaging
			if ( boxImg.attr( 'data-specials' ) == 'diameter' ) {
				quantity = 'x' + SP + box.find( '.boxpackagingNum' ).text() || box.find( '.consforcalc' ).val();
			}
			
			$( '#addtocart-qty' ).text( quantity );
			recordHistory( $( '#addtocart-itemtext' ).text() + SP + $( '#addtocart-itemtitle' ).text() + SP + $( '#addtocart-qty' ).text() );
			
		} )
		.fadeIn( 300 );
	
	// Show add to cart widget
	showHideAddtocart( addtocart );
	
}

function showHideAddtocart() {
	
	clearTimeout( timer15 );
	$( '#addtocart-container' ).delay( 500 ).fadeIn();
	timer15 = setTimeout( hideAddtocart, 4800 );
	
}

function hideAddtocart( duration ) {
	
	duration = duration || 400;
	clearTimeout( timer15 );
	$( '#addtocart-container' ).fadeOut( duration );
	
}

function findProductSliders( productname, duration ) {
	
	duration = duration || 0;
	
	var cats = [], catIndex, lastCat = catText.length / langScope, htmlX = N, htmlY, allCats = $( '.cat' );
	
	$( '#lightbox-cartdetail' ).children().remove();
	
	$( '#slider-container' ).find( '.sliderImg' ).each( function () {
		catIndex = $( this ).closest( '.slider' ).index();
		// Check if cat has already this product and is active (e.g. robots) - Do not accept catalogue
		if ( $( this ).isVisible() && $( this ).find( 'img' )[ 0 ].alt == productname && !$( '.cat' ).eq( catIndex ).hasClass( 'oldcat' ) && !$( '.cat' ).eq( catIndex ).hasClass( 'notactive' ) && (!$( '.cat' ).eq( catIndex ).find( 'img[alt="' + productname + '"]' ).length || $( '.cat' ).eq( catIndex ).hasClass( 'catalogue' )) && catIndex != lastCat ) {
			cats.push( catIndex );
		}
	} );
	
	// Create cart details: all possible categories
	if ( cats.length ) {
		$.each( cats, function ( index, value ) {
			htmlY = '<div class="catCart-container fasttransition tooltipelement" data-cat="' + value + '" data-title="' + specialWindowsText[ lang + 16 * langScope ] + '"><div class="catCart-icon"/><div class="cartCart-name">' + catText[ 1 + lang + (langScope + 1) * value ].split( LI )[ 0 ] + ED + ED;
			if ( allCats.eq( value ).hasClass( 'catalogue' ) ) {
				htmlX = htmlY.replace( 'catCart-container', 'catCart-container catCart-container-grey' ) + htmlX;
			} else {
				htmlX += htmlY;
			}
		} );
		$( '#lightbox-cart' ).attr( 'data-title', specialWindowsText[ lang + 22 * langScope ] ).show();
		$( '#lightbox-cartdetail' ).append( htmlX );
	} else {
		$( '#lightbox-cart' ).slideUp( duration );
	}
	
	return cats;
	
}

$.fn.addProduct = function () {
	
	var nocreatebox = 0,
	    theCat,
	    binomial;
	
	product = $( this );
	
	sliderli = product.parent();
	
	// In case category would not match slider's number
	category    = sliderli.closest( '.slider' ).index();
	theCat      = $( '#categories' ).find( '.cat' ).eq( category );
	box         = theCat.find( '.catbox' );
	productname = product[ 0 ].alt;
	
	// Check if we need another mandatory product by its name
	binomial = findBinomial( productname, theCat );
	
	iscatbox = box.length;
	
	catalog = theCat.hasClass( 'catalogue' );
	
	productnamedisplayed = product.parent().find( '.bx-caption span' ).text();
	shortdesc            = product.attr( 'data-title' );
	if ( loadProcess && product.attr( 'data-title' ) === undefined ) {
		loadError += 'product error maybe due to file format' + SL
	}
	shortdescbox = product.attr( 'data-title' ).split( LI )[ lang ];
	type         = product.attr( 'data-type' );
	subtype      = product.attr( 'data-subtype' );
	srcImg       = product[ 0 ].src;
	cons         = product.attr( 'data-cons' );
	consRS       = product.attr( 'data-consRS' );
	unit         = product.attr( 'data-unit' );
	packaging    = product.attr( 'data-pack' );
	density      = product.attr( 'data-dens' );
	packunit     = product.attr( 'data-packunit' );
	caption      = product.attr( 'data-caption' );
	oldP         = product.attr( 'data-old' );
	calcMode     = product.attr( 'data-calcmode' );
	specials     = product.attr( 'data-specials' );
	youTube      = product.attr( 'data-youtube' );
	AB           = product.attr( 'data-AB' );
	biocideM     = product.attr( 'data-biocide' );
	SAP          = product.attr( 'data-SAP' );
	
	/////////////////
	// AOC forbid
	/////////////////
	
	if ( sliderli.find( '.specialAOC' ).length && !loadProcess ) {
		sliderli.find( '.specialAOC' ).flash( 75, 6 );
		return;
	}
	
	///////////////////////////////////////////////////////////////////////////
	// Check if article not yet selected => otherwise scroll to it & return
	// With the exception of catalogue mode
	///////////////////////////////////////////////////////////////////////////
	
	if ( product.siblings( '.bxcheck' ).isVisible() && iscatbox && (!catalog || theCat.hasClass( 'controllers' )) ) {
		box.each( function ( index ) {
			var searchArticle = $( this ).find( 'img' );
			if ( productname == searchArticle[ 0 ].alt ) {
				nocreatebox = searchArticle.offset().top - $( window ).height();
				nocreatebox += (iscatbox == index + 1) * 47; // if last product => Total visible
			}
		} );
		if ( nocreatebox ) {
			scrollWindow( nocreatebox, null, -344 );
			return;
		}
	}
	
	// Check if article is not forbidden, otherwise flash forbid & return
	forbidIcon = product.siblings( '.bxforbid' );
	if ( forbidIcon.isVisible() ) {
		forbidIcon
			.toggleClass( 'forbidred' )
			.trigger( 'mouseover' );
		forbidIcon.flash( 75, 4, function () {
			forbidIcon.removeClass( 'forbidred' );
		} );
		return;
	}
	
	// Reduce long descriptions
	shortdescbox = shortenText( shortdescbox );
	
	// Show '✓' and remove '+'
	product.siblings( '.bxcheck' ).show();
	
	// Leave the '+' when we're in catalogue mode
	if ( sliderli.closest( '.slider' ).attr( 'data-type' ) != 'catalogue' ) {
		product.siblings( '.bxplus' ).hide();
	}
	
	//////////////////////////////////////////////
	// Hide 'choose product', Create total box
	// if first product & selectview is possible
	//////////////////////////////////////////////
	
	if ( !iscatbox ) {
		theCat.append( '<div class="cattotal-container"><div class="cattotalprice currency"/><div class="cattotaltext"/></div>' )
			.find( '.selectproduct' ).css( {
			opacity: 0,
			top:     -30
		} );
		$( '#viewswitcher' ).removeClass( 'noselectpossible' );
	}
	
	////////////////////////
	// Create the new box
	////////////////////////
	
	var endOfCart = theCat.find( '.cattotal-container' );
	// Optionshippingbottom? add product at the end or before the shipping cost
	if ( Optionshippingbottom == 'true' && productname != 'DELIVERY' && endOfCart.prev().find( '.imgbox' )[ 0 ].alt == 'DELIVERY' ) {
		endOfCart = endOfCart.prev();
	}
	endOfCart
		.before( '<div class="catbox lastadded"><img class="imgbox lightboxenabled" src="#"><div class="productboxname"/><div class="productboxold notdisplayed"/><span class="SAPCode"/><div class="productboxinfo-container"><label class="specialCalc"><input type="checkbox" class="specialCalcCheck"><div class="nicecheckbox"/><span/></label><div class="productboxshortdesc"/></div><div class="close"/><div class="magnify"/><div class="box-biocide tooltipelement"/></div>' );
	
	// Define the new box
	newbox = theCat.find( '.lastadded' ).removeClass( 'lastadded' )
		// Initialize Robot before/after or modes (goat/sheep) parameter
		.data( 'specificMode', 0 );
	
	newboxTexts(); 							// Append name, shortdesc, attributes…
	updateCalc( newbox ); 					// fill several box info and update indicators
	animateNewbox(); 						// Make the new product fly
	newboxPackaging(); 						// Handle packagings
	catalogAndNoCalcMode( newbox, product ); 	// Adapt elements to catalogue mode
	animatePeriod( newbox );					// Make the period appear while moving
	wastebinShow( box, 0 ); 					// Show/hide wastebin
	
	// Add a youTube link to the desciption
	var urlPart = youtubeLink( youTube );
	if ( urlPart ) {
		newbox.find( '.productboxname' ).prepend( '<a class="box-youtube tooltipelement mediumtransition" data-title="YouTube" href="' + youTubeURL + urlPart + '" target="_blank"/>' );
	}
	
	// Adjust cell width automatically
	newbox.autoAdjustInputs();
	
	///////////////////////////////////////////////
	// scroll in case the article is not visible
	///////////////////////////////////////////////
	
	if ( !loadProcess ) {
		var newboxposition = newbox.offset().top - $( window ).height();
		setTimeout( function () {
			scrollWindow( newboxposition, null, -400 );
		}, 200 );
	}
	
	///////////////////////////////////////////////////////////////////////////////
	// Circuits & tank: Check product type => forbid other similar type items,…
	// (Option and not applied in catalogue mode)
	///////////////////////////////////////////////////////////////////////////////
	
	catType = theCat.attr( 'class' ).split( SP )[ 1 ];
	
	if ( !catalog && Optionhelpacidalk == 'true' && (catType.indexOf( 'circuits' ) >= 0 || catType.indexOf( 'tank' ) >= 0) ) {
		
		$( '.slider', '#slider-container' ).eq( category ).find( 'li' ).each( function () {
			
			scannedArticle = $( this );
			scannedType    = scannedArticle.find( 'img' ).attr( 'data-type' );
			
			// Maxigal/reminox-lin selected
			condition1 = type.indexOf( 'Max' ) >= 0 && scannedType.indexOf( 'Max' ) < 0;
			// Not a Maxigal/reminox-lin product selected
			condition2 = type.indexOf( 'Max' ) < 0 && scannedType.indexOf( 'Max' ) >= 0;
			// Same type
			condition3 = (type == scannedType);
			// Already selected?
			condition4 = !scannedArticle.find( '.bxcheck' ).isVisible();
			
			if ( ((condition1 || condition3) && condition4) || condition2 ) {
				scannedArticle
					.find( 'img' ).addClass( 'lowopacity' ).end() // set a fixed low opacity
					.find( '.bxplus' ).hide().end()
					.find( '.bxforbid' ).show();
			}
			
		} );
	}
	
	// Hide slider when no possible product choice
	if ( !loadProcess ) {
		setTimeout( function () {
			if ( !product.closest( '.slider' ).find( '.bxplus:visible' ).length ) {
				timerHideSlider( 100 );
			}
		}, 300 );
	}
	
	// Add binomial when required - small timeout to avoid addProduct bugs (find out why!)
	if ( binomial ) {
		setTimeout( function () {
			sliderli.closest( '.slider' ).find( 'img[alt="' + binomial + '"]' ).addProduct();
		}, 200 );
	}
	
	// Drag and drop
	catboxDragDrop();
	
};

function catboxDragDrop() {
	
	// Drag and drop
	$( '#categories' ).find( '.cat' ).sortable( 'destroy' );
	$( '#categories' ).find( '.cat' ).each( function () {
		// Allow drag&drop only when more than 1 box
		if ( $( this ).find( '.catbox' ).length > 1 ) {
			$( this ).sortable( {
				items: '.catbox'
			} );
		}
	} );
	
	// Record when change
	$( '#categories' ).find( '.cat' ).off( 'sortupdate' ).on( 'sortupdate', function () {
		fileStatusUpdate();
	} );
	
}

function findBinomial( productname, theCat, info ) {
	
	var suffix   = ["ACTIV'", "BASE"],
	    binomial = N;
	
	// Don't make binomials when catalogue as it's a "free" category
	if ( loadProcess || theCat.hasClass( 'catalogue' ) ) {
		return binomial;
	}
	
	// Find binomial name
	$.each( suffix, function ( index, value ) {
		if ( productname.slice( -(value.length + 1) ) == SP + value ) {
			binomial = productname.replace( SP + value, N ) + SP + suffix[ 1 - index ];
			return false
		}
	} );
	
	// Is the product already selected?
	// Do we only need to get the raw info?
	if ( !info ) {
		theCat.find( '.imgbox' ).each( function () {
			if ( this.alt == binomial ) {
				binomial = N;
				return false;
			}
		} );
	}
	
	return binomial;
	
}

function addProductInit() {
	
	$( document ).on( 'click touchstart', '.sliderImg', function ( e ) {
		if ( e.type === 'touchstart' ) {
			hideSlider();
		}
		$( this ).find( 'img' ).addProduct();
	} );
	
}

function newboxTexts() {
	
	var htmlX = N;
	
	newbox
		.find( '.productboxname' ).text( productnamedisplayed ).end()
		.find( '.productboxshortdesc' ).html( shortdescbox ).end()
		.find( 'img' ).attr( {
		'src':           srcImg,
		'alt':           productname,
		'data-title':    shortdesc,
		'data-type':     type,
		'data-subtype':  subtype,
		'data-cons':     cons,
		'data-consRS':   consRS,
		'data-unit':     unit,
		'data-pack':     packaging,
		'data-dens':     density,
		'data-packunit': packunit,
		'data-caption':  caption,
		'data-old':      oldP,
		'data-AB':       AB,
		'data-calcmode': calcMode,
		'data-specials': specials,
		'data-youtube':  youTube,
		'data-biocide':  biocideM,
		'data-SAP':      SAP
	} );
	
	tabIndex = (newbox.parent().index() * 100) + (newbox.parent().find( '.catbox' ).length * 2) - 1;
	
	packaging = packaging.split( CO );
	
	if ( specials != 'NAP' ) { // NAP is for Not A Product (E.g. DELIVERY)
		
		var classPack;
		for ( var i = 0; i < packaging.length; i++ ) {
			classPack = 'packaging';
			if ( i === 0 && demoProcess && (productname.indexOf( 'PERFO GRIF+' ) >= 0 || productname.indexOf( 'LIQ-IO 2500' ) >= 0) ) {
				classPack += SP + 'demopackaging';
			}
			htmlX += '<div class="' + classPack + '">' + packaging[ i ] + ED;
		}
	} else {
		// Disallow magnify and lightbox functionality
		newbox
			.find( '.imgbox' ).removeClass( 'lightboxenabled' ).end()
			.find( '.magnify' ).remove();
	}
	
	// Biocide mention?
	if ( biocideM ) {
		var bioM = biocideText[ $.inArray( country, countries ) ];
		newbox.find( '.box-biocide' )
			.attr( 'data-title', bioM.replace( ES, N ) )
			.text( bioM.replace( '¿', N ).split( ES )[ 0 ] + MO ).end()
			.show();
	}
	
	// Old product?
	if ( oldP ) {
		newbox.find( '.productboxold' )
			.removeClass( 'notdisplayed' );
	}
	
	// Append price consumption divs & texts
	// packaging and flying packaging item to box
	// Set colors
	
	catcolor = newbox.parent().find( '.titlecat' ).css( 'backgroundColor' );
	
	var n  = Math.floor( Math.random() * 11 );
	var k  = Math.floor( Math.random() * 1000000 );
	var id = String.fromCharCode( n ) + k;
	
	newbox
		.find( '.productboxinfo-container' )
		.append( '<div class="consinfoeaudouce"><input type="checkbox" id="' + id + '" class="eaudouce adjust"> <label for="' + id + '">' + eauDouceText[ 0 ].split( CO )[ lang ] + '</label></div><div class="consinfo"/><div class="packinfo"/><div class="subconsforcalc-container"><input tabindex=' + (tabIndex - 1) + ' class="subconsforcalc adjust" value="0"><div class="prodcalc"></div><input tabindex=' + (tabIndex - 1) + ' class="subconsforcalc2 adjust" value="0"><div class="prodcalc3"/><input tabindex=' + (tabIndex - 1) + ' class="subconsforcalc4 adjust" value="0"><div class="prodcalc2"/><div class="subconsforcalc3 mediumtransition"><div class="consforcalcbefore"/><div class="consforcalcafter"/><div class="consforcalcmode"/><div class="lactoduc">Lactoduc</div><div class="hoovesProtocol"/><div class="valorDetail"/></div><div class="moreconsinfo"/></div><div class="separate">' + clearBoth + ED + htmlX )
		.after( '<div class="rawprice-container"><div class="boxtotalprice"><span class="currency"/></div><div class="equal">=</div><div class="unitprice-container"><input tabindex=' + (tabIndex + 1) + ' class="unitprice adjust" value="0.00"><div class="discounticon">%</div><div class="unitpriceText"/></div><div class="multiply3"/><div class="packagingcalc-container"><div class="packagingcalcText"/><span/><div class="boxpackagingVal"/><div class="multiply2"/><div class="boxpackagingNum"/></div><div class="packarrow"/><div class="multiply"/><div class="consforcalc-container"><input tabindex=' + tabIndex + ' class="consforcalc adjust" value="0"><div class="consforcalcText"/></div><div class="artNumberSet-container"><div class="articleplus"/><div class="articleless"/></div><div class="monthsforbox"/><label class="forfree"><input type="checkbox" class="forfreecheck"><div class="nicecheckbox"/><span/></label></div><div class="fly-packaging"/>' ).end()
		.find( '.consinfo, .packinfo' ).css( 'color', catcolor ).end()
		.find( '.packaging, .fly-packaging, .subconsforcalc-container, .moreconsinfo, .specialCalc' ).css( 'backgroundColor', catcolor );
	
	newbox.append( clearBoth );
	
	////////////////////////////////////////////////////
	// Surfaces: we need to split all rooms/places
	////////////////////////////////////////////////////
	
	newbox.find( '.consinfoeaudouce' ).css( 'color', catcolor );
	if ( !(newbox.parent().hasClass( 'internalcircuits' ) || newbox.parent().hasClass( 'milktank' )) ) {
		newbox.find( '.consinfoeaudouce' ).hide();
	}
	
	if ( newbox.parent().hasClass( 'surfaces' ) ) { // Category
		
		var freqText = surfaceDetailText[ 0 ].split( CO )[ lang ],
		    addClass;
		
		// Showing the detail arrow
		// Using overflow hidden (not really compatible with a nice add product animation)
		newbox.addClass( 'overflowHidden' ).find( '.moreconsinfo' ).show();
		
		if ( !$( '#surfacedetail-container' ).length ) {
			htmlX = clearBoth + '<div id="surfacedetail-container" style="background:' + catcolor + '">';
			
			// Creating surface categories (surface type - frequency)
			$.each( surfaceDetailText, function ( index, value ) {
				if ( !index ) {
					return;
				} // Frequency text, used on the right
				addClass = 'S-' + value.split( CO )[ 1 ].replace( SP, N ); // Used load/save to identify cell surface type
				value    = value.split( CO )[ lang ];
				htmlX += '<input type="text" maxlength="6" class="surfaceitem surfacevalue adjust label_better' + SP + addClass + '" placeholder="' + value + '"/>';
				htmlX += '<div class="surfaceunit">m²&nbsp;x</div>';
				htmlX += '<input type="text" maxlength="5" class="surfaceitem surfacefreq adjust" placeholder="' + freqText + '"/>';
				htmlX += clearBoth;
			} );
			htmlX += ED;
			
			// Initialize label better plugin (nice way to use placeholder info)
			$( '#main-container' ).append( htmlX ).find( '.surfacevalue' ).labelBetter();
		}
		
		// The whole surface is always calculated, never entered
		newbox.find( '.subconsforcalc' ).prop( 'disabled', true );
		
	}
	
}

function animateNewbox() {
	
	if ( loadProcess || unredoProcess || $( '#lightbox-cart' ).isVisible() ) {
		newbox
			.css( 'opacity', 1 )
			.find( '.magnify' ).show().end()
			.find( '.monthsforbox' ).css( 'margin-right', -4 );
		return;
	}
	
	var xImg       = product.offset().left - newbox.offset().left,
	    yImg       = product.offset().top - newbox.offset().top,
	    wImg       = product.width(),
	    delayToBox = 800 * (yImg >= 0);
	
	newbox
		.css( 'z-index', 10000 )
		.animate( {
			opacity: 1
		} )
		.find( 'img' )
		.css( {
			top:     yImg,
			left:    xImg,
			width:   wImg,
			zIndex:  10100,
			opacity: 0.4
		} );
	setTimeout( function () {
		newbox.find( 'img' ).addClass( 'veryslowtransition' ).css( {
			top:     0,
			left:    -10,
			width:   128,
			opacity: 1
		} );
	}, 10 );
	
	setTimeout( function () {
		$( '.catbox, .catbox img', '#categories' ).css( {
				zIndex: 0
			} )
			.find( '.magnify' ).show().end() // Only visible now to avoid hover effect when flying
			.find( 'img' ).removeClass( 'veryslowtransition' ); // Needed as will flash
		// Highlight new item
		setTimeout( function () {
			newbox.children().not( '.close, .magnify' ).flash( 200 );
		}, 10 );
	}, delayToBox );
	
}

function catalogAndNoCalcMode( box, product ) {
	
	if ( catalog || box.parent().hasClass( 'nocalculations' ) ) {
		
		// Memorize nocalc mode, show adjust packaging controls and hide some items
		box
			.data( 'selectType', 'nocalc' )
			.find( '.artNumberSet-container' ).show().end()
			.find( '.packarrow, .monthsforbox, .consforcalcText' ).hide();
		
		if ( calcMode == 'manual' ) {
			box
				.find( '.packagingcalc-container' ).addClass( 'simpleFied' ).end()
				.find( '.consforcalc-container, .multiply' ).hide().end()
				.find( '.packagingcalcText' ).css( 'opacity', 0 );
		}
		
	}
	
	if ( !catalog ) {
		
		// low opacity for selected items
		product.addClass( 'lowopacity' );
		
		// Memorize estimate mode
		box.data( 'selectType', 'estimate' );
		
	}
	
}

function youtubeLink( youTube ) {
	
	var urlPart = youTube.split( CO );
	
	// No YouTube video
	if ( !urlPart[ lang ] ) {
		if ( urlPart[ 0 ] ) {
			urlPart = urlPart[ 0 ] // In case language not available -> french version
		} else {
			urlPart = N;
		}
	} else {
		urlPart = urlPart[ lang ];
	}
	
	return urlPart;
	
}

function animatePeriod( box ) {
	
	var monthsforbox = box.find( '.monthsforbox' );
	
	monthsforbox.text( months + ' M' );
	
	if ( !loadProcess && !catalog ) {
		monthsforbox.addClass( 'veryslowtransition' ).css( 'margin-right', -4 );
	}
	
}

function newboxPackaging() {
	
	var findPrice,
	    newboxpackaging = newbox.find( '.packaging' );
	
	// Show packaging calc if required …
	if ( calcMode == 'manual' ) {
		newbox.find( '.packagingcalc-container, .multiply3' ).show();
		if ( newbox.data( 'selectType' ) != 'nocalc' ) {
			newbox.find( '.packarrow' ).show();
		}
		
		// Show adjust packaging controls
		newbox
			.find( '.packagingcalc-container' ).addClass( 'simpleFied' ).end()
			.find( '.artNumberSet-container' ).show().insertAfter( newbox.find( '.packagingcalc-container' ) );
		
		// Multiple or 1 packaging?
		if ( newboxpackaging.length != 1 ) {
			
			// Prepare packaging items
			newboxpackaging.addClass( 'pointer' );
			
			newbox
				.find( '.packagingcalc-container' ).addClass( 'alertInput' ) // Switch to alert mode
				.find( 'span' ).text( packagingchooseText[ lang ] );
			
		} else {
			
			// Show packaging weight in the packaging box and retrieve estimated kg
			boxpackagingVal = newboxpackaging.text();
			boxconsforcalc  = newbox.find( '.consforcalc' ).val();
			
			// Calculate number (boxpackagingNum) of units (boxpackagingVal)
			boxpackagingNum = packagingCalc( boxpackagingVal, boxconsforcalc );
			
			newbox
				.find( '.packaging' ).css( { opacity: 1 } ).end() // No opacity
				.find( '.boxpackagingNum' ).text( boxpackagingNum ).end()
				.find( '.boxpackagingVal' ).text( boxpackagingVal ).end()
				.find( '.packagingcalc-container' ).children().show();
			
			// Is a price set?
			findPrice = scanPriceFile( newbox, productname, boxpackagingVal );
			if ( findPrice ) {
				newbox.find( '.unitprice' ).val( findPrice ).blur();
			}
			
		}
	} else {
		
		// Show adjust packaging controls
		newbox
			.find( '.consforcalc' ).addClass( 'simpleFied' ).end()
			.find( '.artNumberSet-container' ).show().insertAfter( newbox.find( '.consforcalc-container' ) );
		
		// Is a price set?
		findPrice = scanPriceFile( newbox, productname, newboxpackaging.text() );
		if ( findPrice ) {
			newbox.find( '.unitprice' ).val( findPrice ).blur();
		}
		
		if ( calcMode == 'pack' && newboxpackaging.length != 1 ) {
			newboxpackaging.addClass( 'pointer' );
		} else {
			newboxpackaging.css( { opacity: 1 } ); // No opacity
		}
	}
	
}

function dividedPackaging( packaging ) {
	
	var boxpackagingVal;
	
	if ( $.isNumeric( packaging ) ) {
		return parseFloat( packaging );
	}
	
	packaging = packaging.split( 'x' );
	
	if ( packaging.length == 2 ) {
		boxpackagingVal = parseFloat( packaging[ 0 ] ) * parseFloat( packaging[ 1 ] );
	} else {
		boxpackagingVal = parseFloat( packaging );
	}
	
	return boxpackagingVal;
	
}

function shortenText( target, maxLength ) {
	
	// Usual trunc (and remove potential space)
	if ( maxLength && target.length > maxLength ) {
		target = target.substr( 0, maxLength );
		if ( target.slice( -1 ) == SP ) {
			target = target.slice( 0, -1 );
		}
		return target + '…';
	}
	
	// Dot trunk
	maxLength = 215;
	
	while ( target.length > maxLength ) {
		if (target.lastIndexOf( CI ) > -1) {
			target = target.substr( 0, target.lastIndexOf( CI ) ) + MO;
		} else {
			target = target.substr(0, maxLength - MO.length) + MO;
		}
	}
	
	return target;
	
}

function specificInit() {
	
	$( document )
		.on( 'click', '.subconsforcalc3', function ( e ) {
			
			var currentBox = $( this ).closest( '.catbox' ),
			    myCat      = currentBox.closest( '.cat' ),
			    myVal      = currentBox.data( 'specificMode' ) || 0,
			    binomial;
			
			// Case robots
			if ( currentBox.find( '.consforcalcbefore' ).isVisible() ) {
				// Switch between false <-> true
				myVal = !myVal;
			} else if ( $( e.target ).is( '.consforcalcmode' ) ) {
				// Case modes (spray, teatdip…)
				myVal++;
				// In some cases (goat), not consistent (E.g. teatdip)
				var consum = (currentBox.find( 'img' ).attr( 'data-cons' )).split( AS )[ animal ].split( LI );
				if ( consum.length > 1 && currentBox.parent().attr( 'class' ).indexOf( 'after' ) >= 0 ) {
					consum = consum[ 1 ];
				} else {
					consum = consum[ 0 ];
				}
				consum = consum.split( CO );
				if ( !consum[ myVal ] ) {
					myVal++;
				}
				if ( myVal > consum.length - 1 ) {
					myVal = 0;
				}
				
				// Check if we need to change application mode for binomials
				binomial = findBinomial( currentBox.find( 'img' )[ 0 ].alt, myCat, 'info' );
				// e.hasOwnProperty('originalEvent') to avoid infinite loop
				if ( binomial && e.hasOwnProperty( 'originalEvent' ) ) {
					myCat.find( 'img[alt="' + binomial + '"]' ).parent().find( '.consforcalcmode' ).click();
				}
				
			} else if ( $( e.target ).is( '.lactoduc' ) ) {
				// Case lactoduc
				showmodal( $( e.target ) );
			} else if ( $( e.target ).is( '.hoovesProtocol' ) ) {
				// Case feet protocol modalLT
				showmodal( $( e.target ) );
			} else if ( $( e.target ).is( '.valorDetail' ) ) {
				// Case feet protocol modalLT
				showmodal( $( e.target ), currentBox.data( 'valorDetail' ) );
			}
			
			// Record and set to 0 so that the calculation is updated in robotcalc()
			currentBox.data( 'specificMode', myVal ).find( '.subconsforcalc' ).val( 0 );
			
			fullCalc();
			// Adjust add to cart
			validateProduct( currentBox );
			
		} )
		.on( 'click', '.moreconsinfo', function () {
			
			var myButton   = $( this ),
			    myCat      = myButton.closest( '.catbox' ),
			    surfDetail = $( '#surfacedetail-container' );
			
			/////////////////////////////////////////////////////////////////////////////////////////////
			// Principle of surface detail: only one detail box, we append it to the corresponding box
			// when requested
			// If the the box is shown in another box:
			// 1. we slide it up
			// 2. we make a delayed click (myButton is stored in data('delayed'))
			/////////////////////////////////////////////////////////////////////////////////////////////
			
			if ( surfDetail.isVisible() && !myCat.find( surfDetail ).length ) {
				// We trigger a slideUp of the current detailbox and record button to click when ready
				surfDetail.data( 'delayed', myButton ).closest( '.catbox' ).find( '.moreconsinfo' ).click();
				return;
			} else {
				// The current detaibox is appended to currentbox?
				
				if ( myCat.find( surfDetail ).length ) {
					// Fast slideup if in a diff catbox
					surfDetail.slideUp( 250 + 150 * (surfDetail.data( 'delayed' ) === null), function () {
						$( this ).appendTo( '#main-container' );
						if ( $( this ).data( 'delayed' ) ) {
							$( this ).data( 'delayed' ).click();
						}
						myButton.removeClass( 'triangleup' ).fadeIn();
					} );
				} else {
					// We append it to the current box and slide it down
					$( '#surfacedetail-container' ).data( 'delayed', null ).appendTo( myButton.closest( '.catbox' ).find( '.productboxinfo-container' ) )
						.slideDown( function () {
							// Show label better back if loaded/unredone
							if ( !surfDetail.find( '.lb_label' ).length ) {
								surfDetail.find( '.surfacevalue' ).each( function () {
									if ( $( this ).val() ) {
										$( this ).triggerAll( 'createbetterlabel removebetterlabel' );
									}
								} );
							}
							myButton.addClass( 'triangleup' ).fadeIn();
						} );
				}
			}
			
			myButton.fadeOut();
			
		} );
	
}

function updateBeforeAfter( box ) {
	
	if ( box.data( 'specificMode' ) ) {
		box.find( '.consforcalcbefore' ).removeClass( 'verylowopacity' );
	} else {
		box.find( '.consforcalcbefore' ).addClass( 'verylowopacity' );
	}
	
}

function updateModes( box, myMode ) {
	
	box.find( '.consforcalcmode' ).html( modeInfoText[ myMode ].split( CO )[ lang ] );
	
}

function addDiscountInit() {
	
	$( document ).on( 'click', '.discounticon', function () {
		
		currentBox = $( this ).closest( '.catbox' );
		
		// Filter udder/not udder when udder discount mode
		if ( discountProcess && Optionudderdiscount == 'true' && currentBox.find( 'img' ).attr( 'data-type' ).indexOf( 'Udder' ) < 0 ) {
			return;
		}
		
		createDiscount( currentBox );
		
		if ( !discountProcess ) {
			currentBox.find( '.discount' ).blur().focus();
		}
		
	} );
	
}

function createDiscount( box ) {
	
	if ( box.find( '.discount' ).length ) {
		return;
	}
	
	box
		.find( '.discounticon' ).hide().end()
		.find( '.close' )
		.before( '<div class="discountprice-container"><div class="boxdiscountprice"><span class="currency">0</span></div><div class="equal">% =</div><div class="discount-container"><input tabindex=' + (tabIndex + 2) + ' class="discount adjust" value="0.0"></div><div class="discountText"></div><div class="close-discount"></div></div>' );
	
	var discountBox = box.find( '.discountprice-container' ).show();
	$( '.discountText', '#categories' ).text( discountText[ lang ] );
	
	// Rearrange space in case of biocidal mention
	if ( box.find( 'img' ).attr( 'data-biocide' ) ) {
		box.find( '.discountprice-container' ).addClass( 'discountUp' );
	}
	
	// Animate discount box
	
	if ( !loadProcess ) {
		discountBox
			.css( 'right', 80 )
			.animate( {
				right: 10
			}, 200 );
	}
}

function addMultipleDiscount( discountInput ) {
	
	var discount   = discountInput.val(),
	    currentBox = discountInput.parent().parent().parent();
	
	// Case udder hygiene only: we do not take into account other discount change
	if ( Optionudderdiscount == 'true' && currentBox.find( 'img' ).attr( 'data-type' ).indexOf( 'Udder' ) < 0 ) {
		return;
	}
	
	discountProcess = true;
	
	$( '.discounticon', '#categories' ).click();
	
	$( '.discount', '#categories' ).each( function () {
		currentBox = $( this ).parent().parent().parent();
		// Case udder hygiene only: we do not change other product discount
		if ( Optionudderdiscount == 'false' || (Optionudderdiscount == 'true' && currentBox.find( 'img' ).attr( 'data-type' ).indexOf( 'Udder' ) >= 0) ) {
			$( this ).val( discount );
			showTopWarning( 32 + (Optionudderdiscount == 'true'), null, 6000, discount );
		}
	} );
	
	discountProcess = false;
	
	fullCalc();
	validateAllProducts( $( '.catbox', '#categories' ) );
	
}

function removeDiscountInit() {
	
	var speed = 200;
	
	$( document ).on( 'click', '.close-discount', function () {
		
		var discountBox      = $( this ).parent(),
		    currentBox       = discountBox.parent(),
		    currentBoxHeight = currentBox.height();
		
		// Remove clicky when forfree becomes checked
		speed = (currentBox.find( '.forfreecheck' ).prop( 'checked' )) ? 1 : speed;
		
		// Multiple discounts
		if ( (Optionglobaldiscount == 'true' || (Optionudderdiscount == 'true' && currentBox.find( 'img' ).attr( 'data-type' ).indexOf( 'Udder' ) >= 0)) && !discountProcess && $( '.discount', '#categories' ).length > 1 ) {
			discountProcess  = true;
			lastingDiscounts = 0;
			// adjust depending on udder hygiene discounted products
			if ( Optionudderdiscount == 'true' ) {
				lastingDiscounts = $( '.discount', '#categories' ).length - countUdderDiscProducts();
			}
			$( '.close-discount', '#categories' ).click();
			return;
		}
		
		// Do not remove other products when we're removing udder hygiene only
		if ( discountProcess && Optionudderdiscount == 'true' && currentBox.find( 'img' ).attr( 'data-type' ).indexOf( 'Udder' ) < 0 ) {
			return;
		}
		
		currentBox
			.css( {
				overflow: 'hidden',
				height:   currentBoxHeight
			} ); // Recreates overflow for the effect - Freezes height (glitch)
		
		// Animate discount box
		discountBox
			.animate( {
				right: 25
			}, speed )
			.animate( {
				right:   -80,
				opacity: 0
			}, speed, function () {
				currentBox
					.css( 'overflow', 'visible' )
					.find( '.discounticon' ).show(); // Show discount icon again
				discountBox.remove();
				validateProduct( currentBox );
				
				if ( discountProcess ) {
					if ( $( '.discountprice-container' ).length == lastingDiscounts ) {
						discountProcess = false;
						fullCalc();
						validateAllProducts( $( '.catbox', '#categories' ) );
						showTopWarning( 34 + (Optionudderdiscount == 'true'), null, 6000 );
					}
				} else {
					fullCalc();
				}
				
			} );
		
	} );
	
}

function countUdderDiscProducts() {
	
	var udderDisc = 0;
	
	$( '.close-discount' ).each( function () {
		if ( $( this ).parent().parent().find( 'img' ).attr( 'data-type' ).indexOf( 'Udder' ) >= 0 ) {
			udderDisc++;
		}
	} );
	return udderDisc;
	
}

$.fn.removeProduct = function () {
	
	var boxToremove = $( this ),
	    boxLength   = boxToremove.length;
	
	boxToremove.css( 'min-height', 0 )
		.animate( {
			height:  0,
			opacity: 0,
			padding: 0
		}, 500, function () {
			boxLength--;
			
			// In case we have several deleted boxes, some operations are made at the end
			if ( !boxLength ) {
				showHideCategories( boxToremove ); // in select mode
				noProductRemoveItems( boxToremove ); // 'Choose product', box total & GIF management
			}
			//////////////////////////////////////////////////////////////////////
			// Remove '✓' and show '+'
			// Do the same for same type products that can be selected again
			//////////////////////////////////////////////////////////////////////
			
			type          = boxToremove.find( 'img' ).attr( 'data-type' );
			sliderArticle = $( '.slider', '#slider-container' ).eq( category );
			
			sliderArticle.find( 'img' ).each( function () {
				var nameImg        = this.alt,
				    scannedArticle = $( this ).parent();
				if ( nameImg == boxToremove.find( 'img' )[ 0 ].alt ) {
					$( this )
						.removeClass( 'lowopacity' )
						.siblings( '.bxplus' ).show()
						.siblings( '.bxcheck' ).hide();
				}
				if ( Optionhelpacidalk == 'true' && type == scannedArticle.find( 'img' ).attr( 'data-type' ) ) {
					$( this )
						.removeClass( 'lowopacity' )
						.siblings( '.bxplus' ).show()
						.siblings( '.bxforbid' ).hide();
				}
			} );
			
			////////////////////////////////////////////////////////////////////
			// Check if no more product selected => reactivate all products
			////////////////////////////////////////////////////////////////////
			
			if ( Optionhelpacidalk == 'true' && boxToremove.parent().find( '.catbox' ).length == 1 ) {
				sliderArticle
					.find( 'img' ).removeClass( 'lowopacity' ).end()
					.find( '.bxplus' ).show().end()
					.find( '.bxforbid' ).hide();
			}
			
			///////////////////////////////
			// Show/Hide wastebin
			///////////////////////////////
			
			wastebinShow( boxToremove, 1 );
			
			$( this ).parent().find( '.cattotalprice' )
				.css( 'color', '#333333' )
				.removeClass( 'totalGIF' );
			
			$( this ).remove(); // Box removed
			if ( !boxLength ) {
				fullCalc();
			} // New amount (only at the end)
			
			// Drag and drop
			catboxDragDrop();
			
		} );
	
};

function noProductRemoveItems( box ) {
	
	cat = box.parent();
	
	if ( cat.find( '.catbox' ).length == 1 ) { // Show 'Choose product'
		cat
			.find( '.selectproduct' ).animate( {
			top:     -8,
			opacity: 1
		}, 200 ).end()
			.find( '.cattotal-container' ).animate( { // Remove cat total box
			height:  0,
			opacity: 0,
			padding: 0
		}, 500, function () {
			$( this ).remove();
		} );
	} else {
		cat.find( '.cattotalprice' ) // Show total GIF only if more than 1 product
			.html( NBSP )
			.addClass( 'totalGIF' );
	}
}

function priceTaxforTexts() {
	
	if ( Optiontax == 'true' ) {
		
		unitpriceText   = unitpriceTaxText.slice( 0 );
		totalsumText    = totalsumTaxText.slice( 0 );
		unitkgpriceText = unitkgpriceTaxText.slice( 0 );
		
		// PDF Estimate specific
		grandtotalsumText = grandtotalsumTaxText.slice( 0 );
		totaldiscountText = totaldiscountTaxText.slice( 0 );
		
	}
	
}

function showHideCategories( boxToremove ) {
	
	// Hide former filled category in select mode
	if ( boxToremove.parent().find( '.catbox' ).length == 1 && $( '.catbox', '#categories' ).length > 1 && $( '.restrictedview' ).length ) {
		setTimeout( function () {
			$( '#categories' ).removeClass( 'restrictedview' );
			$( '#viewswitcher' ).removeClass( 'fullview' );
			animateCategories();
		}, 550 );
	}
	
	unHideCategories( 1 );
	
}

function unHideCategories( value ) {
	
	if ( $( '.catbox', '#categories' ).length == value ) {
		// Select view is impossible
		$( '#viewswitcher' ).addClass( 'noselectpossible' );
		// Show hidden categories if we were in animate mode
		if ( $( '.restrictedview' ).length ) {
			animateCategories();
		}
	}
	
}

function updateFileTabCont( scrollPos ) {
	
	if ( scrollPos >= 30 && !$( '#fileTab-maincontainer' ).hasClass( 'filetabinmenu' ) ) {
		$( '#fileTab-maincontainer' )
			.appendTo( $( '#topmenu' ) )
			.addClass( 'filetabinmenu' );
		$( '#topmenu' ).removeClass( 'maxHeight65' );
	} else if ( scrollPos < 30 && $( '#fileTab-maincontainer' ).hasClass( 'filetabinmenu' ) ) {
		$( '#fileTab-maincontainer' )
			.prependTo( $( '#info' ) )
			.removeClass( 'filetabinmenu' );
		$( '#topmenu' ).addClass( 'maxHeight65' );
	}
	
}

function languageRecognition() {
	
	var browserlang = window.navigator.userLanguage || window.navigator.language;
	
	browserlang = browserlang.substr( 0, 2 );
	
	if ( $.inArray( browserlang, languages ) >= 0 ) {
		country  = browserlang.toUpperCase() + DH + browserlang;
		language = browserlang;
	} else {
		country  = countries[ 0 ];
		language = languages[ 0 ];
	}
	
}

function blobCheck() {
	
	if ( typeof Blob == 'undefined' || typeof Blob != 'function' ) {
		showTopWarning( 1 );
		blob      = 'NB';
		saveError = 'unavailable';
		loadError = saveError;
	}
	loadSaveEnable();
	loadSaveAllow();
	
}

function showTopWarning( warning, speed, hideafter, plustext, delay, link ) {
	
	if ( diagProcess ) {
		return;
	}
	
	var texttoshow;
	
	speed = speed || 500;
	delay = delay || 100;
	
	clearTimeout( timer8 );
	clearTimeout( timer9 );
	
	warningType = warning;
	
	if ( !plustext ) {
		plustext = N;
	}
	
	// warningText array or direct text?
	if ( warning >= 0 ) {
		if ( oldwarningType != warningType ) {
			hideTopWarning( null, 1 );
		}
		texttoshow = warningText[ (warningType - 1) * langScope + lang ];
	} else {
		texttoshow     = warning;
		oldwarningType = texttoshow;
	}
	
	// Inside/right
	if ( texttoshow.indexOf( '&IT' ) >= 0 ) {
		texttoshow = texttoshow.replace( '&IT', plustext );
	} else {
		texttoshow += plustext;
	}
	
	// Info color
	textBkgColor = '#C2DBF3';
	// Warning color
	if ( texttoshow.substr( 0, 1 ) == '!' ) {
		texttoshow   = texttoshow.substr( 1 );
		textBkgColor = '#FFC5C5';
	}
	// Important info color
	if ( texttoshow.substr( 0, 1 ) == '?' ) {
		texttoshow   = texttoshow.substr( 1 );
		textBkgColor = '#E2FF5D';
	}
	$( '#top-warning' )
		.css( 'backgroundColor', textBkgColor );
	$( '#warntext' )
		.removeClass( 'highlightpointer' )
		.html( texttoshow.replace( MU, App ) );
	
	// Link? i.e. url or id/class (auto detection)
	if ( link ) {
		if ( link.length ) {
			$( '#warntext' ).addClass( 'highlightpointer' )
				.off().on( 'click', function () {
				// Click on the corresponding class or ID
				if ( '.#'.indexOf( link.substr( 0, 1 ) ) >= 0 ) {
					$( link ).click();
				} else {
					// Go to the url
					window.location.href = link;
					hideTopWarning();
				}
			} );
		}
	}
	
	timer8 = setTimeout( function () {
		
		// Show top warning bar and shift also nearby elements
		$( '#top-warning' ).stop( 1, 1 ).animate( {
			marginTop: 0
		}, speed );
		$( '#topWidget' ).stop( 1, 1 ).animate( {
			marginTop: 29
		}, speed );
		$( '#navbar' ).removeClass( 'veryslowtransition' ).stop( 1, 1 ).animate( {
			height: 94
		}, speed, function () {
			$( this ).addClass( 'veryslowtransition' );
		} );
		$( '#setPrices-widget' ).css( 'top', 29 );
		
		// Full screen options
		if ( FSOptionsProcess ) {
			$( '#fullscreenoptions-container' ).animate( {
				top: 29
			}, speed );
			$( '#fullscreenoptions' ).animate( {
				marginTop: -29
			}, speed );
		}
		
		// If not permanent (hideafter is the delay)
		if ( hideafter ) {
			timer9 = setTimeout( function () {
				hideTopWarning( speed );
			}, hideafter + speed );
		}
		
	}, delay );
	
	oldwarningType = warningType;
	
	recordHistory( texttoshow, warningType );
	
	// Update if already in History mode
	if ( historyProcess ) {
		$( '#refresh-History' ).click();
	}
	
}

function recordHistory( messagetorecord, warningNumber ) {
	
	var maxSize = 150,
	    h       = 'history';
	
	// Do not record 'Please wait' messages
	if ( messagetorecord == warningText[ 6 * langScope + lang ] ) return;
	
	// Size limitation
	if ( loadData( h ).split( RO ).length >= maxSize ) {
		saveData( h, loadData( h ).split( RO ).slice( 1, maxSize ).join( RO ) );
	}
	
	// Is is a number based warningtext use E.g. recordHistory(8)?
	if ( !isNaN( messagetorecord ) ) {
		warningNumber   = messagetorecord + 1;
		messagetorecord = warningText[ (warningNumber - 1) * langScope + lang ];
	}
	
	// Standard warning (not modified)
	var stdWarning = warningText[ (warningNumber - 1) * langScope + lang ] || N;
	
	// Removing the color indicator
	if ( '!?'.indexOf( stdWarning.substr( 0, 1 ) ) >= 0 ) {
		stdWarning = stdWarning.substring( 1 );
	}
	
	// Using number to reduce string size
	if ( messagetorecord == stdWarning ) {
		messagetorecord = warningNumber;
	}
	
	// Adding date, time and message and saving the new string
	retrieveDateTime();
	messagetorecord = RO + dataDate + DH + dataTime + HA + messagetorecord;
	saveData( h, loadData( h ) + messagetorecord );
	
}

function TopWarningInit() {
	
	$( document ).on( 'click', '#close-top-warning', hideTopWarning );
	
}

function hideTopWarning( speed, noclear ) {
	
	if ( $( '#top-warning' ).css( 'margin-top' ) != '0px' ) {
		return;
	}
	speed = speed || 500;
	
	$( '#top-warning' )
		.stop( 1, 1 ).animate( {
		marginTop: -29
	}, speed );
	$( '#warntext' )
		.removeClass( 'highlightpointer' )
		.off(); // used for links
	$( '#topWidget' ).animate( {
		marginTop: 0
	}, speed );
	$( '#navbar' ).removeClass( 'veryslowtransition' ).animate( {
		height: 65
	}, speed, function () {
		$( this ).addClass( 'veryslowtransition' );
	} );
	$( '#setPrices-widget' ).css( 'top', 0 );
	
	$( '#fullscreenoptions-container' ).animate( {
		top: 0
	}, speed );
	$( '#fullscreenoptions' ).animate( {
		marginTop: 0
	}, speed );
	
	// Remove rightmenu warning icon
	$( '#rightmenuwarning' ).remove();
	
	// Clear warningtype
	if ( !noclear ) {
		warningType = -1;
	}
	
}

function boxCalculations( box ) {
	
	catType         = box.parent().attr( 'class' );
	var boxImg      = box.find( 'img' ),
	    productname = boxImg[ 0 ].alt,
	    subCatType  = boxImg.attr( 'data-subtype' ),
	    calcmode    = boxImg.attr( 'data-calcmode' );
	
	// Direct switch to simple calc if the product is an accessory
	if ( $( '#slider-container' ).find( '.slider[data-type="accessories"]' ).find( 'img[alt="' + productname + '"]' ).length ) {
		simpleCalc( box );
	}
	// Footbaths
	else if ( subCatType == 'footbath' ) {
		footbathCalc( box );
	}
	// Udder & Clusters
	else if ( catType.indexOf( 'udder' ) >= 0 || catType.indexOf( 'clusters' ) >= 0 || catType.indexOf( 'betweenmilkings' ) >= 0 ) {
		udderCalc( box );
	}
	// Internal circuits
	else if ( catType.indexOf( 'circuits' ) >= 0 ) {
		circuitsCalc( box );
	}
	// Tank
	else if ( catType.indexOf( 'tank' ) >= 0 ) {
		tankCalc( box );
	}
	// Robotic systems
	else if ( catType.indexOf( 'robotic' ) >= 0 ) {
		robotCalc( box );
	}
	// Surfaces
	else if ( catType.indexOf( 'surfaces' ) >= 0 ) {
		// surfacesCalc(box); No calculation wanted by Kersia update 08-2019
		simpleCalc( box );
	}
	// Paw
	else if ( catType.indexOf( 'paw' ) >= 0 ) {
		pawCalc( box );
	}
	// Water treatment
	else if ( catType.indexOf( 'water' ) >= 0 ) {
		waterCalc( box );
	}
	// Controllers
	else if ( catType.indexOf( 'controllers' ) >= 0 ) {
		catalogueCalc( box );
	}
	// Nutrition
	else if ( catType.indexOf( 'nutrition' ) >= 0 ) {
		nutriCalc( box );
	}
	// Valorization
	else if ( catType.indexOf( 'valor' ) >= 0 ) {
		valorizationCalc( box );
	}
	// Other products
	else if ( catType.indexOf( 'vehicles' ) >= 0 ) {
		simpleCalc( box );
	}
	// Catalogue
	else if ( catType.indexOf( 'catalogue' ) >= 0 ) {
		catalogueCalc( box );
	}
	
	////////////////////////////////////////////
	// Fill right texts depending on language
	////////////////////////////////////////////
	
	// change unitpriceText in case of kg
	boxPack = boxImg.attr( 'data-unit' ).split( CO )[ lang ];
	
	if ( boxPack.indexOf( 'kg' ) >= 0 && boxPack.indexOf( AS ) < 0 && Optionpriceperkg == 'true' ) {
		priceType = unitkgpriceText[ lang ];
	} else {
		priceType = unitpriceText[ lang ];
	}
	box
		.find( '.unitpriceText' ).text( priceType ).end()
		.find( '.consforcalcText' ).text( consforcalcText[ lang ] ).end()
		.find( '.packagingcalcText' ).text( packagingcalcText[ lang ] ).end()
		.find( '.forfree span' ).text( disposalText[ lang ].split( LI )[ 0 ] );
	
	//////////////////////////////////////////////////
	// Fill packunit
	//////////////////////////////////////////////////
	
	if ( calcmode == 'pack' ) {
		boxpackagingVal = box.find( '.boxpackagingVal' ).text() || 'x';
		packunit        = boxImg.attr( 'data-packunit' )
			.split( CO )[ lang ]
			.replace( '&P', boxPack )
			.replace( '&Q', boxpackagingVal );
		box.find( '.multiply' ).html( packunit + ' x' );
	} else {
		packunit = boxImg.attr( 'data-packunit' )
			.split( CO )[ lang ]
			.replace( '&P', boxPack )
			.replace( '&Q', boxImg.attr( 'data-pack' ) );
		box
			.find( '.multiply, .multiply3' ).html( packunit + ' x' ).end()
			.find( '.multiply2' ).html( NBSP + 'x' + NBSP );
	}
	
	//////////////////////////////////////////////////
	// Case manual packaging
	//////////////////////////////////////////////////
	
	if ( calcmode == 'manual' ) {
		
		box.find( '.multiply' ).html( packunit );
		
		boxconsforcalc  = box.find( '.consforcalc' ).val();
		boxpackagingVal = box.find( '.boxpackagingVal' ).text();
		boxpackagingNum = box.find( '.boxpackagingNum' ).text();
		
		if ( boxpackagingVal ) { // Already a packaging?
			
			// Compare old and new theor. packing and update if necessary
			if ( box.data( 'selectType' ) == 'estimate' && (packagingCalc( boxpackagingVal, boxconsforcalc ) + AS + boxpackagingVal) != box.data( 'theorPackaging' ) && box.data( 'theorPackaging' ) != 'loaded' ) {
				boxpackagingNum = packagingCalc( boxpackagingVal, boxconsforcalc );
				box.find( '.boxpackagingNum' ).text( boxpackagingNum );
			}
			if ( box.data( 'selectType' ) == 'nocalc' && !boxpackagingNum ) {
				boxpackagingNum = 1;
				box.find( '.boxpackagingNum' ).text( boxpackagingNum );
			}
			
			// Memorize theoritical packing
			box.data( 'theorPackaging', packagingCalc( boxpackagingVal, boxconsforcalc ) + AS + boxpackagingVal );
			
			// Alert & Clear 'choose' text
			box.find( '.packagingcalc-container' )
				.removeClass( 'alertInput' )
				.find( 'span' )
				.empty();
			
			// Add whole quantity info as tooltip
			box.find( '.packagingcalc-container' )
				.attr( 'data-title', boxpackagingNum * dividedPackaging( boxpackagingVal ) + SP + packunit )
				.addClass( 'tooltipelement' );
			
		}
		// Take the number of packaging or total kg depending on Optionpriceperkg
		boxconsforcalc = boxpackagingNum || 0;
		// In case not kg but e.g. tabs
		if ( Optionpriceperkg == 'true' && boxPack == 'kg' ) {
			boxconsforcalc *= dividedPackaging( boxpackagingVal );
		}
		
	} else {
		boxconsforcalc = box.find( '.consforcalc' ).val();
	}
	
	//////////////////////////////////////////////////
	// Fill box total, discount, discounted price
	// and raw cost per animal/month
	//////////////////////////////////////////////////
	
	// Calculate box total
	boxtotalprice = (boxconsforcalc || 0) * parseFloat( box.find( '.unitprice' ).val() );
	boxtotalprice *= (!box.find( '.forfreecheck' ).prop( 'checked' )); // Set to 0 if free article
	boxtotalprice = boxtotalprice.toFixed( 2 );
	box.find( '.boxtotalprice span', '#categories' ).text( boxtotalprice );
	
	// Discount management & Calculates discounted box total
	discountBox         = box.find( '.discount' );
	var discountedPrice = boxtotalprice;
	discountClass       = SP + 'nodiscount';
	
	if ( discountBox.length ) {
		discountClass  = SP + 'discountedbkg';
		// Discount display
		boxDiscountVal = discountBox.val();
		$( '.discountText', '#categories' ).text( discountText[ lang ] );
		discount = N + (-boxtotalprice * (boxDiscountVal / 100)).toFixed( 2 );
		box.find( '.boxdiscountprice span' ).text( discount );
		// Box discounted price
		discountedPrice *= (100 - boxDiscountVal) / 100;
		discountedPrice = discountedPrice.toFixed( 2 );
		
	}
	
	// Raw cost per animal/month (only for udder hygiene)
	rawCostPerAnimal = discountedPrice * prodcalc / box.find( '.consforcalc' ).val();
	rawCostPerAnimal = costPerAnimal( rawCostPerAnimal ) * (catType.indexOf( 'udder' ) >= 0);
	
	// Data set (for estimatesheet)
	box
		.data( 'discountedPrice', discountedPrice )
		.data( 'rawCostPerAnimal', rawCostPerAnimal );
	
}

function footbathCalc( box ) {
	
	var boxImg       = box.find( 'img' ),
	    consinfo1,
	    consinfoText = N;
	
	box.find( '.subconsforcalc2, .prodcalc2' ).show();
	
	consinfoText = footbathinfoText.slice( 0 );
	consinfo     = boxImg.attr( 'data-cons' );
	
	consinfo1 = consinfo.split( '>' ); // E.g. "1-4>2" means 1 to 4 but use 2 for estimation
	if ( consinfo1.length > 1 ) {
		consinfo = consinfo1[ 1 ];
	}
	
	box.find( '.consinfo' ).text( consinfoText[ lang ] );
	
	// Display default cons value when created
	subconsforcalc = box.find( '.subconsforcalc' ).val();
	if ( Number( subconsforcalc ) === 0 ) {
		box.find( '.subconsforcalc' ).val( 1 );
	}
	subconsforcalc2 = box.find( '.subconsforcalc2' ).val();
	if ( Number( subconsforcalc2 ) === 0 ) {
		box.find( '.subconsforcalc2' ).val( 52 );
	}
	
	// Gather estimated consumpt. and fill input field
	subconsforcalc  = box.find( '.subconsforcalc' ).val();
	subconsforcalc2 = box.find( '.subconsforcalc2' ).val();
	
	prodcalc      = parseInt( subconsforcalc * 5 * consinfo * subconsforcalc2 / 100 );
	prodcalcText  = ' x 5L x &C% x'
		.replace( '&C', consinfo );
	prodcalc2Text = '= &P '
		.replace( '&P', prodcalc );
	box
		.find( '.prodcalc' ).html( prodcalcText ).end()
		.find( '.prodcalc2' ).html( prodcalc2Text );
	
	// Append unit to cons info lower text
	unit = boxImg.attr( 'data-unit' ).split( CO )[ lang ];
	box.find( '.prodcalc2' ).append( unit );
	
	// Fill with estimated consumption
	setEstimatedQuantity( box );
	
}

function showHideConsInfo( box, cons ) {
	
	// E.g. case LIQ-IO C
	if ( !(cons * 1) ) {
		box.find( '.consinfo' ).addClass( 'noopacity' );
	}
	
}

function udderCalc( box ) {
	
	var boxImg        = box.find( 'img' ),
	    productname   = boxImg[ 0 ].alt,
	    myMode        = box.data( 'specificMode' ),
	    udderConsText = N;
	
	consinfoText = animalinfoText.slice( 0 );
	
	// E.g. TRAYOR (before diff. than after)
	if ( boxImg.attr( 'data-cons' ).split( AS )[ animal ] ) {
		consinfo = boxImg.attr( 'data-cons' ).split( AS )[ animal ].split( LI );
	} else {
		consinfo = boxImg.attr( 'data-cons' ).split( LI );
	}
	
	if ( consinfo.length > 1 && catType.indexOf( 'after' ) >= 0 ) {
		consinfo = consinfo[ 1 ];
	} else {
		consinfo = consinfo[ 0 ];
	}
	
	var isUdder = catType.indexOf( 'udderbefore' ) >= 0 || catType.indexOf( 'udderafter' ) >= 0;
	if ( isUdder ) {
		box.find( '.subconsforcalc2, .prodcalc3' ).show();
		box.find( '.monthsforbox' ).hide();
	}
	
	// E.g. GOAT (modes)
	consinfo1 = consinfo.split( CO );
	
	// Modes => show subconsforcalc3/consforcalcbefore/after & and qty +after milking qty
	if ( consinfo1.length > 1 ) {
		box.find( '.subconsforcalc3, .consforcalcmode' ).show();
		consinfo = consinfo1[ box.data( 'specificMode' ) ];
		// We search for the first available value if required
		while ( consinfo == N ) {
			myMode++;
			if ( myMode == consinfo1.length ) {
				myMode = 0;
			}
			box.data( 'specificMode', myMode );
			consinfo = consinfo1[ box.data( 'specificMode' ) ];
		}
		updateModes( box, myMode );
	} else {
		consinfo = consinfo1[ 0 ];
		// Taking the low part concentration for calc
		consinfo = consinfo.split( DH )[ 0 ];
	}
	
	// Display default cons value when created
	subconsforcalc = box.find( '.subconsforcalc' ).val();
	if ( Number( subconsforcalc ) === 0 ) {
		box.find( '.subconsforcalc' ).val( parseFloat( consinfo ) );
	}
	
	density = boxImg.attr( 'data-dens' ); // Used in ml mode
	unit    = boxImg.attr( 'data-unit' ).split( CO )[ lang ];
	
	// Gather estimated consumpt. and fill input field
	consforcalc    = box.find( '.consforcalc' ).val();
	subconsforcalc = box.find( '.subconsforcalc' ).val();
	
	subconsforcalc2 = box.find( '.subconsforcalc2' ).val();
	if ( Number( subconsforcalc2 ) === 0 ) {
		box.find( '.subconsforcalc2' ).val( months );
		subconsforcalc2 = months;
	}
	
	// Usual case, we use kg per animal per year
	prodcalc2Text = NBSP + 'x' + NBSP;
	if ( !isNaN( consinfo ) ) {
		if ( isUdder ) {
			prodcalc     = parseInt( subconsforcalc * parseFloat( subconsforcalc2 / 12 ) * dataAnimals );
			prodcalcText = monthsinfoText[ lang ] + ' x &C = &P ';
		} else {
			prodcalc     = parseInt( subconsforcalc * dataAnimals );
			prodcalcText = 'x &C = &P ';
		}
		
		prodcalcText = prodcalcText.replace( '&C', dataAnimals )
			.replace( '&P', prodcalc );
		
		udderConsText = unit;
	} else {
		// Other(E.g. 4 ml): we use spray volume per cluster
		consinfoText = sprayinfoText.slice( 0 );
		var milkings = findAttributesInArray( animalType, animalAttributes )[ 2 ];
		prodcalc     = parseInt( parseInt( subconsforcalc ) / 1000 * dataAnimals * 0.5 / 100 * density * milkings );
		prodcalcText = 'x &C x &M x &D x &T = &P '
			.replace( '&C', dataAnimals )
			.replace( '&P', prodcalc )
			.replace( '&M', '0.5%' )
			.replace( '&D', density )
			.replace( '&T', milkings );
	}
	prodcalcText += unit;
	
	// Show cons info text
	udderConsText = consinfoText[ lang ]
		                .replace( '&AW', consinfo )
		                .replace( '&IT', findAttributesInArray( animalType, animalAttributes )[ animalAttributes[ 0 ].split( CO ).length - langScope + lang ].split( LI )[ 0 ].toLowerCase() ) + udderConsText;
	// Show average and prodcalc
	box.find( '.consinfo' ).text( udderConsText ).end();
	
	if ( isUdder ) {
		box.find( '.prodcalc' ).html( prodcalc2Text ).end()
			.find( '.prodcalc3' ).html( prodcalcText ).end();
	} else {
		box.find( '.prodcalc' ).html( prodcalcText );
	}
	
	// E.g. case LIQ-IO C
	showHideConsInfo( box, consinfo );
	
	// Adjust consumpt. vs pack
	typeProd    = boxImg.attr( 'data-type' );
	pack        = boxImg.attr( 'data-pack' );
	productname = boxImg[ 0 ].alt;
	
	if ( typeProd.indexOf( 'paper' ) >= 0 || typeProd.indexOf( 'wipes' ) >= 0 || productname.indexOf( 'SEPTIFLASH' ) >= 0 ) {
		prodcalc = Math.ceil( prodcalc / pack );
	}
	// Fill with estimated consumption
	setEstimatedQuantity( box, isUdder );
	
}

function circuitsCalc( box ) {
	var boxImg = box.find( 'img' );
	
	// Eau douce, rapport 85 alcalin / 15 acide en eau douce, 50/50 en eau dure
	var divider = box.find( '.eaudouce' ).is( ':checked' ) ? (boxImg.data( 'type' ) == '#Alk' ? 0.85 : 0.15) : 0.5;
	
	var attrib          = findAttributesInArray( animalType, animalAttributes ),
	    waterPerCluster = attrib[ 4 ],
	    //isCow=(animalType=='cow'),
	    milkingDays     = Math.ceil( attrib[ 2 ] * divider ); // (milkings/(2 milkings per day))
	
	box.find( '.lactoduc' ).text( specificText[ 0 ].split( CO )[ lang ] );
	box.find( '.subconsforcalc3, .lactoduc' ).show();
	// Old limitations : cow:on hover, the others always shown
	// if (isCow |) {box.find('.subconsforcalc-container').addClass('showOnHover');}
	box.find( '.subconsforcalc-container' ).addClass( 'showOnHover' );
	
	//consinfoText=clustersinfoText.slice(0);
	consinfoText = lactoducinfoText.slice( 0 );
	box.find( '.subconsforcalc2, .prodcalc2' ).show();
	
	// Show average or lactoduc calculation
	watercons = $( '#modalLT-infocalc' ).data( 'totalVol' ) || 0;
	// Old limitations : cow: auto calc water consumption
	// Cows : this is an option, the 'old' calculation is kept active
	// if ((box.find('.consforcalc').val()*1!==0 || isCow) && !watercons) {
	if ( !watercons ) {
		watercons = dataClusters * waterPerCluster;
	}
	
	waterText = consinfoText[ lang ].replace( '&W', watercons );
	box.find( '.consinfo' ).text( waterText );
	
	// Display default cons value when created
	subconsforcalc = box.find( '.subconsforcalc' ).val();
	if ( Number( subconsforcalc ) === 0 ) {
		consinfo = boxImg.attr( 'data-cons' );
		// Taking the low part concentration for calc
		consinfo = consinfo.split( DH )[ 0 ];
		box.find( '.subconsforcalc' ).val( consinfo );
	}
	
	density         = boxImg.attr( 'data-dens' );
	subconsforcalc  = box.find( '.subconsforcalc' ).val();
	subconsforcalc2 = box.find( '.subconsforcalc2' ).val();
	
	if ( Number( subconsforcalc2 ) === 0 || changedEauDouce ) {
		box.find( '.subconsforcalc2' ).val( Math.round(milkingDays / 52) );
	}
	subconsforcalc2 = box.find( '.subconsforcalc2' ).val() * 52;
	prodcalc        = parseInt( subconsforcalc * 0.01 * watercons * density * subconsforcalc2 );
	prodcalcText    = '% x &W x &D x'
		.replace( '&W', watercons )
		.replace( '&D', density );
	prodcalc2Text   = '= &P '
		.replace( '&P', prodcalc );
	box
		.find( '.prodcalc' ).html( prodcalcText ).end()
		.find( '.prodcalc2' ).html( prodcalc2Text );
	
	// Append unit to cons info lower text
	unit = boxImg.attr( 'data-unit' ).split( CO )[ lang ];
	box.find( '.prodcalc2' ).append( unit );
	
	// Fill with estimated consumption
	setEstimatedQuantity( box );
	
}

function tankCalc( box ) {
	
	var boxImg = box.find( 'img' );
	
	// Eau douce, rapport 85 alcalin / 15 acide en eau douce, 50/50 en eau dure
	var divider = box.find( '.eaudouce' ).is( ':checked' ) ? (boxImg.data( 'type' ) == '#Alk' ? 0.85 : 0.15) : (0.5);
	
	var attrib    = findAttributesInArray( animalType, animalAttributes ),
	    // Washings=milkings/milking fcy/collect fcy (fcy=per day)
	    cleanings = (attrib[ 2 ] * divider) / attrib[ 3 ];
	
	consinfoText = tankinfoText.slice( 0 );
	
	box.find( '.subconsforcalc2, .prodcalc2' ).show();
	
	// Determine water consumption per cleaning
	switch ( animalType ) {
		case 'cow': {
			for ( var i = 0; i < tankVolumeData.length; i += 2 ) {
				if ( dataTank > tankVolumeData[ i ] ) {
					watercons = tankVolumeData[ i + 1 ];
				}
			}
			break;
		}
		case 'goat':
		case 'sheep':
			watercons = dataTank / 100;
			break; // 2500l => 25l for cleaning
	}
	
	// Show average
	waterText = consinfoText[ lang ].replace( '&W', watercons );
	box.find( '.consinfo' ).text( waterText );
	
	// Display default cons value when created
	subconsforcalc = box.find( '.subconsforcalc' ).val();
	if ( Number( subconsforcalc ) === 0 ) {
		consinfo = boxImg.attr( 'data-cons' );
		consinfo *= 2; // Double for tank
		box.find( '.subconsforcalc' ).val( consinfo );
	}
	
	density         = boxImg.attr( 'data-dens' );
	subconsforcalc  = box.find( '.subconsforcalc' ).val();
	subconsforcalc2 = box.find( '.subconsforcalc2' ).val();
	if ( Number( subconsforcalc2 ) === 0 || changedEauDouce ) {
		box.find( '.subconsforcalc2' ).val( Math.round( cleanings / 52 ) );
	}
	subconsforcalc2 = box.find( '.subconsforcalc2' ).val() * 52;
	prodcalc        = parseInt( subconsforcalc * 0.01 * watercons * density * subconsforcalc2 );
	prodcalcText    = '% x &W x &D x'
		.replace( '&W', watercons )
		.replace( '&D', density );
	prodcalc2Text   = '= &P '
		.replace( '&P', prodcalc );
	box
		.find( '.prodcalc' ).html( prodcalcText ).end()
		.find( '.prodcalc2' ).html( prodcalc2Text );
	
	// Append unit to cons info lower text
	unit = boxImg.attr( 'data-unit' ).split( CO )[ lang ];
	box.find( '.prodcalc2' ).append( unit );
	
	// Fill with estimated consumption
	setEstimatedQuantity( box );
	
}

function robotCalc( box ) {
	
	var boxImg = box.find( 'img' );
	consinfo   = boxImg.attr( 'data-consRS' ).split( LI )[ 0 ];
	consinfo2  = boxImg.attr( 'data-consRS' ).split( LI )[ 1 ];
	
	// Before & after => show subconsforcalc3/consforcalcbefore/after & and qty +after milking qty
	if ( consinfo2 ) {
		box.find( '.subconsforcalc3' )
			.show()
			.find( '.consforcalcbefore, .consforcalcafter' ).show()
			.eq( 0 ).text( robotinfo3Text[ lang ].split( SL )[ 0 ] )
			.next().text( robotinfo3Text[ lang ].split( SL )[ 1 ] );
		consinfo = 1 * consinfo + (consinfo2 * box.data( 'specificMode' ));
		updateBeforeAfter( box );
	}
	
	// Adjusts the qty depending on animal number
	var adjustRobot = boxImg.attr( 'data-type' ).indexOf( 'Udder' ) >= 0;
	
	if ( adjustRobot ) {
		consinfoText = robotinfo2Text.slice( 0 );
	} else {
		consinfoText = robotinfoText.slice( 0 );
	}
	
	// Show average
	robotConsText = consinfoText[ lang ]
		.replace( '&AW', consinfo );
	box.find( '.consinfo' ).text( robotConsText );
	
	// E.g. case LIQ-IO C
	showHideConsInfo( box, consinfo );
	
	// Display default cons value when created
	subconsforcalc = box.find( '.subconsforcalc' ).val();
	if ( Number( subconsforcalc ) === 0 ) {
		box.find( '.subconsforcalc' ).val( consinfo );
	}
	
	// Gather estimated consumpt. and fill input field
	subconsforcalc = box.find( '.subconsforcalc' ).val();
	
	if ( !adjustRobot ) {
		prodcalc = parseInt( subconsforcalc * dataRobots );
		// Append cons info lower text
		unit     = boxImg.attr( 'data-unit' ).split( CO )[ lang ];
		box.find( '.prodcalc' ).empty();
		prodcalcText = 'x &R = &P '
			.replace( '&R', dataRobots )
			.replace( '&P', prodcalc );
	} else {
		prodcalc = parseInt( subconsforcalc * dataAnimals / 60 );
		// Append cons info lower text
		unit     = boxImg.attr( 'data-unit' ).split( CO )[ lang ];
		box.find( '.prodcalc' ).empty();
		prodcalcText = 'x &C/60 = &P '
			.replace( '&C', dataAnimals )
			.replace( '&P', prodcalc );
	}
	
	// Case SEPTIFLASH
	pack        = boxImg.attr( 'data-pack' );
	productname = boxImg[ 0 ].alt;
	if ( productname.indexOf( 'SEPTIFLASH' ) >= 0 ) {
		prodcalc = prodcalc / pack;
	}
	
	box
		.find( '.consinfo' ).append( unit + NBSP + perYear[ lang ] ).end()
		.find( '.prodcalc' ).append( prodcalcText + unit );
	
	// Fill with estimated consumption
	setEstimatedQuantity( box );
	
}

function surfacesCalc( box ) { // Not used anymore since 08-2019
	
	var boxImg   = box.find( 'img' );
	consinfo     = boxImg.attr( 'data-cons' );
	consinfo1    = consinfo.split( '>' ); // E.g. "1-4>2" means 1 to 4 but use 2 for estimation
	consinfoText = clustersinfoText.slice( 0 );
	box.find( '.subconsforcalc2, .prodcalc2' ).show();
	
	// Show average
	consinfoText = concentrationinfoText[ lang ].slice( 0 );
	if ( consinfo1.length > 1 ) {
		consinfo  = consinfo1[ 1 ];
		consinfo1 = consinfo1[ 0 ];
	}
	consinfoText = consinfoText.replace( '&C', consinfo1 ) + ' %';
	box.find( '.consinfo' ).text( consinfoText );
	
	// Display default cons value when created
	subconsforcalc  = box.find( '.subconsforcalc' ).val();
	subconsforcalc2 = box.find( '.subconsforcalc2' ).val();
	
	if ( Number( subconsforcalc ) === 0 ) {
		// In order to update subconsforcalc width (surface sum) and avoid losing visible digits (E.g. 1000 instead of 10000)
		if ( surfacesSum() > 0 ) {
			box.find( '.subconsforcalc' ).autoGrowInputHor();
		}
	}
	if ( Number( subconsforcalc2 ) === 0 ) {
		box.find( '.subconsforcalc2' ).val( consinfo );
	}
	subconsforcalc  = box.find( '.subconsforcalc' ).val();
	subconsforcalc2 = box.find( '.subconsforcalc2' ).val();
	prodcalc        = subconsforcalc * 0.3 * subconsforcalc2 / 100;
	
	// The calculated kg can be below 1, in this case, we display 1 decimal
	prodcalc = prodcalc.toFixed( 1 * (prodcalc.toFixed( 1 ) < 1) );
	
	prodcalcText  = 'm² x 0.3L/m² x';
	prodcalc2Text = '% = &P '
		.replace( '&P', prodcalc );
	box
		.find( '.prodcalc' ).html( prodcalcText ).end()
		.find( '.prodcalc2' ).html( prodcalc2Text );
	
	// Append unit to cons info lower text
	unit = boxImg.attr( 'data-unit' ).split( CO )[ lang ];
	box.find( '.prodcalc2' ).append( unit );
	
	// Fill with estimated consumption
	setEstimatedQuantity( box );
	
}

function pawCalc( box ) {
	
	var boxImg       = box.find( 'img' ),
	    consinfo1,
	    myProtocol   = 1,
	    consinfoText = N,
	    specials     = boxImg.attr( 'data-specials' );
	
	box.find( '.hoovesProtocol' ).text( specificText[ 1 ].split( CO )[ lang ] );
	box.find( '.subconsforcalc2, .subconsforcalc3, .subconsforcalc4, .prodcalc2, .prodcalc3, .hoovesProtocol' ).show();
	box.find( '.subconsforcalc-container' ).addClass( 'showOnHover' );
	box.find( '.monthsforbox' ).hide();
	
	// Some products are not used by sprayin
	if ( specials.split( LI )[ 0 ] == 'spray' ) {
		box.find( '.specialCalc' ).show();
	}
	
	specials = specials.replace( 'spray|', '' ).split( CO );
	
	consinfoText = pawinfoText.slice( 0 );
	consinfo     = boxImg.attr( 'data-cons' );
	
	consinfo1 = consinfo.split( '>' ); // E.g. "1-4>2" means 1 to 4 but we use 2 for estimation
	if ( consinfo1.length > 1 ) {
		consinfo = consinfo1[ 1 ];
	}
	
	box.find( '.consinfo' ).text( consinfoText[ lang ] );
	box.find( '.specialCalc span' ).text( sprayText[ lang ] );
	
	// Display default cons value when created
	subconsforcalc = box.find( '.subconsforcalc' ).val();
	if ( Number( subconsforcalc ) === 0 ) {
		box.find( '.subconsforcalc' ).val( 150 );
	}
	
	// Crossings per period
	subconsforcalc2 = box.find( '.subconsforcalc2' ).val();
	var chosenProt  = $( '.modal-hoovesProtocol' ).data( 'protocol' );
	if ( chosenProt !== undefined ) {
		myProtocol      = chosenProt;
		subconsforcalc2 = 0;
	}
	if ( Number( subconsforcalc2 ) === 0 ) {
		// Set intermerdiary value
		box.find( '.subconsforcalc2' ).val( specials[ myProtocol ] );
	}
	
	// Months
	subconsforcalc4 = box.find( '.subconsforcalc4' ).val();
	if ( Number( subconsforcalc4 ) === 0 ) {
		box.find( '.subconsforcalc4' ).val( 1 );
	}
	
	if ( box.find( '.specialCalcCheck' ).prop( 'checked' ) ) {
		consinfoText = pawinfoTextSpray.slice( 0 );
		box.find( '.consinfo' ).text( consinfoText[ lang ].replace( '&C', consinfo ) + ' %' );
		box.find( '.consforcalc, .subconsforcalc-container, .packarrow, .multiply, .consforcalcText' ).hide();
		box.data( 'selectType', 'nocalc' );
		catalogueCalc( box );
		return
	} else {
		box.data( 'selectType', 'estimate' );
		box.find( '.consforcalc, .subconsforcalc-container, .packarrow, .multiply, .consforcalcText' ).show();
	}
	
	density = boxImg.attr( 'data-dens' ); // Used in ml mode
	
	// Gather estimated consumpt. and fill input field
	subconsforcalc  = box.find( '.subconsforcalc' ).val();
	subconsforcalc2 = box.find( '.subconsforcalc2' ).val();
	subconsforcalc4 = box.find( '.subconsforcalc4' ).val();
	
	prodcalc      = parseInt( subconsforcalc * consinfo * subconsforcalc2 * subconsforcalc4 / 100 );
	prodcalc      = Math.max( 1, prodcalc ); // As 0 is weird
	prodcalcText  = ' L x &C% x'
		.replace( '&C', consinfo );
	prodcalc2Text = monthsinfoText[ lang ] + NBSP + '= &P '
		.replace( '&P', prodcalc );
	box
		.find( '.prodcalc' ).html( prodcalcText ).end()
		.find( '.prodcalc2' ).html( prodcalc2Text ).end()
		.find( '.prodcalc3' ).html( NBSP + 'x' + NBSP );
	
	// Append unit to cons info lower text
	unit = boxImg.attr( 'data-unit' ).split( CO )[ lang ];
	box.find( '.prodcalc2' ).append( unit );
	
	// Fill with estimated consumption
	setEstimatedQuantity( box, true );
	
}

function waterCalc( box ) {
	
	var boxImg      = box.find( 'img' ),
	    productname = boxImg[ 0 ].alt,
	    animalWater,
	    calcmode    = boxImg.attr( 'data-calcmode' ),
	    waterPerMilkLiter = findAttributesInArray( animalType, animalAttributes )[ 8 ];
	
	if ( productname == 'GERMICIDAN TABS' || productname == 'AQUASEPT' ) {
		consinfoText = TABSinfoText.slice( 0 );
	} else {
		if ( productname == "Lessive de soude" || productname == "ANTI-GERM ACID'O" ) {
			catalogueCalc( box, 1 );
			return;
		}
		// All non tab products
		consinfoText = concentrationinfoText.slice( 0 );
	}
	
	// Show texts
	consinfo = boxImg.attr( 'data-cons' );
	
	if ( productname == "ANTI-GERM CLOR'O" || productname == "ANTI-GERM STAB'O" || productname == "SANICRISTAL" || productname == "SANIKARST") {
		// Reduce field width
		box.find( '.subconsforcalc2' ).addClass( 'thinfield' );
		// Convert % into ml/m³
		var consinfo1 = Math.round( consinfo.split( DH )[ 0 ] * 10000 ),
		    consinfo2 = Math.round( consinfo.split( DH )[ 1 ] * 10000 );
		consinfo      = consinfo1 + DH + consinfo2;
	}
	waterttText = consinfoText[ lang ].replace( '&C', consinfo );
	consinfo    = consinfo.split( DH )[ 0 ];
	
	box.find( '.consinfo' ).text( waterttText );

	var milkProd = $( '#databox-subcont2' ).find( '.milkProd input' ).val();
	
	// Display default cons value when created
	// Depends if milk ref value is entered
	subconsforcalc = box.find( '.subconsforcalc' ).val();
	if ( Number( subconsforcalc ) === 0 ) {
		if ( !$( '#milkrefval' ).hasClass( 'noinputvalue' ) ) {
			// animalWater=parseInt($('#milkrefval').val().replace(new RegExp(SP,'g'),N))*0.01/365;
		} else {
			if (milkProd) {
				animalWater = (waterPerMilkLiter * milkProd * dataAnimals) / 365;
			} else {
				animalWater = 0;
			}

			if (animalType == 'sheep') {
				animalWater = waterPerMilkLiter * dataAnimals;
			}
		}
		box.find( '.subconsforcalc' ).val( animalWater.toFixed( 1 ) );
	}
	
	unit = boxImg.attr( 'data-unit' ).split( CO )[ lang ];
	
	box.find( '.subconsforcalc2, .prodcalc2' ).show();
	subconsforcalc  = box.find( '.subconsforcalc' ).val();
	subconsforcalc2 = box.find( '.subconsforcalc2' ).val();
	if ( Number( subconsforcalc2 ) === 0 ) {
		box.find( '.subconsforcalc2' ).val( consinfo );
	}
	subconsforcalc2 = box.find( '.subconsforcalc2' ).val();
	
	if ( productname == 'GERMICIDAN TABS' || productname.indexOf( 'AQUASEPT' ) >= 0 ) {
		
		var waterFactor = 0.08 * (productname == 'AQUASEPT 80') || 1;
		
		prodcalc      = (subconsforcalc / waterFactor * subconsforcalc2 * 365).toFixed( 0 );
		prodcalcText  = 'm³ / &F x'
			                .replace( '&F', waterFactor ) + NBSP;
		prodcalcText  = prodcalcText.replace( ' / 1', N ); // In case the water factor is '1'
		prodcalc2Text = 'x 365 = &P&nbsp;'
			.replace( '&P', prodcalc );
		box.find( '.prodcalc' ).html( prodcalcText ).end()
			.find( '.prodcalc2' ).html( prodcalc2Text + unit ).end()
			.find( '.consinfo' ).append( unit.slice( 0, -1 ) );
		
		// Find qty of x tabs boxes
		if ( calcmode != 'pack' ) {
			pack     = boxImg.attr( 'data-pack' );
			prodcalc = Math.ceil( prodcalc / pack );
		} else {
			pack = box.find( '.boxpackagingVal' ).text();
			if ( pack ) {
				prodcalc = Math.ceil( prodcalc / pack );
			} else {
				prodcalc = 0;
			}
		}
		
	} else if ( productname == "ANTI-GERM CLOR'O" || productname == "ANTI-GERM STAB'O" || productname == "SANICRISTAL" || productname == "SANIKARST") {
		
		prodcalc      = (subconsforcalc * subconsforcalc2 * density * 365 / 1000).toFixed( 0 );
		prodcalcText  = 'm³ x' + NBSP;
		prodcalc2Text = 'ml/m³ x &D x 365 = &P&nbsp;'
			.replace( '&D', density )
			.replace( '&P', prodcalc );
		box
			.find( '.prodcalc' ).html( prodcalcText ).end()
			.find( '.prodcalc2' ).html( prodcalc2Text + unit ).end()
			.find( '.consinfo' ).append( 'ml/m³' );
		
	} else {
		prodcalc      = (subconsforcalc * subconsforcalc2 * 365 * 10).toFixed( 0 );
		prodcalcText  = 'm³ x' + NBSP;
		prodcalc2Text = '% x 365 = &P&nbsp;'
			.replace( '&P', prodcalc );
		box
			.find( '.prodcalc' ).html( prodcalcText ).end()
			.find( '.prodcalc2' ).html( prodcalc2Text + unit ).end()
			.find( '.consinfo' ).append( '%' );
	}
	
	// Fill with estimated consumption
	setEstimatedQuantity( box );
	
}

function nutriCalc( box ) {
	
	var boxImg      = box.find( 'img' ),
	    calcmode    = boxImg.attr( 'data-calcmode' );

	consinfoText = nutriinfoText.slice( 0 );
	
	// Show cons info text
	consinfo = boxImg.attr( 'data-cons' );
	
	nutriText = consinfoText[ lang ];
	nutriText = nutriText
		.replace( '&AW', consinfo )
		.replace( '&IT', boxImg.attr( 'data-specials' ).split( CO )[ lang ] );
	box.find( '.consinfo' ).text( nutriText );
	
	// Display default cons value when created
	// Depends if milk ref value is entered
	subconsforcalc = box.find( '.subconsforcalc' ).val();
	if ( Number( subconsforcalc ) === 0 ) {
		box.find( '.subconsforcalc' ).val( dataAnimals );
	}
	
	unit = boxImg.attr( 'data-unit' ).split( CO )[ lang ];
	
	box.find( '.subconsforcalc2, .prodcalc2' ).show();
	subconsforcalc  = box.find( '.subconsforcalc' ).val();
	subconsforcalc2 = box.find( '.subconsforcalc2' ).val();
	if ( Number( subconsforcalc2 ) === 0 ) {
		box.find( '.subconsforcalc2' ).val( consinfo );
	}
	subconsforcalc2 = box.find( '.subconsforcalc2' ).val();
	
	prodcalc      = (subconsforcalc * subconsforcalc2).toFixed( 0 );
	prodcalcText  = 'x';
	prodcalc2Text = ' = &P&nbsp;'
		.replace( '&P', prodcalc );
	box.find( '.prodcalc' ).html( prodcalcText ).end()
		.find( '.prodcalc2' ).html( prodcalc2Text + unit ).end()
		.find( '.consinfo' ).append( unit );
	
	// Find qty of x tabs boxes
	if ( calcmode != 'pack' ) {
		pack     = boxImg.attr( 'data-pack' );
		prodcalc = Math.ceil( prodcalc / pack );
	} else {
		pack = box.find( '.boxpackagingVal' ).text();
		if ( pack ) {
			prodcalc = Math.ceil( prodcalc / pack );
		} else {
			// Only one possible packaging? We select it
			if ( boxImg.attr( 'data-pack' ).split( CO ).length == 1 ) {
				box.find( '.packaging' ).click();
			} else {
				prodcalc = 0;
			}
		}
	}
	
	// Fill with estimated consumption
	setEstimatedQuantity( box );
	
}

function valorizationCalc( box ) {
	
	var boxImg       = box.find( 'img' ),
	    productname  = boxImg[ 0 ].alt,
	    consinfo1,
	    consinfoText = N,
	    modalType;
	
	box.find( '.valorDetail' ).text( specificText[ 2 ].split( CO )[ lang ] );
	box.find( '.subconsforcalc3, .valorDetail' ).show()
	box.find( '.subconsforcalc-container' ).addClass( 'showOnHover' );
	
	// Modal type depending on product
	switch ( productname ) {
		case 'HYPRASIL GREEN+':
		case 'ENSIL\'GREEN+':
		case 'HYPRASIL GREEN XL':
		case 'HYPRA\'NAT GREEN': {
			modalType = 1;
			break;
		}
		case 'HYPRASIL MAÏS+':
		case 'ENSIL\'PROTECT+':
		case 'HYPRASIL MAÏS XL': {
			modalType = 2;
			break;
		}
		case 'HYPRASIL DUO':
		case 'ENSIL\'MIX UAB': {
			modalType = 3;
			break;
		}
		case 'HYPRASIL START':
		case 'ENSIL\'SPRING GR': {
			modalType = 4;
			break;
		}
		case 'ENSIL\'STAB': {
			modalType = 5;
			break;
		}
		case 'HYPRA\'NAT MAÏS': {
			modalType = 6;
			break;
		}
	}
	
	box.data( 'valorDetail', modalType );
	
	consinfoText = valorinfoText.slice( 0 );
	
	box.find( '.consinfo' ).text( consinfoText[ lang ] );
	
	// Gather doses total number
	consinfo1 = $( '#modalVF' + modalType ).data( 'totaldoses' ) || 0;
	
	// Gather estimated consumpt. and fill input field
	subconsforcalc = box.find( '.subconsforcalc' ).val() * 1;
	
	if ( subconsforcalc === 0 ) {
		box.find( '.subconsforcalc' ).val( consinfo1 );
	}
	
	prodcalc = subconsforcalc = box.find( '.subconsforcalc' ).val() * 1;
	
	// Append unit to cons info lower text
	unit         = boxImg.attr( 'data-unit' ).split( CO )[ lang ];
	prodcalcText = NBSP + unit
	box.find( '.prodcalc' ).html( prodcalcText ).end()
	
	// Fill with estimated consumption
	setEstimatedQuantity( box );
	
}

function simpleCalc( box ) {
	
	var boxImg      = box.find( 'img' ),
	    productname = boxImg[ 0 ].alt;
	
	if ( productname == "Extrait de Javel" ) {
		catalogueCalc( box, 1 );
		return;
	}
	
	box.find( '.subconsforcalc-container' ).hide();
	// Display default cons value when created
	// Gather estimated consumpt. and fill input field
	typeProd   = boxImg.attr( 'data-type' );
	calcmode   = boxImg.attr( 'data-calcmode' );
	uniquePack = dividedPackaging( boxImg.attr( 'data-pack' ).split( CO )[ 0 ] );
	
	// Show for free checkbox
	if ( catType.indexOf( 'controllers' ) >= 0 || boxImg.attr( 'data-type' ).indexOf( 'Controller' ) >= 0 ) {
		box.find( '.forfree' ).show();
		box.find( '.monthsforbox' ).hide();
	}
	
	if ( typeProd.indexOf( 'wipes' ) >= 0 ) {
		udderCalc( box );
		// Remove 's'
		box.find( '.consinfo' ).text( box.find( '.consinfo' ).text().slice( 0, -1 ) );
		return;
	}
	
	// Fill with estimated consumption
	consforcalc = box.find( '.consforcalc' ).val();
	
	// Adjusts value if not matching available packaging
	if ( ((consforcalc / uniquePack) != parseInt( consforcalc / uniquePack )) && (calcmode == 'auto') ) {
		consforcalc = Math.ceil( consforcalc / uniquePack ) * uniquePack;
		box.find( '.consforcalc' ).val( consforcalc );
		showTopWarning( 11, null, 2300 );
	}
	
	if ( Number( consforcalc ) === 0 ) {
		// Select min packaging
		box.find( '.consforcalc' ).val( uniquePack );
	}
	// Only for raw price per animal/month
	prodcalc = box.find( '.consforcalc' ).val();
	
}

function catalogueCalc( box, force ) {
	
	var boxImg   = box.find( 'img' ),
	    packinfo = boxImg.attr( 'data-specials' );
	// Only for raw price per animal/month
	prodcalc     = 0;
	
	if ( force ) {
		catalog = true;
	}
	
	// Show for free checkbox
	if ( catType.indexOf( 'controllers' ) >= 0 || boxImg.attr( 'data-type' ).indexOf( 'Controller' ) >= 0 ) {
		box.find( '.forfree' ).show();
	}
	
	// Show special info for packaging
	if ( packinfo ) {
		var pos = -1;
		$.each( packinfoText, function ( index, value ) {
			if ( value.toLowerCase().indexOf( packinfo ) >= 0 ) {
				pos = index;
				return false;
			}
		} );
		if ( pos >= 0 ) {
			box.find( '.packinfo' ).show().text( packinfoText[ pos ].split( CO )[ lang ] );
		}
	}
	
	box.find( '.subconsforcalc-container' ).hide();
	// Display default cons value when created
	// Gather estimated consumpt. and fill input field
	calcmode   = boxImg.attr( 'data-calcmode' );
	uniquePack = dividedPackaging( boxImg.attr( 'data-pack' ).split( CO )[ 0 ] );
	
	if ( box.find( '.consforcalc' ).val() < 1 ) {
		// Fill with lower avalaible packaging or 1
		consforcalc = uniquePack * (calcmode == 'manual');
		if ( calcmode == 'pack' ) {
			consforcalc = 1 * (box.find( '.boxpackagingNum' ).text() !== N);
		}
		box.find( '.consforcalc' ).val( consforcalc );
		if ( Number( consforcalc ) === 0 ) {
			// Select min packaging
			box.find( '.consforcalc' ).val( 1 );
		}
	}
	
	// Only one possible packaging? We select it
	if ( boxImg.attr( 'data-pack' ).split( CO ).length == 1 ) {
		setTimeout( function () {
			// box.find('.packaging').click();
		} );
	}
	
}

function setEstimatedQuantity( box, tatia ) { // tatia for time already taken into account
	
	var adjProdcalc     = prodcalc,
	    consforcalcCell = box.find( '.consforcalc' );
	
	if ( !tatia ) {
		adjProdcalc = prodcalc * months / 12;
		// The calculated kg can be below 1, in this case, we display 1 decimal
		// with the exception of zero (e.g. packs)
		adjProdcalc = adjProdcalc.toFixed( 1 * (adjProdcalc < 1) * (adjProdcalc !== 0) );
	}
	
	consforcalcCell.prop( 'disabled', true ).removeClass( 'alertInput' );
	
	// Fill with estimated consumption
	if ( box.data( 'theorQuantity' ) != adjProdcalc && box.data( 'theorQuantity' ) != 'loaded' ) {
		consforcalcCell.val( adjProdcalc );
	}
	
	// Memorize theoritical packing
	box.data( 'theorQuantity', adjProdcalc );
	
}

function packagingCalc( packInfo, totalProduct ) {
	
	return Math.ceil( totalProduct / dividedPackaging( packInfo ) );
	
}

function choosePackagingInit() {
	
	$( document ).on( 'click', '.packaging', function ( e ) {
		
		if ( $( '.fly-packaging', '#categories' ).isVisible() ) {
			return;
		}
		
		packagingItem = $( this );
		box           = packagingItem.closest( '.catbox' );
		
		var boxImg   = box.find( 'img' ),
		    calcmode = boxImg.attr( 'data-calcmode' ),
		    SAPCodes = boxImg.attr( 'data-SAP' );
		
		// Check if choosing packaging is allowed
		choose = boxImg.attr( 'data-calcmode' ) == 'manual' || boxImg.attr( 'data-calcmode' ) == 'pack';
		if ( !choose || (packagingItem.text() == box.find( '.boxpackagingVal' ).text()) ) {
			return;
		}
		
		if ( SAPCodes ) {
			SAPCodes = SAPCodes.split( CO )[ packagingItem.parent().find( '.packaging' ).index( packagingItem ) ];
			// We add '0's only when unique SAP code
			if ( SAPCodes.split( SP ).length == 1 ) {
				SAPCodes = SAPFormat( SAPCodes );
			}
			box.find( '.SAPCode' ).text( SAPCodes );
		}
		
		// Appending the new packaging value
		boxpackagingVal = packagingItem.text();
		box
			.find( '.boxpackagingVal' ).text( boxpackagingVal ).end()
			.removeClass( 'alertInput' ); // Removes alert mode
		
		// Empty unitprice cell when not first time
		if ( !box.find( '.boxpackagingVal' ).siblings( 'span' ).text() ) {
			box.find( '.unitprice' ).val( box.find( '.unitprice' ).attr( 'default' ) );
		}
		// Reset number for catalogue mode
		box.find( '.boxpackagingNum' ).text( 1 * (calcmode != 'pack') );
		
		// Is a price set?
		var findPrice = scanPriceFile( box, boxImg[ 0 ].alt, boxpackagingVal );
		if ( findPrice ) {
			box.find( '.unitprice' ).val( findPrice );
		}
		
		// Fly packaging not for packs
		if ( calcmode !== 'pack' && e.hasOwnProperty( 'originalEvent' ) ) {
			packagingItem.animatePackaging();
		}
		box.rearrangePackaging( boxpackagingVal );
		
		// blur price for launching a new updatecalc
		box.find( '.unitprice' ).blur();
		
	} );
	
}

$.fn.rearrangePackaging = function ( boxpackagingVal ) {
	
	var box = $( this );
	
	// Identify packaging item
	box.find( '.packaging' ).each( function () {
		if ( $( this ).text() == boxpackagingVal ) {
			packagingItem = $( this );
		}
	} );
	
	if ( !packagingItem ) {
		return;
	}
	
	box.find( '.packagingcalc-container' ).children().show();
	currPackaging = packagingItem.closest( '.catbox' ).find( '.packaging' );
	
	// Change opacity & cursor if more than 1 packaging
	currPackaging
		.addClass( 'pointer' )
		.css( 'opacity', 0.5 );
	
	packagingItem
		.removeClass( 'pointer' )
		.css( 'opacity', 1 );
	
	return true;
	
};

$.fn.animatePackaging = function () {
	
	var packagingItem = $( this );
	
	box = packagingItem.closest( '.catbox' );
	
	// Hide all possibly there flying packaging
	$( '#categories' ).find( '.fly-packaging' ).hide();
	
	flyPackaging    = box.find( '.fly-packaging' )
		.text( packagingItem.text() );
	targetPackaging = box.find( '.boxpackagingVal' )
		.show();
	
	var xImg         = packagingItem.offset().left - box.offset().left,
	    yImg         = packagingItem.offset().top - box.offset().top,
	    xPack        = targetPackaging.offset().left - box.offset().left,
	    yPack        = targetPackaging.offset().top - box.offset().top,
	    delayToValue = 250;
	
	flyPackaging
		.css( {
			top:      yImg - 18,
			left:     xImg - 18,
			fontSize: 40,
			padding:  8,
			opacity:  1
		} )
		.show()
		.stop( 1, 1 )
		.animate( {
			top:   yImg - 60,
			queue: true
		}, delayToValue * 1.4 )
		.animate( {
			top:      yPack - 1,
			left:     xPack - 4,
			fontSize: 12,
			padding:  4,
			opacity:  0.7
		}, delayToValue, function () {
			// Hide flying packaging
			flyPackaging.fadeOut( 200 );
		} );
	
};

function flashPackagingInit() {
	
	var targetP;
	
	$( document )
		.on( 'mouseenter', '.packagingcalc-container', function () {
			// Checks if no packaging already chosen
			if ( !$( this ).find( 'span' ).text() ) {
				return;
			}
			
			targetP = $( this ).closest( '.catbox' )
				.find( '.packaging' )
				.removeClass( 'pointer' );
			targetP.flash( 130, -1 ); // Repeat 1000 times
		} )
		.on( 'mouseleave', '.packagingcalc-container', function () {
			// Checks if no packaging already chosen
			if ( !$( this ).find( 'span' ).text() ) {
				return;
			}
			
			targetP
				.addClass( 'pointer' )
				.stop( 1, 1 )
				.css( 'opacity', 0.5 );
		} );
	
}

function checkEmptyInput( target ) {
	
	target = target ? target : $( '#categories' ).find( '.catbox' );
	
	var discount = target.find( '.discount' ).removeClass( 'alertInput' ),
	    unitprice;
	
	target.each( function () {
		
		unitprice = $( this ).find( '.unitprice' ).removeClass( 'alertInput' );
		
		if ( !Number( unitprice.val() ) && !$( this ).find( '.forfreecheck' ).prop( 'checked' ) ) {
			unitprice.addClass( 'alertInput' );
		}
		
	} );
	
	if ( !Number( discount.val() ) ) {
		discount.addClass( 'alertInput' );
	}
	validateEstimate();
	
}

function checkZeroEstim( boxes ) {
	
	boxes = boxes ? boxes : $( '#categories' ).find( '.catbox' );
	
	boxes.each( function () {
		var consforcalcCell = $( this ).find( '.consforcalc' ).removeClass( 'alertInput' );
		if ( consforcalcCell.val() * 1 === 0 ) {
			consforcalcCell.addClass( 'alertInput' );
		}
	} );
	
}

function validateEstimate( flag ) {
	
	checkZeroEstim();
	
	if ( !flag ) {
		flag = $( '.alertInput' ).length;
	}
	if ( !flag ) {
		$( '#estimatevalue' ).removeClass( 'notvalid' );
	} else {
		$( '#estimatevalue' ).addClass( 'notvalid' );
	}
}

function estimateEnable( flag ) {
	
	if ( !flag ) {
		flag = $( '#estimatevalue', '#topWidget' ).css( 'cursor' ) == 'auto' && $( '.catbox', '#categories' ).length && !$( '.field-alert', '#contact-container' ).length;
	}
	if ( flag ) {
		$( '#print, #mailbox' ).removeClass( 'noselectpossible' );
		$( '#save' ).addClass( 'pdf' );
	} else {
		$( '#print, #mailbox' ).addClass( 'noselectpossible' );
		$( '#save' ).removeClass( 'pdf' );
	}
}

function printInit() {
	
	// Disable CTRL+P
	$( document ).keydown( function ( e ) {
		if ( e.ctrlKey && e.which == '80' ) {
			e.preventDefault();
		}
	} );
	
	$( '#print, #mailFile' ).click( function () {
		if ( $( this ).css( 'cursor' ) != 'pointer' ) {
			return;
		}
		
		updateEstimate();
		
		// Preview mode
		if ( !previewProcess || demoProcess || $( this ).attr( 'id' ) == 'mailFile' ) {
			
			// Also "Escape" to quit
			if ( !demoProcess ) {
				$( document ).off( 'keyup' ).keyup( function ( e ) {
					if ( e.keyCode === 27 ) {
						$( '#exit' ).click();
					}
				} );
			}
			
			// Memorize scroll position
			currentScroll = $( document ).scrollTop();
			
			hideTopWarning();
			
			$( '#exit, #print' ).show();
			$( '#backup, #load, #save, #undo, #redo, #unredo-container, #search, #viewswitcher' ).addClass( 'notdisplayed' );
			
			clearInterval( timer11 ); // Stop backup
			
			// Very basic preview when writing a mail
			if ( $( this ).attr( 'id' ) == 'mailFile' ) {
				$( '#mail, #print, #mailbox, #calendar, #estimatevalue, #estimatetext' ).addClass( 'notdisplayed' );
				$( '#exit' ).removeClass( 'borderRight' );
				$( '#topWidget' ).addClass( 'onTheRight' );
				$( '#sheetUpSpacer' ).css( 'height', 30 );
			} else {
				hideMailBox( 1, 'auto' ); // Do not readjust topwidget (glitter)
			}
			
			$( '#small-data-widget' ).addClass( 'outofscreen' );
			hideAddtocart( 1 );
			
			$( '#main-container' ).fadeOut( 300, function () {
				scrollWindow( 1, 1 );
				//$('#sheetUpSpacer, .sheetSpacer').fadeIn();
				$( '#estimates-wholecontainer' ).fadeIn( function () {
					hideSearch();
					hideSliderMonth();
					previewProcess = true;
				} );
			} );
			
			return;
			
		}
		
		// Printing the sheets
		hideSearch();
		hideMailBox();
		hideSliderMonth();
		hideTopWarning();
		
		$( '#UIcontainer' ).fadeIn( 300, function () {
				
				// Closing the preview window
				if ( previewProcess ) {
					$( '#exit' ).click();
				}
				
				setTimeout( function () {
					$( '#UIcontainer' ).fadeOut( 300 );
				}, 2000 );
				
				defaulttitle = $( document ).attr( 'title' );
				
				$( document ).attr( 'title', N );
				window.print();
				$( document ).attr( 'title', defaulttitle );
				
			} )
			.find( 'span' )
			.show()
			.text( warningText[ 8 * langScope + lang ] );
		recordHistory( 8 );
	} );
	
}

function backupDataInit() {
	
	var backupInterval = 20; // in seconds
	
	clearInterval( timer11 );
	
	timer11 = setInterval( function () {
		
		// Just for safety reasons as it can freeze sometimes
		hideBackupSpinner( 1 );
		
		if ( sessionQuitOK[ sessionIndex ] || loadProcess || unredoProcess || demoProcess || loadData( 'backupData' ) == newfileData[ sessionIndex ] ) {
			return;
		}
		
		$( '#backup' ).fadeIn( 150 );
		$( '#save' ).addClass( 'noopacity' );
		setTimeout( function () {
			hideBackupSpinner();
		}, 1000 );
		saveData( 'backupData', newfileData[ sessionIndex ] );
		
	}, backupInterval * 1000 );
	
}

function hideBackupSpinner( delay ) {
	
	delay = delay || 150;
	$( '#backup' ).fadeOut( delay );
	$( '#save' ).removeClass( 'noopacity' );
	
}

function loadSaveEnable() {
	
	if ( warningType != 1 && session < sessionMax - 1 ) {
		$( '#load' ).removeClass( 'noselectpossible' );
	} else {
		$( '#load' ).addClass( 'noselectpossible' );
	}
	
	if ( $( '.catbox', '#categories' ).length && warningType != 1 && dataClusters + dataRobots ) {
		$( '#save' ).removeClass( 'noselectpossible' );
		sessionQuitOK[ sessionIndex ] = false;
	} else {
		$( '#save' ).addClass( 'noselectpossible' );
		sessionQuitOK[ sessionIndex ] = true;
	}
	showFilename();
	
}

function loadSaveAllow() {
	
	if ( warningType == 1 ) {
		$( '#load, #save' ).next().show();
	} else {
		$( '#load, #save' ).next().hide();
	}
	
}

function tooltipInit() {
	
	$( AS ).each( function () {
		if ( $( this ).attr( 'data-title' ) ) {
			$( this ).addClass( 'tooltipelement' );
		}
	} );
	$( '<div id="tooltip"/>' ).appendTo( 'body' ).css( 'opacity', 0.9 );
	
	$( document )
		.on( 'mouseover', '.tooltipelement', function ( e ) {
			
			if ( demoProcess ) {
				return;
			}
			
			tooltipelement = $( this );
			
			var tooltip = tooltipelement.attr( 'data-title' );
			if ( tooltip.indexOf( LI ) > 0 ) {
				tooltip = tooltip.split( LI )[ lang ];
			}
			if ( !tooltip ) {
				return;
			} // Case children elements
			$( '#tooltip' ).removeClass( 'forbidtooltip notfoundtooltip' );
			// Make tooltip shorter for descriptions (sliders)
			if ( tooltip.indexOf( CI ) > 0 ) {
				visibletooltip = tooltip.substr( 0, tooltip.indexOf( CI ) );
			} else {
				// Warning tooltip
				if ( tooltip.indexOf( AS ) === 0 ) {
					visibletooltip = tooltip.substring( 1 );
					$( '#tooltip' ).addClass( 'forbidtooltip' );
				} else if ( tooltip.indexOf( HA ) === 0 ) { // Languages tooltip
					visibletooltip = tooltip.substring( 1 );
				} else if ( tooltip.indexOf( '<' ) === 0 ) { // Pricelist tooltip
					visibletooltip = tooltip.substring( 1 );
				} else if ( tooltip.indexOf( '¿' ) === 0 ) { // Not found
					visibletooltip = tooltip.substring( 1 );
					$( '#tooltip' ).addClass( 'notfoundtooltip' );
				} else {
					visibletooltip = tooltip;
				}
			}
			
			tooltipelement.data( 'tooltip', tooltip );
			
			timer6 = setTimeout( function () {
				$( '#tooltip' )
					.html( visibletooltip )
					.fadeIn( 300 );
			}, 500 );
			e.stopPropagation();
			
		} )
		.on( 'click mouseout', '.tooltipelement', function ( e ) {
			removeTooltip();
			if ( !$( this ).is( 'a' ) ) {
				e.preventDefault();
			}
		} )
		.mousemove( function ( e ) {
			if ( !$( '#tooltip:visible' ) ) {
				return;
			}
			xtooltip        = e.pageX;
			ytooltip        = e.pageY + 27;
			tooltipoverflow = $( window ).width() - xtooltip - $( '#tooltip' ).width();
			if ( tooltipoverflow < 15 ) {
				xtooltip += tooltipoverflow - 15;
			}
			$( '#tooltip' ).css( {
				top:  ytooltip,
				left: xtooltip
			} );
			e.stopPropagation();
		} );
	
}

function removeTooltip() {
	
	if ( !tooltipelement ) {
		return;
	}
	
	clearTimeout( timer6 );
	$( '#tooltip' )
		.stop( 1, 1 )
		.fadeOut( 100 );
	
}

function adjustInputInit() {
	
	$( document )
		.on( 'change', '.adjust', function ( e ) {
			
			var currentBox = $( this ).closest( '.catbox' ),
			    myCat      = currentBox.closest( '.cat' ),
			    binomial;
			
			if ( $( this ).attr( 'data-text' ) ) {
				return;
			} // Case for E.g. valorization tables
			if ( !parseFloat( $( this ).val().replace( CO, PO ) ) || parseFloat( $( this ).val() ) < 0 ) {
				$( this ).val( this.defaultValue );
				// Special case with surface input values
				if ( $( this ).hasClass( 'surfaceitem' ) || $( this ).hasClass( 'modalLT-input' ) ) {
					return;
				}
			}
			// Replace , by . and .xx value conversion
			correctedInput = parseFloat( ($( this ).val()).replace( CO, PO ) );
			if ( isNaN( correctedInput ) ) {
				correctedInput = N;
			} // Case modal table
			if ( $( this ).hasClass( 'unitprice' ) ) {
				correctedInput = correctedInput.toFixed( 2 );
			}
			$( this ).val( correctedInput );
			
			// Check if we need to change cons value mode for binomials
			if ( $( this ).hasClass( 'subconsforcalc' ) ) {
				binomial = findBinomial( currentBox.find( 'img' )[ 0 ].alt, myCat, 'info' );
				// e.hasOwnProperty('originalEvent') to avoid infinite loop
				if ( binomial && e.hasOwnProperty( 'originalEvent' ) ) {
					myCat.find( 'img[alt="' + binomial + '"]' ).parent().find( '.subconsforcalc' ).val( $( this ).val() );
				}
			}
			
			// Eau douce
			if ( $( this ).hasClass( 'eaudouce' ) ) {
				// Flag pour que le nombre de jour soit modifié dans les fonctions circuitsCal et tankCalc
				changedEauDouce = true;
				// Si on sélectionne un Eau douce, eau douce de l'autre produit est automatiquement sélectionné
				myCat.find( '.eaudouce' ).not( $( this ) ).prop( 'checked', $( this ).is( ':checked' ) ).trigger( 'blur' );
				changedEauDouce = false;
			}
		} )
		.on( 'focus', '.adjust', function () { // Clear field if no value + select existing value
			if ( $( this ).attr( 'data-text' ) ) {
				return;
			} // Case for E.g. valorization tables
			thisinput = $( this );
			if ( !Number( $( this ).val() ) ) {
				$( this ).val( N );
			}
			validateEstimate( 1 );
			estimateEnable( 0 );
			setTimeout( function () {
				thisinput.select();
			}, 25 );
		} )
		.on( 'blur', '.adjust', function ( e ) { // Default value if no value entered
			if ( $( this ).hasClass( 'surfaceitem' ) ) {
				surfacesSum( $( this ).closest( '.catbox' ) ); // Calculate total surfaces
			} else if ( $( this ).hasClass( 'modalLT-input' ) ) {
				volumeSum(); // Calculate circuits water volume
				return;
			} else if ( $( this ).hasClass( 'tableCell' ) ) {
				fileStatusUpdate();
				// Put here what the value will do in terms of consumption
				return;
			}
			
			validateEstimate( 0 );
			estimateEnable();
			if ( !$( this ).val() ) {
				$( this ).val( this.defaultValue );
			}
			if ( $( this ).hasClass( 'discount' ) && $( this ).val() > 100 ) {
				$( this ).val( 100 );
			}
			
			if ( e.hasOwnProperty( 'originalEvent' ) ) {
				if ( $( this ).hasClass( 'discount' ) && $( this ).val() > 0 && (Optionglobaldiscount == 'true' || Optionudderdiscount == 'true') && $( '.catbox' ).length > 1 ) {
					addMultipleDiscount( $( this ) );
				}
			}
			fullCalc();
			validateProduct( $( this ) );
		} );
}

function surfacesSum() {
	
	var totalSurf = 0,
	    surf, freq, freqInput;
	
	// Remove all alerts on surface related inputs
	$( '#categories' ).find( '.surfaceitem' ).removeClass( 'alertInput' );
	
	$( '#categories' ).find( '.surfacevalue' ).each( function () {
		surf      = parseFloat( $( this ).val() || 0 );
		freqInput = $( this ).nextInDOM( '.surfacefreq' ).eq( 0 );
		freq      = parseFloat( freqInput.val() || 0 );
		totalSurf += surf * freq;
		// Set alert if frequency's not defined with its surface and vice-versa
		if ( surf && !freq ) {
			freqInput.addClass( 'alertInput' );
		}
		if ( freq && !surf ) {
			$( this ).addClass( 'alertInput' );
		}
	} );
	
	// Sum is set in all sum inputs concerned (as surface is common)
	$( '#categories' ).find( '.moreconsinfo:visible' ).prevAll( '.subconsforcalc' ).val( totalSurf );
	
	return totalSurf;
	
}

function valorAutoCalcInit() {
	
	var modal, rowtype,
	    doses, yieldHa, tmsP, surf, tms, raw, result,
	    raws = [50, 50, 50, 60, 60, 60], // raw per bag for DUO vs rows. 50: grass / 60: corn
	    sum;
	
	$( document ).on( 'change', 'input.tableCell', function () {
		
		if ( $( this ).hasClass( 'dosenb' ) || $( this ).hasClass( 'yield' ) || loadProcess ) {
			return;
		}
		$( this ).val( $( this ).val().replace( CO, PO ) );
		modal   = $( this ).closest( '.modal' );
		rowtype = $( this ).attr( 'class' ).split( SP )[ 2 ].split( '_' )[ 0 ]
		
		for ( var i = 1; i <= 3; i++ ) {
			
			doses   = modal.find( PO + rowtype + '_' + 'dosenb' + i );
			yieldHa = modal.find( PO + rowtype + '_' + 'yield' + i );
			
			if ( !doses.length ) {
				break;
			}
			
			doses.val( N ); // Clear result
			yieldHa.val( N );
			
			tmsP = modal.find( PO + rowtype + '_' + 'averageTMS' ).val();
			surf = modal.find( PO + rowtype + '_' + 'surface' + i ).val();
			tms  = modal.find( PO + rowtype + '_' + 'TMSha' + i ).val();
			raw  = modal.find( '.dosing' ).text().match( /\d+/ ); // Extracting the digits from text. Cool!
			
			if ( !raw ) {
				raw = raws[ $( this ).attr( 'data-row' ) - 2 ];
			}
			
			// Do the dosenb/yield calculations
			// & only when not divided by zero and result not zero
			if ( raw * tmsP ) {
				// Elise wished that 3.1 be 3 in opposition to all other calculation rules i.e. Math.ceil()
				result = Math.round( ((surf * tms) / (tmsP / 100)) / raw );
				doses.val( result ? result : N );
			}
			if ( tmsP * tms ) {
				result = (Math.round( tms * 100 / tmsP )).toFixed( 1 );
				yieldHa.val( result ? result : N );
			}
			
		}
		
		// Sum all doses
		sum = 0;
		modal.find( 'input.dosenb' ).each( function () {
			sum += $( this ).val() * 1;
		} );
		modal.data( 'totaldoses', sum );
		
	} );
	
}

function clearContactInputs() {
	
	$( '#info' ).find( 'input, textarea' )
		.val( N )
		.not( '.otherdata' )
		.blur();
	
	resetDatePicker();
	
}

function infoInputDefaults() {
	
	clearContactInputs();
	
	$( '#contact input, #info textarea, #searchbox, #milkrefval' )
		.focus( function () {
			$( this ).removeClass( 'field-alert' );
			if ( $( this ).val() == $( this ).attr( 'value' ) ) {
				$( this ).val( N ).removeClass( 'noinputvalue' );
			}
			// Select on focus while removing spaces
			if ( this.id == 'milkrefval' ) {
				$( this ).val( $( this ).val().replace( new RegExp( SP, 'g' ), N ) ).select();
			}
		} )
		.blur( function ( e ) {
			// Reset volume value so that it can be further updated
			if ( this.id == 'milkrefval' ) {
				resetVolumeCalc();
			}
			
			if ( !$( this ).val() || $( this ).val() * 1 === 0 ) {
				$( this ).val( $( this ).attr( 'value' ) )
					.addClass( 'noinputvalue' )
					.removeClass( 'field-alert' );
			} else {
				// Convert 2800000 to 2 800 000
				if ( this.id == 'milkrefval' ) {
					$( this ).val( ($( this ).val().replace( new RegExp( SP, 'g' ), N ) * 1).formatNumb() );
				}
				if ( ($( this ).hasClass( 'validate' )) && Optioncontact == 'true' ) {
					validateContact( $( this ), e.hasOwnProperty( 'originalEvent' ) );
				}
			}
			
			fullCalc();
		} )
		.blur();
	
	$( '#databox-subcont2 input' ).blur( function () {
		
		if ( $( this ).val() * 1 == 0 ) {
			$( this ).val( N ); // Remove 0 values
		} else {
			$( this ).val( $( this ).val() * 1 ); // Remove unwanted 0 Eg. 001 -> 1
		}
		updateDisplayData();
		fullCalc();
	} );
}

function resetVolumeCalc() {
	
	// Reset volume value so that it can be further updated
	$( '#categories' ).find( '.watertt' ).find( '.subconsforcalc' ).val( N );
	
}

function checkPostDate( warning ) {
	
	retrieveDateTime();
	
	var el     = $( '.contactdate' ),
	    elVal  = el.val(),
	    future = false,
	    yCurr  = dataDate.split( SL )[ 2 ] * 1,
	    mCurr  = dataDate.split( SL )[ 1 ] * 1,
	    dCurr  = dataDate.split( SL )[ 0 ] * 1,
	    yDate  = elVal.split( SL )[ 2 ] * 1,
	    mDate  = elVal.split( SL )[ 1 ] * 1,
	    dDate  = elVal.split( SL )[ 0 ] * 1;
	
	if ( yDate > yCurr || (yDate == yCurr && mDate > mCurr) || (yDate == yCurr && mDate == mCurr && dDate > dCurr) ) {
		future = true;
	}
	
	if ( future ) {
		el.addClass( 'field-info' );
		if ( warning ) {
			showTopWarning( 42, 200, 3700 );
		}
	} else {
		el.removeClass( 'field-info' );
	}
	
}

function userInfoChangeInit() {
	
	$( document ).on( 'blur', '.made, .vendor', updateUserInfo );
	
}

function addCurrency( box ) {
	
	var target = '#categories';
	if ( box ) {
		target = box;
	}
	
	// Total at the top
	if ( $( '.currency', '#topWidget' ).text().indexOf( SPcurrency ) < 0 ) {
		if ( currencyPos == 'R' ) {
			$( '.currency', '#topWidget' ).append( SPcurrency );
		} else {
			$( '.currency', '#topWidget' ).prepend( SPcurrency );
		}
		
	}
	// In each box
	$( '.currency', target ).each( function () {
		if ( $( this ).text().indexOf( SPcurrency ) < 0 ) {
			if ( currencyPos == 'R' ) {
				$( this ).append( SPcurrency );
			} else {
				$( this ).prepend( SPcurrency );
			}
		}
	} );
	
}

function updateCatTotal( cat ) {
	
	// Only for the fist total price (display 0.00 + currency)
	if ( !cat.find( '.cattotalprice' ).text() ) {
		cat
			.find( '.cattotalprice' ).text( '0.00' )
			.next().text( totalsumText[ lang ] + SP + CL );
	}
	
}

function categoriesTotalCalc() {
	
	totalSum = 0;
	var myBoxes;
	
	$( '.cat', '#categories' ).each( function () {
		
		myBoxes = $( this ).find( '.catbox' );
		if ( myBoxes.length ) {
			boxesSum = 0;
			$( this ).find( '.boxtotalprice, .boxdiscountprice' ).each( function () {
				boxesSum += parseFloat( $( this ).text() );
			} );
			
			boxesSum = boxesSum.toFixed( 2 );
			totalSum += (1 * boxesSum);
			$( this ).find( '.cattotalprice' ).text( boxesSum );
			myBoxes.autoAdjustInputs();
		}
		
	} );
	
	$( '#estimatevalue' ).text( totalSum.toFixed( 2 ) )
		.prev().text( totalsumText[ lang ] + CL );
	
	$( '.cattotaltext', '#categories' ).text( totalsumText[ lang ] + CL );
	
	// Flashing the new total
	if ( oldTotalSum != totalSum ) {
		$( '#estimatevalue, #estimatetext', '#topWidget' )
			.stop( 1, 1 ).fadeOut( 200 ).fadeIn();
	}
	oldTotalSum = totalSum;
}

function fullCalc( noCatSwitch ) {
	
	if ( loadProcess || deleteProcess || discountProcess ) {
		return;
	}
	
	updateData(); // Gather data information
	
	$( '.catbox', '#categories' ).each( function () {
		boxCalculations( $( this ) );
	} );
	
	categoriesTotalCalc();
	addCurrency();
	checkEmptyInput();
	checkZeroEstim();
	fileStatusUpdate();
	unredoEnable();
	estimateEnable();
	noDataBoxItem();
	showHideSpecialCategories();
	
	// Update estimate only in preview mode
	if ( previewProcess ) {
		updateEstimate();
	}
	
}

function updateCalc( box ) {
	
	if ( loadProcess || deleteProcess ) {
		return;
	}
	
	var cat = box.parent();
	
	boxCalculations( box );
	checkEmptyInput( box );
	checkZeroEstim( box );
	fileStatusUpdate();
	unredoEnable();
	estimateEnable();
	updateCatTotal( cat );
	addCurrency( cat );
	
}

function updateUserInfo() {
	
	var made = $( '.made', '#contact-container' ),
	    user = $( '.vendor', '#contact-container' ),
	    noinput,
	    noinput2;
	
	// made vendor
	dataUser = made.val();
	dataUser += '¶' + user.val();
	noinput  = made.hasClass( 'noinputvalue' ) + user.hasClass( 'noinputvalue' );
	noinput2 = (!made.val()) + (!user.val());
	
	if ( oldDataUser == dataUser || noinput || noinput2 ) {
		return;
	}
	
	oldDataUser = dataUser;
}

function showRightMenu() {
	
	hideAddtocart( 1 );
	hideSearch();
	hideMailBox();
	findDistribLogoSrc();
	
	rightMenuIcon = $( '#rightmenuicon' );
	rightMenu     = $( '#rightmenu-container' );
	rightMenuUp   = rightMenu.children().first();
	wRM           = rightMenu.width();
	xRM           = rightMenuIcon.offset().left - wRM + 56;
	yRM           = rightMenuIcon.offset().top - $( document ).scrollTop();
	wWi           = $( window ).width();
	
	// Screen overflow (L)
	if ( xRM < 5 ) {
		rightMenuUp.css( 'right', 24 + 5 - xRM );
		xRM = 5;
	} else {
		rightMenuUp.css( 'right', 24 );
	}
	
	// Screen overflow (R)
	if ( xRM + wRM + 5 > wWi ) {
		xRMU = 24 - (xRM + wRM + 5 - wWi);
		if ( xRMU < 0 ) {
			xRMU = 0;
		}
		rightMenuUp.css( 'right', xRMU );
		xRM = wWi - wRM - 5;
		rightMenu.css( 'left', xRM );
	}
	
	rightMenu.css( {
			top:       yRM + 35,
			marginTop: -10,
			left:      xRM,
			opacity:   0
		} )
		.animate( {
			top:       yRM + 40,
			marginTop: 0,
			opacity:   1
		}, 200 );
	
}

function hideRightMenu( speed ) {
	
	speed = speed || 200;
	
	// Close open box
	if ( oldsubli >= 0 ) {
		closeSubRightMenu( $( '.rightmenusubli', '#rightmenu-container' ).eq( oldsubli ), speed );
	}
	
	rightMenu = $( '#rightmenu-container' )
		.animate( {
			opacity: 0
		}, speed * !deleteProcess, function () {
			$( this ).css( 'top', -9999 );
			// Reset slide option positions
			docslideIndex    = 0;
			optionslideIndex = 0;
			docSlide( docslideIndex );
			optionSlide( optionslideIndex );
		} );
	
	// Remove rightmenu warning icon
	$( '#rightmenuwarning' ).remove();
	
}

function rightMenuInit() {
	
	////////////////////////////
	// Menu open/close
	////////////////////////////
	
	$( '#rightmenuicon' ).on( 'mouseover', function () {
		
		if ( mailProcess ) {
			return;
		}
		// Allow/Disallow some functionalities depending on range
		if ( productRangeDB == '0' ) {
			$( '#mosaiccreate' ).show();
		} else {
			$( '#mosaiccreate' ).hide();
		}
		
		$( '.rightmenusubli', '#rightmenu-container' ).hide();
		hideSlider();
		hideFlagMenuOnTimer( 1 );
		rightmenuShowNumbers();
		
		clearTimeout( timer10 );
		if ( $( '#rightmenu-container' ).css( 'top' ) == '-9999px' ) {
			timer10 = setTimeout( hideRightMenu, 3500 );
			showRightMenu();
		}
		
	} );
	
	$( '#rightmenu-container' )
		.on( 'mouseleave', function () {
			if ( $( '#lightbox-container' ).isVisible() ) {
				return;
			}
			if ( !mosaicProdProcess && !animalMenuProcess ) {
				enableMouseWheel();
			}
			timer10 = setTimeout( hideRightMenu, 1000 );
		} )
		.on( 'mouseenter', function () {
			disableMouseWheel();
			clearTimeout( timer10 );
		} );
	
	// Add each li an arrow
	$( '.rightmenuli', '#rightmenu-container' ).addClass( 'arrowdown' );
	
	////////////////////////////
	// Submenu open/close
	////////////////////////////
	
	oldsubli = -1;
	
	$( '.rightmenuli' ).on( 'click', function () {
		target = $( this ).next();
		if ( !target.isVisible() || searchProcess ) {
			// Hide other open sublis
			if ( oldsubli >= 0 ) {
				closeSubRightMenu( $( '.rightmenusubli', '#rightmenu-container' ).eq( oldsubli ) );
			}
			openSubRightMenu( target );
			
		} else {
			closeSubRightMenu( target );
		}
	} );
	
	//////////////////////////////////////////
	// Submenus init
	// appendOptions() has been
	// already called in updateLanguages()
	//////////////////////////////////////////
	
	appendCurrencies();
	appendVersion();
	appendDocs();
	
	// Menu & dialog boxes
	animalMenuInit();
	mosaicInit();
	priceListInit();
	historyInit();
	diagnosticInit();
	demoTourInit();
	resetAppInit();
	modalLTEventInit();
	rightmenuDialogInit();
	rightmenuShowNumbers();
	
}

function rightmenuDialogInit() {
	
	$( document )
		.on( 'click', '#app-reset, #rightmenu-container .dialogBox .no', function () {
			$( '.dialogBox', '#rightmenu-container' ).toggle( 300 );
		} )
		.on( 'mouseleave', '.dialogBox', function () {
			$( '.dialogBox', '#rightmenu-container' ).slideUp( 300 );
		} );
	
}

function openSubRightMenu( menuBox ) {
	
	menuBox
		.slideDown( 200 )
		.prev()
		.addClass( 'arrowup' )
		.find( '.rightmenunumbs' ).fadeOut( 200 );
	
	// Memorize for next opening
	oldsubli = menuBox.parent().find( '.rightmenusubli' ).index( menuBox );
	
	if ( oldsubli == 4 && (OptionFSoptions == 'true' || searchProcess) && !demoProcess ) {
		menuBox.hide();
		fullScreenOptions();
	}
	
}

function closeSubRightMenu( menuBox, speed ) {
	
	speed = speed || 200;
	
	menuBox
		.slideUp( speed * !deleteProcess )
		.find( '.dialogBox' ).hide().end() // Also close possibly open yes/no dialog box
		.prev()
		.removeClass( 'arrowup' );
	
}

function rightmenuShowNumbers() {
	
	// Align each number to li's text
	$( '#rightmenu-container' ).find( '.rightmenunumbs' ).remove();
	$( '#rightmenu-container' ).find( '.rightmenuli' ).each( function () {
		var theNumb = $( this ).data( 'number' );
		if ( theNumb ) {
			$( this ).append( '<div class="rightmenunumbs" style="left:' + $( this ).find( 'span' ).width() + 'px;">' + theNumb + ED );
		}
	} );
	
}

function appendDocs() {
	
	var myDocLi = $( '#rightmenu-container' ).find( '.menu-other-documentations' );
	
	// Remove all existing docs/message
	$( '#rightmenudoc-container' ).remove();
	myDocLi.next().find( 'span' ).empty();
	
	// Recreate original doc list
	docDatabaseSetup();
	
	// Create trans
	var docInfoSorted = [],
	    indexDoc      = [],
	    htmlX;
	
	// Sort them depending on current language
	// Find local language docs
	for ( var i = 0; i < docInfo.length; i++ ) {
		// Append indexDoc with the match doc index
		if ( docInfo[ i ].split( CO )[ 1 ].indexOf( DH + country.substr( 0, 2 ) ) > -1 ) {
			indexDoc.push( i );
		}
	}
	// Limit number of docs to local when corresp. option is set
	if ( Optionlocaldocs != 'true' ) {
		nbofDocs = docInfo.length;
	} else {
		nbofDocs = indexDoc.length;
	}
	
	// Add the other ones right after (indexes)
	for ( var j = 0; j < nbofDocs; j++ ) {
		if ( $.inArray( j, indexDoc ) == -1 ) {
			indexDoc.push( j );
		}
	}
	
	// Convert index into real info
	for ( var k = 0; k < nbofDocs; k++ ) {
		docInfoSorted[ k ] = docInfo[ indexDoc[ k ] ];
	}
	
	// Make the switch between the two arrays (sorted/old not sorted)
	docInfo = docInfoSorted.slice( 0 );
	
	// Add the box container (to avoid overflow) and arrows
	myDocLi.next()
		.append( '<div id="rightmenudoc-container"><div id="rightmenudoc-subcontainer"/><div id="rightmenudocArrowsUp" class="fasttransition"/><div id="rightmenudocArrowsDown" class="fasttransition"/></div>' );
	
	for ( var l = 0; l < nbofDocs; l++ ) {
		
		$( '#rightmenudoc-subcontainer' )
			.append( '<a class="rightmenudocBox fasttransition" target="_blank"/>' );
		
		docUrl = docInfo[ l ].split( CO )[ 1 ];
		
		htmlX = '<div class="rightmenudocThumb"><img src="' + docInfo[ l ].split( CO )[ 2 ] + '"><img src="' + imgFolder + SL + docUrl.split( PO )[ 1 ] + '-ico.png" class="rightmenudocIco"></div>';
		htmlX += '<img class="rightmenudocLang"/>';
		htmlX += '<span >' + docInfo[ l ].split( CO )[ 0 ] + '</span>';
		htmlX += clearBoth;
		$( '.rightmenudocBox:last', '#rightmenu-container' ).append( htmlX ).attr( 'href', docUrl );
		
		langFlag = docUrl.substr( docUrl.indexOf( SL ) + 1, 5 );
		
		$( '.rightmenudocLang:last', '#rightmenu-container' )
			.attr( 'src', imgFolder + SL + langFlag + '.png' );
		
	}
	
	// No docs available
	if ( !nbofDocs ) {
		$( '.menu-other-documentations', '#rightmenu-container' ).next().find( 'span' )
			.text( warningText[ 21 * langScope + lang ] );
		recordHistory( 21 );
	}
	
	docslideIndex = 0;
	docSlide( docslideIndex );
	
	///////////////////////////////////////////////////
	// Start mousewheel support (also for options)
	///////////////////////////////////////////////////
	
	setTimeout( function () {
		
		offMouseWheelEC( $( '.menu-other-documentations', '#rightmenu-container' ).next() );
		offMouseWheelEC( $( '.menu-settings', '#rightmenu-container' ).next() );
		
		if ( nbofDocs > 4 ) {
			mouseWheelEC( $( '.menu-other-documentations', '#rightmenu-container' ).next(), $( '#rightmenudoc-container' ), $( '#rightmenudocArrowsUp' ), $( '#rightmenudocArrowsDown' ) );
		}
		mouseWheelEC( $( '.menu-settings', '#rightmenu-container' ).next(), $( '#rightmenuOptionBox-container' ), $( '#rightmenuOptionBoxArrowsUp' ), $( '#rightmenuOptionBoxArrowsDown' ) );
		
	}, 100 );
	
	// Doc number info update
	myDocLi.data( 'number', nbofDocs );
	
}

function rightmenuoptionArrowsInit() {
	
	var incStep    = 155,
	    incStepAdj = 0;
	deltaPos       = 0;
	
	$( document )
		.on( 'click', '#rightmenuOptionBoxArrowsDown', function () {
			incStepAdj = incStep;
			deltaPos   = optionBoxesHeight - optionslideIndex - optionbrowserWHeight;
			if ( deltaPos > 0 ) {
				if ( deltaPos < incStep ) {
					incStepAdj = deltaPos;
				}
				slideSpeed = 200 + 300 * incStepAdj / 236;
				optionslideIndex += incStepAdj;
				optionSlide( slideSpeed );
			}
			
		} )
		.on( 'click', '#rightmenuOptionBoxArrowsUp', function () {
			incStepAdj = incStep;
			
			if ( optionslideIndex > 0 ) {
				if ( optionslideIndex < incStep ) {
					incStepAdj = optionslideIndex;
				}
				optionslideIndex -= incStepAdj;
				slideSpeed = 200 + 300 * incStepAdj / 236;
				optionSlide( slideSpeed );
			}
			
		} );
	
}

function mouseWheelEC( cont, target, triggerUp, triggerDown ) {
	
	cont
		.on( 'DOMMouseScroll', target, function ( e ) {
			if ( e.originalEvent.detail < 0 ) {
				triggerUp.click();
			} else {
				triggerDown.click();
			}
			return false;
		} )
		.on( 'mousewheel', target, function ( e ) {
			if ( e.originalEvent.wheelDelta >= 0 ) {
				triggerUp.click();
			} else {
				triggerDown.click();
			}
			return false;
		} );
	
}

function disableMouseWheel() {
	
	$( 'body' ).on( 'DOMMouseScroll mousewheel', function () {
		return false;
	} );
	
}

function enableMouseWheel() {
	
	if ( demoProcess ) {
		return;
	}
	
	$( 'body' ).off( 'DOMMouseScroll mousewheel' );
	
}

function offMouseWheelEC( cont ) {
	
	cont.off( 'DOMMouseScroll mousewheel' );
	
}

function optionSlide( slideSpeed ) {
	
	$( '#rightmenuOptionBox-subcontainer' )
		.animate( {
			marginTop: -optionslideIndex
		}, slideSpeed );
	optionArrows();
	
}

function optionArrows() {
	
	$( '#rightmenuOptionBoxArrowsUp, #rightmenuOptionBoxArrowsDown', '#rightmenu-container' )
		.removeClass( 'highlightpointer' );
	
	if ( optionslideIndex > 0 ) {
		$( '#rightmenuOptionBoxArrowsUp', '#rightmenu-container' ).addClass( 'highlightpointer' );
	}
	if ( optionslideIndex + optionbrowserWHeight < optionBoxesHeight ) {
		$( '#rightmenuOptionBoxArrowsDown', '#rightmenu-container' ).addClass( 'highlightpointer' );
	}
	
}

function rightmenudocArrowsInit() {
	
	var slideSpeed   = 500,
	    incStep      = 4;
	optionslideIndex = 0;
	
	$( document )
		.on( 'click', '#rightmenudocArrowsDown', function () {
			
			if ( docslideIndex + 4 + incStep < $( '.rightmenudocBox', '#rightmenu-container' ).length ) {
				slideInc = incStep;
			} else {
				slideInc = $( '.rightmenudocBox', '#rightmenu-container' ).length - docslideIndex - 4;
			}
			
			docSlide( slideInc, slideSpeed );
		} )
		.on( 'click', '#rightmenudocArrowsUp', function () {
			
			if ( docslideIndex > incStep ) {
				slideInc = -incStep;
			} else {
				slideInc = -docslideIndex;
			}
			
			docSlide( slideInc, slideSpeed );
			
		} );
	
}

function docSlide( slideInc, slideSpeed ) {
	
	docslideIndex += slideInc;
	
	$( '#rightmenudoc-subcontainer', '#rightmenu-container' )
		.animate( {
			marginTop: -(docslideIndex * 59)
		}, slideSpeed - ((4 - Math.abs( slideInc )) * 70) ); // Speeds adaptation to number of lasting docs to show
	
	docArrows();
	
}

function docArrows() {
	
	$( '#rightmenudocArrowsUp, #rightmenudocArrowsDown', '#rightmenu-container' )
		.show()
		.removeClass( 'highlightpointer' );
	
	if ( docslideIndex > 0 ) {
		$( '#rightmenudocArrowsUp', '#rightmenu-container' ).addClass( 'highlightpointer' );
	}
	if ( docslideIndex < $( '.rightmenudocBox', '#rightmenu-container' ).length - 4 ) {
		$( '#rightmenudocArrowsDown', '#rightmenu-container' ).addClass( 'highlightpointer' );
	}
	if ( $( '.rightmenudocBox', '#rightmenu-container' ).length <= 4 ) {
		$( '#rightmenudocArrowsUp, #rightmenudocArrowsDown', '#rightmenu-container' ).hide();
	}
	// Adapt doc box width depending on arrow presence
	$( '.rightmenudocBox', '#rightmenu-container' ).css( 'width', (93 + ($( '.rightmenudocBox', '#rightmenu-container' ).length <= 4) * 6) + '%' );
	
}

function appendCurrencies() {
	
	var currLi = $( '#rightmenu-container' ).find( '.menu-currency' );
	
	$.each( currencies, function ( index, value ) {
		currLi
			.next()
			.append( '<div class="currencyCoin fasttransition">' + value.split( LI )[ 0 ] + ED );
	} );
	//currLi.data('number',currencies.length);
	
	$( '.currencyCoin', '#rightmenu-container' ).on( 'click', function () {
		currClick = $( this );
		if ( currClick.hasClass( 'currencyActive' ) ) {
			return;
		}
		curr     = currClick.parent().find( '.currencyCoin' ).index( currClick );
		currency = currencies[ curr ].split( LI )[ 0 ];
		updateCurrencies();
	} );
	
}

function updateCurrencies() {
	
	// Find currency in currencies array curr|L/R
	var index   = currencies.indexOf( currencies.filter( function ( v ) {
		return v.indexOf( currency ) >= 0;
	} )[ 0 ] );
	currencyPos = currencies[ index ].split( LI )[ 1 ];
	
	$( '.currencyCoin', '#rightmenu-container' )
		.removeClass( 'currencyActive' )
		.eq( index )
		.addClass( 'currencyActive' );
	
	// Adjust currency position (L/R)
	if ( currencyPos == 'R' ) {
		SPcurrency = SP + currency;
	} else {
		SPcurrency = currency + SP;
	}
	
	$( '#setPricesCurrency' ).text( currency );
	
	// Simple way to apply new currency anywhere else
	fullCalc();
	
}

function appendVersion() {
	
	var compatibleBrowsers = 'firefox,chrome,edge,internet explorer,opera',
	    brName,
	    htmlX              = N;
	
	// Add browsers
	for ( var j = 0; j < compatibleBrowsers.split( CO ).length; j++ ) {
		brName = compatibleBrowsers.split( CO )[ j ];
		htmlX += '<div class="browsers" id="' + brName.replace( SP, DH ) + '" data-title="' + brName.charAt( 0 ).toUpperCase() + brName.slice( 1 ) + '" style="background-image:url(' + imgFolder + SL + brName.replace( SP, DH ) + '.png)"></div>';
	}
	
	// Write content
	$( '.rightmenuli', '#rightmenu-container' ).eq( 5 )
		.next().find( 'span' )
		.addClass( 'rightmenuVersion' )
		.before( '<img src="' + imgFolder + SL + 'estimation.svg" id="rightmenuVersionImg">' )
		.after( '<div id="browsers-container">' + htmlX + ED )
		.after( '<div id="rightmenuVersionPlusIc">' + Ic + '</div><div id="rightmenuVersionPlusLs">' + Ls + '</div><div id="rightmenuVersionPlusB">' + blob + '</div><div id="rightmenuVersionPlusSo"/><div id="rightmenuVersionPlusDB">' + productRangeDB + ED + clearBoth + '<div id="rightmenuVersionDate">' + NBSP + version.split( SP )[ 2 ] + ED );
	
	// Load data error: LS/C circle color change
	if ( LSCerror ) {
		$( '#rightmenuVersionPlusLs' ).addClass( 'localstoragecookies' );
	}
	
	// Current browser starts rotating
	$( HA + myBrowser.toLowerCase().replace( SP, DH ) ).addClass( 'infinite-rotate' );
	
}

function fullScreenOptions() {
	
	FSOptionsProcess = true;
	
	// Positioning items requires the container to be displayed
	$( '#fullscreenoptions-container' ).addClass( 'outofscreen' ).show();
	
	hideRightMenu( 1 );
	appendOptions();
	fontAdjustToContainer( $( '#title-fullscreenoptions' ) );
	
	// Now we can show it
	$( '#fullscreenoptions-container' ).hide().removeClass( 'outofscreen' )
		.fadeIn( function () {
			disableMouseWheel();
		} );
	
	// Start close functionality
	$( '#close-fullscreenoptions' ).off().on( 'click', function () {
		closeFullScreenOptions();
	} );
	
}

function closeFullScreenOptions() {
	
	$( '#close-fullscreenoptions' ).off();
	$( '#fullscreenoptions-container' ).fadeOut( function () {
		FSOptionsProcess = false;
		appendOptions();
		enableMouseWheel();
	} );
	
}

function fontAdjustToContainer( title, maxWidth, maxHeight ) {
	
	maxWidth  = maxWidth || title.parent().outerWidth();
	maxHeight = maxHeight || title.parent().height();
	
	var fontTest = 590,
	    inc      = fontTest / 2;
	
	// A kind of dichotomy
	for ( var k = 0; k < 20; k++ ) {
		
		title.css( 'font-size', fontTest );
		if ( title.width() > maxWidth ) {
			fontTest -= inc;
		} else if ( title.width() < maxWidth ) {
			fontTest += inc;
		} else {
			break;
		}
		inc /= 2;
		
	}
	
	title.css( 'top', maxHeight / 2 );
	
}

function appendOptions() {
	
	// Set sub menus specific background
	$( '.menu-settings', '#rightmenu-container' ).attr( 'id', 'options' ).next().addClass( 'optionadjust' );
	
	// Remove all options
	$( '#rightmenuOptionBox-container' ).remove();
	$( '#fullscreenoptions' ).css( 'height', 480 ).find( '.optionsColumn' ).remove();
	
	$( '.menu-settings', '#rightmenu-container' ).next()
		.append( '<div id="rightmenuOptionBox-container"><div id="rightmenuOptionBox-subcontainer"/><div id="rightmenuOptionBoxArrowsUp"/><div id="rightmenuOptionBoxArrowsDown"/></div>' );
	
	///////////////////////////
	// Append Options
	///////////////////////////
	
	for ( var j = 0; j < optionheadText.length; j++ ) {
		if ( (j - 1) % (langScope + 1) === 0 ) {
			$( '#rightmenuOptionBox-subcontainer' )
				.append( '<div class="rightmenuOptionBox"><div class="rightmenuOptionIcon" style="background-image:url(' + imgFolder + SL + optionheadText[ j - 1 ] + '.png)"/><span>' + optionheadText[ j + lang ] + '</span></div>' );
		}
	}
	// Set option status (checked or unchecked)
	headOption  = 0;
	indexOption = 0;
	
	appendDataOptions( Optionuser );
	appendDataOptions( Optionmonths );
	appendDataOptions( Optioncountry );
	appendDataOptions( Optioncurrency );
	appendDataOptions( Optionpriceperkg );
	appendDataOptions( Optiontax );
	appendDataOptions( Optionautoprice );
	appendDataOptions( Optionglobaldiscount );
	appendDataOptions( Optionudderdiscount );
	appendDataOptions( Optionpwdprices );
	appendDataOptions( Optionpricecheckplus );
	appendDataOptions( OptioncostGMilk );
	appendDataOptions( OptioncostDCM );
	appendDataOptions( OptioncostGDCM );
	appendDataOptions( Optiondistriblogo );
	appendDataOptions( Optionagreement );
	appendDataOptions( OptionlowresPDF );
	// appendDataOptions(Optionshippingbottom);
	appendDataOptions( Optionfilecontactdate );
	appendDataOptions( Optionfiledate );
	appendDataOptions( Optionsound );
	// appendDataOptions(Optioncopycci);
	appendDataOptions( Optionhelpacidalk );
	appendDataOptions( Optiontooltips );
	appendDataOptions( Optioncontact );
	appendDataOptions( Optionproductmosaic );
	appendDataOptions( Optionoldprodmosaic );
	appendDataOptions( Optionnodemotooltips );
	appendDataOptions( Optiondemoloop );
	appendDataOptions( Optiondemobig );
	appendDataOptions( Optionspeeddemo );
	appendDataOptions( OptionAOC );
	appendDataOptions( Optionstatictabs );
	appendDataOptions( Optionskipintro );
	appendDataOptions( Optionbreedingwidget );
	// appendDataOptions(Optionlocaldocs);
	appendDataOptions( Optiondate );
	appendDataOptions( Optioncalendar );
	
	appendMainMenu();
	
	// 'Hide' empty options
	var countOpt = 0;
	$( '.rightmenuOptionBox', '#rightmenuOptionBox-container' ).each( function () {
		if ( !$( this ).children().hasClass( 'rightmenuOptionCheck' ) ) {
			$( this ).hide();
		} else {
			countOpt += $( this ).find( '.rightmenuOptionCheck' ).length;
		}
	} );
	$( '#rightmenu-container' ).find( '.menu-settings' ).data( 'number', countOpt );
	
	///////////////////////////
	// Update and save Options
	///////////////////////////
	
	updateOptions();
	
	//////////////////////
	// Option slide init
	//////////////////////
	
	$( '.menu-settings', '#rightmenu-container' ).show(); // To get the child height
	optionBoxesHeight    = $( '#rightmenuOptionBox-subcontainer' ).height();
	optionbrowserWHeight = $( '#rightmenuOptionBox-container' ).height();
	optionArrows();
	optionSlide( 0 );
	
	// Delay transition assignment to avoid flashing effect during this rebuilding step
	setTimeout( function () {
		$( '#rightmenuOptionBoxArrowsDown, #rightmenuOptionBoxArrowsUp' ).addClass( 'fasttransition' );
	}, 200 );
	
	if ( FSOptionsProcess ) {
		appendFullScreenOptions();
	}
	
}

function appendFullScreenOptions() {
	
	var needNewColumn = true,
	    columns,
	    htmlX         = '<div class="optionsColumn"/>';
	
	$( '#rightmenu-container' ).find( '.rightmenuOptionBox' ).each( function () {
		
		// Create a new column on start or when overflow
		if ( needNewColumn ) {
			$( '#fullscreenoptions' ).append( htmlX );
		}
		columns = $( '#fullscreenoptions' ).find( '.optionsColumn' );
		
		// Add the overflow item (previous loop) to the new created column
		if ( needNewColumn ) {
			columns.last().append( $( '#fullscreenoptions' ).find( '.rightmenuOptionBox' ).last() );
		}
		columns.last().append( $( this ) );
		
		// Is there an overflow?
		needNewColumn = ($( this ).position().top + $( this ).outerHeight() - $( '#fullscreenoptions' ).height()) > 0;
		
	} );
	$( '#fullscreenoptions' ).css( 'width', 280 * columns.length );
	
	// Reajust window height
	var maxHeight = 1000;
	$( '#fullscreenoptions' ).find( '.optionsColumn' ).each( function () {
		maxHeight = Math.min( $( '#fullscreenoptions' ).outerHeight() - ($( this ).position().top + $( this ).outerHeight()), maxHeight );
	} ).end()
		.css( {
			minHeight: 0,
			height:    $( '#fullscreenoptions' ).height() - maxHeight + 20
		} );
	
}

function appendDataOptions( OptionType ) {
	
	var htmlX,
	    // AnimalInLang is the singular version of the animal type
	    animalInLang = findAttributesInArray( animalType, animalAttributes )[ animalAttributes[ 0 ].split( CO ).length - langScope + lang ].replace( /\t/g, N ).split( LI )[ 0 ].toLowerCase();
	
	// Define which head option concerned
	for ( var i = 0; i < optiondetailsText.length; i++ ) {
		
		if ( headOption == i && indexOption == optiondetailsText[ headOption ].length ) {
			headOption++;
			indexOption = 0;
		}
	}
	
	var optionCheck  = N;
	targetoptionText = optiondetailsText[ headOption ][ indexOption ];
	targetText       = targetoptionText.split( CO );
	
	if ( OptionType === undefined ) {
		if ( targetText[ 2 ] == 'yes' ) {
			optionCheck = 'checked';
		} // Default
	} else {
		if ( OptionType.toString() == 'true' ) {
			optionCheck = 'checked';
		}
		
	}
	
	// Check if not a specific country option
	if ( targetText[ 1 ] == 'all' || targetText[ 1 ] == country ) {
		htmlX = clearBoth;
		htmlX += '<label class="rightmenuOptionCheck"><input type="checkbox" name="' + targetText[ 0 ] + '" ' + optionCheck + '><div class="rightmenuOptionName">' + targetText[ 4 + lang ].replace( '&S8', animalInLang ) + '</div></label>';
		htmlX += clearBoth;
		$( '.rightmenuOptionBox', '#rightmenu-container' ).eq( headOption ).append( htmlX );
		
		// Update price list upper text
		if ( targetText[ 0 ] == 'autoprice' ) {
			$( '#setPricesInsert' ).text( targetText[ 4 + lang ] );
		}
		
		// Update price list upper text
		if ( targetText[ 0 ] == 'FSoptions' ) {
			$( '.rightmenuOptionCheck' ).last().addClass( 'rightmenuFSOption' );
		}
		
		// Disabled option
		if ( targetText[ 3 ] == 'disabled' ) {
			$( '.rightmenuOptionCheck' ).last().find( 'input' ).prop( 'disabled', true );
		}
		
		// Add a warning icon (conflict…)
		if ( showRightMenuWarning == targetText[ 0 ] ) {
			$( '.rightmenuOptionName:last', '#rightmenu-container' ).append( '<div id="rightmenuwarning"/>' );
			$( '#rightmenuwarning', '#rightmenu-container' ).fadeIn( 250 );
		}
		
	}
	indexOption++;
	
}

function appendMainMenu() {
	
	// Remove all submenus
	$( '.rightmenuMainMenu, .dialogBox', '#rightmenu-container' ).remove();
	
	// Append sub menus
	var htmlX = N,
	    htmlID,
	    htmlLng;
	
	for ( var i = 0; i < mainmenuText.length; i++ ) {
		htmlID  = mainmenuText[ i ].split( CO )[ 0 ];
		htmlLng = mainmenuText[ i ].split( CO )[ 1 ];
		
		if ( htmlLng == 'all' || htmlLng == language ) {
			
			htmlX += '<div id="' + htmlID + '" class="rightmenuMainMenu fasttransition">' + mainmenuText[ i ].split( CO )[ 2 + lang ] + ED;
			
			if ( htmlID == 'app-reset' ) {
				htmlX += '<div class="dialogBox">';
				htmlX += '<div class="rightmenuMainText">' + dialogText[ 2 ].split( CO )[ lang ] + ED;
				htmlX += '<div class="' + dialogText[ 0 ].split( CO )[ 1 ].toLowerCase() + ' rightmenuMainButton fasttransition">' + dialogText[ 0 ].split( CO )[ lang ] + ED;
				htmlX += '<div class="' + dialogText[ 1 ].split( CO )[ 1 ].toLowerCase() + ' rightmenuMainButton fasttransition">' + dialogText[ 1 ].split( CO )[ lang ] + ED;
				htmlX += clearBoth + ED;
			}
			
		}
		
	}
	
	$( '#rightmenu-container' ).find( '.menu-main' ).next().append( htmlX );
	
}

function soundIcon() {
	
	$( '#sound' ).css( 'background-image', 'url(' + imgFolder + SL + 'sound' + (Optionsound == 'true' ? N : 'off') + PO + 'svg)' );
	
}

function updateOptions() {
	
	// Return if app launch
	if ( (newfileData[ sessionIndex ] || '1').length - 1 === 0 ) {
		return;
	}
	
	// Rearrange docs
	appendDocs();
	
	// Display/hide general tooltips
	if ( Optiontooltips == 'true' ) {
		$( '#tooltip' ).removeClass( 'outofscreen' );
	} else {
		$( '#tooltip' ).addClass( 'outofscreen' );
	}
	
	// Pricelist password
	if ( Optionpwdprices == 'true' ) {
		$( '#priceList' ).addClass( 'lock' );
	} else {
		$( '#priceList' ).removeClass( 'lock' );
	}
	
	// Auto price insertion
	if ( Optionautoprice == 'true' ) {
		$( '#setPricesInsert' ).removeClass( 'verylowopacity' );
	} else {
		$( '#setPricesInsert' ).addClass( 'verylowopacity' );
	}
	
	// Update Pricelist info
	$( '#setPricesKilo' ).css( 'top', -9999 * (Optionpriceperkg != 'true') );
	
	// Display/hide demo tooltips
	if ( Optionnodemotooltips == 'true' ) {
		$( '#Demo-tooltip-container' ).addClass( 'notdisplayed' );
	} else {
		$( '#Demo-tooltip-container' ).removeClass( 'notdisplayed' ).css( 'display', 'inline-block' );
	}
	
	// Rearrange AOC products
	addRemoveSpecials( 'AOC', 0 ); // Clear AOC
	if ( OptionAOC == 'true' ) {
		addRemoveSpecials( 'AOC', 1 ); // Set AOC (if option set and fr)
	}
	
	// Removed 22-07-2019 (not wanted anymore by Kersia) + back 28-08-2019
	// Logo
	var logoShow = 1 * (Optiondistriblogo != 'true');
	$( '#warning-logo' ).css( 'opacity', logoShow );
	$( '#rightmenulogoImg' ).css( 'opacity', 1 - 0.2 * logoShow );
	
	if ( !loadProcess && !unredoProcess ) {
		
		// Small breeding Widget
		// Nice animation only when visible
		var speedWidget = $( '#small-data-widget' ).isVisible();
		
		if ( Optionbreedingwidget == 'true' ) {
			if ( $( '#small-data-widget' ).css( 'margin-left' ) != '0px' ) {
				$( '#small-data-widget' )
					.animate( { marginLeft: 0 }, 250 * speedWidget );
			}
		} else {
			if ( $( '#small-data-widget' ).css( 'margin-left' ) != '-500px' ) {
				$( '#small-data-widget' )
					.animate( { marginLeft: 30 }, 200 * speedWidget )
					.animate( { marginLeft: -500 }, 300 * speedWidget );
			}
		}
		
	}
	
	// Do not show arrows if fullscreen options
	var optionsli = $( '.menu-settings', '#rightmenu-container' );
	if ( OptionFSoptions == 'true' ) {
		optionsli.addClass( 'nobkgimage' );
	} else {
		optionsli.removeClass( 'nobkgimage' );
	}
	
	// Volume icon management
	soundIcon();
	
	// Mail copy Cci: Remove existing email address
	if ( Optioncopycci == 'false' ) {
		$( '#mailCci' ).val( N );
	}
	
	// Big demo toolips
	if ( Optiondemobig == 'true' ) {
		$( '#Demo-tooltip' ).addClass( 'bigTextDemo' );
	} else {
		$( '#Demo-tooltip' ).removeClass( 'bigTextDemo' );
	}
	
	// Calendar Themes
	$( 'link' ).attr( 'href', libFolder + SL + 'calendar' + DH + calendarThemes[ (Optioncalendar == 'true') * 1 ] + '.css' );
	
}

function optionChangeInit() {
	
	$( document ).on( 'click', '.rightmenuOptionCheck input', function () {
		
		optionClicked        = $( this );
		showRightMenuWarning = false;
		
		//////////////////
		// Sound
		//////////////////
		
		if ( optionClicked.attr( 'name' ) == 'sound' ) {
			$( '#sound' ).click();
			updateData();
		}
		
		//////////////////
		// AOC
		//////////////////
		
		if ( optionClicked.attr( 'name' ) == 'AOC' && OptionAOC == 'false' ) {
			
			$( '.catbox', '#categories' ).each( function () {
				
				// Cheks that not an AOC exception
				catName      = $( this ).parent().attr( 'class' ).split( SP )[ 1 ];
				specialData  = $( this ).find( 'img' ).attr( 'data-specials' );
				specialData2 = specialData.substring( 4, specialData.length - 1 );
				specialIssue = catName.indexOf( specialData2 ) < 0;
				
				// Alert/flash if AOC product(s) already there
				if ( specialData.substr( 0, 3 ) == 'AOC' && specialIssue ) {
					showRightMenuWarning = optionClicked.attr( 'name' );
					showTopWarning( 14, 200, 5000 );
					appendOptions();
					$( this ).children().not( '.close, .magnify' ).flash( 200, 6 );
					return;
				}
				
			} );
			fullCalc();
			
		}
		
		//////////////////
		// Price per kg
		//////////////////
		
		// 	Unit prices already set?
		sum = 0;
		$( '.unitprice', '#categories' ).each( function () {
			sum += Number( $( this ).val() );
		} );
		
		if ( optionClicked.attr( 'name' ) == 'priceperkg' ) {
			
			// Display warning message and return
			if ( sum > 0 ) {
				showRightMenuWarning = optionClicked.attr( 'name' );
				showTopWarning( 16, 200, 5000 );
				appendOptions();
				return;
			}
			updateData();
			fullCalc();
			
		}
		
		////////////////////
		// Acid/Alkali help
		////////////////////
		
		if ( optionClicked.attr( 'name' ) == 'helpacidalk' ) {
			
			// Display warning message and return
			sum = $( '.catbox', '#categories' ).parent( '.milktank, .internalcircuits' ).find( '.catbox' ).length;
			
			if ( sum > 0 ) {
				showRightMenuWarning = optionClicked.attr( 'name' );
				showTopWarning( 21, 200, 5000 );
				appendOptions();
				return;
			}
			updateData();
			fullCalc();
			
		}
		
		//////////////////
		// File name
		//////////////////
		
		if ( optionClicked.attr( 'name' ) == 'filedate' ) {
			updateData();
			if ( Optionfiledate == 'true' && Optionfilecontactdate == 'true' ) {
				Optionfilecontactdate = 'false';
			}
		}
		
		if ( optionClicked.attr( 'name' ) == 'filecontactdate' ) {
			updateData();
			if ( Optionfilecontactdate == 'true' && Optionfiledate == 'true' ) {
				Optionfiledate = 'false';
			}
		}
		
		if ( optionClicked.attr( 'name' ) == 'filecontactdate' || optionClicked.attr( 'name' ) == 'filedate' ) {
			
			updateFilename();
			loadSaveEnable();
			appendOptions();
			return;
			
		}
		
		//////////////////
		// Tax price
		//////////////////
		
		if ( optionClicked.attr( 'name' ) == 'tax' ) {
			
			// Show info message
			if ( sum > 0 ) {
				showTopWarning( 17, 200, 7000 );
			}
			updateData();
			priceTaxforTexts();
			appendTexts();
			fullCalc();
			
		}
		
		/////////////////////
		// Global discount
		/////////////////////
		
		if ( optionClicked.attr( 'name' ) == 'globaldiscount' ) {
			
			updateData();
			if ( Optionglobaldiscount == 'true' ) {
				if ( Optionudderdiscount == 'true' ) {
					Optionudderdiscount = 'false';
				}
			}
			appendOptions();
			return;
		}
		
		/////////////////////////////
		// Udder hygiene discount
		////////////////////////////
		
		if ( optionClicked.attr( 'name' ) == 'udderdiscount' ) {
			
			updateData();
			if ( Optionudderdiscount == 'true' ) {
				if ( Optionglobaldiscount == 'true' ) {
					Optionglobaldiscount = 'false';
				}
			}
			appendOptions();
			return;
		}
		
		///////////////////
		// Cost DCM/GDCM
		///////////////////
		
		if ( optionClicked.attr( 'name' ) == 'costDCM' || optionClicked.attr( 'name' ) == 'costGDCM' ) {
			
			// Just for undo redo handle
			fullCalc();
			
		}
		
		/////////////////////////
		// Validation mail/tél.
		/////////////////////////
		
		if ( optionClicked.attr( 'name' ) == 'contact' ) {
			
			updateData();
			$( '.validate', '#info' ).focus().blur();
			if ( Optioncontact != 'true' ) {
				hideTopWarning();
			}
			
		}
		
		//////////////////
		// Auto price
		//////////////////
		
		if ( optionClicked.attr( 'name' ) == 'autoprice' ) {
			updateData();
			if ( Optionautoprice == 'false' ) {
				showTopWarning( 38, 200, 7000 );
				return;
			} else {
				hideTopWarning( 200 );
			}
		}
		
		/////////////////////
		// No record warning
		/////////////////////
		
		if ( optionClicked.attr( 'name' ) == 'nofilerec' ) {
			updateData();
			if ( Optionnofilerec == 'true' ) {
				Optionmailfilerec = 'false';
				showTopWarning( 55, 200, 7000 );
			} else {
				if ( warningType == 55 ) {
					hideTopWarning();
				}
			}
			appendOptions();
			if ( Optionnofilerec == 'true' ) {
				$( 'input[name="mailfilerec"]' ).attr( 'disabled', true );
			}
			return;
		}
		
		//////////////////
		// Static tabs
		//////////////////
		
		if ( optionClicked.attr( 'name' ) == 'statictabs' ) {
			updateData();
			updateFileTabCont( Optionstatictabs == 'true' ? $( document ).scrollTop() : 0 );
			return;
		}
		
		updateData();
		appendOptions();
		
	} );
	
}

function modalInit() {

	var modals = ['#modalVF1,1600', '#modalVF2,700', '#modalVF3,1600', '#modalVF4,1600', '#modalVF5,700', '#modalVF6,700'];
	
	// Used for circuits
	createmodalLTSurf();
	
	// Used for valorization
	$.each( modals, function ( index, value ) {
		value = value.split( CO );
		createModalVFTable( value[ 0 ], value[ 1 ], index + 1 );
	} );
	valorAutoCalcInit();
	
	// Used for protocols
	$( document ).on( 'click', '.modal-select', function () {
		$( this ).closest( '.modal' ).data( 'protocol', $( '#modal-container' ).find( '.modal-select' ).length - 1 - $( this ).index() );
		$( '#modal-container' ).click();
	} );
	
}

function createModalVFTable( target, dim, type ) {
	
	var myDiv      = $( target ),
	    myArray    = valorTable[ type ],
	    nbCols     = myArray[ 1 ].split( CO ).length,
	    dimDiv     = dim / nbCols - 14,
	    addClass2,
	    htmlX      = N,
	    rowInfos   = [1, 0, 1, 1, 0, 0], // This is where (index) the row info begins vs each table type
	    optionList = '<option value="blank"></option>';
	
	myDiv.width( dim );
	
	$.each( myArray, function ( row, value ) {
		var cells = value.split( CO ),
		    content;
		$.each( cells, function ( col, value ) {
			var addClass  = N,
			    valorText = valorTableText[ value.split( SP )[ 0 ] ];
			if ( value ) {
				content = valorText ? (valorText.split( CO )[ lang ] ? valorText.split( CO )[ lang ] : valorText.split( CO )[ 0 ]) : N;
				// Prevents text overflow
				if ( content.length > 11 * dimDiv / 86 ) {
					addClass = SP + 'font11'
					if ( content.length > 17 * dimDiv / 96 ) {
						addClass += SP + 'centeredInput';
					}
				}
				htmlX += '<div class="tableCell' + SP + value + addClass + '" data-row="' + row + '" data-col="' + col + '">' + content + ED;
			} else {
				htmlX += '<input class="tableCell"' + ' data-row="' + row + '" data-col="' + col + '"/>';
			}
		} );
		htmlX += clearBoth;
	} );
	
	// Store number of rows
	myDiv.data( 'rows', myArray.length - 1 );
	
	myDiv.append( htmlX ).find( '.tableCell' ).width( dimDiv );
	
	// Appending notes (French only for the moment)
	htmlX = '<div class="spacer"/>' + clearBoth;
	htmlX += '<div class="modalnote-container">';
	var i = 0;
	$.each( modalVFNoteText, function ( index, value ) {
		i     = index;
		value = value.split( CO );
		if ( value[ type - 1 ] * 1 ) {
			htmlX += '<div class="modalnote">' + value[ 6 + lang ].replace( PO, CO ) + NBSP + CI + NBSP + ED;
			// Carriage return every 2 notes
			if ( i % 2 ) {
				htmlX = removeLastChars( htmlX, 19 ) + ED;
				htmlX += clearBoth;
			}
		}
	} )
	// Removing the last ● at the end
	if ( i % 2 == 0 ) {
		htmlX = removeLastChars( htmlX, 19 ) + ED;
	}
	htmlX += ED;
	myDiv.append( htmlX );
	
	if ( lang != 0 ) {
		myDiv.find( '.modalnote-container' ).hide();
	}
	
	// Merge cut cells -> cut header
	mergeCells( myDiv );
	
	var rowInfo = rowInfos[ type - 1 ]; // Where the first row is
	
	// Create option list
	$.each( valorHarvestText, function ( index, value ) {
		value = value.split( CO )[ lang ];
		optionList += '<option value="' + value + '">' + value + '</option>';
	} );
	
	// Appending input class to identify them (save/load) E.g. meadow_harvest2
	myDiv.find( 'input' ).each( function () {
		col            = $( this ).attr( 'data-col' );
		row            = $( this ).attr( 'data-row' );
		var inputClass = myDiv.find( '.tableCell[data-col="' + col + '"][data-row="' + rowInfo + '"]' ).attr( 'class' );
		inputClass     = inputClass.replace( 'tableCell ', N ).replace( 'font11', N ).replace( ' centeredInput', N );
		if ( inputClass[ inputClass.length - 1 ] == SP ) {
			inputClass = inputClass.slice( 0, -1 )
		}
		if ( inputClass.split( SP ).length > 1 ) {
			inputClass = inputClass.split( SP )[ 1 ];
		}
		inputClass = myDiv.find( '.tableCell[data-col="0"][data-row="' + row + '"]' ).attr( 'class' ).split( SP )[ 1 ] + US + inputClass;
		// console.log('row:'+row+' col:'+col+' -> '+inputClass)
		if ( inputClass.indexOf( '_harvest' ) > 0 ) {
			// We remove the input and replace it by the option list item
			$( this ).after( '<select class="tableCell' + SP + inputClass + '" data-row="' + row + '" data-col="' + col + '">' + $( this ).val() + '>' + optionList + '</select>' ).remove()
		} else {
			inputClass = 'adjust' + SP + inputClass;
			if ( inputClass.indexOf( 'dosenb' ) > 0 ) {
				inputClass += SP + 'dosenb';
				$( this ).prop( 'disabled', true );
			}
			if ( inputClass.indexOf( 'yield' ) > 0 ) {
				inputClass += SP + 'yield';
				$( this ).prop( 'disabled', true );
			}
			$( this ).addClass( inputClass );
		}
		
	} );
	myDiv.find( 'select' ).width( dimDiv );
	
}

function mergeCells( myDiv ) {
	
	var myRefCell = {}, lastMergeCell,
	    removed   = 0,
	    merged    = [],
	    carriage  = 2;
	
	myDiv.find( '.tableCell' ).each( function () {
		if ( $( this ).hasClass( 'merge' ) ) {
			if ( !myRefCell.length ) {
				myRefCell = $( this ).prev();
			}
			$( this ).remove();
			removed++;
		} else {
			if ( myRefCell.length ) {
				dimDiv        = myRefCell.outerWidth() + parseInt( myRefCell.css( 'border-left-width' ) )
				lastMergeCell = $( this ).prevInDOM( '.tableCell' );
				// Store cut col indexes
				merged.push( myRefCell.attr( 'data-col' ) );
				myRefCell.removeClass( 'font11' ).width( myRefCell.outerWidth() * (removed + 1) + (parseInt( myRefCell.css( 'border-left-width' ) ) * (removed + 2)) );
				myRefCell = {};
				removed   = 0;
			}
		}
	} );
	
	// Now, we move the third (carriage+1) cut below
	
	var toAdd = $(),
	    lastAdded,
	    firstCell;
	
	if ( merged.length ) {
		myDiv.width( myDiv.width() - ((merged.length + 2) * dimDiv) );
		for ( row = 0; row <= myDiv.data( 'rows' ); row++ ) {
			firstCell = 0;
			myDiv.find( '.tableCell' ).each( function () {
				if ( $( this ).data( 'row' ) == row && $( this ).data( 'col' ) >= merged[ carriage ] ) {
					if ( !firstCell ) {
						$( this ).data( 'firstCell', true );
					}
					firstCell++;
					toAdd     = toAdd.add( $( this ) )
					lastAdded = $( this );
				}
			} )
			lastAdded.after( '<div style="clear:both" class="clearBoth"/>' );
			toAdd = toAdd.add( $( '.clearBoth' ).last() );
		}
		
		myDiv.find( '.spacer' ).after( toAdd ); // Appending the 3rd cut
		myDiv.find( '.spacer' ).insertBefore( myDiv.find( '.modalnote-container' ) ); // Moving the spacer below
		
		// X aligning of the 3rd cut
		myDiv.find( '.tableCell' ).each( function () {
			if ( $( this ).data( 'firstCell' ) ) {
				$( this ).css( 'margin-left', 192 );
			}
		} );
		
	}
	
	// Adding the comment on the header
	var myHeader = myDiv.find( '.cut' + (carriage + 1) );
	myHeader.text( myHeader.text() + SP + '(' + myDiv.find( '.meadow' ).text().toLowerCase() + ')' );
	
}

function createStructure() {
	
	var htmlX, htmlY;
	
	///////////////////
	// Main container
	///////////////////
	
	$( 'body' ).append( '<div id="main-container"/>' );
	
	////////////////////////////////////
	// Backgrounds & navbar HTML
	////////////////////////////////////
	
	htmlX = '<div id="fullscreenoptions-container"><div id="fullscreenoptions"><div id="title-fullscreenoptions"/><div id="close-fullscreenoptions"/></div></div><div id="UIcontainer"><div id="message-container"><span/><div data-loader="circle-side" id="UISpinner"/></div></div>';
	htmlX += '<div id="modal-container">';
	htmlX += '<div id="modalLT" class="modal modal-lactoduc"><div id="modalLT-title"/><div id="modalLT-close"/><div id="modalLT-inputcont"/><div id="modalLT-OK" class="modalLT-button fasttransition">OK</div><div id="modalLT-reset" class="modalLT-button fasttransition tooltipelement"/></div>';
	htmlX += '<div id="modalHP" class="modal modal-hoovesProtocol"><div class="modal-select-container"><div class="modal-select fasttransition"/><div class="modal-select fasttransition"/><div class="modal-select fasttransition"/></div><img src="' + imgFolder + SL + 'hooves-protocol-fr.png"></div>'; // An image is set to define <w> & <h>
	htmlX += '<div id="modalVF1" class="modal modal-valorDetail1"><div id="modalVF1-title" class="modalVF-title"/><div class="modal-eraser tooltipelement"/><div class="modal-redo tooltipelement"/><div class="modal-undo tooltipelement"/></div>';
	htmlX += '<div id="modalVF2" class="modal modal-valorDetail2"><div id="modalVF2-title" class="modalVF-title"/><div class="modal-eraser tooltipelement"/><div class="modal-redo tooltipelement"/><div class="modal-undo tooltipelement"/></div>';
	htmlX += '<div id="modalVF3" class="modal modal-valorDetail3"><div id="modalVF3-title" class="modalVF-title"/><div class="modal-eraser tooltipelement"/><div class="modal-redo tooltipelement"/><div class="modal-undo tooltipelement"/></div>';
	htmlX += '<div id="modalVF4" class="modal modal-valorDetail4"><div id="modalVF4-title" class="modalVF-title"/><div class="modal-eraser tooltipelement"/><div class="modal-redo tooltipelement"/><div class="modal-undo tooltipelement"/></div>';
	htmlX += '<div id="modalVF5" class="modal modal-valorDetail5"><div id="modalVF5-title" class="modalVF-title"/><div class="modal-eraser tooltipelement"/><div class="modal-redo tooltipelement"/><div class="modal-undo tooltipelement"/></div>';
	htmlX += '<div id="modalVF6" class="modal modal-valorDetail6"><div id="modalVF6-title" class="modalVF-title"/><div class="modal-eraser tooltipelement"/><div class="modal-redo tooltipelement"/><div class="modal-undo tooltipelement"/></div>';
	htmlX += ED;
	htmlX += '<div id="diagnostic-container"><div id="diagnostic-subcontainer">';
	htmlX += '<div id="diagnostic-boxcontainer"/><div id="head-diagnostic"><div id="ring-diagnostic"/><div id="title-diagnostic"/></div><div id="close-diagnostic"/>';
	htmlX += '<div id="radial-bar" class="fasttransition"><div id="js-radial-mask" class="radial-bar__mask js-radial-mask"><div class="radial-bar__fill js-radial-fill"></div></div><div class="radial-bar__mask"><div class="radial-bar__fill js-radial-fill"></div><div class="radial-bar__fill js-radial-fix"/></div><div id="radial-bar__inset"><div id="js-radial-percentvalue">0</div></div></div>';
	htmlX += '<div id="restart-diagnostic" class="end-diag fasttransition"/><div id="conclusion-diagnostic"/><div id="fixall-diagnostic" class="end-diag fasttransition"/></div></div></div>';
	htmlX += '<div id="AnimalType-container"><div id="Animal-container"/></div>';
	htmlX += '<div id="splash-version" class="hide" onclick="hideSearch();splashMosaicIntro(null,true)"/>';
	htmlX += '<div id="go-container"/><div id="go-subcontainer"><div id="go-out"/><div id="go-boxcontainer"><span/><input id="goboxinput" type="password" value="' + App + '"/>' + clearBoth + '<div id="goboxcheck-container"><div type="checkbox" id="goboxcheck"/><span/></div><div id="goboxinfo"/></div></div>';
	htmlX += '<div id="Mosaic-container"><div id="Mosaic-widget-container"><span id="mosaic-elementrange1"/><span id="mosaic-elementrange2"/><div id="close-mosaic"/></div><div id="MosaicBox-window"><div id="mosaic-window-info"/><div id="Mosaic-subcontainer"/></div><div id="mosaic-low-container"><span id="mosaicprod-cat1"/><span id="mosaicprod-cat2"/></div></div>';
	htmlX += '<div id="UIintro-container"><div id="splash-container"><div id="intro-text"/></div></div>';
	htmlX += '<div id="navbar" class="veryslowtransition"><div id="top-warning"><div id="warntext-container"><div id="close-top-warning"/><div id="warntext" class="fasttransition"/></div></div><div id="topmenu" class="maxHeight65"/></div>';
	
	////////////////////////////////////
	// Lightbox HTML, load field
	// & big flag
	////////////////////////////////////
	
	htmlX += '<div id="rightmenu-container"><div id="rightmenuup"/></div><img id="bigflag" src="#"/>';
	
	//////////////////////////
	// Other HTML content
	//////////////////////////
	
	htmlX += '<div id="sessionPreview-container"><div class="sessionPreview"><div class="preview"/></div></div>';
	htmlX += '<div id="info"/>';
	htmlX += '<input type="file" id="fileToLoad" class="fileLoad" accept="' + fileExt + '">';
	htmlX += '<div id="addtocart-container"><div id="addtocartup"/><div id="addtocart-subcontainer"><div id="addtocart-freetext"/><div id="addtocart"><div id="addtocart-itemtext"/>';
	htmlX += '<img src="#" id="addtocart-itemimg"><div id="addtocart-itemtitle"></div><div id="addtocart-itemdesc"></div><div id="addtocart-qty"></div></div></div></div>';
	htmlX += '<div id="categories"/>';
	htmlX += '<div id="open-slider" class="mediumtransition"/>';
	htmlX += '<div id="slider-container" class="outofscreen"/>';
	
	$( '#main-container' ).append( htmlX );
	
	htmlX = '<div id="lightbox-container"><div class="lightbox"><img src="#" alt="ligthbox"><div id="lightbox-title"/><div id="lightbox-subimage"><div id="lightbox-cart" class="lightboxlink tooltipelement"><div id="lightbox-cartdetail"/></div><a id="FT" class="lightboxlink" href="#" target="_blank"/><a id="DOCFDS" class="lightboxlink" href="#" target="_blank"/><div id="lightbox-desc"/></div><a id="YouTube" class="mediumtransition" href="#" target="_blank"/><div id="close-lightbox"/><div id="lightbox-AB"/><div id="lightbox-old"/></div></div>';
	$( 'body' ).append( htmlX );
	
	//////////////////
	//  Rightmenu
	//////////////////
	
	htmlX = N;
	// i=Number of menu lis
	for ( var i = 0; i < rightmenuText.length / langScope; i++ ) {
		htmlY = N;
		// Append logo image
		if ( rightmenuText[ i * langScope + 1 ].replace( SP, DH ).toLowerCase() == 'my-logo' ) {
			htmlY = '<img id="rightmenulogoImg" class="lightboxenabled"><div id="warning-logo"/>';
		}
		htmlX += '<div class="rightmenuli' + SP + 'menu' + DH + rightmenuText[ i * langScope + 1 ].replace( SP, DH ).toLowerCase() + '"><span/></div><div class="rightmenusubli">' + htmlY + '<span/></div>';
	}
	$( '#rightmenu-container' ).append( htmlX );
	
	// logo
	htmlX = '<img id="logo" src="' + imgFolder + SL + 'logo-kersia.svg"><div id="flagbox"><div id="currflag" class="flag"><div id="country-arrow"/></div></div>';
	htmlX += '<img id="santa" src="' + imgFolder + SL + 'santa.png">';
	htmlX += '<img id="rightmenuicon" src="' + imgFolder + SL + 'menu.svg">';
	htmlX += '<img id="applogo" src="' + imgFolder + SL + App.toLowerCase() + '-s.svg"><span id="topDemoInfo" class="fasttransition">demo</span>';
	$( '#topmenu' ).append( htmlX );
	
	//////////////////////////
	// Create animals
	//////////////////////////

	htmlX = '<img id="animal-logo" src="' + imgFolder + SL + App.toLowerCase() + '-logo-white.svg"><div id="Animal-App-version"/>';
	for ( var l = 0; l < animalScope; l++ ) {
		htmlX += '<div class="animal"><div class="flip"><div class="animal-back-image-container"><div class="animal-back-image"><img class="animal-image" src="' + imgFolder + SL + 'menu-' + animals[ l ] + jpg + '" data-type="' + animals[l] + '"><img class="animal-go" src="' + imgFolder + SL + 'go-menu.svg"/><div class="animalgoSpinner"/></div></div></div></div>';
	}
	$( '#Animal-container' ).append( htmlX );
	
	//////////////////////////
	// Create flags
	//////////////////////////
	for ( var j = 0; j < countries.length; j++ ) {
		if ( j > 0 ) {
			$( '#flagbox' ).append( '<div class="flag otherflags"/>' );
		}
		$( '.flag', '#flagbox' ).eq( j )
			.css( 'backgroundImage', 'url("' + imgFolder + SL + countries[ j ] + '.png' + '")' )
			.attr( 'data-title', HA + countries[ j ] );
	}
	
	//////////////////////////
	// Info box HTML
	//////////////////////////
	
	htmlX = '<div id="fileTab-maincontainer"><div id="fileTab-container"><div class="fileTab"><img class="iconTab"/><span/><div class="previewCreate"/><div class="closeTab"/><div class="tabSpinner"/></div><div id="addfile"/></div></div>' + clearBoth + '<div id="infotitle"><span/><div id="clonefile" class="fasttransition"/></div>';
	htmlX += '<div id="databox-container"/>';
	htmlX += '<div id="contact-container"><div id="contact"/></div>';
	htmlX += clearBoth;
	htmlX += '<div id="biocide"/>';
	$( '#info' ).append( htmlX );
	
	htmlX = '<div id="databox-subcont1"><div class="databox tank fasttransition"><div class="volume-container"><div class="volume"/><span/></div></div>';
	htmlX += '<div class="databox robot fasttransition"><span/></div>';
	htmlX += '<div class="databox teatcups fasttransition"><span/></div>';
	htmlX += '<div class="databox animals fasttransition"><span/></div>' + ED;
	htmlX += '<div id="databox-subcont2">';
	$.each( otherDataInfoText, function ( index, value ) {
		htmlX += '<div class="' + value.split( CO )[ 0 ] + SP + 'otherdata numberOnly"><span/><input/>' + ED;
	} )
	htmlX += ED;
	htmlX += clearBoth;
	htmlX += '<div id="milkref"><div id="milkreftitle"/><input id="milkrefval" class="numberOnly" maxlength="12" /><div id="milkrefunit"/></div>';
	htmlX += clearBoth;
	htmlX += '<div id="distribremarks"><textarea class="remarks" value=""/></div>';
	$( '#databox-container' ).append( htmlX );
	
	$( '#info' ).find( '.tank' )
		.append( clearBoth + '<div class="datacat"><img src="' + imgFolder + SL + 'tank' + jpg + '" alt=""/></div>' );
	$( '.robot', '#info' )
		.append( '<div class="datacat"><img src="' + imgFolder + SL + 'robot.jpg" alt=""/></div>' );
	$( '.teatcups', '#info' )
		.append( '<div class="datacat"><img src="" alt=""/></div>' );
	$( '.animals', '#info' )
		.append( '<div class="datacat"><img src="" alt=""/></div>' );
	$( '#contact' )
		.append( '<input class="contactdate" type="text" readonly><input class="made" type="text"><input class="vendor name-input" type="text"><input class="site" type="text"><input class="breeder name-input" type="text"><input class="mail validate email" type="text"><input class="phone validate" type="text"><textarea class="address" value=""></textarea><textarea class="infocust"></textarea>' );
	
	// If we only accept uppercase chars
	// onkeyup="this.value=this.value.toUpperCase();
	
	$( '#main-container' )
		.after( '<div id="topWidget-container"><div id="topWidget"/></div><div id="small-data-widget"/><div id="backtotop"/><div id="gotobottom"/>' )
		.after( '<div id="demo-circle"/>' )
		.after( '<div id="Demo-container"><div id="Demo-tooltip-container"><div id="Demo-tooltip"/></div></div>' )
		.before( '<div id="setPrices-container"><div id="fakeYear"/><div id="setPrices-widget" class="slowtransition"><div id="close-setPrices"/><div id="load-setPrices"/><div id="save-setPrices"/><div id="missing-setPrices"/><div id="sort-setPrices"/><div id="clear-setPrices"/></div><div id="setPrices-subcontainer"><div id="setPrices-mask"/><span id="setPricesTitle"/><input id="setPricesYear" class="fasttransition" maxlength="11"/><span id="setPricesKilo"/><span id="setPricesInsert"/><span id="setPricesCurrency"/>' + clearBoth + ED + ED )
		.after( '<div id="console-container"><div id="console"/><div id="console2"/></div>' )
		.before( '<div id="History-widget" class="slowtransition"><div id="close-History"/><div id="refresh-History"/><div id="clear-History"/></div><div id="History-container"><div id="History-subcontainer"><div id="History-mask"/><span id="HistoryTitle"/>' + clearBoth + ED + ED );
	
	htmlX = '<div id="small-data-close" class="tooltipelement"/>';
	htmlX += '<div id="animal-widget" class="small-data-container"><div class="small-data-img"/><div class="small-data-qty"/></div>';
	htmlX += '<div id="teatcups-widget" class="small-data-container"><div class="small-data-img"/><div class="small-data-qty"/></div>';
	htmlX += '<div id="robot-widget" class="small-data-container"><div class="small-data-img"/><div class="small-data-qty"/></div>';
	htmlX += '<div id="tank-widget" class="small-data-container"><div class="small-data-img"/><div class="small-data-qty"/></div>';
	htmlX += clearBoth + '<div id="prod-widget" class="small-otherdata"><span/><span/></div>';
	htmlX += clearBoth + '<div id="heifers-widget" class="small-otherdata"><span/><span/></div>';
	htmlX += clearBoth + '<div id="calving-widget" class="small-otherdata"><span/><span/></div>';
	htmlX += clearBoth + '<div id="grass-widget" class="small-otherdata"><span/><span/></div>';
	htmlX += clearBoth + '<div id="corn-widget" class="small-otherdata"><span/><span/></div>';
	$( '#small-data-widget' )
		.append( htmlX );
	
	htmlX = '<div id="topWidget-subcontainer">';
	htmlX += '<div id="sendmailtextinfo" class="sendmailInfo"/><div id="sendmailprogress-container" class="sendmailInfo"><div id="sendmailprogress"/></div><div id="sendmailbytesinfo" class="sendmailInfo"/>';
	htmlX += clearBoth;
	htmlX += '<div id="exit" class="borderRight"/>';
	htmlX += '<div id="load"/><div class="notallowed"/>';
	htmlX += '<div id="save"/><div class="notallowed"/><div id="backup"/>';
	htmlX += '<div id="unredo-container"><div id="undo"/><div id="redo"/></div>';
	htmlX += '<div id="print"/>';
	htmlX += '<div id="sound"/>';
	htmlX += '<div id="mailbox"/>';
	htmlX += '<div id="search"/>';
	htmlX += '<div id="viewswitcher" class="noselectpossible"/>';
	htmlX += '<div id="calendar"><div id="calendarmonths"/></div>';
	htmlX += '<span id="estimatetext"/><span id="estimatevalue" class="currency"/>';
	htmlX += ED;
	htmlX += '<div id="search-container"><div id="searchbox-container"><input id="searchbox" type="text"></div></div>';
	htmlX += '<div id="month-slider-container"><div id="months"/><div id="month-slider"><img id="barbg" src="' + imgFolder + SL + 'bar-bg.png" alt=""/><div id="barvalue"></div><div id="bardrag"></div></div><div id="month-slider-info"><img src="' + imgFolder + SL + 'time-period.svg"><span></span></div></div>';
	htmlX += '<div id="mail"><div id="sendmail" class="noselectpossible fasttransition"/><div class="mailHeader"/><input id="mailFrom" class="email completer" type="text"><input id="mailTitle" class="nopaste" type="text">' + clearBoth + '<div class="mailHeader"/><input id="mailTo" class="email completer" type="text">' + clearBoth + '<div class="mailHeader"/><input id="mailCc" class="email completer" type="text">' + clearBoth + '<div class="mailHeader"/><input id="mailCci" class="email completer" type="text">' + clearBoth + '<div class="mailHeader specialHeader"/><input id="mailSubject" class="nopaste" type="text">' + clearBoth + '<div class="mailHeader specialHeader"/><div id="mailFile" class="tooltipelement"/><div id="mailSpinner"/><div id="pdfwarning" class="tooltipelement"/>' + clearBoth + '<textarea id="mailMessage" class="nopaste" value=""/></div>';
	$( '#topWidget' ).append( htmlX );
	
}

function clearStorage() {
	
	// HTML5 local storage or cookies?
	
	if ( typeof (Storage) !== 'undefined' && !isIE && !isEdge ) {
		localStorage.clear();
	} else {
		for ( var i = 0; i < dataStorageClear.length; i++ ) {
			$.cookie( 'eas-' + dataStorageClear[ i ], N );
		}
	}
	
}

function saveData( variablename, dataToSave ) {
	
	// Use HTML5 local storage or read cookies (old browsers/Google Chrome)
	// IE: using cookies as local storage is forbidden in local mode
	
	dataName = 'eas-' + variablename;
	
	if ( typeof (Storage) !== 'undefined' && !isIE && !isEdge ) {
		// Compress history
		if ( 'history,files'.indexOf( variablename ) >= 0 && dataToSave.length > 500 ) {
			dataToSave = cmpHeader + LZString.compressToUTF16( dataToSave );
		}
		localStorage.setItem( dataName, dataToSave );
	} else {
		$.cookie( dataName, dataToSave, { expires: 365 } );
	}
	
}

function saveOptionData() {
	
	// Save options values in browser's memory
	
	// Values
	saveData( 'backupData', N ); // No value to backup (close OK)
	saveData( 'animalType', animalType );
	saveData( 'dataUser', dataUser );
	saveData( 'dataMail', dataMail );
	saveData( 'dataMailsource', dataMailsource );
	saveData( 'months', months );
	saveData( 'country', country );
	saveData( 'currency', currency );
	
	// Option status
	saveData( 'Optionuser', Optionuser );
	saveData( 'Optionmonths', Optionmonths );
	saveData( 'Optioncountry', Optioncountry );
	saveData( 'Optioncurrency', Optioncurrency );
	saveData( 'OptionlowresPDF', OptionlowresPDF );
	saveData( 'Optionhelpacidalk', Optionhelpacidalk );
	saveData( 'Optiontooltips', Optiontooltips );
	saveData( 'Optionpriceperkg', Optionpriceperkg );
	// saveData('Optionshippingbottom',Optionshippingbottom);
	saveData( 'Optiontax', Optiontax );
	saveData( 'Optionautoprice', Optionautoprice );
	saveData( 'Optionagreement', Optionagreement );
	saveData( 'Optionglobaldiscount', Optionglobaldiscount );
	saveData( 'Optionudderdiscount', Optionudderdiscount );
	saveData( 'OptioncostGMilk', OptioncostGMilk );
	saveData( 'OptioncostGDCM', OptioncostGDCM );
	saveData( 'OptioncostDCM', OptioncostDCM );
	saveData( 'Optiondate', Optiondate );
	saveData( 'Optionbreedingwidget', Optionbreedingwidget );
	saveData( 'Optionlocaldocs', Optionlocaldocs );
	saveData( 'Optionfilecontactdate', Optionfilecontactdate );
	saveData( 'Optionfiledate', Optionfiledate );
	saveData( 'Optionstatictabs', Optionstatictabs );
	saveData( 'Optionskipintro', Optionskipintro );
	saveData( 'OptionAOC', OptionAOC );
	saveData( 'Optiondistriblogo', Optiondistriblogo );
	saveData( 'Optioncontact', Optioncontact );
	saveData( 'Optionproductmosaic', Optionproductmosaic );
	saveData( 'Optionoldprodmosaic', Optionoldprodmosaic );
	saveData( 'Optionnodemotooltips', Optionnodemotooltips );
	saveData( 'Optiondemoloop', Optiondemoloop );
	saveData( 'Optiondemobig', Optiondemobig );
	saveData( 'Optionsound', Optionsound );
	saveData( 'Optionspeeddemo', Optionspeeddemo );
	saveData( 'OptionFSoptions', OptionFSoptions );
	saveData( 'Optioncalendar', Optioncalendar );
	// saveData('Optioncopycci',Optioncopycci);
	saveData( 'Optionpwdprices', Optionpwdprices );
	
	// Others
	retrieveDateTime();
	saveData( 'hello', dataDay );
	saveData( 'showConsole', showConsole );
	
}

function loadData( variablename ) {
	
	// Use HTML5 local storage or read cookies (old browsers/Google Chrome)
	// IE: use cookies as local storage is forbidden in local mode
	
	var retData;
	
	dataName = 'eas-' + variablename;
	
	if ( typeof (Storage) !== 'undefined' && !isIE && !isEdge ) {
		retData = localStorage.getItem( dataName );
		if ( retData ) {
			if ( retData.indexOf( cmpHeader ) === 0 ) {
				retData = LZString.decompressFromUTF16( retData.replace( cmpHeader, N ) );
			}
		}
	} else {
		Ls      = 'C';
		retData = $.cookie( dataName );
	}
	return retData;
	
}

function loadOptionData() {
	
	// Use HTML5 local storage or read cookies (old browsers/Google Chrome)
	// IE: use cookies as local storage is forbidden in local mode
	
	// Values
	readBackupData            = loadData( 'backupData' );
	readAnimalType            = loadData( 'animalType' );
	readUser                  = loadData( 'dataUser' );
	readMail                  = loadData( 'dataMail' );
	readMailsource            = loadData( 'dataMailsource' );
	readMonths                = loadData( 'months' );
	readCountry               = loadData( 'country' );
	readCurrency              = loadData( 'currency' );
	// Option status
	readOptionProductrange    = loadData( 'Optionproductrange' );
	readOptionUser            = loadData( 'Optionuser' );
	readOptionMonths          = loadData( 'Optionmonths' );
	readOptionCountry         = loadData( 'Optioncountry' );
	readOptionCurrency        = loadData( 'Optioncurrency' );
	readOptionLowresPDF       = loadData( 'OptionlowresPDF' );
	readOptionHelpacidalk     = loadData( 'Optionhelpacidalk' );
	readOptionTooltips        = loadData( 'Optiontooltips' );
	readOptionPriceperkg      = loadData( 'Optionpriceperkg' );
	// readOptionShippingbottom=loadData('Optionshippingbottom');
	readOptionTax             = loadData( 'Optiontax' );
	readOptionAutoprice       = loadData( 'Optionautoprice' );
	readOptionAgreement       = loadData( 'Optionagreement' );
	readOptionGlobaldiscount  = loadData( 'Optionglobaldiscount' );
	readOptionUdderdiscount   = loadData( 'Optionudderdiscount' );
	readOptionCostGMilk       = loadData( 'OptioncostGMilk' );
	readOptionCostDCM         = loadData( 'OptioncostDCM' );
	readOptionCostGDCM        = loadData( 'OptioncostGDCM' );
	readOptionDate            = loadData( 'Optiondate' );
	readOptionBreedingwidget  = loadData( 'Optionbreedingwidget' );
	readOptionLocalDocs       = loadData( 'Optionlocaldocs' );
	readOptionFilecontactdate = loadData( 'Optionfilecontactdate' );
	readOptionFiledate        = loadData( 'Optionfiledate' );
	readOptionSkipintro       = loadData( 'Optionskipintro' );
	readOptionSound           = loadData( 'Optionsound' );
	readOptionAOC             = loadData( 'OptionAOC' );
	readOptionDistriblogo     = loadData( 'Optiondistriblogo' );
	readOptionContact         = loadData( 'Optioncontact' );
	readOptionProductmosaic   = loadData( 'Optionproductmosaic' );
	readOptionOldprodmosaic   = loadData( 'Optionoldprodmosaic' );
	readOptionNodemotooltips  = loadData( 'Optionnodemotooltips' );
	readOptionDemoloop        = loadData( 'Optiondemoloop' );
	readOptionDemobig         = loadData( 'Optiondemobig' );
	readOptionSpeeddemo       = loadData( 'Optionspeeddemo' );
	readOptionFSoptions       = 'true';//loadData('OptionFSoptions') deprecated 07/2019;
	readOptionCalendar        = loadData( 'Optioncalendar' );
	// readOptionCopycci=loadData('Optioncopycci');
	readOptionPwdprices       = loadData( 'Optionpwdprices' );
	readOptionStatictabs      = loadData( 'Optionstatictabs' );
	
	// Others
	readHello        = loadData( 'hello' );
	readResetprocess = loadData( 'resetProcess' );
	readPd           = loadData( 'pd' );
	readShowConsole  = loadData( 'showConsole' );
	
	if ( !loadData( 'history' ) ) {
		saveData( 'history', N );
	}
	
	if ( readAnimalType && animals.indexOf( readAnimalType ) >= 0 ) {
		animalType = readAnimalType;
	} else {
		animalType = animals[ 0 ];
	}
	animal = $.inArray( animalType, animals );
	
	if ( readOptionCountry && readCountry ) {
		Optioncountry = readOptionCountry;
		if ( readCountry && Optioncountry == 'true' ) {
			country  = readCountry;
			language = country.substring( 3 );
		}
	}
	if ( readOptionCurrency && readCurrency ) {
		Optioncurrency = readOptionCurrency;
		if ( readCurrency && Optioncurrency == 'true' ) {
			currency = readCurrency;
		}
	}
	if ( readOptionUser ) {
		Optionuser = readOptionUser;
		if ( Optionuser == 'true' ) {
			if ( readUser ) {
				dataUser = readUser;
			}
			if ( readMail && readMail != 'undefined' ) {
				dataMail = readMail;
			} else {
				dataMail = N;
			}
		}
	}
	if ( readOptionMonths ) {
		Optionmonths = readOptionMonths;
		if ( Optionmonths == 'true' ) {
			months = readMonths;
		}
	}
	if ( readOptionProductrange ) {
		productRangeDB     = readOptionProductrange;
		Optionproductrange = readOptionProductrange;
		setupLogo();
	} else {
		productRangeDB     = '0';
		Optionproductrange = undefined;
		setupLogo();
	}
	
	if ( readMailsource ) {
		dataMailsource = readMailsource;
	} else {
		dataMailsource = N;
	}
	$( 'body' ).data( 'dataMailsource', dataMailsource );
	
	if ( readShowConsole == 'true' ) {
		showConsole = 'true';
	} else {
		showConsole = 'false';
	}
	
	if ( readBackupData ) {
		backupData = readBackupData;
	}
	if ( readOptionLowresPDF ) {
		OptionlowresPDF = readOptionLowresPDF;
	}
	if ( readOptionHelpacidalk ) {
		Optionhelpacidalk = readOptionHelpacidalk;
	}
	if ( readOptionBreedingwidget ) {
		Optionbreedingwidget = readOptionBreedingwidget;
	}
	if ( readOptionTooltips ) {
		Optiontooltips = readOptionTooltips;
	}
	if ( readOptionPriceperkg ) {
		Optionpriceperkg = readOptionPriceperkg;
	}
	// if (readOptionShippingbottom) {Optionshippingbottom=readOptionShippingbottom;}
	if ( readOptionTax ) {
		Optiontax = readOptionTax;
	}
	if ( readOptionAutoprice ) {
		Optionautoprice = readOptionAutoprice;
	}
	if ( readOptionAgreement ) {
		Optionagreement = readOptionAgreement;
	}
	if ( readOptionGlobaldiscount ) {
		Optionglobaldiscount = readOptionGlobaldiscount;
	}
	if ( readOptionUdderdiscount ) {
		Optionudderdiscount = readOptionUdderdiscount;
	}
	if ( readOptionCostGMilk ) {
		OptioncostGMilk = readOptionCostGMilk;
	}
	if ( readOptionCostDCM ) {
		OptioncostDCM = readOptionCostDCM;
	}
	if ( readOptionCostGDCM ) {
		OptioncostGDCM = readOptionCostGDCM;
	}
	if ( readOptionDate ) {
		Optiondate = readOptionDate;
	}
	if ( readOptionLocalDocs ) {
		Optionlocaldocs = readOptionLocalDocs;
	}
	if ( readOptionFiledate ) {
		Optionfiledate = readOptionFiledate;
	}
	if ( readOptionFilecontactdate ) {
		Optionfilecontactdate = readOptionFilecontactdate;
	}
	if ( readOptionSkipintro ) {
		Optionskipintro = readOptionSkipintro;
	}
	if ( readOptionAOC ) {
		OptionAOC = readOptionAOC;
	}
	if ( readOptionDistriblogo ) {
		Optiondistriblogo = readOptionDistriblogo;
	}
	if ( readOptionProductmosaic ) {
		Optionproductmosaic = readOptionProductmosaic;
	}
	if ( readOptionOldprodmosaic ) {
		Optionoldprodmosaic = readOptionOldprodmosaic;
	}
	if ( readOptionNodemotooltips ) {
		Optionnodemotooltips = readOptionNodemotooltips;
	}
	if ( readOptionDemoloop ) {
		Optiondemoloop = readOptionDemoloop;
	}
	if ( readOptionDemobig ) {
		Optiondemobig = readOptionDemobig;
	}
	if ( readOptionSpeeddemo ) {
		Optionspeeddemo = readOptionSpeeddemo;
	}
	if ( readOptionContact ) {
		Optioncontact = readOptionContact;
	}
	if ( readHello ) {
		hello = readHello;
	}
	if ( readResetprocess ) {
		resetProcess = readResetprocess;
	}
	if ( readPd ) {
		priceData = marginCurve.productD( readPd ).replace( new RegExp( '@', 'g' ), CR );
	}
	if ( readOptionFSoptions ) {
		OptionFSoptions = readOptionFSoptions;
	}
	if ( readOptionSound ) {
		Optionsound = readOptionSound;
	}
	if ( readOptionCalendar ) {
		Optioncalendar = readOptionCalendar;
	}
	// if (readOptionCopycci) {Optioncopycci=readOptionCopycci;}
	if ( readOptionPwdprices ) {
		Optionpwdprices = readOptionPwdprices;
	}
	if ( readOptionStatictabs ) {
		Optionstatictabs = readOptionStatictabs;
	}
	
	// Check valid result data
	validateData();
	
}

function validateData() {
	
	// Country exists?
	if ( $.inArray( country, countries ) < 0 ) {
		LSCerror = true;
		languageRecognition();
	}
	// Currency exists?
	if ( currencies.indexOf( currencies.filter( function ( v ) {
		return v.indexOf( currency ) >= 0;
	} )[ 0 ] ) < 0 ) {
		currency = currencies[ 0 ].split( LI )[ 0 ];
		LSCerror = true;
	}
	
}

function showFilename() {
	
	if ( filename[ sessionIndex ] == oldfilename[ sessionIndex ] || !filename[ sessionIndex ] ) {
		return;
	}
	
	var targetTab = $( '.fileTab', '#fileTab-container' ).eq( sessionIndex ),
	    autoWidth,
	    showtab   = 1;
	
	// Case new tab => slide right
	if ( !targetTab.find( 'span' ).text() && session ) {
		targetTab.css( 'opacity', 0 )
			.find( '.closeTab' ).hide();
		showtab = 0;
	}
	
	targetTab.fadeOut( 300 * showtab, function () {
		
		targetTab.find( 'span' ).text( filename[ sessionIndex ] ).parent().fadeIn( 300 * showtab );
		
		if ( !showtab ) {
			
			autoWidth = targetTab.width();
			
			targetTab.css( {
				opacity: 1,
				width:   0
			} );
			// Small timeout to wait until calculations are made
			adjustTabElements();
			setTimeout( function () {
				targetTab.animate( {
					width: autoWidth
				}, 200, function () {
					targetTab
						.css( 'width', 'auto' ) // Reset width behaviour
						.find( '.closeTab' ).show();
					adjustTabElements();
				} );
			}, 10 );
		}
	} );
	
	if ( !$( '#addfile' ).isVisible() ) {
		$( '#addfile' ).fadeIn();
	}
	
	oldfilename[ sessionIndex ] = filename[ sessionIndex ];
	
}

function adjustAddFileColor() {
	
	$( '#addfile' ).css( 'backgroundColor', $( '.fileTab', '#fileTab-container' ).not( '.unselected' ).css( 'backgroundColor' ) );
	
}

function adjustTabElements() {
	
	var adjustWidthTab;
	
	// Smooth tab adjustment
	$( '.fileTab' )
		.add( $( '.fileTab' ).find( 'span' ) )
		.css( 'max-width', 'none' );
	
	if ( $( '#fileTab-container' ).height() > 24 ) {
		adjustWidthTab = ($( '#info' ).width() - 20 - 7 * (session != sessionMax - 1)) / (session + 1);
		$( '.fileTab' )
			.css( 'max-width', adjustWidthTab - 5 )
			.find( 'span' )
			.css( 'max-width', adjustWidthTab - 65 );
	}
	
	// Close management
	$( '.closeTab' ).show();
	if ( !session ) {
		$( '.closeTab' ).hide();
	}
	
	// Tab limit warning management
	if ( session == sessionMax - 2 ) {
		$( '#addfile' ).addClass( 'almostfull' );
	} else {
		$( '#addfile' ).removeClass( 'almostfull' );
	}
	
}

function addFileInit() {
	
	$( '#addfile' ).on( 'click', function () {
		addFile();
	} );
	adjustTabElements();
	
}

function addFile( cloneSession ) {
	
	// Do not add a new tab if current preview is not created
	var heightSum = 1;
	$( '#sessionPreview-container' ).find( '.sessionPreview' ).each( function () {
		heightSum *= $( this ).height();
	} );
	if ( !heightSum ) {
		return;
	}
	
	addFileProcess = true;
	
	// Create session and inc session index
	session++;
	sessionIndex                = session;
	oldfilename[ sessionIndex ] = N;
	
	// Create/clear unredo's
	unredoData[ sessionIndex ]     = [];
	oldUnredoData[ sessionIndex ]  = [];
	unredoPosition[ sessionIndex ] = 0;
	
	// Create tab
	$( '#addfile' ).before( '<div class="fileTab"><img class="iconTab"/><span/><div class="previewCreate"/><div class="closeTab"/><div class="tabSpinner"/></div>' );
	$( '#sessionPreview-container' ).append( '<div class="sessionPreview"><div class="preview"/></div>' );
	
	fileTabHighlight();
	
	// Is it a cloned session?
	if ( cloneSession !== undefined ) {
		
		newfileData[ sessionIndex ] = newfileData[ cloneSession ];
		filename[ sessionIndex ]    = filename[ cloneSession ];
		createUnredoData();
		
		loadSaveEnable();
		unredoEnable();
		estimateEnable();
		setTabInfoColors();
		
	} else {
		// Otherwise, create a new empty calculation sheet
		newEstimate();
	}
	
	// Flashing the new tab
	setTimeout( function () {
		$( '.fileTab span', '#fileTab-container' ).eq( sessionIndex ).flash( 200, 6 );
	}, 300 );
	
	// Hide + button when sessions full
	if ( session == sessionMax - 1 ) {
		$( '#addfile' ).addClass( 'outofscreen' );
		loadSaveEnable();
	}
	
	if ( !loadProcess ) {
		showFilename();
	}
	
	addFileProcess = false;
	
}

function fileTabHighlight() {
	
	var fileTabs = $( '.fileTab', '#fileTab-container' );
	
	fileTabs
		.addClass( 'unselected' )
		.eq( sessionIndex )
		.removeClass( 'unselected' );
	
	$( '.closeTab', '#fileTab-container' )
		.addClass( 'nonselected' )
		.eq( sessionIndex )
		.removeClass( 'nonselected' );
	
	fileTabs.filter( '.unselected' ).addClass( 'fasttransition' );
	
}

function switchFileInit() {
	
	var previewHover = false;
	
	$( document )
		.on( 'click', '.fileTab', function () {
			
			var myTab    = $( this );
			sessionIndex = myTab.index();
			
			if ( !myTab.hasClass( 'unselected' ) ) {
				return;
			}
			
			$( '#small-data-widget' ).hide();
			$( '#sessionPreview-container' ).find( '.sessionPreview' ).stop( 1, 0 ).fadeOut( 50 );
			
			// Show Spinner and start switch
			$( '#fileTab-container' )
				.find( '.closeTab' ).eq( sessionIndex ).addClass( 'noopacity' )
				.nextAll( '.tabSpinner' ).fadeIn( 70, function () {
				
				fileTabHighlight();
				
				switchFileProcess = true;
				loadProcess       = true;
				
				// hide open tools & clear all
				resetAll();
				
				// Define data to show
				loadedData = newfileData[ sessionIndex ];
				
				// Load data
				scanFile();
				
				switchCategory();
				unHideCategories( 0 );
				
				// Updating '+' bkg
				adjustAddFileColor();
				
				$( '#fileTab-container' ).find( '.closeTab' ).eq( sessionIndex ).removeClass( 'noopacity' );
				$( '#fileTab-container' ).find( '.tabSpinner' ).hide(); // All as it may last when quick changes
				
				switchFileProcess = false;
				
			} );
			
		} )
		.on( 'mouseover', '.fileTab', function () {
			
			var tabPreview = $( '#sessionPreview-container' ).find( '.sessionPreview' ).eq( $( this ).index() );
			
			// If we come from the existing preview
			if ( tabPreview.isVisible() ) {
				tabPreview.stop( 1, 1 ).show();
				return;
			}
			
			if ( Optiontooltips == 'true' && tabPreview.height() && $( this ).hasClass( 'unselected' ) && !closeTabProcess ) {
				var xTab        = $( this ).offset().left,
				    yTab        = $( this ).offset().top,
				    wTab        = $( this ).outerWidth(),
				    hTab        = $( this ).height(),
				    wTabPreview = tabPreview.outerWidth(),
				    xInfo       = $( '#info' ).offset().left,
				    wInfo       = $( '#info' ).outerWidth();
				
				// Prevent tab preview overflow (from info container)
				var xTabPreview = xTab + (wTab / 2) - (wTabPreview / 2);
				xTabPreview     = xTabPreview * (xTabPreview + wTabPreview < xInfo + wInfo) || xInfo + wInfo - wTabPreview;
				xTabPreview     = xTabPreview * (xTabPreview > xInfo) || xInfo;
				
				// Position and display tab preview
				tabPreview
					.css( {
						top:  yTab + hTab - $( document ).scrollTop(),
						left: xTabPreview
					} )
					.delay( 100 )
					.fadeIn( 200 );
			}
			
		} )
		.on( 'mouseleave', '.fileTab', function () {
			
			setTimeout( function () {
				if ( previewHover ) {
					return;
				}
				$( '#sessionPreview-container' ).find( '.sessionPreview' ).stop( 1, 1 ).fadeOut( 200 );
			}, 10 );
			
		} )
		.on( 'mouseenter', '.sessionPreview', function () {
			previewHover = true;
			$( '.fileTab' ).eq( $( this ).index() ).removeClass( 'unselectedpreviewtab' );
		} )
		.on( 'mouseleave', '.sessionPreview', function () {
			previewHover = false;
			$( '#sessionPreview-container' ).find( '.sessionPreview' ).fadeOut( 200 );
			$( '.fileTab' ).eq( $( this ).index() ).addClass( 'unselectedpreviewtab' );
		} )
		.on( 'click', '.sessionPreview', function () {
			$( '.fileTab' ).eq( $( this ).index() ).click();
		} );
	
}

function closeFileInit() {
	
	$( document ).on( 'click', '.closeTab', function ( e ) {
		
		closeTabProcess = true;
		// Avoid selecting a tab before closure
		e.stopPropagation();
		
		var target        = $( this ).parent(),
		    sessionClosed = $( this ).parent().index();
		
		// Close the browser if first file is closed
		if ( !sessionClosed && !session ) {
			window.close();
			return;
		}
		
		// Remove deleted file data in the corresponding arrays/preview
		// E.g.: 1,2,3,4 becomes 1,2,4
		newfileData.splice( sessionClosed, 1 );
		previousfileData.splice( sessionClosed, 1 );
		filename.splice( sessionClosed, 1 );
		oldfilename.splice( sessionClosed, 1 );
		unredoData.splice( sessionClosed, 1 );
		oldUnredoData.splice( sessionClosed, 1 );
		sessionQuitOK.splice( sessionClosed, 1 );
		infoData.splice( sessionClosed, 1 );
		oldInfoData.splice( sessionClosed, 1 );
		$( '#sessionPreview-container' ).find( '.sessionPreview' ).hide().eq( sessionClosed ).remove();
		
		// One less session
		session--;
		if ( sessionIndex > session ) {
			sessionIndex = session;
		}
		
		// Remove tab softly (slide left) while hiding close button
		target
			.animate( {
				width:        0,
				paddingLeft:  0,
				paddingRight: 0,
				marginRight:  0
			}, 300, function () {
				$( this ).remove();
				
				adjustTabElements();
				// Current file? => Activate last opened file
				if ( !target.hasClass( 'unselected' ) ) {
					$( '#fileTab-container' ).find( '.fileTab' ).eq( session ).click();
				}
				
				// Reactivate + button if disabled
				if ( session == sessionMax - 2 ) {
					$( '#addfile' ).hide().removeClass( 'outofscreen' ).fadeIn( 300 );
					loadSaveEnable();
				}
				
				closeTabProcess = false;
				
			} )
			.find( '.closeTab' ).hide();
		
	} );
	
}

function updateFilename() {
	
	// Return to be sure that after loading, real filename is shown
	if ( loadEnded !== null ) {
		return;
	}
	
	// Use as name farming group or 'Easycalc'
	if ( !$( '.site', '#info' ).hasClass( 'noinputvalue' ) ) {
		filename[ sessionIndex ] = $( '.site', '#info' ).val();
	} else {
		filename[ sessionIndex ] = App;
	}
	// Remove unapropriate characters
	filename[ sessionIndex ] = getUrlFriendly( filename[ sessionIndex ] ) + fileExt;
	
	// Add date to filename (option)
	if ( Optionfiledate == 'true' || (Optionfilecontactdate == 'true' && !$( '.contactdate' ).hasClass( 'noinputvalue' )) ) {
		retrieveDateTime();
		var datadateForFile = dataDate;
		if ( Optionfilecontactdate == 'true' ) {
			datadateForFile = $( '.contactdate' ).val();
		}
		filename[ sessionIndex ] = filename[ sessionIndex ].replace( fileExt, N ) + DH + datadateForFile.replace( /\//g, DH ) + fileExt;
	}
	
}

function cloneFileInit() {
	
	$( '#clonefile' ).on( 'click', function () {
		if ( !$( '#addfile' ).hasClass( 'outofscreen' ) ) {
			addFile( sessionIndex );
		} else {
			showTopWarning( 49, null, 4500 );
		}
	} );
	
}

function saveInit() {
	
	$( '#save, #save-setPrices' ).on( 'click', function () {
		
		if ( $( this ).css( 'opacity' ) < 1 && !$( this ).hasClass( 'pdfready' ) ) {
			return;
		}
		
		///////////////
		// Save file
		///////////////
		
		var saveFileName = filename[ sessionIndex ],
		    myFile       = myData,
		    fileType,
		    plusInfo;
		
		// Case Pricelist
		if ( setPricesProcess || diagProcess ) {
			if ( !$( '#clear-setPrices' ).isVisible() && !diagProcess ) {
				showTopWarning( 41, 300, 3000 );
				return;
			}
			saveFileName = 'artemis' + DH + $( '#setPricesYear' ).val() + priceFileExt;
			retrieveDateTime();
			myFile         = marginCurve.productE( priceData.replace( new RegExp( CR, 'g' ), '@' ) );
			plusInfo       = '(' + saveFileName + ')' + SP;
			priceSaveAlert = -9999; // No more backup reminder this time
		}
		
		// Case PDF
		var savedPdf = false;
		if ( $( this ).hasClass( 'pdf' ) ) {
			// Is the PDF created now?
			if ( !$( this ).hasClass( 'pdfready' ) ) {
				$( '#UIintro-container, #intro-text' ).show();
				setTimeout( function () {
					createPDF( 'save' );
				}, 600 );
			} else {
				myFile       = pdf.output( 'save' );
				saveFileName = PDFfilename + '.pdf';
				fileType     = 'application/pdf';
				$( this ).removeClass( 'pdfready' );
				$( '#UIintro-container' ).hide();
				$( '#intro-text' ).show();
				savedPdf = true;
			}
			// Show filename in warning text to distinguish both actions
			plusInfo = '(' + saveFileName + ')' + SP;
		}
		
		// Saving file
		saveFile( myFile, saveFileName, fileType );
		playSound( 'save' );

		if (savedPdf && $('.forfreecheck:checked').length > 0) {
			var downloadLink = document.createElement('a');
			downloadLink.href="data:@file/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,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";
			downloadLink.download = 'contrat-mise-disposition-materiel.docx';
			downloadLink.style.display = 'none';
			$('body').append(downloadLink);
			downloadLink.click();
		}
		
		// Disable save feature if save OK
		if ( !saveError && !setPricesProcess ) {
			fileData[ sessionIndex ] = newfileData[ sessionIndex ];
		}
		loadSaveEnable();
		
		// End info
		if ( !(navigator.appVersion.indexOf( 'MSIE 10.' ) > 0 || !!navigator.userAgent.match( /Trident.*rv\:11\./ )) ) {
			// Only shows final message when not IE (which prompts save)
			showTopWarning( 2 + saveError, 500, (!saveError) * (8000 + 4000 * setPricesProcess), plusInfo, 500 * setPricesProcess );
		}
		
	} );
	
}

function loadInit() {
	
	$( '#load, #load-setPrices' ).on( 'click', function () {
		if ( $( this ).css( 'opacity' ) < 1 ) {
			return;
		}
		hideTopWarning( 100 );
		$( '#fileToLoad' ).trigger( 'click' );
	} );
	$( '#fileToLoad' ).change( function () {
		
		if ( !setPricesProcess ) {
			// hide open tools
			hideSliderMonth();
			hideSearch();
			hideMailBox();
			hideSlider();
			
			// Greying the current total
			validateEstimate( 1 );
			
			loadFile();
		} else {
			loadPriceFile();
		}
		
		// Clearing filename in browser window
		$( this ).wrap( '<form>' ).closest( 'form' ).get( 0 ).reset();
		$( this ).unwrap();
		
	} );
	
}

function playSound( location, delay ) {
	
	if ( Optionsound == 'false' ) {
		return;
	}
	
	location = soundFolder + SL + location;
	$( 'audio' ).remove();
	setTimeout( function () {
		$( '<audio autoplay="autoplay" style="display:none;">' + '<source src="' + location + '.mp3" />' + '<source src="' + location + '.ogg" />' + '<embed src="' + location + '.mp3" hidden="true" autostart="true" loop="false" class="playSound" /></audio>' ).appendTo( 'body' );
	}, delay || 1 );
	
}

$.fn.isVisible = function () {
	return $( this ).is( ':visible' );
};

$.fn.hideOnDelay = function ( duration ) {
	setTimeout( function () {
		$( this ).hide();
	}, duration );
	return this;
};

function removeLastChars( myString, nbCars ) {
	
	myString = myString.substring( 0, myString.length - nbCars );
	
	return myString;
	
}

function createPriceFile() {
	
	var inputPrice,
	    tempPriceData = N,
	    checkSum      = 0,
	    headerData    = App + '(' + version.split( SP )[ 0 ] + ')',
	    pack,
	    price,
	    kgprice       = 'Unit',
	    TAG           = '..',
	    tagEnd        = TAG + 'end-',
	    descriptive;
	
	// Set currency + range
	// E.g. ..CHF3KG..
	if ( Optionpriceperkg == 'true' ) {
		kgprice = 'KG';
	}
	descriptive = currency + productRangeDB + kgprice;
	
	tempPriceData += CR + TAG + descriptive + TAG + CR;
	
	$( '#setPrices-subcontainer' ).find( '.priceBox-name' )
		.each( function () {
			
			inputPrice = $( this ).parent().find( '.setPriceValue' );
			tempPriceData += $( this ).text() + '=' + inputPrice.length;
			
			inputPrice.each( function () {
				price = $( this ).val() || 'x';
				pack  = $( this ).prev().text().split( SP )[ 0 ] || 1;
				
				// Fix pour «À l'unité»
				if ( isNaN( pack ) ) {
					pack = 1;
				}
				
				tempPriceData += DH + pack + CL + price;
				if ( Number( price ) ) {
					checkSum += Number( price );
				}
			} );
			tempPriceData += DH;
			
		} );
	tempPriceData += HA + $( '#setPricesYear' ).val() + HA;
	tempPriceData += '(' + checkSum.toFixed( 2 ) + ')';
	
	tempPriceData += CR + tagEnd + descriptive + TAG;
	
	// First time or simply update?
	if ( !priceData ) {
		if ( checkSum ) {
			priceData = headerData + tempPriceData;
		}
	} else {
		// Existing pricelist?
		var position = priceData.indexOf( TAG + descriptive + TAG );
		if ( position > 0 ) {
			var endPosition = priceData.indexOf( tagEnd + descriptive + TAG ),
			    beforePart  = priceData.substring( priceData.indexOf( CR ), position - 2 ),
			    afterPart   = priceData.substring( endPosition + (tagEnd + descriptive + TAG).length );
			priceData       = headerData + beforePart + tempPriceData + afterPart;
		} else {
			// Add a new pricelist
			priceData = priceData + tempPriceData;
		}
	}
	
	if ( oldPriceData != priceData ) {
		
		saveData( 'pd', marginCurve.productE( priceData.replace( new RegExp( CR, 'g' ), '@' ) ) );
		
		if ( !diagProcess ) {
			priceSaveAlert++;
		}
		if ( priceSaveAlert == 10 ) {
			showTopWarning( 37, null, 7000 );
			$( '#save-setPrices' ).flash( 100, 14 );
		}
	}
	
	// Memorize old data
	oldPriceData = priceData;
	
}

function scanPriceFile( pricecatbox, articlename, articlepack ) {
	
	if ( loadProcess || unredoProcess || deleteProcess || discountProcess || demoProcess ) {
		return false;
	}
	
	var scanError = N,
	    kgprice   = 'Unit',
	    descriptive;
	
	filePosition = 0;
	
	if ( Optionpriceperkg == 'true' ) {
		kgprice = 'KG';
	}
	descriptive = currency + productRangeDB + kgprice;
	loadedData  = priceData;
	
	// Check file header (Erreur lors du chargement du fichier)
	var checkFile = searchData( 'Easy', CR );
	if ( !checkFile || checkFile.length < 4 ) {
		scanError += 'header+';
	}
	
	// Search if pricelist exists
	var readLists = searchData( descriptive, CR );
	if ( readLists != '..' ) {
		scanError += 'pricelist not found+';
	}
	
	// Search year
	var readYear = (loadedData.split( HA ).length - 1) % 2;
	if ( readYear ) {
		scanError += 'year+';
	}
	
	// Check file integrity 1
	var readNumber = (loadedData.split( '..' ).length - 1) % 4;
	if ( readNumber ) {
		scanError += 'corrupted data+';
	}
	
	// Error?
	if ( scanError !== N ) {
		if ( loadPricesProcess ) {
			// E.g. loading
			return scanError.substr( 0, scanError.length - 1 );
		} else {
			// If estimation mode
			if ( pricecatbox ) {
				return false;
			}
			// Otherwise a new file is created
			$( '#setPrices-subcontainer' ).find( '.setPriceValue' ).val( N );
			createPriceFile();
			return;
			
		}
	}
	
	/////////////////////////
	// Starts the real scan
	/////////////////////////
	
	// Truncate data to isolate targeted data + reset file pos
	loadedData   = loadedData.substring( filePosition + 4 );
	loadedData   = loadedData.substr( 0, loadedData.indexOf( '..end' ) );
	filePosition = 0;
	
	// Case pricelist
	if ( !pricecatbox ) {
		
		// Check file integrity 2 (price sum) | 1 is for check
		// Some packaging change (e.g. PROXYLAV) might require disabling Optionpricecheckplus
		if ( Optionpricecheckplus == 'true' && subScanPriceFile( 1 ) != searchData( '(', ')' ) ) {
			return 'Checksum';
		}
		
		// Now we can scan for real
		subScanPriceFile();
		
		var year = searchData( HA, HA ) || dataYear;
		if ( year ) {
			$( '#setPricesYear' ).val( year ).trigger( 'keyup' );
		}
		
		warningPriceList();
		
		// Case estimation
	} else {
		
		if ( Optionautoprice !== 'true' ) {
			return false;
		}
		
		var nbPack    = searchData( articlename + '=', DH ),
		    packValueFile,
		    artPosition,
		    itemPrice = false;
		
		artPosition = filePosition; // In case packaging change
		
		for ( var i = 0; i < nbPack; i++ ) {
			
			filePosition  = artPosition;
			packValueFile = searchData( articlepack + CL, DH );
			
			if ( packValueFile && packValueFile != 'x' ) {
				itemPrice = packValueFile;
			}
		}
		return itemPrice;
	}
	
}

function subScanPriceFile( check ) {
	
	var checkSum = 0;
	
	if ( !check ) {
		$( '#setPrices-subcontainer' ).find( '.setPriceValue' ).val( N );
	}
	
	$( '#setPrices-subcontainer' ).find( '.priceBox-name' ).each( function () {
		
		filePosition = 0;
		var nbPack   = searchData( $( this ).text() + '=', DH ),
		    packValueList,
		    packValueFile,
		    artPosition;
		
		// Known bug as formerly called SEPTRIVET (now: ANTI-GERM SEPTRIVET)
		if ( !nbPack && $( this ).text().indexOf( 'SEPTRIVET' ) > 0 ) {
			filePosition = 0;
			nbPack       = searchData( 'SEPTRIVET=', DH );
		}
		
		artPosition = filePosition; // In case packaging change
		
		for ( var i = 0; i < nbPack; i++ ) {
			
			filePosition  = artPosition;
//			packValueList=Number($(this).next().find('.setPricesPackaging').eq(i).text().split(SP)[0]) || 1;
			packValueList = $( this ).next().find( '.setPricesPackaging' ).eq( i ).text().split( SP )[ 0 ] || 1;

			// ex: À l'unité
			if (isNaN(packValueList)) {
				packValueList = 1;
			}
			packValueFile = searchData( packValueList + CL, DH );
			
			if ( packValueFile && packValueFile != 'x' ) {
				checkSum += (1 * packValueFile);
				if ( !check ) {
					$( this ).next().find( '.setPriceValue' ).eq( i ).val( packValueFile );
				}
			}
		}
		
	} );
	
	filePosition = 0;
	return checkSum.toFixed( 2 );
	
}

function createFile() {
	
	// No use to create file before the game has really started
	if ( parseInt( $( '#topWidget-container' ).css( 'top' ) ) < 0 ) {
		return;
	}
	
	updateFilename();
	
	previousfileData[ sessionIndex ] = newfileData[ sessionIndex ];
	
	retrieveDateTime();
	
	// Set Header
	myData = '**********************************************' + CR;
	myData += '   ' + App + SP + 'with' + SP + myBrowser + SP + $.browser.version + CR;
	myData += '   ' + dataDate + SP + dataTimeF + CR;
	myData += '**********************************************' + CR2;
	
	// Basic parameters
	myData += 'Recovery file¦no' + CR;
	myData += 'File name¦' + filename[ sessionIndex ] + CR;
	myData += 'Extension¦' + fileExt.replace( 'PO', N ) + CR2;
	myData += 'version:' + version + CR2;
	
	myData += 'animalType:' + animalType + CR;
	myData += 'country:' + country + CR;
	myData += 'fullview:' + (!$( '#viewswitcher' ).hasClass( 'fullview' )) + CR2;
	myData += 'currency:' + currency + CR;
	myData += 'productRangeDB:' + productRangeDB + CR;
	
	myData += 'costGMilk:' + OptioncostGMilk + CR;
	myData += 'costDCM:' + OptioncostDCM + CR;
	myData += 'costGDCM:' + OptioncostGDCM + CR;
	myData += 'priceperkg:' + Optionpriceperkg + CR;
	myData += 'tax:' + Optiontax + CR;
	myData += 'globaldiscount:' + Optionglobaldiscount + CR;
	myData += 'udderdiscount:' + Optionudderdiscount + CR;
	
	myData += 'period:' + months + CR2;

	myData += 'AOC:' + OptionAOC + CR2;
	
	// Installation data
	myData += 'animals:' + dataAnimals + CR;
	myData += 'clusters:' + dataClusters + CR;
	myData += 'robots:' + dataRobots + CR;
	myData += 'tank volume:' + dataTank + CR2;
	
	// Milk reference quantity
	milkref  = $( '#milkrefval' );
	currID   = milkref.attr( 'id' ) + CL;
	currInfo = (milkref.val().replace( new RegExp( SP, 'g' ), N ) || AS) // Remove format spaces (better legibility)
	if ( currInfo == milkrefvalText[ lang ] ) {
		currInfo = AS;
	}
	myData += currID + currInfo + CR2;
	
	// Other data
	$( '#databox-subcont2' ).find( '.otherdata' ).each( function () {
		currID   = $( this ).attr( 'class' ).split( SP )[ 0 ] + CL;
		currInfo = $( this ).find( 'input' ).val() || AS;
		myData += currID + currInfo + CR
	} );
	myData += CR
	
	// Distributor remarks
	distrib   = $( '.remarks', '#info' );
	currClass = distrib.attr( 'class' ).split( SP )[ 0 ] + CL;
	currInfo  = distrib.val();
	if ( currInfo == distribremarksText[ lang ] ) {
		currInfo = AS;
	}
	myData += currClass + currInfo + CR2;
	
	// Contact info
	$( '#contact' ).children().each( function ( index ) {
		currClass = $( this ).attr( 'class' ).split( SP )[ 0 ] + CL;
		currInfo  = $( this ).val();
		if ( currInfo == contactdefaultText[ lang + langScope * index ] ) {
			currInfo = AS;
		}
		myData += currClass + currInfo + CR;
	} );
	myData += CR;
	
	// Total for check
	myData += 'total:' + totalSum + CR;
	
	// Validated Estimate?
	myData += 'validated:' + dialogText[ 1 - ($( '.alertInput', '#categories' ).length === 0) ].split( CO )[ 1 ] + CR;
	
	// Indicator to avoid duplicate data in file
	$( '#surfacedetail-container, .modal' ).data( 'scanned', false );
	
	// Catboxes info
	$( '.cat', '#categories' ).each( function () {
		catScan    = $( this );
		currClass  = $( this ).attr( 'class' ).split( SP )[ 1 ] + CL;
		currCatBox = catScan.find( '.catbox' ).length;
		if ( !currCatBox ) {
			currInfo = AS;
		} else {
			currInfo = currCatBox + CR;
			catScan.find( '.catbox' ).each( function () {
				
				currCatBox = $( this );
				currInfo += CR + currCatBox.find( 'img' )[ 0 ].alt + CL;
				// subconsforcalc: val or
				// 1. (surfaces cat) -> val|class1-valA1-valB1|class2-valA2-valB2… (surfaces)
				sub1 = currCatBox.find( PO + subCatClassNames[ 0 ] ).val() || AS;
				if ( currCatBox.find( '.moreconsinfo:visible' ).length && !$( '#surfacedetail-container' ).data( 'scanned' ) ) {
					var allFreq = $( '#surfacedetail-container' ).data( 'scanned', true ).find( '.surfacefreq' );
					sub1 += LI;
					$( '#surfacedetail-container' ).find( '.surfacevalue' ).each( function ( index ) {
						sub1 += $( this ).attr( 'class' ).split( SP ).slice( -1 )[ 0 ].replace( 'S-', N ) + ':';
						sub1 += ($( this ).val() || AS) + HA + (allFreq.eq( index ).val() || AS);
						sub1 += CO;
					} );
					sub1 = sub1.slice( 0, -1 ) + LI; // Remove unwanted CO at the end
				} else if ( currCatBox.find( '.lactoduc:visible' ).length && !$( '#modalLT' ).data( 'scanned' ) ) {
					// 2. (circuits cat) -> val|vol found|class1-val1|class2-val2… (all inputs)
					sub1 += RO + currCatBox.find( '.consinfo' ).text().split( SP ).slice( -2 )[ 0 ] + CO;
					$( '#modalLT' ).data( 'scanned', true ).find( '.adjust' ).each( function () {
						sub1 += $( this ).attr( 'class' ).split( SP )[ 0 ] + ':' + ($( this ).val() || AS);
						sub1 += CO;
					} );
					sub1 = sub1.slice( 0, -1 ) + RO; // Remove unwanted CO at the end
				} else if ( currCatBox.find( '.valorDetail:visible' ).length && !$( '#modalVF' + currCatBox.data( 'valorDetail' ) ).data( 'scanned' ) ) {
					// 2. (valorization cat) -> val|vol found|class1-val1|class2-val2… (all inputs & selects)
					sub1 += MU + '#modalVF' + currCatBox.data( 'valorDetail' ) + CO;
					$( '#modalVF' + currCatBox.data( 'valorDetail' ) ).data( 'scanned', true ).find( 'input, select' ).each( function () {
						sub1 += $( this ).attr( 'class' ).split( SP )[ 2 - $( this ).is( 'select' ) ] + ':' + ($( this ).val() || AS);
						sub1 += CO;
					} );
					sub1 = sub1.slice( 0, -1 ) + MU; // Remove unwanted CO at the end
				}
				currInfo += sub1 + DH;
				
				sub2 = currCatBox.find( PO + subCatClassNames[ 1 ] ).val() || AS;
				currInfo += sub2 + DH;
				
				sub3 = currCatBox.find( PO + subCatClassNames[ 2 ] ).val() || AS;
				currInfo += sub3 + DH;
				
				sub4 = currCatBox.find( PO + subCatClassNames[ 3 ] ).val() || AS;
				currInfo += sub4 + DH;
				
				sub5 = currCatBox.find( PO + subCatClassNames[ 4 ] ).text() || AS;
				currInfo += sub5 + DH;
				
				sub6 = currCatBox.find( PO + subCatClassNames[ 5 ] ).text() || AS;
				currInfo += sub6 + DH;
				
				// Eau douce
				sub12 = (currCatBox.find( PO + subCatClassNames[ 6 ] ).is( ':checked' ) ? 1 : 0) || AS;
				currInfo += sub12 + DH;
				
				// Discount
				sub7 = currCatBox.find( '.discount' ).val() || AS;
				currInfo += sub7 + DH;
				
				// Before After parameter
				sub8 = currCatBox.data( 'specificMode' ) || AS;
				currInfo += sub8 + DH;
				
				// Free article
				sub9 = currCatBox.find( '.forfreecheck' ).prop( 'checked' ) || AS;
				currInfo += sub9 + DH;
				
				sub10 = currCatBox.find( '.specialCalcCheck' ).prop( 'checked' ) || AS;
				currInfo += sub10 + DH;
				
				sub11 = currCatBox.find( '.subconsforcalc4' ).val() || AS;
				currInfo += sub11 + DH;
				
			} );
		}
		myData += CR + currClass + currInfo + CR;
	} );
	
	// Remove time info so that we can really compare data
	newfileData[ sessionIndex ] = myData.substr( myData.search( 'version' ) );
	// Truncate file so that the version/date is not taken into account
	newfileData[ sessionIndex ] = newfileData[ sessionIndex ].substr( newfileData[ sessionIndex ].search( CR2 ) );
	
	// Records olddata in unredoData array
	createUnredoData();
	
}

function createUnredoData() {
	
	// Set here the array max length
	var unredoDataLimit = 20;
	
	// Do not record anything while unredoing or loading or changing language
	if ( unredoProcess || flagProcess ) {
		return;
	}
	
	// A difference? Then add data to the array
	if ( newfileData[ sessionIndex ] != previousfileData[ sessionIndex ] ) {
		
		// Limit undos
		if ( unredoData[ sessionIndex ].length == unredoDataLimit ) {
			unredoData[ sessionIndex ].shift();
		}
		
		// If backwards, clear forward data
		unredoData[ sessionIndex ].length += unredoPosition[ sessionIndex ];
		unredoPosition[ sessionIndex ] = 0;
		unredoData[ sessionIndex ].push( newfileData[ sessionIndex ] );
		
	}
	
}

function clearunredoData() {
	
	unredoData[ sessionIndex ].length = 0;
	unredoPosition[ sessionIndex ]    = 0;
	newfileData[ sessionIndex ]       = null;
	
}

function unredo( direction ) {
	
	loadProcess   = true;
	unredoProcess = true;
	
	currentScroll = $( document ).scrollTop();
	
	if ( !demoProcess ) {
		$( 'body, #undo, #redo' ).addClass( 'progress' );
	}
	
	setTimeout( function () {
		
		// hide open tools & clear all
		resetAll();
		
		// Goes up/down in the array
		unredoPosition[ sessionIndex ] += direction;
		
		// Define data to show
		loadedData = unredoData[ sessionIndex ][ unredoData[ sessionIndex ].length + unredoPosition[ sessionIndex ] - 1 ];
		
		// Load data
		scanFile();
		
		// Go to initial position
		if ( currentScrollDP ) {
			currentScroll = currentScrollDP;
		}
		scrollWindow( currentScroll, 1 );
		
		switchCategory();
		unHideCategories( 0 );
		
		loadProcess   = false;
		unredoProcess = false;
		$( 'body, #undo, #redo' ).removeClass( 'progress' );
		
	}, 60 );
	
}

function resetSlidersPosition() {
	
	// Change speed to make the process very quick
	setSliderSpeed( 1 );
	
	$( '.bx-pager', '#slider-container' ).each( function () {
		$( this ).find( 'a' ).first().click();
	} );
	
	// Default value
	setTimeout( function () {
		setSliderSpeed( sliderSpeed );
	}, 10 );
	
}

function unredoEnable() {
	
	var undos = $( '#undo, .modal-undo' ),
	    redos = $( '#redo, .modal-redo' )
	
	if ( unredoData[ sessionIndex ].length + unredoPosition[ sessionIndex ] > 1 ) {
		undos.removeClass( 'noselectpossible' );
	} else {
		undos.addClass( 'noselectpossible' );
	}
	if ( unredoPosition[ sessionIndex ] < 0 ) {
		redos.removeClass( 'noselectpossible' );
	} else {
		redos.addClass( 'noselectpossible' );
	}
}

function unredoInit() {
	
	$( '#undo, #redo' ).on( 'click', function () {
		if ( $( this ).hasClass( 'noselectpossible' ) || unredoProcess ) {
			return;
		}
		unredo( 1 - 2 * (this.id == 'undo') );
	} );
	
	$( document ).on( 'click', '.modal-undo, .modal-redo', function () {
		$( '#' + $( this ).attr( 'class' ).split( SP )[ 0 ].split( DH )[ 1 ] ).click();
	} );
	
}

function fileStatusUpdate() {
	
	if ( loadProcess ) {
		return;
	}
	
	createFile();
	loadSaveEnable();
	unredoEnable();
	
}

function saveFile( dataText, myFileName, fileType ) {
	
	fileType = fileType || 'text/plain';
	
	var textFileAsBlob = new Blob( [dataText], { type: fileType } ),
	    downloadLink;
	
	saveError = true;
	
	// IE 10 & 11, Edge
	if ( navigator.appVersion.indexOf( 'Edge' ) > 0 || navigator.appVersion.indexOf( 'MSIE 10.' ) > 0 || !!navigator.userAgent.match( /Trident.*rv\:11\./ ) ) {
		window.navigator.msSaveBlob( textFileAsBlob, myFileName );
		saveError = false;
	}
	// Others
	if ( myBrowser == 'Firefox' || myBrowser == 'Chrome' || myBrowser == 'Opera' ) {
		downloadLink               = document.createElement( 'a' );
		downloadLink.download      = myFileName;
		downloadLink.style.display = 'none';
		$( 'body' ).append( downloadLink );
		downloadLink.href = window.URL.createObjectURL( textFileAsBlob );
		downloadLink.click();
		saveError = false;
	}
	
}

function scanFile() {
	
	var boxNum    = 0, savedFilePos,
	    allSlider = $( '#slider-container' ).find( '.bxslider' );
	filePosition  = 0;
	
	// To avoid fadeIn/out effect when changing tab
	$( '#categories' ).find( '.selectproduct' ).removeClass( 'mediumtransition' );

	// Version
	var fileVersion = searchData( 'version:', CR2 );
	if (fileVersion) {
		fileVersion = parseInt(fileVersion.split(' - ')[0].replace(/\./g, ''));
	}
	
	animalTypeLoaded = searchData( 'animalType:', CR );
	
	if ( !animalTypeLoaded ) {
		animalTypeLoaded = animals[ 0 ];
	} // 0 for cows (old versions < 2.0.0)
	if ( animalType != animalTypeLoaded ) {
		animalType = animalTypeLoaded;
		animal     = $.inArray( animalType, animals );
		allSlider  = selectSliderItems();
		adjustLayout();
	}
	
	// Country/layout (not recorded as a change for unredo)
	if ( !unredoProcess ) {
		
		countryLoaded = searchData( 'country:', CR );
		
		if ( countryLoaded ) {
			if ( country != countryLoaded ) {
				country  = countryLoaded;
				language = country.substring( 3 );
				appendTexts();
				updateLanguages();
			}
		} else {
			// Otherwise, search for language (old versions)
			languageLoaded = searchData( 'language:', CR );
			if ( languageLoaded ) {
				language = languageLoaded;
				country  = language.toUpperCase() + DH + language;
				appendTexts();
				updateLanguages();
			} else {
				loadError += 'language/country' + SL;
			}
		}
		
	}
	
	// Fullview (action done after populated)
	fullviewLoaded = (unredoProcess || switchFileProcess) ? searchData( 'fullview:', CR ) : false;

	// Currency
	currencyLoaded = searchData( 'currency:', CR );
	if ( currencyLoaded ) {
		currency = currencyLoaded;
		updateCurrencies();
	} else {
		loadError += 'currency' + SL;
	}
	
	// Range used
	rangeLoaded = searchData( 'productRangeDB:', CR );
	if ( rangeLoaded ) {
		if ( rangeLoaded != productRangeDB ) {
			loadErrorPlus = SL + 'R' + productRangeDB + '-RL' + rangeLoaded;
		}
	}
	
	// Cost Milk
	DCMLoaded = searchData( 'costGMilk:', CR );
	if ( DCMLoaded ) {
		OptioncostGMilk = DCMLoaded;
	}
	
	// Cost DCM
	DCMLoaded = searchData( 'costDCM:', CR );
	if ( DCMLoaded ) {
		OptioncostDCM = DCMLoaded;
	}
	
	// Global Cost DCM
	GDCMLoaded = searchData( 'costGDCM:', CR );
	if ( GDCMLoaded ) {
		OptioncostGDCM = GDCMLoaded;
	}
	
	// Price in kg
	Optionpriceperkg = 'true';
	KGLoaded         = searchData( 'priceperkg:', CR );
	if ( KGLoaded == 'false' ) {
		Optionpriceperkg = KGLoaded;
	}
	
	// Price tax
	Optiontax = 'false';
	taxLoaded = searchData( 'tax:', CR );
	if ( taxLoaded == 'true' ) {
		Optiontax = taxLoaded;
	}
	
	priceTaxforTexts();
	
	// Global discount
	globaldiscountLoaded = searchData( 'globaldiscount:', CR );
	if ( globaldiscountLoaded ) {
		Optionglobaldiscount = globaldiscountLoaded;
	} else {
		Optionglobaldiscount = 'false';
	}
	
	// Udder discount
	udderdiscountLoaded = searchData( 'udderdiscount:', CR );
	if ( udderdiscountLoaded ) {
		Optionudderdiscount = udderdiscountLoaded;
	} else {
		Optionudderdiscount = 'false';
	}
	
	// Just in case both options set to 'true'
	if ( Optionglobaldiscount == 'true' && Optionudderdiscount == 'true' ) {
		Optionudderdiscount  = 'false';
		Optionglobaldiscount = 'false';
		loadError += 'discount rule' + SL;
	}
	
	// Month period
	periodLoaded = searchData( 'period:', CR );
	if ( periodLoaded ) {
		months = periodLoaded;
		updateMonths( months * 10 );
		dragBarAdjust();
	} else {
		loadError += 'months period' + SL;
	}
	
	// AOC
	OptionAOC = 'false';
	AOCLoaded = searchData( 'AOC:', CR );
	if ( AOCLoaded == 'true' ) {
		OptionAOC = AOCLoaded;
	}
	
	// Update options box
	appendOptions();
	
	// Installation data
	animalsLoaded  = searchData( 'cows:', CR ) || searchData( 'animals:', CR ); // Old versions <2.0.0 do not process other species than cows
	clustersLoaded = searchData( 'clusters:', CR );
	robotsLoaded   = searchData( 'robots:', CR );
	tankLoaded     = searchData( 'tank volume:', CR );
	if ( animalsLoaded && clustersLoaded && robotsLoaded && tankLoaded ) {
		dataAnimals  = animalsLoaded;
		dataClusters = clustersLoaded;
		dataRobots   = robotsLoaded;
		dataTank     = tankLoaded;
		updateDisplayData();
		showHideSpecialCategories();
	} else {
		loadError += 'data installation' + SL;
	}
	
	// Milk ref value
	milkLoaded = searchData( 'milkrefval:', CR );
	if ( milkLoaded && milkLoaded != AS ) {
		$( '#milkrefval' ).val( milkLoaded ).blur()
			.removeClass( 'noinputvalue' );
	}
	
	$( '#databox-subcont2' ).find( '.otherdata' ).each( function () {
		currField = $( this ).attr( 'class' ).split( SP )[ 0 ] + CL;
		currText  = searchData( currField, CR );
		if ( currText && currText != AS ) {
			$( this ).find( 'input' ).val( currText );
		}
	} );
	
	updateDisplayData();
	
	// Distributor remarks & Contact info
	$( '#contact, #distribremarks' ).children().each( function () {
		
		currField = $( this ).attr( 'class' ).split( SP )[ 0 ] + CL;
		currText  = searchData( currField, CR );
		
		// Compatibility with older versions (< 1.0.7)
		// 'phone' is now replacing 'tel'
		if ( currField == 'phone:' && !currText ) {
			currField = 'tel:';
			currText  = searchData( currField, CR );
		}
		
		if ( currText && currText != AS ) {
			$( this ).val( currText ).blur()
				.removeClass( 'noinputvalue' );
		}
		
	} );
	
	// Total for check
	totalLoaded = parseFloat( searchData( 'total:', CR ) );
	if ( isNaN( totalLoaded ) ) {
		loadError += 'no total' + SL;
	}
	
	/////////////////////
	// Catboxes info
	/////////////////////
	
	savedFilePos = filePosition;
	
	$( '#categories' ).find( '.cat' ).each( function () {
		catScan      = $( this );
		currClass    = catScan.attr( 'class' ).split( SP )[ 1 ] + CL;
		filePosition = savedFilePos
		currBoxNumb  = searchData( currClass, CR );
		filePosition += 4;
		if ( currBoxNumb != AS && currBoxNumb ) {
			
			catScan.removeClass( 'hidden' ); // Possible old category that won't appear
			
			currBoxNumb = Number( currBoxNumb );
			boxNum += currBoxNumb; // Boxes number control vs real created boxes
			category    = catScan.index();
			
			for ( var i = 0; i < currBoxNumb; i++ ) {
				
				// Search product names in file
				filePosition += ((i !== 0) + 1);
				nameLength = loadedData.substr( filePosition ).search( CL );
				nameProd   = loadedData.substr( filePosition, nameLength ).replace( String.fromCharCode( 10 ), N );
				if ( nameProd == 'AG-NET' || nameProd == 'AG-PULV' ) {
					nameProd += "'";
				} // Backward compatibility with v1.7.7
				
				// Determines the corresponding slider item & add the product
				allSlider.eq( category ).find( 'img[alt="' + nameProd + '"]' ).addProduct();
				
				scanForward( nameLength );
				
				//////////////////
				// Fill catboxes
				//////////////////
				
				for ( var index = 0; index < subCatClassNames.length; index++ ) {
					
					consLength = loadedData.substr( filePosition ).search( DH );
					consVal    = loadedData.substr( filePosition, consLength );
					
					// Workaround to assign 285 tab units to old versions (bef. aug.2018, only 285 was allowed)
					if ( (nameProd == 'GERMICIDAN TABS' || nameProd == 'AQUASEPT') && index == 5 && consVal == AS ) {
						consVal = 285;
					}
					
					if ( consVal != AS ) {
						if ( index < 4 ) {
							// Usual input fields
							
							//////////////////////////
							// Splitted surfaces
							//////////////////////////
							
							if ( consVal.indexOf( LI ) > 0 ) {
								var consVal2 = consVal.split( LI ),
								    consValSurf, consValFreq;
								consVal      = consVal2[ 1 ].split( CO );
								//consVal.pop(); // Remove the last one (empty, marker used as delimiter)
								$.each( consVal, function ( index, value ) {
									consVal     = value.split( CL );
									consValSurf = consVal[ 1 ].split( HA )[ 0 ];
									consValFreq = consVal[ 1 ].split( HA )[ 1 ];
									// Check that both surf & freq are there
									if ( consValSurf && consValSurf != AS && consValFreq && consValFreq != AS ) {
										$( '#surfacedetail-container' ).find( PO + 'S-' + consVal[ 0 ] ).val( consValSurf )
											.nextInDOM( '.surfacefreq' ).val( consValFreq );
									}
								} );
								consVal = consVal2[ 0 ];
							}
							
							//////////////////////////////
							// Circuit cat splitted info
							//////////////////////////////
							
							if ( consVal.indexOf( RO ) > 0 ) {
								var consVal3 = consVal.split( RO ),
								    consValSurfC;
								consVal      = consVal3[ 1 ].split( CO );
								$( '#modalLT-infocalc' ).data( 'totalVol', consVal[ 0 ] * 1 );
								consVal.shift();
								$.each( consVal, function ( index, value ) {
									consVal      = value.split( CL );
									consValSurfC = consVal[ 1 ];
									// Append to modalLT inputs
									if ( consValSurfC && consValSurfC != AS ) {
										$( '#modalLT' ).find( PO + consVal[ 0 ] ).val( consValSurfC );
									}
								} );
								consVal = consVal3[ 0 ];
							}
							
							//////////////////////////////
							// Valorization info
							//////////////////////////////
							
							if ( consVal.indexOf( MU ) > 0 ) {
								var consVal3 = consVal.split( MU );
								consVal      = consVal3[ 1 ].split( CO );
								var myModal  = $( consVal[ 0 ] )
								consVal.shift();
								$.each( consVal, function ( index, value ) {
									consVal     = value.split( CL );
									consValInfo = consVal[ 1 ];
									// Append to modalVF inputs/selects
									if ( consValInfo && consValInfo != AS ) {
										myModal.find( PO + consVal[ 0 ] ).val( consValInfo );
									}
								} );
								consVal = consVal3[ 0 ]
							}
							
							///////////////////
							// OTHER VALUES
							///////////////////
							
							// Clean values (not unitprice still shown as 3.60 E.g.)
							if ( subCatClassNames[ index ] !== 'unitprice' ) {
								consVal = removeZeros( consVal );
							}
							
							newbox.find( PO + subCatClassNames[ index ] ).val( consVal ).blur();
							
							if ( index == 2 ) {
								newbox.data( 'theorQuantity', 'loaded' );
							} // consforcalc
							
						} else {
							// Packaging text values
							if ( index == 6 && fileVersion >= 215) {
								if ( consVal ) {
									newbox.find( PO + subCatClassNames[ index ] ).prop( 'checked', true );
								}
							} else {
								newbox.find( PO + subCatClassNames[ index ] ).text( consVal );
							}
							if ( index == 5 ) {
								// Focus on selected packaging
								if ( newbox.find( '.packaging' ).length > 1 ) {
									newbox.rearrangePackaging( consVal );
								}
							}
						}
					}
					scanForward( consLength );
					
				}
				
				// Discount
				consLength = loadedData.substr( filePosition ).search( DH );
				consVal    = loadedData.substr( filePosition, consLength );
				if ( consVal != AS ) {
					createDiscount( newbox );
					newbox.find( '.discount' ).val( consVal ).blur();
				}
				scanForward( consLength );
				
				// Specific modes (Robot Before/After, modes…) possibility
				if ( loadedData.charCodeAt( filePosition ) != 13 ) { // Take into acc. old versions
					consLength = loadedData.substr( filePosition ).search( DH );
					consVal    = loadedData.substr( filePosition, consLength );
					if ( consVal != AS ) {
						// true is for robots while modes uses value
						var specific = (consVal == 'true' ? 1 : consVal);
						newbox.data( 'specificMode', specific );
					}
					scanForward( consLength );
				}
				
				// Free article
				if ( loadedData.charCodeAt( filePosition ) != 13 ) { // Take into acc. old versions
					consLength = loadedData.substr( filePosition ).search( DH );
					consVal    = loadedData.substr( filePosition, consLength );
					if ( consVal != AS ) {
						var checked = (consVal == 'true' ? true : false);
						newbox.find( '.forfreecheck' ).prop( 'checked', checked );
					}
					scanForward( consLength );
				}
				
				// Special calc
				if ( loadedData.charCodeAt( filePosition ) != 13 ) { // Take into acc. old versions
					consLength = loadedData.substr( filePosition ).search( DH );
					consVal    = loadedData.substr( filePosition, consLength );
					if ( consVal != AS ) {
						var checked = (consVal == 'true' ? true : false);
						newbox.find( '.specialCalcCheck' ).prop( 'checked', checked );
					}
					scanForward( consLength );
				}
				
				// Months for pawcalc
				if ( loadedData.charCodeAt( filePosition ) != 13 ) { // Take into acc. old versions
					consLength = loadedData.substr( filePosition ).search( DH );
					consVal    = loadedData.substr( filePosition, consLength );
					if ( consVal != AS ) {
						newbox.find( '.subconsforcalc4' ).val( consVal );
					}
					scanForward( consLength );
				}
				
				// Tag the new loaded box so that the estimation is not corrected
				newbox.data( 'theorPackaging', 'loaded' );
				
			}
		}
	} );
	
	//console.timeEnd("scan duration");
	loadProcess = false;
	
	// Back to top except when undoing
	if ( !unredoProcess ) {
		scrollWindow( 1 * !switchFileProcess, 1 );
	}
	
	// Restoring restricted view if present
	if ( fullviewLoaded !== 'true' ) {
		animateCategories( 1 );
	}
	
	showRightMenuWarning = false;
	
	// Store total dose numbers (valorization)
	$( '#modal-container' ).find( '.modal' ).each( function () {
		$( this ).find( 'input.tableCell' ).eq( 0 ).change();
	} );
	
	fullCalc();
	
	$( '.selectproduct', '#categories' ).addClass( 'mediumtransition' );
	
	validateAllProducts( $( '.catbox', '#categories' ) );
	
	// Final error check (total + catbox number)
	if ( totalLoaded !== totalSum ) {
		loadError += 'total' + SL;
	}
	if ( $( '.catbox', '#categories' ).length != boxNum ) {
		loadError += 'box number' + SL;
	}
	if ( Optionuser == 'true' ) {
		updateUserInfo();
	}
	
}

function scanForward( nbChars ) {
	
	filePosition += nbChars + 1;
	
}

function loadFile( dataFile, dataFileName ) {
	
	var fileToLoad = dataFileName || document.getElementById( 'fileToLoad' ).files[ 0 ],
	    fileReader = dataFileName || new FileReader(),
	    chosenFile = dataFileName || fileToLoad.name,
	    loadedExt,
	    infoText   = N;
	
	// Checking file extension
	loadedExt = PO + chosenFile.split( PO ).slice( -1 )[ 0 ];
	if ( loadedExt != fileExt ) {
		if ( loadedExt == priceFileExt ) {
			infoText = ' (' + fileInfoText[ lang ] + ')';
		}
		showTopWarning( 4, 200, 4700, infoText, 300 );
		return;
	}
	
	loadError         = N;
	loadErrorPlus     = N;
	loadProcess       = true;
	Optionhelpacidalk = 'false';
	disableMouseWheel();
	oldcountry = country;
	
	// Open a new file if not an empty sheet
	if ( emptySheet() ) {
		resetAll();
	} else {
		addFile();
	}
	
	filename[ sessionIndex ] = chosenFile;
	
	// Clear all recorded data
	clearunredoData();
	
	// Short time to let all things be allright
	setTimeout( function () {
		
		$( '#message-container' ).addClass( 'inlineblock' );
		$( '#UIcontainer' ).fadeIn( 300, function () {
				
				if ( dataFile ) { // a data is directly read from string
					
					loadedData = dataFile;
					scanFile();
					
				} else { // Usual file reader
					
					fileReader.readAsText( fileToLoad, 'UTF-8' );
					fileReader.onload = function ( e ) {
						
						// Load rough data
						loadedData = e.target.result;
						
						// Scan every element of the loaded file
						scanFile();
						
					};
				}
				
			} )
			.find( 'span' )
			.show()
			.text( warningText[ 7 * langScope + lang ] )
			.next()
			.addClass( 'inlineblock' );
		recordHistory( 7 );
		
	}, 10 );
	
	/////////////////////////////////////////////
	// Waiting for the end of the load process
	/////////////////////////////////////////////
	
	var loadTimer = 0;
	loadEnded     = setInterval( function () {
		
		loadTimer++;
		
		if ( Math.ceil( $( document ).scrollTop() ) == 1 || loadTimer > 100 || dataFile ) {
			
			scrollWindow( 1, 1 );
			
			checkPostDate();
			
			$( '#UIcontainer' ).delay( 50 ).fadeOut( function () {
				
				enableMouseWheel();
				
				if ( loadError == 'same' ) {
					// Show top text info
					setTimeout( function () {
						showTopWarning( 19, null, 4000 );
					}, 150 );
				} else {
					if ( loadError ) {
						// Add ranges info
						loadError = loadError.slice( 0, -1 ) + loadErrorPlus;
					}
					setTimeout( function () {
						showTopWarning( -(loadError === N) + 6, 300, 4000 * (loadError === N), loadError );
					}, 150 );
				}
				
				$( '#UIcontainer' ).removeClass( 'outofscreen' ); // If silent mode was used
				removeTooltip();
				
				// Warn user in case of a different country file
				if ( country != oldcountry ) {
					setTimeout( function () {
						bigFlagBounce();
					}, 1000 );
				}
				
				// Load (mask…) is really finished
				loadEnded = null;
				
			} );
			clearInterval( loadEnded );
			
		}
		
	}, 30 );
	
}

function loadPriceFile() {
	
	var fileToLoad = document.getElementById( 'fileToLoad' ).files[ 0 ],
	    fileReader = new FileReader(),
	    loadedExt,
	    infoText   = N;
	
	// Checking file extension
	loadedExt = PO + fileToLoad.name.split( PO )[ 1 ];
	if ( loadedExt != priceFileExt ) {
		if ( loadedExt == fileExt ) {
			infoText = ' (' + fileInfoText[ lang + langScope ] + ')';
		}
		showTopWarning( 4, 300, 4700, infoText, 300 );
		return;
	}
	
	loadPricesProcess = true;
	
	$( '#UIcontainer' ).fadeIn( 300, function () {
			
			fileReader.onload = function ( e ) {
				
				// Load rough data
				var backupPriceData = priceData;
				priceData           = marginCurve.productD( e.target.result ).replace( new RegExp( '@', 'g' ), CR );
				
				// Scan every element of the loaded file
				var loadError = scanPriceFile() || N;
				// Load error
				if ( loadError ) {
					priceData = backupPriceData;
				} else {
					createPriceFile();
				}
				
				// End of the process + message
				
				loadPricesProcess = false;
				
				$( '#UIcontainer' ).delay( 300 ).fadeOut( function () {
					setTimeout( function () {
						showTopWarning( 5 + 31 * (loadError !== N), 300, 4000 * (loadError === N), loadError );
						if ( !loadError ) {
							$( '#backtotop' ).click();
							warningYear();
						}
					}, 150 );
				} );
				
			};
			
			fileReader.readAsText( fileToLoad, 'UTF-8' );
			
		} )
		.find( 'span' )
		.show()
		.text( warningText[ 7 * langScope + lang ] );
	recordHistory( 7 );
	
}

function searchData( item, endmarker, theData ) {
	
	theData = theData || loadedData;
	
	if ( !theData ) {
		console.log( 'loadedData ou theData indéfini !!' );
		return;
	}
	
	var dataSearched = false,
	    itemPosition = theData.substr( filePosition ).indexOf( item );
	
	if ( itemPosition >= 0 ) {
		filePosition += itemPosition + item.length;
		dataSearched = theData.substr( filePosition, theData.substr( filePosition ).indexOf( endmarker ) );
	}
	
	return dataSearched;
}

function randomNum( num ) {
	
	num = num || 1e9;
	return Math.round( Math.random() * num );
	
}

function checkInternet() {
	
	var timerDiag    = 60,
	    maxTimerDiag = 90; // Every (maxTimerDiag)s, a diag is performed
	
	timerInternet = setInterval( function () {
		
		if ( !$( '#UIintro-container' ).isVisible() && !$( '#go-container' ).isVisible() ) {
			timerChronos++;
		}
		
		// var oImg=new Image();
		// // http://agfrance-extranet.com/easycalcag/ec.png?
		// oImg.src=marginCurve.productD('aWG0nSfmA7UeOeYsbdCcALK2oWYsbdK0AdCmbH9cNMC3N7UjN7UeA7KuAeQlOz6=')+randomNum();
		// oImg.onload=function() {
		// 	Ic='I';
		// 	if ($('body').data('cors-dl-OK')!==true) {return;}
		// 	// $('#mailbox').next().hide();
		// 	if ($('#mailFile').text() && !sendProcess) {
		// 		$('#sendmail').removeClass('noselectpossible').addClass('hoverwhite');
		// 	}
		// };
		// oImg.onerror=function() {Ic='X';};
		
		Ic = 'X';
		
		if ( Ic == 'X' || $( 'body' ).data( 'cors-dl-OK' ) !== true ) {
			$( '#sendmail' ).addClass( 'noselectpossible' ).removeClass( 'hoverwhite' );
			// $('#mailbox').next().show();
		}
		$( '#rightmenuVersionPlusIc' ).text( Ic );
		
		var So;
		if ( Ic != 'I' || $( 'body' ).data( 'cors-dl-OK' ) !== true ) {
			So = 'X';
		} else {
			So = 'S';
		}
		$( '#rightmenuVersionPlusSo' ).text( So );
		
		if ( timerChronos >= 3 && Ic == 'I' && !loadProcess && !unredoProcess && (resetProcess !== 'true') && !setPricesProcess && !demoProcess && !$( '#UIintro-container' ).isVisible() ) {
			timerChronos = -9999;
		}
		
		// Background diagnosis
		timerDiag++;
		if ( timerDiag > maxTimerDiag ) {
			if ( !diagProcess && !demoProcess && !goProcess ) {
				var diagResult = diagEngine( 'silent' );
				if ( warningType != 56 ) {
					if ( diagResult < 90 ) {
						showTopWarning( 56, null, null, null, null, '#diagnostic' );
					}
				} else {
					if ( diagResult >= 90 ) {
						hideTopWarning();
					}
				}
				$( '#diagnostic-boxcontainer' ).children().remove();
			}
			timerDiag = 0;
		}
		
	}, 1000 );
	
}

function whatsmyBrowser() {
	
	var browsers = ['MSIE|Internet Explorer', 'Firefox', 'Safari', 'Chrome', 'OPR|Opera', 'Edge'],
	    mybrowser,
	    nav      = navigator.userAgent,
	    navIndex;
	
	for ( var b = 0; b < browsers.length; b++ ) {
		navIndex = nav.indexOf( browsers[ b ].split( LI )[ 0 ] );
		if ( navIndex > -1 ) {
			if ( browsers[ b ].split( LI )[ 1 ] ) {
				mybrowser = browsers[ b ].split( LI )[ 1 ];
			} else {
				mybrowser = browsers[ b ];
				if ( mybrowser == 'MSIE' ) {
					mybrowser += navigator.userAgent.substr( navIndex + 5, 10 ).split( ';' )[ 0 ];
				}
			}
		}
	}
	// Special check for IE notably v11
	isIE   = (navigator.userAgent.indexOf( 'MSIE' ) > 0) || (!!navigator.userAgent.match( /Trident.*rv\:11\./ ));
	isEdge = (navigator.userAgent.indexOf( 'Edge' ) > 0)
	if ( isIE ) {
		mybrowser = browsers[ 0 ].split( LI )[ 1 ];
	}
	
	return mybrowser;
}

function showHideLogo( status ) {
	
	rightmenulogoImg = $( '#rightmenulogoImg' );
	
	if ( status ) {
		$( '#warning-logo' ).show();
		rightmenulogoImg
			.show()
			.attr( 'src', DistriblogoSrc );
		
		// Retrieve real image dimensions with height limit
		var realLogoWidth  = $( '.testlogo' ).eq( 0 ).data( 'width' ),
		    realLogoHeight = $( '.testlogo' ).eq( 0 ).data( 'height' );
		
		// Display pathname and size
		rightmenulogoImg
			.next().next()
			.html( DistriblogoSrc.split( '?' )[ 0 ] + SP + '(' + realLogoWidth + ' x ' + realLogoHeight + SP + specialWindowsText[ lang + 18 * langScope ] + ')' );
		
	} else {
		$( '#warning-logo' ).hide();
		rightmenulogoImg.hide()
			.next().next()
			.html( warningText[ 11 * langScope + lang ] );
	}
	
}

function findDistribLogoSrc() {
	
	var extens = ['gif', 'jpg', 'png'];
	
	DistriblogoSrc = false;
	
	$( '#info' ).find( '.testlogo' ).remove();
	$.each( extens, function ( index ) {
		$( '#info' ).append( '<img style="display:none" class="testlogo" src="' + logoFolder + SL + 'logo.' + extens[ index ] + '?' + randomNum() + '"></div>' );
	} );
	
	// Default
	showHideLogo( 0 );
	
	// Now checks if one has loaded
	$( '.testlogo', '#info' ).load( function () {
		var wl = $( this ).width();
		if ( wl > 30 ) {
			DistriblogoSrc = this.src;
			var wh         = $( this ).height();
			$( '.testlogo', '#info' ).eq( 0 ).data( 'width', wl ).data( 'height', wh );
		}
		// Fills the logomenu box
		showHideLogo( 1 );
	} );
	
}

function resetAll() {
	
	deleteProcess = true;
	
	// Hide tools
	hideAddtocart( 1 );
	hideTopWarning();
	hideSearch();
	hideMailBox();
	hideSlider( 1 );
	hideRightMenu( 1 );
	optionslideIndex = 0;
	hideSliderMonth();
	resetmodalLT();
	resetmodalVF();
	oldCatManagement();
	
	if ( newProcess || demoProcess ) {
		scrollWindow( 1, 1 );
		appendDataValues(); // Clear all installation data fields
	}
	if ( demoProcess ) {
		addRemoveSpecials( 'AOC', 0 ); // Clear AOC
	}
	
	// Contact info removal
	clearContactInputs();
	
	// Ensure that slider's indicators are reset
	$( '.bxslider li', '#slider-container' )
		.find( 'img' ).removeClass( 'lowopacity' ).end()
		.find( '.bxplus' ).show().end()
		.find( '.bxforbid, .bxcheck' ).hide();
	
	// Set default position & Hide persistent day calendar
	if ( !unredoProcess ) {
		resetSlidersPosition();
		$( '.gldp', '#contact-container' ).hide();
	}
	
	// Remove all products & total price elements
	$( '.catbox, .cattotal-container', '#categories' ).remove();
	
	// Force full view mode
	if ( $( '#viewswitcher' ).hasClass( 'fullview' ) ) {
		animateCategories( 1 );
	}
	
	// Show select product tab
	$( '.selectproduct', '#categories' ).css( {
		top:     -8,
		opacity: 1
	} );
	// Hide wastebin
	$( '.wastebin', '#categories' ).hide();
	
	deleteProcess = false;
	
}

function oldCatManagement() {
	
	$( '#categories' ).find( '.cat' ).each( function () {
		if ( $( this ).hasClass( 'oldcat' ) && !$( this ).hasClass( 'hidden' ) ) {
			$( this ).addClass( 'hidden' );
		}
	} );
	
}

function resetApp( full ) {
	console.log( 'resetApp' );
	// Prevent saving old options
	$( window ).off( 'beforeunload' );
	
	hideRightMenu( 1 );
	
	// Reset storage…
	clearStorage();
	
	// undefined=reset and keep range - 0 reset and switch to range 0 - other : real reset with password request
	switch ( full ) {
		case undefined:
			saveData( 'Optionproductrange', productRangeDB );
			break;
		case 0:
			saveData( 'Optionproductrange', '0' );
			break;
	}
	
	// Smooth turnoff, show message and reload
	$( '#UIcontainer' ).fadeIn( function () {
			location.reload();
		} )
		.find( 'span' )
		.show()
		.text( warningText[ 44 * langScope + lang ].replace( MU, App ) );
	recordHistory( 44 );
	
}

function adjustLayout() {
	
	var attrib    = findAttributesInArray( animalType, animalAttributes ),
	    dataBoxes = $( '#databox-container' ).find( '.databox' );
	
	// Default cat/databoxes are shown
	dataBoxes.removeClass( 'notdisplayed' );
	$( '#categories' ).find( '.cat' ).removeClass( 'notdisplayed' );
	$( '#small-data-widget' ).find( '.small-data-container' ).removeClass( 'notdisplayed' );
	$( '.small-otherdata' ).removeClass( 'notdisplayed' );
	
	appendTexts(); // Needed for otherdata titles
	// Show all other data titles
	$( '#databox-subcont2' ).find( '.otherdata' ).removeClass( 'notdisplayed' );
	
	// The reference is 'cow' estimate
	// Then we adjust elements
	switch ( animalType ) {
		case 'cow': {
			// Nothing at this time
			break;
		}
		case 'goat': {
			// hide cow specific
			$( '#databox-container' ).find( '.robot' ).addClass( 'notdisplayed' );
			$( '.notGoatCat' ).addClass( 'notdisplayed' );
			$( '#robot-widget' ).addClass( 'notdisplayed' );
			$( '.' + otherDataInfoText[ 1 ].split( CO )[ 0 ] ).addClass( 'notdisplayed' );
			$( '.' + otherDataInfoText[ 2 ].split( CO )[ 0 ] ).addClass( 'notdisplayed' );
			$( '.small-otherdata' ).eq( 1 ).addClass( 'notdisplayed' );
			$( '.small-otherdata' ).eq( 2 ).addClass( 'notdisplayed' );
			break;
		}
		case 'sheep': {
			// hide cow specific
			$( '#databox-container' ).find( '.robot' ).addClass( 'notdisplayed' );
			$( '.notSheepCat' ).addClass( 'notdisplayed' );
			$( '#robot-widget' ).addClass( 'notdisplayed' );
			$( '.' + otherDataInfoText[ 1 ].split( CO )[ 0 ] ).addClass( 'notdisplayed' );
			$( '.' + otherDataInfoText[ 2 ].split( CO )[ 0 ] ).addClass( 'notdisplayed' );
			$( '.small-otherdata' ).eq( 1 ).addClass( 'notdisplayed' );
			$( '.small-otherdata' ).eq( 2 ).addClass( 'notdisplayed' );
			break;
		}
	}
	
	/// Small data show/hide empty fields
	SmallDataLayout();
	
	// Main-container image
	$( '#main-container' ).css( {
		backgroundImage:    'url(' + imgFolder + SL + animalType + '-bkg' + jpg,
		backgroundPosition: 'center' + SP + (-attrib[ 1 ]) + 'px',
		backgroundColor:    attrib[ 0 ]
	} );
	// Bottom visible background
	$( 'body' ).css( 'background', $( '#categories' ).find( '.titlecat:last' ).css( 'background-color' ) );
	
	// Rearrange databoxes horiz
	var calcWidth = 100 / (dataBoxes.not( '.notdisplayed' ).length);
	dataBoxes.css( 'width', calcWidth + '%' )
		.find( 'img' ).css( 'top', -(calcWidth !== 25) * 20 );
	
	// Adjust databoxes images
	dataBoxes
		.filter( '.animals' ).find( 'img' ).attr( 'src', imgFolder + SL + animalType + jpg ).end().end()
		.filter( '.teatcups' ).find( 'img' ).attr( 'src', imgFolder + SL + animalType + '-clusters' + jpg );
	
	// Adjust small-widget images
	$( '#animal-widget' ).find( '.small-data-img' ).css( 'backgroundImage', 'url(' + imgFolder + SL + animalType + '-widget.png)' );
	$( '#teatcups-widget' ).find( '.small-data-img' ).css( 'backgroundImage', 'url(' + imgFolder + SL + animalType + '-teatcups-widget.png)' );
	
	// Adjust tab and closetab color
	setTabInfoColors();
	
	// Adjust both remark fieds height depending on corresponding data options
	var deltaSpaceH = $( '#databox-container' ).position().top + $( '#databox-container' ).height() - ($( '#distribremarks' ).position().top + $( '#distribremarks' ).height());
	$( '.remarks' ).css( 'height', parseInt( $( '.remarks' ).css( 'height' ) ) + deltaSpaceH - 11 );
	
	deltaSpaceH = $( '#databox-container' ).height() - ($( '.infocust' ).position().top + $( '.infocust' ).height());
	$( '.infocust' ).css( 'height', parseInt( $( '.infocust' ).css( 'height' ) ) + deltaSpaceH - 17 );
	
}

function setTabInfoColors() {
	
	$( '#infotitle' ).add( $( '.fileTab', '#fileTab-container' ).eq( sessionIndex ) )
		.css( 'background', findAttributesInArray( animalType, animalAttributes )[ 0 ] );
	// Updating '+' bkg
	adjustAddFileColor();
	// + adjust tab icon depending on animal
	$( '#fileTab-maincontainer' ).find( '.fileTab' ).eq( sessionIndex )
		.find( '.iconTab' ).attr( 'src', imgFolder + SL + animalType + jpg );
	
}

function updateEstimate() {
	
	var htmlX, htmlY, pageBreak = 1000, waterProd = N,
	    biocideCount                              = 0, biocideAS,
	    noColor,
	    charterColor,
	    // AnimalInLang is the first letter of the animal type
	    animalInLang                              = findAttributesInArray( animalType, animalAttributes )[ animalAttributes[ 0 ].split( CO ).length - langScope + lang ].replace( /\t/g, N ).split( LI )[ 0 ][ 0 ];
	
	retrieveDateTime();
	
	// Remove and recreate sheet container content
	$( '#estimates-wholecontainer' ).remove();
	
	htmlX = '<div id="estimates-wholecontainer"><div id="sheetUpSpacer"/>';
	htmlY = '<div class="estimate-maincontainer"><div class="estimateSheet-container"><div class="estimateSheet"/></div></div><div class="sheetSpacer"/>';
	
	$( 'body' ).append( htmlX + htmlY + htmlY ); // 1 up layout spacer + 2 pages
	
	// hide estimate when preview process (flash)
	if ( !previewProcess ) {
		$( '#estimates-wholecontainer' ).hide();
	}
	
	////////////////////////////
	// Set Header information
	////////////////////////////
	
	$( '.estimateSheet' ).eq( 0 )
		.append( '<img src="' + imgFolder + SL + App.toLowerCase() + '-logo.png" class="sheetApp"><div class="sheetcontact"/><div class="sheetdate"/><div class="sheetvisit"/><div class="sheetvisitdate"/><div class="sheetmade"/><div class="sheetperiod"></div>' );
	
	$( '.sheetcontact' )
		.append( '<div class="sheetaddress"/><div class="sheetmail"/><div class="sheettel"/>' );
	
	htmlX = '<div class="sheetinfocust"/>';
	htmlX += '<div class="sheetpicinfo"><img src="' + imgFolder + SL + 'attached.png" alt="info"><span/></div>';
	htmlX += '<div class="sheetinstallation"/>';
	$( '.sheetperiod' ).after( htmlX );
	
	$( '.sheetdate' ).text( sheetText[ lang ] + SP + dataDate );
	
	sheetV = $( '#contact input' ).eq( 0 ).val();
	if ( sheetV == contactdefaultText[ lang ] ) {
		sheetV = DH;
	}
	$( '.sheetvisit' ).html( contactdefaultText[ lang ] + CL + NBSP );
	
	// FR only: Converting 20/01/2015 into 20 janvier 2015
	sheetVSplit = sheetV.split( SL );
	if ( !lang && sheetVSplit.length ) {
		sheetV = sheetVSplit[ 0 ] * 1 + SP + (datepickermonthText[ 0 ].split( CO )[ -1 + sheetVSplit[ 1 ] * 1 ]) + SP + sheetVSplit[ 2 ];
	}
	
	$( '.sheetvisitdate' ).text( sheetV );
	
	sheetM = sheetText[ langScope + lang ]
		.replace( '&S2', $( '#contact input' ).eq( 1 ).val() )
		.replace( '&S1', $( '#contact input' ).eq( 2 ).val() );
	
	$( '.sheetmade' ).text( sheetM );
	
	sheetN = $( '#contact input' ).eq( 4 ).val();
	if ( sheetN == contactdefaultText[ langScope * 4 + lang ] ) {
		sheetN = N;
	} else {
		sheetN += BR;
	}
	sheetA = sheetN + $( '#contact input' ).eq( 3 ).val() + BR + $( '#contact textarea' ).eq( 0 ).val().replace( /\n/gi, BR );
	$( '.sheetaddress' ).html( sheetA );
	sheetM = $( '#contact input' ).eq( 5 ).val();
	sheetT = $( '#contact input' ).eq( 6 ).val();
	
	if ( sheetM == contactdefaultText[ langScope * 5 + lang ] ) {
		sheetM = N;
	}
	if ( sheetT == contactdefaultText[ langScope * 6 + lang ] ) {
		sheetT = N;
	}
	$( '.sheetmail' ).text( sheetM );
	$( '.sheettel' ).text( sheetT );
	$( '.sheetperiod' ).text( sheetText[ 2 * langScope + lang ] + SP + months + SP + monthsinfoText[ lang ] );
	
	// Remove 'NOTE' when empty
	sheetB = $( '#contact textarea' ).eq( 1 ).val();
	if ( sheetB == contactdefaultText[ langScope * 8 + lang ] ) {
		sheetB = N;
	} else {
		sheetB = sheetText[ 16 * langScope + lang ].toUpperCase() + NBSP + sheetB;
	}
	
	$( '.sheetinfocust' ).html( sheetB );
	sheetIclusters = ', ' + sheetText[ 4 * langScope + lang ].replace( '&S4', dataClusters );
	if ( dataClusters > 1 && lang != 2 ) {
		sheetIclusters += 's';
	}
	if ( !dataClusters ) {
		sheetIclusters = N;
	}
	sheetIrobots = ', ' + sheetText[ 5 * langScope + lang ].replace( '&S5', dataRobots );
	if ( dataRobots > 1 && lang != 2 ) {
		sheetIrobots += 's';
	}
	if ( !dataRobots ) {
		sheetIrobots = N;
	}
	sheetI = sheetText[ 6 * langScope + lang ] + sheetIclusters + sheetIrobots + SP + sheetText[ 7 * langScope + lang ];
	sheetI = sheetI
		.replace( '&S3', dataAnimals )
		.replace( '&S8', findAttributesInArray( animalType, animalAttributes )[ animalAttributes[ 0 ].split( CO ).length - langScope + lang ].split( LI )[ 1 ].toLowerCase() )
		.replace( '&S6', dataTank );
	$( '.sheetinstallation' ).text( sheetI );
	
	////////////////////////////
	// Set page number
	// & Footer information
	////////////////////////////

	var logoFooter = 'logo-kersia.png';
	if (productRangeDB == 30) {
		logoFooter = 'logo-sanicoopa.png';
	}

	$( '.estimateSheet-container' )
		.after( '<div class="sheetfooter"><div class="sheetpage"/><img src="' + imgFolder + SL + logoFooter + '" class="sheetlogofooterAG"><img src="' + DistriblogoSrc + '" class="sheetlogofooterDistrib"><div class="sheetbiocide">' + '(*)' + SP + biocideText[ lang ].replace( ES, N ).replace( '¿', N ) + ED + ED );
	
	$( '.sheetpage' ).each( function ( index ) {
		pageInfo = sheetText[ 12 * langScope + lang ]
			.replace( '&P1', index + 1 )
			.replace( '&P2', $( '.sheetpage' ).length );
		$( this ).text( pageInfo );
	} );
	$( '.sheetpicinfo span' ).text( sheetText[ 3 * langScope + lang ] + SP + $( '.sheetpage' ).length );
	
	////////////////////////////
	// Create tables
	////////////////////////////
	
	var sheetBoxDiscountSum = 0, 					// For total discount display
	    freeText            = sheetText[ 17 * langScope + lang ]; 	// !freeText is also used some lines below
	
	$( '.cat', '#categories' ).each( function ( k ) {
		
		noColor      = '';
		charterColor = '';
		sheetCat     = $( this );
		if ( sheetCat.find( '.catbox' ).length ) {
			var sheetArticleTitle = sheetText[ 10 * langScope + lang ];
			// We hide some columns, change title design and add a page spacer
			if ( $( this ).hasClass( 'catalogue' ) ) {
				sheetArticleTitle = sheetText[ lang + langScope * 23 ];
				noColor           = SP + 'whiteColor';
				charterColor      = SP + 'greenEstimateTitle';
				$( '.estimateSheet' ).eq( $( '.sheetpage' ).length - 2 ).append( '<div class="spacer-estimate"/>' );
			}
			// We hide some columns
			if ( $( this ).hasClass( 'controllers' ) ) {
				noColor = SP + 'whiteColor';
			}
			sheetCatText = catText[ 1 + lang + (langScope + 1) * k ].split( LI )[ 1 ] || catText[ 1 + lang + (langScope + 1) * k ];
			$( '.estimateSheet' ).eq( $( '.sheetpage' ).length - 2 )
				.append( '<div class="sheettitlecat' + charterColor + '">' + sheetCatText + ED + clearBoth );
			
			htmlX = '<div class="sheetproductBox"><div class="sheetBoxTitle">' + sheetArticleTitle + ED + ED;
			htmlX += '<div class="sheetcalcUPBox"><div class="sheetBoxTitle' + noColor + '">' + sheetText[ 9 * langScope + lang ] + ED + ED;
			htmlX += '<div class="sheetcostperanimBox"><div class="sheetBoxTitle">' + sheetText[ 19 * langScope + lang ].replace( '&S8', animalInLang ) + ED + ED;
			htmlX += '<div class="sheetPeriodBox"><div class="sheetBoxTitle periodTitle' + noColor + '">' + sheetText[ 8 * langScope + lang ].replace( '&S7', $( '#months' ).text() ) + ED + ED;
			htmlX += '<div class="sheetcalcpriceBox"><div class="sheetBoxTitle">' + unitpriceText[ lang ] + ED + ED;
			htmlX += '<div class="sheetcalcpriceBox"><div class="sheetBoxTitle">' + totalsumText[ lang ] + ED + ED;
			htmlX += '<div class="sheetcalcpriceBox"><div class="sheetBoxTitle">' + discountText[ lang ] + ED + ED;
			htmlX += '<div class="sheetcalcpriceBox"><div class="sheetBoxTitle">' + totalsumText[ lang ] + ED + ED;
			htmlX += '<div class="sheetsubtotalBox"><div class="sheetBoxSBTitle">' + totalsumText[ lang ] + CL + '</div><div class="sheettotalprice"/></div>';
			htmlX += clearBoth;
			
			$( '.sheettitlecat' ).eq( $( '.sheettitlecat' ).length - 1 ).parent().append( htmlX );
			// Add each product and related info
			sheetCat.find( '.catbox' ).each( function () {
				
				// Create a new page when overflow
				
				$( '#estimates-wholecontainer' ).show();
				pageHeight = $( '.estimateSheet' ).eq( $( '.sheetpage' ).length - 2 ).height();
				if ( !previewProcess ) {
					$( '#estimates-wholecontainer' ).hide();
				}
				
				if ( pageHeight > (pageBreak - 80 * (Optionagreement == 'true')) && $( '.estimateSheet' ).length == 2 ) {
					$( '.estimate-maincontainer' ).eq( $( '.sheetpage' ).length - 2 )
						.after( '<div class="estimate-maincontainer"><div class="estimateSheet-container"><div class="estimateSheet"/></div><div class="sheetfooter"><div class="sheetpage"></div><img src="' + imgFolder + SL + 'logo-kersia.png" class="sheetlogofooterAG"><img src="' + DistriblogoSrc + '" class="sheetlogofooterDistrib"><div class="sheetbiocide">' + biocideText[ lang ].replace( ES, N ).replace( '¿', N ) + '</div></div></div>' )
						.after( '<div class="sheetSpacer"/>' );
					$( '.estimateSheet' ).eq( $( '.sheetpage' ).length - 2 )
						.append( '<div class="sheetdate sheetdate-notfirstpage"/><img src="' + imgFolder + SL + App.toLowerCase() + '-logo.png" class="sheetApp">' + clearBoth )
						.find( '.sheetdate' ).text( sheetText[ lang ] + SP + dataDate + ' (' + sheetText[ 13 * langScope + lang ] + ')' );
					
					$( '.sheetpage' ).each( function ( index ) {
						pageInfo = sheetText[ 12 * langScope + lang ]
							.replace( '&P1', index + 1 )
							.replace( '&P2', $( '.sheetpage' ).length );
						$( this ).text( pageInfo );
					} );
					$( '.sheetpicinfo span' ).text( sheetText[ 3 * langScope + lang ] + SP + $( '.sheetpage' ).length );
				}
				
				// Starts to fill the cells
				
				columns = $( '.estimateSheet' ).find( '.sheettitlecat' ).eq( $( '.sheettitlecat' ).length - 1 ).next().nextAll();
				
				// Biocidal product? * -> *Biocidal phrases
				var sourceProdName = $( this ).find( 'img' )[ 0 ].alt;
				biocideAS          = N;
				if ( $( this ).find( 'img' ).attr( 'data-biocide' ) ) {
					biocideCount++;
					biocideAS = AS;
				}
				;
				// Delivery?
				if ( $( this ).find( 'img' ).attr( 'data-type' ) == '#Delivery' ) {
					sourceProdName = $( this ).find( 'img' ).attr( 'data-title' ).split( LI )[ lang ];
				}
				
				columns.eq( 0 )
					.append( '<div class="sheetproduct realproduct" data-productname="' + sourceProdName + '">' + shortenText( sourceProdName, 30 ) + '<span>' + biocideAS + '</span>' + ED );
				
				// Do we need to display the AQUASEPT/GERMICIDAN Tabs instruction for use?
				if ( sourceProdName == 'GERMICIDAN TABS' || sourceProdName == 'AQUASEPT' ) {
					if ( waterProd.indexOf( sourceProdName ) < 0 ) {
						waterProd += sourceProdName + SL;
					}
				}
				
				// Check detail level
				scfc  = $( this ).find( '.subconsforcalc' );
				scfc2 = $( this ).find( '.subconsforcalc2' );
				if ( scfc.length ) {
					detailCons = scfc.val() + scfc.next().text();
					if ( scfc2.val() > 0 ) {
						detailCons += scfc2.val() + scfc2.next().text();
						detailCons = detailCons.replace( / /g, N );
					}
				}
				if ( Number( detailCons ) === 0 ) {
					detailCons = DH;
				}
				
				columns.eq( 1 )
					.append( '<div class="sheetproduct' + noColor + '">' + detailCons + ED );
				
				// Case auto Remove unwanted 'x' (consumption)
				sheetBoxCons = $( this ).find( '.consforcalc' ).val() + SP + $( this ).find( '.multiply' ).text();
				sheetBoxCons = sheetBoxCons.replace( ' x', N );
				// Case manual
				if ( $( this ).find( 'img' ).attr( 'data-calcmode' ) == 'manual' ) {
					sheetBoxPackNum   = parseInt( $( this ).find( '.boxpackagingNum' ).text() );
					sheetBoxPackVal   = dividedPackaging( $( this ).find( '.boxpackagingVal' ).text() );
					sheetBoxPackUnit  = SP + $( this ).find( '.multiply3' ).text().replace( ' x', N );
					sheetBoxPackTotal = sheetBoxPackNum * sheetBoxPackVal;
					sheetBoxCons      = sheetBoxPackTotal + sheetBoxPackUnit;
					sheetBoxCons += ' (' + sheetBoxPackNum + ' x ' + sheetBoxPackVal + sheetBoxPackUnit + ')';
				}
				
				// Retrieve prices and format them when needed
				sheetBoxUnitPrice = parseFloat( $( this ).find( '.unitprice' ).val() ).toFixed( 2 );
				if ( currencyPos == 'R' ) {
					sheetBoxUnitPrice += SPcurrency;
				} else {
					sheetBoxUnitPrice = SPcurrency + sheetBoxUnitPrice;
				}
				
				sheetBoxPrice      = $( this ).find( '.boxtotalprice' ).text();
				sheetBoxFinalPrice = $( this ).find( '.boxtotalprice' ).text();
				
				// Check if discount applies & free articles
				discountBox   = $( this ).find( '.discount' );
				discountClass = SP + 'nodiscount';
				if ( discountBox.length ) {
					if ( $( this ).parent().hasClass( 'catalogue' ) ) {
						discountClass = SP + 'greenbkg';
					} else {
						discountClass = SP + 'discountedbkg';
					}
					// Calculates discounted price and format it
					boxD = $( this ).find( '.boxdiscountprice' ).text();
					if ( currencyPos == 'R' ) {
						sheetBoxDiscount = parseFloat( boxD );
					} else {
						sheetBoxDiscount = parseFloat( boxD.substring( boxD.lastIndexOf( SP ) ) );
					}
					sheetBoxDiscountSum -= sheetBoxDiscount;
					
					if ( currencyPos == 'R' ) {
						sheetBoxFinalPrice = $( this ).data( 'discountedPrice' ) + SPcurrency;
					} else {
						sheetBoxFinalPrice = SPcurrency + $( this ).data( 'discountedPrice' );
					}
					sheetBoxDiscount = $( this ).find( '.discount' ).val() + ' %';
				} else {
					sheetBoxDiscount = DH;
				}
				
				// Display free when zero price
				if ( !Number( $( this ).data( 'discountedPrice' ) ) || parseInt( sheetBoxPrice ) == 0 ) {
					sheetBoxDiscount = freeText;
					// In case we have a freearticle with no discount
					if ( parseInt( sheetBoxPrice ) == 0 ) {
						sheetBoxDiscount = disposalText[ lang ].split( LI )[ 0 ];
						if ( $( this ).parent().hasClass( 'catalogue' ) ) {
							discountClass += SP + 'greenbkg font10';
						} else {
							discountClass += SP + 'discountedbkg font10';
						}
					}
				}
				
				// Retrieve cost per animal
				sheetBoxCostPerAnim = DH;
				if ( $( this ).data( 'rawCostPerAnimal' ) ) {
					sheetBoxCostPerAnim = $( this ).data( 'rawCostPerAnimal' ).toFixed( 2 );
					if ( currencyPos == 'R' ) {
						sheetBoxCostPerAnim += SPcurrency;
					} else {
						sheetBoxCostPerAnim = SPcurrency + sheetBoxCostPerAnim;
					}
				}
				
				columns.eq( 2 )
					.append( '<div class="sheetproduct">' + sheetBoxCostPerAnim + ED )
					.next()
					.append( '<div class="sheetproduct' + noColor + '">' + sheetBoxCons + ED )
					.next()
					.append( '<div class="sheetcalcprice">' + sheetBoxUnitPrice + ED )
					.next()
					.append( '<div class="sheetcalcprice">' + sheetBoxPrice + ED )
					.next()
					.append( '<div class="sheetcalcprice discountval' + discountClass + '">' + sheetBoxDiscount + ED )
					.next()
					.append( '<div class="sheetcalcprice">' + sheetBoxFinalPrice + ED );
				
			} );
			
			// Category total price
			columns.find( '.sheettotalprice' )
				.text( sheetCat.find( '.cattotalprice' ).text() );
			
		}
		
	} );
	
	var discount = $( '#estimates-wholecontainer' ).find( '.discountedbkg, .greenbkg' ).length;
	
	// Hide discount columnns when no discount applied & widen 2 columns
	targetColumns = $( '.discountedbkg, .nodiscount' ).parent();
	if ( !discount ) {
		ColumnToWiden = targetColumns.prev().prev().prev().prev();
		ColumnToWiden.css( 'width', ColumnToWiden.width() + targetColumns.width() );
		ColumnToWiden2 = ColumnToWiden.prev();
		ColumnToWiden2.css( 'width', ColumnToWiden2.width() + targetColumns.width() );
		targetColumns.hide().prev().hide();
	}
	
	// Hide discount info in categories without any discount
	targetColumns.each( function () {
		if ( $( this ).text().indexOf( '%' ) < 0 && $( this ).text().indexOf( sheetText[ 17 * langScope + lang ] ) < 0 && $( this ).text().indexOf( disposalText[ lang ].split( LI )[ 0 ] ) < 0 ) {
			$( this ).children().html( NBSP );
		}
	} );
	
	$( '#estimates-wholecontainer' ).find( '.discountval' ).each( function () {
		if ( $( this ).text() == disposalText[ lang ].split( LI )[ 0 ] ) {
			$( this ).text( disposalText[ lang ].split( LI )[ 1 ] ? disposalText[ lang ].split( LI )[ 1 ] : $( this ).text() );
		}
	} );
	
	// Handle raw price per animal column (Cost per animal option)
	
	// 1. Rearrange columns when no CPC at all
	targetColumn = $( '.sheetcostperanimBox' );
	
	if ( targetColumn.text().indexOf( currency ) < 0 || OptioncostDCM != 'true' ) {
		ColumnToWiden = targetColumn.next();
		ColumnToWiden.css( 'width', ColumnToWiden.width() + targetColumn.width() );
		targetColumn.hide();
	}
	// 2. Empty out only out of scope columns
	targetColumn.each( function () {
		if ( $( this ).text().indexOf( currency ) < 0 ) {
			$( this ).children().html( NBSP );
		}
	} );
	
	// Currency + positioning adjustment
	sheetBoxDiscountSum = sheetBoxDiscountSum.toFixed( 2 );
	if ( currencyPos == 'R' ) {
		sheetBoxDiscountSum += SPcurrency;
	} else {
		sheetBoxDiscountSum = SPcurrency + sheetBoxDiscountSum;
	}
	
	// Estimate total amount
	htmlX = N;
	if ( discount ) {
		htmlX += '<div class="sheetdiscountbox"><div class="sheetBoxSBTitle discounted">' + totaldiscountText[ lang ] + '</div><div class="sheettotalprice discounted">' + sheetBoxDiscountSum + ED + ED;
	}
	htmlX += clearBoth;
	htmlX += '<div class="sheettotalBox"><div class="sheetBoxSBTitle">' + grandtotalsumText[ lang ] + '</div><div class="sheettotalprice">' + $( '#estimatevalue' ).text() + ED + ED;
	htmlX += '<div class="sheetcminfo"><img src="' + imgFolder + SL + 'info.png" alt="info"><span/></div>';
	htmlX += '<div class="sheetccinfo"><img src="' + imgFolder + SL + 'info.png" alt="info"><span/></div>';
	htmlX += '<div class="sheetwaterinfo"><img src="' + imgFolder + SL + 'info.png" alt="info"><span/></div>';
	
	// Add the approval box if desired
	if ( Optionagreement == 'true' ) {
		htmlX += clearBoth + '<div id="sheetapproved-container"><div id="sheetapproved-good">' + sheetText[ lang + langScope * 20 ] + '</div><div id="sheetapproved-frame"><div id="sheetapproved-date">' + sheetText[ lang + langScope * 21 ] + '</div><div id="sheetapproved-sign">' + sheetText[ lang + langScope * 22 ] + '</div></div></div>';
	}
	
	$( '.estimateSheet' ).eq( $( '.sheetpage' ).length - 2 ).append( htmlX );
	
	// Global Costs (options)
	var GMilkText  = optiondetailsText[ 2 ][ 0 ].split( CO )[ 4 + lang ],
	    GMilkPrice = costPer1000L( totalSum ),
	    GDCMText   = optiondetailsText[ 2 ][ 2 ].split( CO )[ 4 + lang ].replace( '&S8', findAttributesInArray( animalType, animalAttributes )[ animalAttributes[ 0 ].split( CO ).length - langScope + lang ].split( LI )[ 0 ].toLowerCase() ),
	    GDCMPrice  = costPerAnimal( totalSum );
	
	if ( currencyPos == 'R' ) {
		if ( GMilkPrice ) {
			GMilkPrice += SPcurrency;
		}
		GDCMPrice += SPcurrency;
	} else {
		if ( GMilkPrice ) {
			GMilkPrice = SPcurrency + GMilkPrice;
		}
		GDCMPrice = SPcurrency + GDCMPrice;
	}
	
	$( '.sheetcminfo span' ).text( GMilkText + ': ' + GMilkPrice );
	if ( OptioncostGMilk != 'true' || !GMilkPrice ) {
		$( '.sheetcminfo' ).hide();
	}
	
	$( '.sheetccinfo span' ).text( GDCMText + ': ' + GDCMPrice );
	if ( OptioncostGDCM != 'true' ) {
		$( '.sheetccinfo' ).hide();
	}
	
	// Info water text (instructions for use)
	if ( !waterProd.length ) {
		$( '.sheetwaterinfo' ).hide();
	} else {
		waterProd = waterProd.slice( 0, -1 );
		$( '.sheetwaterinfo span' ).text( waterProd + (!lang ? SP : N) + ':' + SP + specialWindowsText[ lang + 17 * langScope ] ); // Remove space before ':' when french
	}
	
	// Remove discount line if no discount or free article
	if ( parseFloat( sheetBoxDiscountSum ) <= 0 ) {
		$( '.sheetdiscountbox' ).hide();
	}
	
	////////////////////////////
	// Create last page incl.
	// pics and descriptions
	////////////////////////////
	
	$( '.estimateSheet' ).eq( $( '.sheetpage' ).length - 1 )
		.append( '<img src="' + imgFolder + SL + App.toLowerCase() + '-logo.png" class="sheetApp"><div class="productoffering"/>' );
	$( '.productoffering' ).text( sheetText[ 14 * langScope + lang ] );
	
	var realProducts = $( '.estimateSheet' ).find( '.realproduct' );
	nbsheetProducts  = realProducts.length;
	
	// CSS selectors index i.e. 2 pics per line if too many products (14)
	indexCss   = (realProducts.length > 14) + 1;
	var nbProd = 0;
	
	for ( var i = 0; i < nbsheetProducts; i++ ) {
		if ( nbProd == 26 ) {
			break;
		} // Can't display more than 26 products
		for ( var j = 0; j < prodText.length; j += prodText.length / prodDataNumb ) {
			position = (prodText[ j ] == (realProducts.eq( i ).attr( 'data-productname' )));
			
			// Checks also if product already there
			if ( position ) {
				
				if ( $( '.sheetpicname' + indexCss ).text() == prodText[ j ] ) {
					
					// n categories addition
					duplicateProduct = $( '.sheetpicname' + indexCss + ':contains(' + prodText[ j ] + ')' );
					duplicate        = duplicateProduct.find( '.multipurpose' + indexCss ).length + 2;
					if ( duplicate == 2 ) {
						duplicateProduct
							.append( '<span class="multipurpose' + indexCss + '"></span>' );
					}
					duplicateProduct.find( '.multipurpose' + indexCss ).html( '&#x25c0;' + SP + duplicate + SP + sheetText[ 15 * langScope + lang ] );
					
				} else {
					
					nbProd++;
					url       = imgFolder + SL + prodText[ j + 6 ];
					biocideAS = N;
					if ( realProducts.eq( i ).find( 'span' ).text() ) {
						biocideAS = AS;
					}
					;
					$( '.estimateSheet' ).eq( $( '.sheetpage' ).length - 1 )
						.append( '<div class="sheetpic-container' + indexCss + '"><div class="sheetpicbgimg' + indexCss + '"/><img class="sheetpic' + indexCss + '" src="' + url + '"/><div class="sheetpicname' + indexCss + '">' + prodText[ j ] + biocideAS + '</div><div class="sheetpicdesc' + indexCss + '">' + prodText[ j + 7 ].split( LI )[ lang ] + ED + ED );
					
					// alternate background
					$( '.sheetpicbgimg' + indexCss + ':last' ).css( 'opacity', 1 * ($( '.sheetpic-container' + indexCss ).length % 2) );
					
				}
				
			}
		}
	}
	
	// Hide undefined logo & add version on App logo
	if ( !DistriblogoSrc || Optiondistriblogo == 'false' ) {
		$( '.sheetlogofooterDistrib' ).hide();
	}
	$( '.estimateSheet' ).append( '<div class="sheetVersion">' + versionShort + ED );
	
	// Only show biocidal phrases when needed
	if ( biocideCount ) {
		$( '#estimates-wholecontainer' ).find( '.sheetbiocide' ).show();
	}
	
}

function costPerAnimal( value ) {
	
	return (value / (dataAnimals * months)).toFixed( 2 );
	
}

function costPer1000L( value ) {
	
	// Retrieve value from info data box
	var milkProd = $( '#databox-subcont2' ).find( '.milkProd input' ).val();
	
	if ( milkProd ) {
		return (value / (dataAnimals * milkProd / 1000)).toFixed( 2 );
	}
	
}

function letMeSeeWhatsmissingInit( theevent, target, duration, pos ) {
	
	$( document ).on( 'click', theevent, function () {
		// Auto adjust vs tabs
		if ( theevent == '#estimatevalue' ) {
			pos = 110;
			if ( Optionstatictabs == 'true' ) {
				pos += $( '#fileTab-container' ).outerHeight();
			} // File tab menu 30px shift}
			$( target ).flash( 200, 8 );
		}
		scrollWindow( target, duration, pos, function () {
			playSound( 'warn' );
		} );
	} );
	
}

function letMeSeeWhatsSelected() {
	
	$( '#viewswitcher' ).on( 'click', function () {
		if ( !$( '.catbox', '#categories' ).length ) return;
		animateCategories();
	} );
	
}

function setCatMilkingType() {
	
	// Manual milking
	$( '#categories' ).find( '.udderbeforem, .clusters, .udderafterm, .internalcircuits' ).addClass( 'manual-m' );
	
	// Automatic milking
	$( '.robotic', '#categories' ).addClass( 'auto-m' );
	
}

function showHideSpecialCategories() {
	
	var containBoxes,
	    manualMCats = $( '.manual-m', '#categories' ),
	    autoMCats   = $( '.auto-m', '#categories' );
	
	// Gather all info
	updateData();
	
	// Hide/show the manual milking categories when no clusters
	if ( !dataClusters && !loadProcess ) {
		containBoxes = 0;
		manualMCats.each( function () {
			containBoxes += $( this ).find( '.catbox' ).length;
		} );
		if ( containBoxes ) {
			dataClusters = 1;
			updateDisplayData();
			showTopWarning( 13, null, 3700 );
		} else {
			manualMCats.addClass( 'notactive' );
			hideCategory( manualMCats, 350 * (!loadProcess) );
		}
	} else {
		manualMCats.removeClass( 'notactive' );
		if ( !$( '.restrictedview' ).length ) {
			showCategory( manualMCats, 350 * (!loadProcess) );
		}
	}
	
	// Hide/show robot category when no robot
	if ( !dataRobots && !loadProcess ) {
		containBoxes = 0;
		autoMCats.each( function () {
			containBoxes += $( this ).find( '.catbox' ).length;
		} );
		if ( containBoxes ) {
			dataRobots = 1;
			updateDisplayData();
			showTopWarning( 13, null, 3700 );
		} else {
			autoMCats.addClass( 'notactive' );
			hideCategory( autoMCats, 350 * (!loadProcess) );
		}
	} else {
		autoMCats.removeClass( 'notactive' );
		if ( !$( '.restrictedview' ).length ) {
			showCategory( autoMCats, 350 * (!loadProcess) );
		}
	}
	
}

function animateCategories( duration ) {
	
	duration = duration || 350 * (!loadProcess);
	
	$( '#viewswitcher' ).toggleClass( 'fullview' );
	
	$( '#categories' ).toggleClass( 'restrictedview' );
	
	$( '.cat', '#categories' ).each( function () {
		if ( !$( '.restrictedview' ).length ) {
			showCategory( $( this ), duration );
		} else {
			hideCategory( $( this ), duration );
		}
	} );
	
}

function showCategory( cat, duration ) {
	
	if ( !cat.data( 'emptycategory' ) && !cat.height() && !cat.hasClass( 'notactive' ) ) {
		cat.addClass( 'borderBottom' ).stop( 1, 1 ).animate( {
			minHeight: 170
		}, duration * (!loadProcess), function () {
			cat.css( 'height', 'auto' );
			switchCategory();
		} );
	}
	
}

function hideCategory( cat, duration, alwayshidecat ) {
	
	// alwayshidecat is used when no product is in the category
	
	if ( alwayshidecat ) {
		cat.data( 'emptycategory', true );
		$( '#categories' ).data( 'emptycatnumbers', $( '#categories' ).data( 'emptycatnumbers' ) + cat.index() + CO );
	}
	
	if ( cat.height() > 0 ) {
		if ( !cat.find( '.catbox' ).length ) {
			cat.removeClass( 'borderBottom' ).animate( {
				'min-height': 0,
				height:       0
			}, duration * (!loadProcess), function () {
				switchCategory();
			} );
		}
	}
	
}

function updateCaptionsUp() {
	
	var boxImg, caption, catType;
	
	$( '#slider-container' ).find( '.sliderImg' ).each( function () {
		boxImg  = $( this ).find( 'img' );
		catType = $( this ).closest( '.slider' ).attr( 'data-type' );
		caption = (boxImg.attr( 'data-caption' ) + N).split( CO )[ lang ]
		
		if ( catType.indexOf( 'udderbeforem' ) >= 0 || catType.indexOf( 'udderafterm' ) >= 0 ) {
			if ( caption.split( AS ).length > 1 ) {
				caption = caption.split( AS )[ 1 ];
			} else {
				$( this ).find( '.bx-caption-app' ).addClass( 'noopacity' );
			}
		}
		caption = caption = caption.split( AS )[ 0 ];
		
		$( this ).find( '.bx-caption-app' ).text( caption );
		$( this ).find( '.bx-caption-subtype' ).text( findAttributesInArray( boxImg.attr( 'data-subtype' ), subCatText )[ lang + 1 ] );
	} );
	
}

function updateABBxslider() {
	
	$( '.bx-AB', '#slider-container' ).text( ABText[ lang ] );
	
}

function mailBoxInit() {
	
	$( '#mailbox' ).on( 'click', toggleMailBox );
	
	$( '#sendmail' ).click( function () {
		if ( sendProcess || $( this ).hasClass( 'noselectpossible' ) ) {
			return;
		}
		$( '#mail' ).children().trigger( 'blur' );
		if ( $( '#mail .field-alert' ).length ) {
			return;
		}
		sendEmail( pdf );
	} );
	
	// Get rid of wrong paste text (E.g. Word)
	$( '#mail' )
		.find( '.nopaste' ).on( 'paste', function ( e ) {
		e.preventDefault();
	} ).end()
		.find( '.email' ).on( 'blur', function () {
		if ( $( this ).val() ) {
			validateContact( $( this ), true );
			// Optioncopycci: Copy mailFrom => mailCci
			if ( Optioncopycci == 'true' && $( this ).attr( 'id' ) == 'mailFrom' && !$( this ).hasClass( 'field-alert' ) ) {
				// Copy mailFrom => mailCCi
				$( '#mailCci' ).val( $( this ).val() );
			}
		} else {
			// Sender and recipient mails must be filled
			if ( $( this ).attr( 'id' ) == 'mailFrom' || $( this ).attr( 'id' ) == 'mailTo' ) {
				showTopWarning( 44, 200, 5000 );
				$( this ).addClass( 'field-alert' );
			} else {
				$( this ).removeClass( 'field-alert' );
			}
		}
	} );
	$( '#mailMessage' ).on( 'blur', function () {
		if ( !$( this ).val() ) {
			showTopWarning( 48, 200, 7000 );
			$( this ).addClass( 'field-alert' );
		} else {
			$( this ).removeClass( 'field-alert' );
		}
	} );
	
}

function updateMailToSource( email, flag ) {
	
	var firstCHR = LI;
	
	// We add the mail to dataMailsource
	if ( flag && dataMailsource.indexOf( email ) < 0 ) {
		
		// Do not add a | at the beginning
		if ( dataMailsource === N ) {
			firstCHR = N;
		}
		dataMailsource += firstCHR + email;
		
	}
	
	saveData( 'dataMailsource', dataMailsource );
	$( 'body' ).data( 'dataMailsource', dataMailsource );
	
}

function createPDF( todo ) {
	
	// As it takes some time, we disable App functions access
	$( '#UIintro-container' ).show();
	$( '#intro-text' ).hide();
	
	updateEstimate();
	$( '#estimates-wholecontainer' ).show().addClass( 'posForPDF' );
	
	// Strange positioning bug with estimate page elements
	if ( isEdge ) {
		window.scrollTo( 0, 0 );
	}
	
	var readyToGo  = true,
	    sheetToPDF = $( '.estimate-maincontainer' ),
	    page       = 0,
	    scale      = 2 - 0.4 * (OptionlowresPDF === 'true'),
	    maxPage    = sheetToPDF.length,
	    dimRatio   = 0.0495, // W/L & X/Y Ratio between HTML and PDF pos/size
	    // New logo
	    imgLogoKE  = headerPNG64 + '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',
		imgLogoSanicoopa = headerPNG64 + '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';
	    imgLogoEC  = headerPNG64 + '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'
		imgAttach = headerPNG64 + 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAC3klEQVR42u2bD0QsURTGD7EsEbEsERExRARiiUfEgkcEYomIJR54RAQiEBGBiEdEPCIiAktELBFLRMQSscQS27mcyzh75s3Mtq+9f+bjE93595s7c+6Zc+8CZMqUyVANo3+ij9C36Ca6g66jr9Gb6GkXwfPoDfQrAcf5Ej3rCvwE9XCnB2/aDl9K0etRPkEP2QrfEoCa1LNldJG2VYCL6EP0h7DPgSvwhxQI/6XJiFdmyXb43ymDZo3t/4zO+QCvVRDiR8Vk+Lk+wmv9EoZHb+CVRllQfDfxNSj9J3itG3bcwCd4pTN27JKN8KP0/s64cgPSwt+GkqC0N6Fu2ivQK3w4E0wKUTQtCH4VvkOfvfmE59sR9rUa/ioFfCCcrzJI+Pdv7HmVBTbY/o1BfRUOAl76GFr2GX7PZ/iLiEe/5Au8dIwDal/3GV672k/4ecvglV/oWryFD3yGnxoE/J2v8AXX4H/4DD8NAG++PvYj6Edf4ZWOIdkkpHPRXmd50nSVF/BAAOET1IQSk7PwM8JJ+CKEYVfhpfraqbDNqavwIPRsmbWXXYbPCeXlfEx8uHEFHujAPPjx3CB8g9opLsZ4eGn4O2Pts0L52hl46Qb8Ye1zCQKktfBSD1+w9gnWfu8SvE5uwid/ELZ5YtusugKvxdfbjLP2XdbeEqquqn7QsBEeoHuevSo8JdKixiYNiRK4NfBKK9A915YTiiQfkHwVpzXwOs/nRZC1iDJZkuWtewAwZAu81ja7sFchFujEaIsSpnZo+zcaIqNWchsNr5+CZ3aBdYifWAgSQBgPr7UgvOcN6P2HCuqmntsCr7UhXHCL/p9mDU6Zkiar4LX2I4LbE9UIo6acigBQge7FzOH9jYfXqsYMey9UR6jR34eYkeEK+jRR+Z1SY/8jfO1XHW3KJK38ZYcumKxTj6cBV0/PEX1MOaEcBbZ94eMoHCz/UhI1Bh6oQIlPAJkyZcpkgT4BbOCsS0z9zPEAAAAASUVORK5CYII=',
		imgCCInfo = headerPNG64 + 'iVBORw0KGgoAAAANSUhEUgAAANIAAADSAQMAAAAFVwwBAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAhFJREFUeF7t101qxDAMBWAbL7L0EXyUOVp8tBwlR8jSCxOVQsur/EbKJIShhWpnPmL0ROZH4YbKIt2gJCLSntv8aVKf0SRiPvgQsR6MXyQbW/623ehEXcpXiqzUJYzyF5hwcNRCCVArDQXVjHRIqAdmJARQM1HbRsmNZrK2zlNB0VSMRgHUaARQo2m0piKYjebRdp4mSkUwQwAoRGRbOQIHnNiaY53jccDCJhydA86OASg8onN4WItj+ISLMPU2Rq+I0/hbIKvB6POkB6PuSYM90BvyCFsYBjMjr2+zHhqij5eEqOzxim16nPVVa+OofStq2Jme8wzDLkfG+STgdGT0U4DTemBi2KZsUacWQnQswVYY3k9YhAkGCOPPA95WhJiVJZA0HJRRNd+mu637lu+2/bqVd5ocm37nYY8/b/XX27+Ft1v5LbZft3y3dd+m9xh+O+62zbd4xVbfwhVb2K6e6B/SWcMWcMr2I8vnrWOTOWXt05Jj8blthmEpOWE44HjCKvYHMuwkp2zHnkPWrbURlp5Zc2w73vGCZzOTLI5VZ0919tvd2Yv7K/t0cvbw6OzvwYiOgBTdCliDHTAEBOQIZsAGSxwBZUdACI7AISAUYodQo/2nJW4TRW2ajdZgNwOgiXZtiVtBUSvGZOpgmaaCSpwcBVvICqfjcTe2gCu5CrqkiuiSqyAc16wC0OAqwK8PbrnhKHceM1gAAAAASUVORK5CYII=';
	
	pdf = new jsPDF();
	
	PDFfilename = getUrlFriendly( filename[ sessionIndex ].replace( fileExt, N ) );
	
	$( '.sheetApp, .sheetlogofooterAG, .sheetVersion, .sheetpicinfo img, .sheetcminfo img, .sheetccinfo img' ).css( 'visibility', 'hidden' );
	
	timer20 = setInterval( function () {
		
		if ( readyToGo ) {
			
			readyToGo = false;
			
			// Show only page to 'PDF' (canvas size optimization)
			sheetToPDF.hide().eq( page ).show();
			
			html2canvas( sheetToPDF.eq( page ), {
				scale:       scale,
				width:       1250,
				height:      1750,
				whenCreated: function ( canvas ) {
					
					canvas = canvas[ 0 ];
					pdf
						.addImage( canvas.toDataURL( 'image/png', 1 - 0.25 * (OptionlowresPDF === 'true') ), 'PNG', 0, 0, 50.48, 70.77, null, 'FAST' );
					
					swapPDFimage( '.sheetApp', 0, sheetToPDF.eq( page ), imgLogoEC, dimRatio );
					if (productRangeDB == 30) {
						swapPDFimage( '.sheetlogofooterAG', 0, sheetToPDF.eq( page ), imgLogoSanicoopa, dimRatio );
					} else {
						swapPDFimage( '.sheetlogofooterAG', 0, sheetToPDF.eq( page ), imgLogoKE, dimRatio );
					}
					swapPDFimage( '.sheetpicinfo img', 0, sheetToPDF.eq( page ), imgAttach, dimRatio );
					if ( $( '.sheetccinfo' ).isVisible() ) {
						swapPDFimage( '.sheetccinfo img', 0, sheetToPDF.eq( page ), imgCCInfo, dimRatio );
					}
					if ( $( '.sheetcminfo' ).isVisible() ) {
						swapPDFimage( '.sheetcminfo img', 0, sheetToPDF.eq( page ), imgCCInfo, dimRatio );
					}
					
					page++;
					
					// Add version
					pdf
						.setFontSize( 4.6 )
						.setTextColor( 255, 255, 255 )
						.text( 44.62, 4.95 - 0.495 * (page == maxPage), versionShort );
					
					if ( page == maxPage ) {
						
						recreateProductImg( sheetToPDF, page, dimRatio );
						
						// Hiding the estimate
						$( '#estimates-wholecontainer' ).hide();
						
						clearInterval( timer20 );
						
						pdf.setProperties( {
							title:    'Estimation',
							author:   Company,
							subject:  "Budget produits d'hygiène" + SP + Company,
							keywords: marginCurve.productE( encodeURI( myData.replace( /\r\n/gi, 'å' ).replace( /\n/gi, 'ÿ' ) ) ), // Keywords field used for encoded file → easy to recover in PDF properties
							creator:  App + SP + versionShort + SP + DH + SP + myBrowser + SP + $.browser.version,
							custom1:  N // And so on till custom10
						} );
						pdf.setDisplayMode( '100%', null ); // 100% zoom (instead of full page) + thumbs displayed
						
						// Generate the final result
						$( '#UIintro-container' ).hide();
						if ( todo == 'mail' ) {
							pdf = pdf.output( 'rawPDF64' );
						}
						if ( todo == 'save' ) {
							$( '#save' ).addClass( 'pdfready' ).click();
							return;
						}
						
						$( '#mailFile' ).text( PDFfilename + '.pdf' + SP + '(' + bytesToSize( pdf.length * 0.75 ) + ')' ).removeClass( 'nobkgimage' );
						$( '#mailSpinner' ).hide();
						if ( Ic == 'I' ) {
							$( '#sendmail' ).addClass( 'hoverwhite' ).removeClass( 'noselectpossible' );
						}
						
					} else {
						pdf.addPage();
						readyToGo = true;
					}
					
				}
				
			} );
			
		}
		
	}, 100 );
	
}

function swapPDFimage( el, index, sheet, b64data, rat, format, forcewidth, forceheight ) {
	
	format = format || 'JPEG';
	
	var targetEl = sheet.find( el ).eq( index );
	
	if ( targetEl.length ) {
		var x = targetEl.offset().left - sheet.offset().left,
		    y = targetEl.offset().top - sheet.offset().top,
		    w = forcewidth || $( el ).width(),
		    h = forceheight || $( el ).height();
		pdf.addImage( b64data, format, x * rat, y * rat, w * rat, h * rat, null, 'SLOW' );
	}
	
}

function recreateProductImg( sheetToPDF, page, dimRatio ) {
	
	if ( !$( 'body' ).data( 'cors-Img-OK' ) ) {
		
		$( '.sheetpic1, .sheetpic2' ).each( function ( index ) {
			
			var productDB,
			    imgName,
			    imgNameSRC = $( this ).css( 'visibility', 'hidden' )[ 0 ].src.replace( imgFolder.replace('./', N) + SL, N ).replace( smallImgExt, N ),
			    imgData,
			    imgClass   = $( this ).attr( 'class' );
			
			imgNameSRC = imgNameSRC.substring( window.location.href.indexOf( 'Easycalc/' ) + 9);
			
			for ( var i = 0; i < imgProduct.length; i++ ) {
				productDB = imgProduct[ i ];
				imgName   = productDB.substr( 0, productDB.indexOf( CO ) );
				imgName   = imgName.substring( 29 );
				if ( imgNameSRC == imgName ) {
					imgData = productDB.substring( productDB.indexOf( CO ) + 1 );
					swapPDFimage( PO + imgClass, index, sheetToPDF.eq( page - 1 ), headerPNG64 + imgData, dimRatio, 'PNG' );
				}
			}
			
		} );
	}
	
}

function sendEmail( pdf ) {
	
	sendProcess = true;
	var mailTesta,
	    mailTestb;
	
	// Remove possible ';' at the end
	$( '#mail' ).find( '.email' ).each( function () {
		mailTesta = $( this ).val().length - 1;
		mailTestb = $( this ).val().substring( mailTesta );
		if ( mailTestb == ';' ) {
			$( this ).val( $( this ).val().substr( 0, mailTesta ) );
		}
	} );
	
	$( '#mail input, #mailFile, #mailMessage' ).attr( 'disabled', true ).addClass( 'disabledInput' );
	$( '#sendmail' ).removeClass( 'hoverwhite' ).addClass( 'noselectpossible' );
	hideMailBox( 800, null, 1000 );
	
	ajaxCORS();
	
	//http://www.soslignes-ecrivain-public.fr/00_mail-easycalcAG.php
	var url           = marginCurve.productD( 'aWG0nSfmA8o8oy3zb8CjaLolOMBkOLCyaMOsaL2knWKtbVcuAdOyAzPwM71saLwkOLUzpLCsbVCQGy3waWP=' ),
	    progress      = $( '#sendmailprogress-container' ),
	    progressWidth = progress.width();
	
	$( '#sendmailbytesinfo' ).text( mailText[ 13 ].split( CO )[ lang ] );
	$( '.sendmailInfo' ).slideDown( 200 );
	
	$.ajax( {
		xhr:     function () {
			xhr = new window.XMLHttpRequest();
			// Upload progressbar
			xhr.upload.addEventListener( 'progress', function ( e ) {
				if ( e.lengthComputable ) {
					var percent = e.loaded / e.total;
					$( '#sendmailprogress' ).width( (0.02 + percent) * progressWidth );
					$( '#sendmailbytesinfo' ).text( '(' + bytesToSize( e.loaded ) + SP + mailText[ 11 ].split( CO )[ lang ] + SP + bytesToSize( e.total ) + ')' );
					colorProgressBar( $( '#sendmailprogress' ), percent * 100, '#F83881', '#74CCE4', '#A7D100' );
					if ( percent == 1 ) {
						$( '.sendmailInfo' ).slideUp( 200 );
					}
				}
			}, false );
			return xhr;
		},
		url:     url,
		type:    'POST',
		data:    {
			lang:        languages[ lang ],
			senderTitle: btoa( $( '#mailTitle' ).val() ),
			mailFrom:    $( '#mailFrom' ).val(),
			mailTo:      $( '#mailTo' ).val(),
			mailCc:      $( '#mailCc' ).val(),
			mailCci:     $( '#mailCci' ).val(),
			mailSubject: btoa( $( '#mailSubject' ).val() ),
			range:       productRangeDB,
			attachment:  pdf,
			fileName:    PDFfilename,
			message:     btoa( $( '#mailMessage' ).val().replace( /\n/gi, BR ) ),
			estimData:   btoa( encodeURI( myData ) ),
			OKmsg:       mailText[ 1 ].split( CO )[ lang ],
			errmsg:      mailText[ 2 ].split( CO )[ lang ] + CL + SP
		},
		success: function ( message ) {
			var OK = (message == mailText[ 1 ].split( CO )[ lang ]);
			showTopWarning( message, 200, 3000 + (!OK * 5000), null, 1200 );
			// Sending OK? Then clear all fields
			if ( OK ) {
				$( '#mail input, #mailMessage' ).val( N );
			}
			console.log( message );
			closureSendMail();
		},
		error:   function ( xhr, textStatus, error ) {
			showTopWarning( mailText[ 2 ].split( CO )[ lang ] );
			console.log( xhr.statusText + SP + textStatus + SP + error );
			closureSendMail();
		}
	} );
	
}

function closureSendMail() {
	
	$( '#sendmailprogress' ).width( 0 );
	$( '.sendmailInfo' ).slideUp( 200 );
	sendProcess = false;
	
}

function toggleMailBox() {
	
	if ( $( '#mail' ).isVisible() ) {
		hideMailBox();
	} else {
		if ( $( '#mailbox' ).css( 'opacity' ) < 1 ) {
			return;
		}
		// Flash send text (no mail can be sent while sending another one)
		if ( sendProcess ) {
			$( '#sendmailtextinfo' ).flash( 100, 7 );
			return;
		}
		showMailBox();
	}
}

function showMailBox() {
	
	// No Internet or CORS
	if ( Ic != 'I' ) {
		showTopWarning( 43, 200, 5000 );
		return;
	}
	if ( $( 'body' ).data( 'cors-dl-OK' ) !== true ) {
		showTopWarning( 46, 200, 8000 );
		return;
	}
	
	// Reduce window size to optimize (reduce) further canvas size
	if ( !$( '#viewswitcher' ).hasClass( 'fullview' ) ) {
		$( '#viewswitcher' ).click();
	}
	
	// Is there a CORS issue (Chrome)?
	detectCrossOriginFailure();
	
	// Hide other elements
	hideTopWarning();
	hideSearch();
	hideSliderMonth();
	
	// Show PDF resized warning
	if ( OptionlowresPDF == 'true' ) {
		$( '#pdfwarning' ).show();
	} else {
		$( '#pdfwarning' ).hide();
	}
	
	$( '#mailFile' ).text( N ).addClass( 'nobkgimage' );
	$( '#sendmail' ).removeClass( 'hoverwhite' ).addClass( 'noselectpossible' );
	$( '#mail input, #mailFile, #mailMessage' ).attr( 'disabled', false ).removeClass( 'disabledInput' );
	
	$( '#mailFrom' ).val( dataMail );
	
	if ( Optioncopycci == 'true' ) {
		$( '#mailCci' ).attr( 'readonly', true ).addClass( 'disabledInput' ).val( $( '#mailFrom' ).val() );
	} else {
		$( '#mailCci' ).attr( 'readonly', false ).removeClass( 'disabledInput' );
	}
	
	// Retrieve values from the contact container
	if ( !$( '.made' ).hasClass( 'noinputvalue' ) ) {
		$( '#mailTitle' ).val( $( '.made' ).val() );
	}
	if ( !$( '.mail' ).hasClass( 'noinputvalue' ) && !$( '.mail' ).hasClass( 'field-alert' ) ) {
		$( '#mailTo' ).val( $( '.mail' ).val() );
	}
	
	if ( previewProcess ) {
		$( '#exit' ).click();
	}
	
	$( '#topWidget' ).data( 'width', $( '#topWidget' ).width() )
		.animate( {
			'width': 600
		}, 200, function () {
			$( '#mail' )
				.slideDown( 300, function () {
					// Show info message
					$( '#mailFile' ).text( warningText[ 46 * langScope + lang ] );
					$( '#mailSpinner' ).show();
					recordHistory( 46 );
					setTimeout( createPDF( 'mail' ), 300 );
				} );
		} );
	
	// Remove alert-fields
	$( '#mail' ).children().removeClass( 'field-alert' );
	
	mailProcess = true;
	sendProcess = false;
	
}

function hideMailBox( duration, topwidgetWidth, delay ) {
	
	if ( !$( '#mail' ).isVisible() ) {
		return;
	}
	
	duration = duration || 200;
	delay    = delay || 100;
	
	// Remove mail warning messages
	if ( '44,23,48'.indexOf( warningType ) >= 0 ) {
		hideTopWarning( 300 );
	}
	
	topwidgetWidth = topwidgetWidth || $( '#topWidget' ).data( 'width' );
	
	// Do not change width if preview process after mailbox opened
	if ( previewProcess ) {
		widthTW = 'auto';
	}
	
	$( '.completer-container' ).hide();
	
	// Record user mail only if correct
	if ( !$( '#mailFrom' ).hasClass( 'field-alert' ) ) {
		dataMail = $( '#mailFrom' ).val();
	} else {
		dataMail = N;
	}
	dataMailsource = dataMailsource.replace( LI + LI, LI );
	
	timer12 = setTimeout( function () {
		$( '#mail' ).slideUp( duration, function () {
			$( '#topWidget' ).animate( {
				'width': topwidgetWidth
			}, duration, function () {
				$( this ).css( 'width', 'auto' );
				$( '#sendmail' )
					.removeClass( 'noselectpossible' )
					.addClass( 'hoverwhite' );
			} );
		} );
	}, delay );
	
	mailProcess = false;
	
}

function getUrlFriendly( str ) {
	
	return str.replace( / /g, DH ).replace( /[^A-Za-z0-9-]/g, N ).replace( /[-]+/g, DH );
	
}

function bytesToSize( bytes, dec ) {
	
	var e = Math.floor( Math.log( bytes ) / Math.log( 1024 ) ),
	    f = (bytes / Math.pow( 1024, e ));
	f     = f.toFixed( (e == 2) * (!dec) ) + SP + ' KMGTP'.charAt( e ) + mailText[ 10 ].split( CO )[ lang ];
	return f.replace( PO, CO );
}

function removeDuplicates( list ) {
	
	var result = [];
	$.each( list, function ( i, e ) {
		if ( $.inArray( e, result ) == -1 ) result.push( e );
	} );
	return result;
}

$.fn.nextInDOM = function ( target ) {
	
	var ref = $( this ).last(),
	    set = $( target ).add( ref ),
	    pos = set.index( ref );
	
	if ( set.length == pos ) return $();
	return set.eq( pos + 1 );
	
};

$.fn.prevInDOM = function ( target ) {
	
	var ref = $( this ).first(),
	    set = $( target ).add( ref ),
	    pos = set.index( ref );
	
	if ( set.length == pos ) return $();
	return set.eq( pos - 1 );
	
};

function SAPFormat( num, size ) {
	
	size = size || 6;
	
	var s = num + N;
	while ( s.length < size ) s = '0' + s;
	
	return s;
}

Number.prototype.formatNumb = function ( n, x, s, c ) {
	
	//	n: length of decimal
	//	x: length of whole part
	//	s: sections delimiter
	//	c: decimal delimiter
	
	x = x || 3;
	s = s || SP;
	
	var re  = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
	    num = this.toFixed( Math.max( 0, ~~n ) );
	return (c ? num.replace( '.', c ) : num).replace( new RegExp( re, 'g' ), '$&' + (s || ',') );
};

$.fn.triggerAll = function ( e, params ) {
	
	var el = this, i;
	e      = e.split( SP );
	for ( i = 0; i < e.length; i++ ) {
		el.trigger( e[ i ], params );
	}
	return el;
	
};

function searchBoxInit() {
	
	$( '#searchbox' ).keyup( function () {
		
		var htmlX       = N,
		    searchDesc,
		    resultImg,
		    minChar     = 1,
		    searchLimit = 5,
		    searchMenu;
		
		clearTimeout( timer5 );
		itemSearched = removeDiacritics( $( this ).val() ).toUpperCase(); // All in uppercase to avoid unfound elements
		if ( itemSearched == oldItemSearched ) {
			return;
		}
		
		$( this ).removeClass( 'field-alert field-default' );
		results = 0;
		
		// minimum CHR$
		if ( itemSearched.length <= minChar ) {
			clearSearchResults();
			return;
		}
		
		// Case: products
		for ( var j = 0; j < prodText.length; j += prodText.length / prodDataNumb ) {
			position   = removeDiacritics( prodText[ j ] ).toUpperCase().indexOf( itemSearched );
			searchDesc = prodText[ j + 7 ].split( LI )[ lang ];
			if ( position < 0 ) {
				position = removeDiacritics( searchDesc ).toUpperCase().indexOf( itemSearched );
			}
			if ( position >= 0 && prodText[ j ] != hideProduct && prodText[ j + 14 ] != 'NAP' && prodText[ j + 12 ] != 'old' ) {
				results++;
				if ( results < searchLimit + 1 ) {
					if ( searchDesc.length > 30 ) {
						resultdesc = searchDesc.substr( 0, 40 );
						resultdesc = resultdesc.substr( 0, resultdesc.lastIndexOf( SP ) ) + '…';
					} else {
						resultdesc = searchDesc;
					}
					htmlX += '<div class="resultbox">';
					htmlX += '<img class="lightboxenabled resultProdImg" src="' + imgFolder + SL + prodText[ j + 6 ] + '" alt="' + prodText[ j ] + '" data-title="' + prodText[ j + 7 ] + '" data-old="' + prodText[ j + 12 ] + '"/>';
					htmlX += '<div class="resultProdName">' + prodText[ j ].split( SP ).slice( 0, 4 ).join( SP ) + ED;
					htmlX += '<div class="resultDesc">' + resultdesc + ED;
					htmlX += ED;
				}
			}
		}
		
		// Case: menus
		if ( results < searchLimit + 1 ) {
			for ( var k = 0; k < searchDirectText.length; k++ ) {
				searchMenu = searchDirectText[ k ].split( CO )[ lang + 1 ];
				position   = removeDiacritics( searchMenu ).toUpperCase().indexOf( itemSearched.toUpperCase() );
				if ( position >= 0 ) {
					results++;
					if ( results < searchLimit + 1 ) {
						resultdesc = searchMenu;
						resultImg  = imgFolder + SL + searchDirectText[ k ].split( CO )[ 0 ].substring( 1 );
						htmlX += '<div class="resultbox resultMenubox" data-target="' + searchDirectText[ k ].split( CO )[ 0 ] + '">';
						htmlX += '<img class="resultMenuImg" src="' + resultImg + '.png" />';
						htmlX += '<div class="resultMenuName">' + resultdesc.replace( MU, App ) + ED;
						htmlX += ED;
					}
				}
			}
		}
		
		// Show results (if different) or alert when nothing found
		if ( htmlX ) {
			if ( htmlX !== $( '#search-container' ).data( 'search' ) ) {
				clearSearchResults();
				$( '#search-container' ).append( htmlX ).data( 'search', htmlX );
				if ( results == 1 ) {
					$( '#search-container' ).find( '.resultbox' ).addClass( 'resultBkgHover' )
						.find( '.resultDesc' ).addClass( 'resultHover' );
				}
			}
		} else {
			clearSearchResults();
			$( this ).addClass( 'field-alert' );
		}
		if ( results > searchLimit ) {
			$( '#search-container' ).append( '<div id="exceed" style="display:none">' + searchresultsText[ lang ].replace( '&R', searchLimit ).replace( '&T', results ) + '<div>' );
		}
		
		$( '#search-container' )
			.children()
			.not( '#searchbox-container, #exceed' )
			.fadeIn( function () {
				if ( !$( '#exceed' ).isVisible() ) {
					$( '#exceed' ).slideDown( 300 );
				}
			} );
		
		oldItemSearched = itemSearched;
		
	} );
	
}

function clearSearchResults() {
	
	$( '#search-container' ).data( 'search', N ).children().not( '#searchbox-container' ).remove();
	
}

function searchInit() {
	
	$( '#search' ).on( 'click', function () {
		toggleSearch();
		hideMailBox();
		hideRightMenu();
	} );
	
	// (Start) searchbox functionnality
	searchBoxInit();
	
	// Focus when hover the input box
	$( document ).on( 'mouseover', '#searchbox', function () {
			$( this ).focus();
		} )
		// Direct acces to product via return key
		.on( 'keydown', function ( e ) {
			if ( e.keyCode === 13 && $( '.resultProdImg:hover' ).length ) {
				$( '.resultProdImg:hover' ).trigger( 'click' );
			}
		} );
	
	// Remove searchBox/results + sliderMonths on mouseout
	$( '#topWidget' )
		.on( 'mouseover', function () {
			disableMouseWheel();
			clearTimeout( timer5 );
		} )
		.on( 'mouseout', function () {
			if ( !loadProcess ) {
				enableMouseWheel();
			}
			// Do not leave if PDF is being created
			if ( $( '#UIintro-container' ).isVisible() ) {
				return;
			}
			timer5 = setTimeout( function () {
				$( '.monthsforbox', '#categories' ).html( months + ' M' );
				hideSearch();
				hideMailBox();
				hideSliderMonth();
			}, 1000 );
		} );
	
	menuSearchLinks();
	
}

function showSearch() {
	
	searchProcess = true;
	hideSliderMonth();
	hideAddtocart( 1 );
	$( '#search-container' ).data( 'running', true ).slideDown( 150 );
	$( '#searchbox' )
		.animate( {
			width: 300
		}, 150 )
		.removeClass( 'field-alert field-default' );
	
}

function hideSearch() {
	
	if ( !$( '#search-container' ).isVisible() ) {
		return;
	}
	
	$( '#search-container' ).data( 'running', false ).slideUp( 300 );
	$( '#searchbox' )
		.animate( {
			width: '30%'
		}, function () {
			$( this ).val( N ).blur();
			$( '#search-container' ).children().not( '#searchbox-container' ).remove();
			disableMouseWheel();
		} )
		.attr( 'type', 'text' );
	oldItemSearched = N;
	$( '#search-container' ).data( 'search', N );
	searchProcess = false;
	
}

function toggleSearch() {
	
	if ( $( '#search-container' ).isVisible() ) {
		hideSearch();
	} else {
		showSearch();
	}
}

function showSliderMonth() {
	
	hideAddtocart( 1 );
	$( '#month-slider-container' ).slideDown( 300 );
	leftBarOffset = $( '#month-slider' ).offset().left;
	updateMonths( months * 10 );
	
}

function hideSliderMonth( duration ) {
	
	if ( !$( '#month-slider-container' ).isVisible() ) {
		return;
	}
	duration = duration || 300;
	
	$( '#month-slider-container' ).slideUp( duration );
	
	fullCalc();
	
}

function changePeriod() {
	
	$( '#calendar' ).on( 'click', function () {
		hideMailBox();
		hideSearch();
		
		if ( !$( '#month-slider-container' ).isVisible() ) {
			showSliderMonth();
		} else {
			hideSliderMonth();
		}
	} );
	
}

function dragBarAdjust() {
	
	$( '#barvalue' )
		.css( 'width', months * 10 )
		.next()
		.css( 'left', -12 + months * 10 );
	
}

function dragBarInit() {
	
	dragBarAdjust();
	
	leftBarOffset = $( '#month-slider' ).offset().left;
	
	$( '#month-slider-container' )
		.on( 'mousedown', function ( e ) {
			previousMonths = months;
			mouseDown      = 1;
			e.originalEvent.preventDefault(); // stop el pointer cursor from changing into text cursor (Chrome)
		} )
		.on( 'mouseup', function () {
			mouseDown = 0;
			if ( $( this ).css( 'cursor' ) != 'pointer' ) {
				return;
			}
			$( '#bardrag' )
				.stop( 1, 1 ).animate( { left: stepPointerX - 12 }, 100 );
			$( '#calendar' ).flash( 200 );
			
			// Flash period on the sheet when preview mode
			if ( previewProcess ) {
				setTimeout( function () {
					monthschanged = $( '.sheetperiod, .periodTitle' ).addClass( 'C-green' );
					monthschanged.flash( 200, 6, function () {
						monthschanged.removeClass( 'C-green' );
					} );
				}, 200 );
			}
			
			$( '.monthsforbox', '#categories' ).html( months + ' M' );
			$( '.udderbeforem .subconsforcalc2, .udderafterm .subconsforcalc2' ).each( function () {
				if ( $( this ).val() == previousMonths ) {
					$( this ).val( months );
				}
			} );
			fullCalc();
		} )
		.mousemove( function ( e ) {
			if ( !$( this ).isVisible() ) {
				return;
			}
			pointerX = e.pageX - leftBarOffset;
			dragBar();
		} );
	
}

function dragBar() {
	
	if ( $( '#month-slider-container', '#topWidget' ).css( 'cursor' ) != 'pointer' || !mouseDown ) {
		return;
	}
	if ( pointerX > 242 ) {
		pointerX = 242;
	}
	if ( pointerX < 12 ) {
		pointerX = 12;
	}
	updateMonths( pointerX );
	
	$( '#barvalue' )
		.css( 'width', stepPointerX )
		.next()
		.css( 'left', pointerX - 14 );
}

function updateMonths( pointerX ) {
	months       = Math.round( pointerX / 10 );
	stepPointerX = months * 10;
	
	updateCalendar();
	
	$( '#months' )
		.text( months + SP + monthsinfoText[ lang ] )
		.stop( 1, 1 )
		.animate( { left: stepPointerX - ($( '#months' ).width() / 2) - 4 }, 200 * (!loadProcess) );
	
}

function updateCalendar() {
	$( '#calendarmonths' ).text( months );
}

function menuSearchLinks() {
	
	$( document )
		.on( 'click', '.resultMenubox', function () {
			$( $( this ).attr( 'data-target' ) ).click();
			hideSearch();
		} );
	
}

function lightbox() {
	
	$( document )
		.on( 'click', '#close-lightbox, #lightbox-container', function () {
			if ( !demoProcess && !mosaicProdProcess ) {
				//$(document).off('keyup');
				enableMouseWheel();
			}
			$( '#lightbox-container' ).fadeOut( function () {
				$( '#YouTube' ).hide();
				hideLightboxCartDetail( 0 );
			} );
		} )
		.on( 'click', '.lightbox', function ( e ) { // Prevent close on lightbox click
			if ( $( e.target ).is( 'img' ) && $( '#lightbox-cartdetail' ).isVisible() ) {
				hideLightboxCartDetail();
			}
			e.stopPropagation();
		} )
		.on( 'click', '.lightboxenabled', function () {
			
			var lightboxImg = $( '#lightbox-container' ).find( 'img' );
			
			hideSearch();
			hideMailBox();
			$( '.lightbox', '#lightbox-container' )
				.show()
				.css( {
					opacity: 0,
					width:   '130%',
					left:    '5%'
				} );
			
			// change desktop product box color
			if ( mosaicProdProcess ) {
				$( this ).parent().css( 'background', '#A300AB' )
					.find( '.mosaicProdBox-check, .mosaic-packaging' ).css( 'background', '#93009B' );
			}
			
			// Inactivate mouse wheel and remove file test scripts (body)
			disableMouseWheel();
			removeFileScripts( 2000 );
			
			// Check if the image is a product one
			
			if ( $( this ).attr( 'data-title' ) ) {
				
				position = $.inArray( this.alt, prodText );
				
				$( '#lightbox-desc, #lightbox-title, #lightbox-subimage' ).removeClass( 'notdisplayed' );
				
				if ( position > -1 ) {
					var srcLB = imgFolder + SL + prodText[ position + 6 ].split( smallImgExt )[ 0 ] + jpg;
					lightboxImg
						.removeClass( 'lightbox-normal' )
						.attr( 'data-doc', prodText[ position + 5 ] )
						.attr( 'data-youtube', youtubeLink( prodText[ position + 15 ] ) )
						.attr( 'src', srcLB );
				}
				
				// Set attributes
				$( '#lightbox-title' ).html( this.alt ).removeClass( 'lightbox-logoname' );
				$( '#lightbox-desc' ).removeClass( 'notdisplayed' ) // Remove logo desc positioning
					.html( $( this ).attr( 'data-title' ).split( LI )[ lang ] );
				
				// Set URL to docs
				var docURL = lightboxImg.attr( 'data-doc' );
				if ( !docURL ) {
					$( '#FT' ).hide();
				} else {
					$( '#FT' ).show().attr( 'href', FPHeaderLink[ docURL.split( CO )[ 0 ] ] + docURL.split( CO )[ 1 ] );
				}
				$( '#DOCFDS' ).attr( 'href', DOCFDSLink );
				
				// Check if a video exists and show/hide button accordingly
				var urlPart = lightboxImg.attr( 'data-youtube' );
				if ( urlPart ) {
					$( '#YouTube' ).show().attr( 'href', youTubeURL + urlPart );
				} else {
					$( '#YouTube' ).hide();
				}
				
			} else {
				
				// Logo
				if ( !$( '#rightmenulogoImg' ).isVisible() ) {
					showTopWarning( '?' + warningText[ 11 * langScope + lang ].split( BR )[ 0 ], 350, 4500 );
					return;
				}
				
				lightboxImg
					.attr( 'src', this.src )
					.addClass( 'lightbox-normal' );
				
				$( '#FT, #DOCFDS' ).hide();
				$( '#lightbox-desc, #lightbox-title, #lightbox-subimage' ).addClass( 'notdisplayed' );
				
				// No title and show "My logo"
				// $('#lightbox-title').addClass('lightbox-logoname') // logo desc positioning
				// .html(rightmenuText[2*langScope+lang]);
				
			}
			
			// Product is cartable?
			findProductSliders( $( '#lightbox-title' ).text() );
			
			// Show/hide 'new' circle
			$( '#lightbox-AB' ).css( 'opacity', ($( this ).attr( 'data-AB' ) == 'AB') * 1 );
			$( '#lightbox-old' ).css( 'opacity', ($( this ).attr( 'data-old' ) == 'old') * 1 );
			
			// Open lightbox and adapt to window size
			$( '#lightbox-container' ).fadeIn();
			lightboxResize();
			
		} )
		.on( 'click', '#lightbox-cart', function ( e ) {
			// Show/hide cart detail
			var myButton    = $( e.target ),
			    productname = $( '#lightbox-title' ).text();
			if ( myButton.is( '#lightbox-cart' ) ) {
				if ( !$( '#lightbox-cartdetail' ).isVisible() ) {
					showLightboxCartDetail();
				} else {
					hideLightboxCartDetail();
				}
			} else {
				var cartCont = myButton.closest( '.catCart-container' );
				category     = cartCont.data( 'cat' );
				$( '.slider' ).eq( category ).find( 'img[alt="' + productname + '"]' ).addProduct();
				// Update check/packagings status when mosaic mode
				if ( mosaicProdProcess ) {
					$( '#Mosaic-subcontainer' ).find( 'img[alt="' + productname + '"]' ).parent()
						.find( '.mosaicProdBox-check' ).removeClass( 'notdisplayed' )
						.prev().hide();
				}
				// Unhide category if restricted view
				showCategory( $( '#categories' ).find( '.cat' ).eq( category ), 350 );
				if ( cartCont.hasClass( 'catCart-container-grey' ) ) {
					cartCont.find( '.catCart-icon' ).ShakeIt();
					return;
				}
				cartCont.removeClass( 'fasttransition' ).slideUp( function () {
					findProductSliders( productname, 400 );
				} );
			}
			
		} );
	
}

function showLightboxCartDetail() {
	
	$( '#lightbox-cart' ).removeClass( 'lightboxlink' );
	$( '#lightbox-cartdetail' ).fadeIn( 300 );
	
}

function hideLightboxCartDetail( duration ) {
	
	duration = duration || 300;
	
	$( '#lightbox-cartdetail' ).fadeOut( duration, function () {
		$( '#lightbox-cart' ).addClass( 'lightboxlink' );
	} );
	
}

function lightboxResize() {
	
	var LBelements  = $( '#lightbox-title, #lightbox-desc' ),
	    LBcarticons = $( '#lightbox-container' ).find( '.catCart-icon' );
	
	browserWHeight = $( window ).height();
	if ( browserWHeight > $( window ).width() * 0.7 ) {
		browserWHeight = $( window ).width() * 0.7;
	}
	
	// Elements to hide when small window
	if ( browserWHeight > 600 ) {
		LBelements.removeClass( 'hide' );
		LBcarticons.removeClass( 'notdisplayed' );
	} else {
		LBelements.addClass( 'hide' );
		LBcarticons.addClass( 'notdisplayed' );
	}
	
	$( '#lightbox-container' ).find( '.lightbox' ).stop( 1, 1 ).animate( {
		width:   browserWHeight,
		opacity: 1,
		left:    '10%'
	}, 500 );
	
}

function scrollWindow( position, duration, delta, callback ) {
	
	if ( loadProcess || diagProcess ) {
		return;
	}
	
	$( '#backtotop' ).off( 'click' );
	
	position = position || 0;
	duration = duration || 400;
	delta    = delta || 0;
	
	// In case the targeted position is an ID or class
	if ( isNaN( position ) ) {
		position = $( position ).offset().top;
	}
	
	$( 'html, body' ).animate( {
		scrollTop: position - delta
	}, duration * (!loadProcess), function () {
		BottomWidgetsInit();
		if ( callback && typeof (callback) == 'function' ) {
			callback();
		}
	} );
	
}

function scrollToCategory( duration ) {
	
	duration = duration || 250;
	
	$( '.titlecat, .selectproduct', '#categories' ).on( 'click', function () {
		
		switchCategory();
		
		category        = $( this ).closest( '.cat' ).index();
		var catPosition = $( '.titlecat', '#categories' ).eq( category ).offset().top - $( window ).height();
		
		scrollWindow( catPosition, duration, -394 );
		
		if ( sliderVisible ) {
			hideSlider();
			showOpenSlider();
			if ( currCat == category ) {
				return;
			}
		}
		currCat = category;
		showSlider();
		timerHideSlider( 4000 );
		
	} );
	
}

$.fn.flash = function ( duration, times, callback ) {
	
	if ( loadProcess ) {
		return;
	}
	
	$( this ).stop( 1, 1 );
	
	times = times || 1;
	if ( times == -1 ) {
		times = 10000;
	}
	for ( var i = 0; i < times; i++ ) {
		$( this ).animate( {
			opacity: 0.3
		}, duration ).animate( {
			opacity: 1
		}, duration );
	}
	setTimeout( function () {
		if ( callback && typeof (callback) == 'function' ) {
			callback();
		}
	}, duration * times * 2 );
	
};

function switchCategory() {
	
	var categ        = $( '#categories' ).find( '.cat' ),
	    bottomSlider = parseInt( $( '.slider', '#slider-container' ).eq( 0 ).css( 'bottom' ), 10 );
	
	// Do not choose a disabled category
	category = categ.not( '.notdisplayed' ).not( '.hidden' ).filter( '.borderBottom' ).first().index();
	
	categ.each( function ( index ) {
		// Do not take into account hidden categories
		if ( $( this ).is( '.notdisplayed, .hidden' ) ) return true;
		var sliderTop = $( '.slider', '#slider-container' ).eq( currCat - 1 ).offset().top;
		if ( sliderTop - $( this ).offset().top > 90 - bottomSlider ) {
			category = index;
		}
	} );
	
	// greying the non active 'select' text
	$( '.selectproduct', '#categories' ).css( { opacity: 0.2 } )
		.eq( category ).css( { opacity: 1 } );
	// Adjusting the open slider icon color depending on the curr category
	var catcolor = $( '.titlecat', '#categories' ).eq( category ).css( 'backgroundColor' );
	$( '#open-slider' ).css( 'backgroundColor', catcolor );
	
}

function setElementsColors() {
	
	// Set selectproduct and caption color
	
	$( '.selectproduct', '#categories' ).each( function ( index ) {
		var catcolor = $( '.titlecat', '#categories' ).eq( index ).css( 'backgroundColor' );
		$( this ).css( 'background', catcolor );
		$( '.slider', '#slider-container' ).eq( index )
			.find( '.bx-caption' ).css( 'backgroundColor', catcolor ).end()
			.find( '.bx-caption-app' ).css( 'color', catcolor ).end()
			.find( '.hide-slider' ).css( 'backgroundColor', catcolor );
	} );
	
}

function topWidgetBounce( delay, duration ) {
	
	delay    = delay || 1;
	duration = duration || 350;
	
	showOpenSlider();
	
	setTimeout( function () {
		$( '#topWidget-container' )
			.animate( {
				top:   24,
				queue: true
			}, duration, function () {
				if ( Optionproductrange === undefined ) {
					goModule();
				}
				startFileManagement();
				showFilename();
				enableMouseWheel();
			} )
			.animate( {
				top:   18,
				queue: true
			}, duration / 1.5 )
			.animate( {
				top: 20
			}, duration / 3, function () {
				if ( Optionproductrange ) {
					sayHello();
				}
				resetProcess = 'false';
				saveData( 'resetProcess', resetProcess );
				// Prevent these elements from flashing on start
				$( '#backtotop' ).css( 'right', 30 );
				$( '#gotobottom' ).animate( { right: 30 }, 250 );
				$( '#small-data-widget' ).css( 'left', 30 );
				
				// Check if product-img.js file is consistent with current range
				if ( imgProduct.length < prodDataNumb ) {
					showTopWarning( "?Le fichier 'product-img.js' nécessite une mise à jour…", null, null, null, null, 1500 );
				}
				$( '#slider-container' ).removeClass( 'outofscreen' );
			} );
	}, delay );
	
}

function startFileManagement() {
	
	////////////////////////////////////////////////
	// Create the first 'no product' reference file
	////////////////////////////////////////////////
	
	createFile();
	updateOptions();
	
	/////////////////////////////////////////
	// Check if the application closed well
	/////////////////////////////////////////
	
	if ( backupData ) {
		
		// Insert backup file at the first position (redo-undo)
		unredoData[ 0 ].unshift( backupData );
		unredoEnable();
		
		// Show tip info for backing up data
		showTopWarning( 18, null, 7000 );
		
		timer14 = setTimeout( function () {
			
			// Flashing undo icon
			$( '#undo' ).flash( 100, 20 );
			
		}, 2000 );
	}
	
}

function wastebinShow( box, pond ) {
	
	var boxCat = box.parent();
	if ( boxCat.find( '.catbox' ).length >= 2 + pond ) {
		boxCat.find( '.wastebin' ).show();
	} else {
		boxCat.find( '.wastebin' ).hide();
	}
}

function timerHideSlider( duration ) {
	
	duration = duration || delayTimer3;
	
	clearTimeout( timer3 );
	timer3 = setTimeout( function () {
		showOpenSlider();
		hideSlider();
	}, duration );
	
}

function showOpenSlider() {
	
	$( '#open-slider' ).css( 'opacity', 1 ).show();
	
}

function hideOpenSlider() {
	
	$( '#open-slider' ).css( 'opacity', 0 ).hideOnDelay( 300 );
	
}

function showSlider() {
	
	var itemsHere = $( '.slider', '#slider-container' ).eq( currCat ).find( '.sliderImg:visible' ).length;
	
	currCat = category;
	
	if ( itemsHere ) {
		hideOpenSlider();
		$( '.slider', '#slider-container' ).eq( currCat ).css( 'bottom', 0 );
		sliderVisible = 1;
	} else {
		showTopWarning( 55, null, 6000 );
	}
	
}

function hideSlider() {
	
	$( '.slider', '#slider-container' ).css( 'bottom', -260 );
	sliderVisible = 0;
	
}

function showHideSliderInit() {
	
	$( '#open-slider' ).on( 'mouseover click', function () {
		clearTimeout( timer3 );
		hideRightMenu();
		showSlider();
	} );
	
	$( '#slider-container' ).on( 'mouseover', function () {
		clearTimeout( timer3 );
	} ).on( 'mouseout', function ( e ) {
		timerHideSlider( e.hasOwnProperty( 'originalEvent' ) ? undefined : 1 );
	} );
	$( '#slider-container' ).find( '.hide-slider' ).on( 'click', function () {
		hideSlider();
	} );
}

function preventCloseWindow() {
	
	window.onbeforeunload = function ( e ) {
		console.log( 'onbeforeunload' );
		if ( debugClose ) {
			debugger;
		}
		let message = windowCloseText[ lang ];
		clearInterval( timer11 );
		saveOptionData();
		
		var tA = twinsArray( sessionQuitOK );
		var pR = Optionproductrange == productRangeDB;
		
		if ( debugClose || (!tA && pR && !forceClose) ) {
			
			backupDataInit();
			if ( isApp ) {
				//display message
				e.preventDefault();
				e.stopImmediatePropagation();
				displayClosePopup( message );
				return true;
			} else {
				return message;
			}
		}
	}
}

function displayClosePopup( message ) {
	var labelOk     = closePopupText[ 'labelOk' ][ language ];
	var labelCancel = closePopupText[ 'labelCancel' ][ language ];
	var title       = closePopupText[ 'title' ][ language ];
	var html        = `
<div id="closePopup" class="closePopup">
    <div id="closePopupContainer" class="closePopupContainer">
        <div id="closePopupTitle" class="closePopupTitle">${title}</div>
        <div id="closePopupContent" class="closePopupContent">
            <div id="closePopupContentMessage" class="closePopupMessage">
                <p>${message}</p>
            </div>
        </div>
        <div id="closePopupContentActions" class="closePopupActionBar">
            <div id="closePopupContentActionsOk" class="closePopupAction Ok" onclick="forceExit()">${labelOk}</div>
            <div id="closePopupContentActionsCancel" class="closePopupAction Cancel" onclick="closeClosePopup()">${labelCancel}</div>
        </div>
    </div>
</div>
`.trim();
	$( 'body' ).append( html );
}

function closeClosePopup() {
	$( '#closePopup' ).remove();
}

function forceExit() {
	forceClose = true;
	closeClosePopup();
	var remote = require( 'electron' ).remote;
	remote.getCurrentWindow().close();
}

function parameterSetInit() {
	
	resetDataboxInit();
	
	$( '#databox-container' )
		.find( '.databox' ).on( 'mouseenter', function () {
			$( this ).find( '.controls' ).css( 'right', 5 );
		} )
		.on( 'mouseleave', function () {
			$( this ).find( '.controls' ).css( 'right', -40 );
		} )
		.find( '.pluscontrol, .lesscontrol' ).on( 'mousedown', function () {
			target       = $( this ).closest( '.databox' ).find( 'span' );
			var index    = 4 * (target.parent().index()),
			    valuemin = databoxValue[ animal ][ 0 + index ],
			    valuemax = databoxValue[ animal ][ 2 + index ],
			    incplus  = databoxValue[ animal ][ 3 + index ],
			    incmax   = incplus * 10,
			    incless  = -incplus,
			    value    = parseInt( target.text() );
			
			if ( $( this ).closest( '.databox' ).hasClass( 'animals' ) ) {
				resetVolumeCalc();
			}
			
			if ( $( this ).hasClass( 'pluscontrol' ) ) {
				inc = incplus * (value != valuemax);
			} else {
				inc = incless * (value != valuemin);
			}
			
			if ( inc !== 0 ) {
				value += inc;
				target.text( value );
				timer1 = setInterval( function () {
					if ( value + inc < valuemin ) {
						value = valuemin;
					}
					if ( value + inc > valuemax ) {
						value = valuemax;
					}
					if ( value != valuemin && value != valuemax ) {
						value += inc;
					} else {
						clearInterval( timer1 );
					}
					target.text( value );
				}, 200 );
				timer2 = setTimeout( function () {
					if ( inc > 0 ) {
						inc   = incmax;
						value = Math.round( Math.ceil( value / incmax ) * incmax );
					} else {
						inc   = -incmax;
						value = Math.round( Math.floor( value / incmax ) * incmax );
					}
				}, 1800 );
			}
			noDataBoxItem(); // Greying when value equals zero
		} )
		.on( 'mouseup', function () {
			target.flash( 150 );
			showHideSpecialCategories();
			clearTimeout( timer7 );
			timer7 = setTimeout( function () {
				fullCalc();
			}, 200 );
			clearInterval( timer1 );
			clearTimeout( timer2 );
			updateDisplayData(); // for small data widget
		} )
		.on( 'mouseout', function () {
			fullCalc();
			clearInterval( timer1 );
			clearTimeout( timer2 );
			updateDisplayData(); // for small data widget
		} );
	
}

function updateData() {
	
	var databoxCont = $( '#databox-container' );
	
	// Installation data
	dataAnimals  = Number( databoxCont.find( '.databox.animals span' ).text() );
	dataClusters = Number( databoxCont.find( '.databox.teatcups span' ).text() );
	dataRobots   = Number( databoxCont.find( '.databox.robot span' ).text() );
	dataTank     = Number( databoxCont.find( '.databox.tank span' ).text() );
	
	// Options data
	// Nice use of $.globalEval
	var OptionsContainer = '#rightmenu-container';
	
	if ( FSOptionsProcess ) {
		OptionsContainer = '#fullscreenoptions';
	}
	
	$( '.rightmenuOptionCheck input', OptionsContainer ).each( function () {
		optionName  = $( this ).attr( 'name' );
		optionVar   = 'Option' + optionName;
		optionValue = '.rightmenuOptionCheck input[name="' + optionName + '"]';
		optionValue = '"' + $( optionValue ).is( ':checked' ) + '"'; // i.e. "true" and not true
		$.globalEval( optionVar + '=' + optionValue + ';' );
	} );
	
}

function updateDisplayData() {
	
	var otherInfoData = $( '#databox-subcont2 .otherdata' ).find( 'input' );
	
	$( '.databox.animals span', '#databox-container' ).text( dataAnimals );
	$( '.databox.teatcups span', '#databox-container' ).text( dataClusters );
	$( '.databox.robot span', '#databox-container' ).text( dataRobots );
	$( '.databox.tank span', '#databox-container' ).text( dataTank );
	$( '#animal-widget' ).find( '.small-data-qty' ).html( 'x' + NBSP + dataAnimals );
	$( '#teatcups-widget' ).find( '.small-data-qty' ).html( 'x' + NBSP + dataClusters );
	$( '#robot-widget' ).find( '.small-data-qty' ).html( 'x' + NBSP + dataRobots );
	$( '#tank-widget' ).find( '.small-data-qty' ).html( dataTank );
	
	$( '#prod-widget' ).find( 'span' ).eq( 1 ).html( NBSP + CL + NBSP + otherInfoData.eq( 0 ).val() );
	$( '#heifers-widget' ).find( 'span' ).eq( 1 ).html( NBSP + CL + NBSP + otherInfoData.eq( 1 ).val() );
	$( '#calving-widget' ).find( 'span' ).eq( 1 ).html( NBSP + CL + NBSP + otherInfoData.eq( 2 ).val() );
	$( '#grass-widget' ).find( 'span' ).eq( 1 ).html( NBSP + CL + NBSP + otherInfoData.eq( 3 ).val() );
	$( '#corn-widget' ).find( 'span' ).eq( 1 ).html( NBSP + CL + NBSP + otherInfoData.eq( 4 ).val() );
	
	/// small-data-widget
	SmallDataLayout();
	
}

function SmallDataLayout() {
	
	// Hide items with 0 value (main data)
	$( '#small-data-widget' ).find( '.small-data-qty' ).each( function () {
		$( this ).parent().removeClass( 'notdisplayed' );
		if ( $( this ).html().indexOf( NBSP + '0' ) > 0 ) {
			$( this ).parent().addClass( 'notdisplayed' );
		}
	} );
	
	// Hide items with 0 value (other data)
	$( '#small-data-widget' ).find( '.small-otherdata' ).each( function () {
		$( this ).removeClass( 'notdisplayed' );
		if ( $( this ).find( 'span' ).eq( 1 ).text().length == 3 ) {
			$( this ).addClass( 'notdisplayed' );
		}
	} );
	
}

function updateDateField() {
	
	// Option date check
	if ( Optiondate == 'true' ) {
		$( '.dpselected', '#contact-container' ).click();
		$( '.contactdate', '#contact-container' ).removeClass( 'noinputvalue' );
	}
	
}

function updateVendorFields() {
	
	if ( dataUser ) {
		
		dataUserSplitted = dataUser.split( '¶' );
		
		if ( dataUserSplitted.length < 2 ) {
			return;
		}
		
		// Checking that the text is not a default one (both fields)
		if ( $.inArray( dataUserSplitted[ 0 ], contactdefaultText ) < 0 && dataUserSplitted[ 0 ] ) {
			$( '.made', '#contact-container' ).val( dataUserSplitted[ 0 ] ).removeClass( 'noinputvalue' );
		}
		if ( $.inArray( dataUserSplitted[ 1 ], contactdefaultText ) < 0 && dataUserSplitted[ 1 ] ) {
			$( '.vendor', '#contact-container' ).val( dataUserSplitted[ 1 ] ).removeClass( 'noinputvalue' );
			
		}
		
	}
	
}

function sayHello() {
	
	retrieveDateTime();
	
	if ( !backupData && hello && hello != dataDay ) {
		timerChronos = -2;
		hello        = dataDay;
		saveData( 'hello', dataDay );
		showTopWarning( 20, null, 6000 );
	}
	
}

function santaInit() {
	
	if ( dataMonth == 12 && dataDay > 14 && dataDay <= 31 ) {
		$( '#santa' ).show();
	}
	
}

function noDataBoxItem() {
	
	$( '.databox', '#databox-container' ).each( function () {
		if ( $( this ).text() == '0' ) {
			$( this ).addClass( 'grey' );
		} else {
			$( this ).removeClass( 'grey' );
		}
	} );
	
}

$.fn.autoAdjustInputs = function () {
	
	$( this ).find( '.consforcalc, .subconsforcalc, .subconsforcalc2, .subconsforcalc4, .unitprice' ).autoGrowInputHor();
	
};

function removeZeros( numb ) {
	
	return (Number( numb.toString() ));
	
}

function retrieveDateTime() {
	
	var d     = new Date();
	dataDay   = d.getDate();
	dataYear  = d.getFullYear();
	dataMonth = d.getMonth() + 1;
	dataHour  = d.getHours();
	dataMin   = d.getMinutes();
	dataSec   = d.getSeconds();
	
	dataDate    = dataDay + SL + (dataMonth < 10 ? '0' : N) + dataMonth + SL + dataYear;
	dataRawDate = d.toLocaleDateString();
	
	if ( dataHour == 24 ) {
		dataHour = '00';
	}
	if ( dataMin < 10 ) {
		dataMin = '0' + dataMin;
	}
	if ( dataSec < 10 ) {
		dataSec = '0' + dataSec;
	}
	dataTime  = dataHour + DH + dataMin + DH + dataSec;
	dataTimeF = dataHour + 'h' + dataMin + SP + dataSec + 's'
	
	return d;
	
}

function intro() {
	
	// First when document ready
	
	if ( !testVersion() ) {
		if ( windowLoaded ) {
			splashMosaicIntro( 'Version de test expirée' );
			return;
		} else {
			return;
		}
	}
	
	if ( !windowLoaded ) {
		if ( Optionskipintro == 'true' || resetProcess == 'true' ) {
			$( '#UIcontainer' ).hide();
		}
		
		// Then when window loaded
		
	} else if ( Optionskipintro != 'true' && resetProcess != 'true' ) {
		splashMosaicIntro();
	} else {
		topWidgetBounce( 300 );
	}
	
}

function splashMosaicIntro( message, special ) {
	
	if ( message ) {
		$( '#intro-text' ).text( message );
	}
	
	var splash          = $( '#splash-container' ).hide(),
	    widthB,
	    heightB,
	    moveBoxLeft,
	    moveBoxTop,
	    idx             = 0,
	    boxFamily       = [],
	    boxCols         = 5,								// number of cols for boxes
	    boxRows         = 4,								// number of rows for boxes
	    splashDelay     = 400,						// Splash start delay
	    animTime        = 500,							// animation duration
	    animDelay       = 2600,							// Mosaïc start delay
	    moveScopeWidth  = $( window ).width(),		// Width max pixels move for boxes
	    moveScopeHeight = $( window ).height(),		// Width max pixels move for boxes
	    finalOpacity    = 0.5,						// adjust here opacity slope
	    boxWidth        = Math.round( splash.width() / boxCols );
	boxHeight           = Math.round( splash.height() / boxRows );
	
	$( '#UIintro-container, #intro-text' ).show();
	
	setTimeout( function () {
		
		// Create all boxes that will explode
		
		for ( var rows = 0; rows < boxRows; rows++ ) {
			
			heightB = boxHeight;
			if ( rows == boxRows - 1 ) {
				heightB = splash.height() - heightB * rows;
			}
			
			for ( var cols = 0; cols < boxCols; cols++ ) {
				
				widthB = boxWidth;
				if ( cols == boxCols - 1 ) {
					widthB = splash.width() - widthB * cols;
				}
				
				imagePos = DH + cols * boxWidth + 'px ' + DH + rows * boxHeight + 'px';
				
				splash.append( $( '<div class="intro-boxes"/>' ).css( {
					width:              widthB,
					height:             heightB,
					left:               cols * boxWidth,
					top:                rows * boxHeight,
					backgroundPosition: imagePos
				} ) );
				boxFamily[ idx ] = idx;
				idx++;
			}
		}
		
		// Random box sort
		randomize( boxFamily );
		
		// Display splash image
		splash.fadeIn( animTime );
		
		// Make the boxes explode only if not a test version
		
		if ( message ) {
			$( '#intro-text' ).flash( 400, -1 );
			return;
		}
		
		setTimeout( function () {
			
			$( '#UIcontainer' ).fadeOut( animTime * 2 );
			$( '#intro-text' ).fadeOut( animTime / 3 );
			
			var blow = setInterval( function () {
				idx--;
				moveBoxLeft = moveScopeWidth * (0.5 - Math.random());
				moveBoxTop  = moveScopeHeight * (0.5 - Math.random());
				$( '.intro-boxes', '#UIintro-container' )
					.eq( boxFamily[ idx ] )
					.animate( {
						marginTop:  moveBoxTop,
						marginLeft: moveBoxLeft,
						opacity:    finalOpacity,
						width:      0,
						height:     0,
						'queue':    false
					}, animTime * 1.3 );
				
				if ( !idx ) {
					
					// All boxes are blown
					
					clearInterval( blow );
					
					// Show top widget
					if ( !special ) {
						topWidgetBounce( 400 );
					}
					
					// Safe delay for removing all boxes
					// and their container
					
					setTimeout( function () {
						
						$( '#UIintro-container' )
							.hide()
							.find( '.intro-boxes' )
							.remove();
						
					}, 700 );
				}
				
			}, animTime / (2 * boxFamily.length) );
			
		}, animDelay + animTime + ((special !== undefined) * 3000) );
		
	}, splashDelay * (special === undefined) );
	
}

function randomize( series ) {
	
	for ( var s, t, u = series.length; u; s = parseInt( u * Math.random() ), t = series[ --u ], series[ u ] = series[ s ], series[ s ] = t ) ;
	
}

function twinsArray( myArray ) {
	
	// Cheks if all elements of an array (myArray) === true
	return myArray.reduce( function ( a, b ) {
		return (b === true) ? a : false;
	} );
	
}

function mosaicInit() {
	
	$( document ).on( 'click', '#mosaicprod, #mosaiccreate', function () {
		mosaic( $( this ).attr( 'id' ).replace( 'mosaic', N ) );
	} );
	
	$( document ).on( 'click', '.mosaic-packaging-container', function () {
		$( this ).prevInDOM( '.lightboxenabled' ).click();
	} );
	
}

function newEstimate() {
	
	// Store current username and company
	var dataUserBackup = dataUser;
	
	newProcess = true;
	
	resetAll();
	
	// If option user true, set back username and company
	if ( Optionuser == 'true' ) {
		dataUser = dataUserBackup;
	}
	updateVendorFields();
	
	// Same thing for the date
	updateDateField();
	
	// Same thing for period
	if ( Optionmonths != 'true' ) {
		months = 12;
		updateMonths( months * 10 );
		dragBarAdjust();
	}
	
	adjustLayout();
	fullCalc();
	switchCategory(); // Rearrange cat select buttons
	
	newProcess = false;
	
}

function resetAppInit() {
	
	$( document )
		.on( 'click', '#rightmenu-container .dialogBox .yes', function () {
			resetApp();
		} );
	
}

function checkWindowWidth( value ) {
	
	value = value || 1030;
	return ($( window ).width() > value);
	
}

function priceListInit() {
	
	$( document ).on( 'click', '#priceList', function () {
		
		if ( Optionpwdprices == 'true' ) {
			goSpecial = this.id;
			goModule();
		} else {
			if ( !$( '.priceBox' ).length ) {
				createPriceList();
			}
			setTimeout( setPrices, 100 );
		}
		
	} );
	
}

function historyInit() {
	
	$( document ).on( 'click', '#history', function () {
		history();
	} );
	
}

function history() {
	
	historyProcess = true;
	currentScroll  = $( document ).scrollTop();
	
	hideRightMenu()
	showTopWarning( 7 )
	setTimeout( function () {
		
		$( '#main-container' ).hide();
		
		// Relocate top warning
		$( '#top-warning' ).insertBefore( $( '#History-subcontainer' ) ).css( 'position', 'fixed' );
		
		// Back to top
		scrollWindow( 1, 1 );
		$( '#History-container' ).show();
		$( '#History-mask' )
			.fadeOut( function () {
				$( '#History-widget' ).css( 'right', 0 );
				$( '#topWidget' ).addClass( 'notdisplayed' );
				$( '#gotobottom' ).addClass( 'gotobottomhistory' );
			} );
		
		// Start events
		$( '#close-History' ).on( 'click', function () {
				closeHistory();
			} )
			.next()
			.on( 'click', function ( e ) {
				if ( e.hasOwnProperty( 'originalEvent' ) ) {
					$( this ).flash( 100 );
				}
				createHistoryBoxes();
				$( '#backtotop' ).click();
			} )
			.next()
			.on( 'click', function () {
				if ( showConfirm( dialogText[ 2 ].split( CO )[ lang ] ) ) {
					saveData( 'history', N );
					closeHistory( 1 ); // 1 is for restart
				}
			} );
		
		// Hide estimate content
		$( '#estimates-wholecontainer' ).hide().removeClass( 'posForPDF' );
		
		// The story begins
		createHistoryBoxes();
		$( 'body' ).addClass( 'historyBkg' );
		hideTopWarning()
		
	}, 700 )
	
}

function createHistoryBoxes() {
	
	var htmlX,
	    htmlY = N,
	    h     = 'history',
	    wholeInfo,
	    today = retrieveDateTime(),
	    message,
	    messInd,
	    messDate,
	    day,
	    oldDay;
	
	// Remove all
	$( '#HistoryTitle' ).next().nextAll().remove();
	
	if ( loadData( h ) ) {
		
		for ( var i = 0; i < loadData( h ).split( RO ).length; i++ ) {
			
			wholeInfo = loadData( h ).split( RO )[ loadData( h ).split( RO ).length - 1 - i ];
			
			if ( wholeInfo ) {
				
				//////////////////////////////////////////////////////////
				// Handle message and retrieve only this from wholeInfo
				//////////////////////////////////////////////////////////
				
				message = wholeInfo.split( HA )[ 1 ];
				
				if ( !isNaN( message ) ) {
					message = warningText[ (message - 1) * langScope + lang ];
				}
				
				messInd = 'none';
				if ( message.substr( 0, 1 ) == '!' ) {
					messInd = '#FFC5C5';
				}
				if ( message.substr( 0, 1 ) == '?' ) {
					messInd = '#E2FF5D';
				}
				
				if ( '!?'.indexOf( message.substr( 0, 1 ) ) >= 0 ) {
					message = message.substring( 1 );
				}
				
				message = message.replace( MU, App );
				
				// Creating a new box
				htmlX = '<div class="historyBoxInd" style="background:' + messInd + '"/><div class="historyBox"><div class="historyBoxMess">' + message;
				
				//////////////////////////////////////////////////////////
				// Handle date/time and retrieve only this from wholeInfo
				//////////////////////////////////////////////////////////
				
				wholeInfo = wholeInfo.split( HA )[ 0 ];
				messDate  = wholeInfo.substr( 0, wholeInfo.lastIndexOf( SL ) + 5 );
				
				var y            = messDate.substr( messDate.lastIndexOf( SL ) + 1, 4 ),
				    m            = messDate.substring( messDate.indexOf( SL ) + 1, messDate.lastIndexOf( SL ) ),
				    d            = messDate.substr( 0, messDate.indexOf( SL ) ),
				    saveMessDate = messDate,
				    messTime     = (wholeInfo.substring( wholeInfo.indexOf( DH ) + 1, wholeInfo.length - 3 )).replace( DH, CL );
				
				messDate = new Date( parseInt( y ), parseInt( m - 1 ), parseInt( d - 1 ) );
				
				day = datepickerdayText[ lang ].split( CO )[ messDate.getDay() ];
				
				// Display friendly date message (today, yesterday…)
				var dayDiff = Math.floor( -1 + (today - messDate) / 86400000 ); // 24 x 3600 x 1000 ms
				if ( !dayDiff ) {
					day = datepickerdayText[ lang + langScope ];
				}
				if ( dayDiff == 1 ) {
					day = datepickerdayText[ lang + 2 * langScope ];
				}
				if ( dayDiff > 6 ) {
					day      = datepickerdayText[ lang + 3 * langScope ];
					messTime = saveMessDate;
				}
				
				// Capitalize only first letter and add if a day change
				day = day[ 0 ].toUpperCase() + day.slice( 1 );
				
				if ( oldDay != day ) {
					htmlX = '<div class="historyWhen">' + day + ED + clearBoth + htmlX;
				}
				
				htmlX += '</div><div class="historyDate">' + messTime + '<div class="historyNumber">' + (i + 1) + '</div></div></div>';
				htmlY += htmlX;
				
				oldDay = day;
				
			}
			
		}
		
		$( '#History-subcontainer' ).append( htmlY );
		$( '#clear-History' ).slideDown( 300 );
		
	} else {
		
		$( '#History-subcontainer' ).append( '<div id="History-info">' + specialWindowsText[ lang + 9 * langScope ] + ED );
		$( '#clear-History' ).slideUp( 300 );
		
	}
	
}

function closeHistory( restart ) {
	
	// Unbind all events
	$( '#History-widget' ).children().off();
	
	if ( !restart ) {
		$( '#History-widget' ).hide();
	}
	$( '#History-container' ).fadeOut( 200, function () {
		
		historyProcess = false;
		
		hideTopWarning( 1 );
		
		$( '#History-mask' ).show();
		
		if ( restart ) {
			history();
			return;
		}
		
		$( '#History-widget' ).css( 'right', -60 ).show();
		
		// Reposition top warning and show topwidget (hidden due to clear function)
		$( '#top-warning' ).insertBefore( $( '#topmenu' ) ).css( 'position', 'relative' );
		$( '#topWidget' ).removeClass( 'notdisplayed' );
		
		$( '#main-container' ).fadeIn( 600, function () {
			$( 'body' ).removeClass( 'historyBkg' );
		} );
		
		$( '#gotobottom' ).removeClass( 'gotobottomhistory' );
		
		setTimeout( function () {
			scrollWindow( currentScroll, 1 );
		}, 10 );
		
	} );
	
}

function demoTourInit() {
	
	$( document ).on( 'click', '#estimate-demo', function () {
		
		// Window must be wide enough otherwise display message
		if ( checkWindowWidth() && animalType == 'cow' ) {
			
			// Stop Internet check
			clearInterval( timerInternet );
			
			// Memorize scroll position
			currentScrollDP = $( document ).scrollTop();
			
			hideAddtocart( 1 );
			$( '#topWidget-container' ).fadeOut( 200 );
			$( '#main-container' ).fadeOut( 300, function () {
				
				$( '#Demo-container' ).off( 'click' ).on( 'click', function () {
					endDemoTour( 'exit' );
				} );
				demoTour();
				$( '#main-container' ).fadeIn();
				$( '#topWidget-container' ).fadeIn( function () {
					showTopWarning( 26, 350, 3200, null, 200 );
				} );
				
			} );
		} else {
			var error = (animalType != 'cow') ? 51 : 30;
			showTopWarning( error, 200, 5000 );
		}
		
	} );
	
}

function demoTour() {
	
	$demoCircle           = $( '#demo-circle' );
	$demoContainer        = $( '#Demo-container' );
	$demoTooltipContainer = $( '#Demo-tooltip-container' );
	$demoInfo             = $( '#topDemoInfo' );
	timeouts              = [];
	var xDemo             = $( window ).width() / 2,
	    yDemo             = $( window ).height() / 2,
	    wDemo             = $demoCircle.width(),
	    hDemo             = $demoCircle.height(),
	    singleAction,
	    demoAction        = [],
	    demoTimer         = [],
	    demoTargetTooltip = N,
	    oldDemoTargetTooltip,
	    $oldDemoTarget,
	    demoMoveSpeed     = 500,
	    demoStep          = 0,
	    pushStep          = 0,
	    timer             = 0,
	    doNotMove,
	    demoTextIndex     = 0,
	    speedDemo         = 1 + 0.6 * (Optionspeeddemo == 'true');
	
	// Starts the process
	demoProcess = true;
	$demoInfo.show();
	
	// Quit demo if no more focus on window to avoid behaviour troubles
	//$(window).blur(function() {
	//	endDemoTour('exit');
	//});
	
	disableMouseWheel();
	
	// Save current estimation
	saveData( 'backupData', newfileData[ sessionIndex ] );
	
	// Records current unredo array length
	oldUnredoData[ sessionIndex ] = unredoData[ sessionIndex ].slice( 0 );
	
	// In case there was a backup timer running
	clearTimeout( timer14 );
	
	// Clear all
	resetAll();
	fullCalc();
	
	// Pre-empty date field to make the change visible
	$( '.contactdate', '#contact-container' ).val( N ).blur();
	
	// Use a background as a mask and remove persistent tooltip
	$demoContainer.show();
	removeTooltip();
	
	$demoCircle.css( {
		opacity: 0,
		display: 'block',
		left:    xDemo - wDemo / 2,
		top:     yDemo - hDemo / 2
	} );
	
	$demoTooltipContainer.css( 'visibility', 'hidden' );
	
	///////////////////////////////////////////////////////////
	// Set the different actions in demoSequence array
	///////////////////////////////////////////////////////////
	setDemoSequence();
	
	// The tour begins!
	for ( var i = 0; i < demoSequence.length; i++ ) {
		
		// A single action?
		singleAction = (demoSequence[ i ].split( CO ).length == 1);
		if ( singleAction ) {
			singleAction     = demoSequence[ i ].split( CL )[ 0 ];
			singleActionData = demoSequence[ i ].split( CL )[ 1 ];
		}
		
		pushStep = demoTimer.length;
		
		// Pause
		if ( singleAction ) {
			if ( singleAction == 'pause' ) {
				timer += Number( singleActionData );
			}
		} else {
			
			// The tour begins!
			demoAction.push( demoSequence[ i ].split( CO ) );
			
			if ( pushStep ) {
				// Takes into account the last animation time
				timer += Number( demoAction[ demoAction.length - 1 ][ 1 ] ) + demoMoveSpeed;
			}
			
			////////////////////////////////////////
			// Creates a new timelined action
			////////////////////////////////////////
			
			// Records timer
			demoTimer.push( timer / speedDemo );
			
			// Creates action
			
			timeouts[ demoTimer.length - 1 ] = setTimeout( function () {
				
				// Check if comment exists
				if ( demoAction[ demoStep ][ 0 ].indexOf( AS ) >= 0 ) {
					demoTargetTooltip = demoSequenceText[ demoTextIndex ].split( CO )[ lang ].replace( MU, App );
					
					if ( demoAction[ demoStep ][ 0 ].indexOf( AS ) === 0 ) {
						demoTargetTooltip = N;
					}
					demoAction[ demoStep ][ 0 ] = demoAction[ demoStep ][ 0 ].split( AS )[ 1 ];
				}
				
				// Check if specific class eq()
				demoTargetDetail = demoAction[ demoStep ][ 0 ].split( CL );
				demoTarget       = demoTargetDetail[ 0 ];
				
				// Don't move in case of ! before the ID or class
				if ( demoTarget.substr( 0, 1 ) == '!' ) {
					doNotMove  = true;
					demoTarget = demoTarget.substring( 1 );
				} else {
					doNotMove = false;
				}
				
				// Converts array data into jQuery variable
				$demoTarget = $( demoTarget );
				
				// Target child element in case of specific element in a class
				if ( demoTargetDetail[ 1 ] ) {
					$demoTarget = $demoTarget.eq( demoTargetDetail[ 1 ] );
				}
				
				// Replace inexistent element with older one - don't move
				if ( !$demoTarget.length || (!$demoTarget.isVisible() && $demoTarget.attr( 'id' ) != 'backtotop') ) {
					doNotMove   = true;
					$demoTarget = $oldDemoTarget;
				}
				$oldDemoTarget = $demoTarget;
				
				// If only an action
				if ( !doNotMove ) {
					
					// Define target
					xTarget = $demoTarget.offset().left;
					yTarget = $demoTarget.offset().top;
					wTarget = $demoTarget.outerWidth();
					hTarget = $demoTarget.outerHeight();
					
					// Scroll window when object is not fully visible
					if ( yTarget + hTarget > $( window ).height() && ($demoTarget.hasClass( 'cat' ) || $demoTarget.hasClass( 'estimate-maincontainer' ) || $demoTarget.hasClass( 'sheettotalBox' ) || $demoTarget.hasClass( 'sheetlogofooterDistrib' )) ) {
						scrollWindow( yTarget, 1000 / speedDemo, 90 );
					}
					
					// Switch from fixed to absolute positioning
					if ( $demoCircle.css( 'position' ) == 'fixed' ) {
						$demoCircle.css( {
							left:     $demoCircle.offset().left,
							top:      $demoCircle.offset().top,
							position: 'absolute'
						} );
					}
					
					$demoCircle.animate( {
						opacity: 0.4,
						left:    xTarget,
						top:     yTarget,
						width:   wTarget,
						height:  hTarget
					}, demoMoveSpeed, function () {
						
						///////////////////
						// End of Demo
						///////////////////
						
						// Must finish with an animated step (not '!….')
						if ( demoStep == demoAction.length ) {
							endDemoTour();
						}
					} );
					
				}
				
				// Display comments
				
				if ( demoTargetTooltip != oldDemoTargetTooltip ) {
					if ( demoTargetTooltip ) {
						
						if ( Optiondemobig == 'true' ) {
							demoTargetTooltip = demoTargetTooltip.replace( BR, SP );
						}
						
						$demoTooltipContainer.fadeOut( function () {
							$( '#Demo-tooltip' )
								.html( demoTargetTooltip )
								.parent()
								.delay( 500 / speedDemo )
								.css( 'visibility', 'visible' )
								.fadeIn( function () {
									
									demoTextIndex++;
									
									if ( demoStep > 4 ) {
										// Shift demo text if overlap (conditions…)
										overlapResult = overlap( $demoTooltipContainer, $demoTarget );
										ratio         = wTarget * hTarget / ($demoTooltipContainer.outerWidth() * $( '#Demo-tooltip-container' ).outerHeight());
										if ( overlapResult && ratio < 30 && ratio != 1 ) {
											overlapResult += 20;
										} else {
											overlapResult = 0;
										}
										$demoTooltipContainer.animate( {
											marginTop: overlapResult
										}, 500 / speedDemo );
									}
									if ( $( '#rightmenu-container' ).css( 'top' ) != '-9999px' ) {
										$demoTooltipContainer.animate( { left: -80 - 170 * (Optiondemobig == 'true') } );
									} else {
										$demoTooltipContainer.animate( { left: 0 } );
									}
									
								} );
							
						} );
					} else {
						$demoTooltipContainer
							.fadeOut( function () {
								$( this ).css( 'margin-top', 0 );
							} );
					}
				}
				
				oldDemoTargetTooltip = demoTargetTooltip;
				
				demoStep++;
				
			}, demoTimer[ pushStep ] );
			
			// Triggers an action on the corresponding element
			
			if ( demoAction[ demoAction.length - 1 ][ 2 ] ) {
				
				timer += Number( demoAction[ demoAction.length - 1 ][ 3 ] ) + demoMoveSpeed;
				
				// Records timer
				demoTimer.push( timer / speedDemo );
				
				// Creates action
				timeouts[ demoTimer.length - 1 ] = setTimeout( function () {
					
					if ( demoAction[ demoStep - 1 ][ 2 ].substr( 0, 5 ) == 'write' ) {
						$demoTarget.val( demoAction[ demoStep - 1 ][ 2 ].substring( 6 ) );
					} else if ( demoAction[ demoStep - 1 ][ 2 ].substr( 0, 9 ) == 'textwrite' ) {
						$demoTarget.text( demoAction[ demoStep - 1 ][ 2 ].substring( 10 ) );
					} else {
						$demoTarget.trigger( demoAction[ demoStep - 1 ][ 2 ] );
					}
					
				}, demoTimer[ demoTimer.length - 1 ] );
				
			}
			
		}
		
	}
	
}

function endDemoTour( exitDemo ) {
	
	checkInternet(); // Relaunch
	
	// Cascade removal of displayed elements
	$demoCircle.stop( 1, 1 ).fadeOut( 200 );
	$demoInfo.hide();
	$demoContainer.fadeOut( 200 );
	$( '#topWidget-container' ).fadeOut( 200 );
	
	// No need to know if window has lost focus anymore
	$( window ).off( 'blur' );
	
	$( '#main-container' ).fadeOut( 300, function () {
		
		// End of process
		demoProcess    = false;
		previewProcess = false;
		
		$demoTooltipContainer.hide();
		
		// Clear timeouts
		for ( var i = 0; i < timeouts.length; i++ ) {
			clearTimeout( timeouts[ i ] );
		}
		
		// Clear escape functionality
		$( document ).off( 'keyup' );
		$( '#Demo-container' ).off( 'click' );
		
		// Reload before-estimation
		unredoData[ sessionIndex ]     = oldUnredoData[ sessionIndex ].slice( 0 );
		unredoPosition[ sessionIndex ] = 1;
		unredo( -1 );
		
		// No value to backup (process OK)
		saveData( 'backupData', N );
		
		enableMouseWheel();
		resetSlidersPosition();
		
		// In case we quit during preview or lightbox, hide the undesired elements
		$( '#load, #save, #undo, #redo, #unredo-container, #search, #backup, #viewswitcher' ).removeClass( 'notdisplayed' );
		$( '#small-data-widget' ).removeClass( 'outofscreen' );
		$( '#exit, #lightbox-container' ).hide();
		updateOptions();
		
		$( '#main-container' ).fadeIn();
		$( '#topWidget-container' ).fadeIn( function () {
			showTopWarning( 27 + (exitDemo == 'exit'), 350, 2500 + 3300 * (exitDemo != 'exit'), null, 200 );
			currentScrollDP = 0;
		} );
		// Demo loop?
		if ( Optiondemoloop == 'true' && exitDemo != 'exit' ) {
			setTimeout( function () {
				$( '#estimate-demo' ).click();
			}, 6000 );
		}
		$( '#estimates-wholecontainer' ).hide();
		
	} );
	
}

function setDemoSequence() {
	
	//////////////////////////////////////////////////////////////////////////////////////
	// Set here the different actions in demoSequence array
	// Syntax:
	// pause:1500 							------ wait for 1500 ms
	// or
	// #target,delay 						------ delay to go the target
	// or
	// ?*#target,delay 						------ with a comment (see demoSequenceText[])
	// or
	// #target,delay1,click,delay2 			------ triggers 'click' on #target
	// or
	// .made,200,write:AGRIMATDUPONT,… 		------ write 'DUPONT' on .made input/textarea
	// or
	// #div,200,textwrite:AGRIMATDUPONT,… 	------ write 'DUPONT' on #div
	// or
	// !.pluscontrol:3,100,mouseup,0 		------ do not move, only trigger 'mouseup'
	// or
	// *… 									------ hide current comment
	//////////////////////////////////////////////////////////////////////////////////////
	
	demoSequence = [
		
		'?*!#Demo-tooltip-container,0',
		'#Demo-container,400',
		'#Demo-tooltip-container,0',
		
		'pause:2000',
		'?*#Demo-container,0',
		'?*#Demo-container,4000',
		'#navbar,0',
		'?*!#navbar,8000',
		'#info,0',
		'?*!#info,5000',
		'.cat:0,4000',
		'pause:1500',
		'.cat:1,0',
		'pause:800',
		'.cat:2,0',
		'pause:800',
		'.cat:3,0',
		'pause:800',
		'*.cat:4,0',
		'pause:800',
		'.cat:6,0',
		'pause:800',
		'.cat:7,0',
		'pause:800',
		'.cat:8,0',
		'pause:800',
		'*.cat:11,0',
		'pause:800',
		'!#backtotop,0,click,200',
		'?*#contact-container,1000',
		'pause:2000',
		'?*#contact-container,2000',
		
		// Date
		'.contactdate,500',
		'!.contactdate,2500,click,0',
		'.gldp,0',
		'.dpselected,0',
		'!.dpselected,0,click,1000',
		
		// General data
		'?*.made,200',
		'pause:2000',
		'!.made,0,focus,0',
		'.made,200,write:AGRIMATDUPONT,1000',
		'!.made,0,blur,0',
		'.vendor,0',
		'!.vendor,0,focus,0',
		'.vendor,200,write:Jean ENSILEUR,500',
		'!.vendor,0,blur,0',
		'?*.vendor,0',
		
		'.site,200',
		'.breeder,200',
		'.phone,200',
		'.mail,200',
		'.address,200',
		'.infocust,200',
		
		// Installation data
		'?*#databox-container,2000',
		'#databox-container,3500,mouseenter,10',
		'.databox:3,1500,mouseenter,10',
		'.pluscontrol:3,600',
		'!.pluscontrol:3,0,mousedown,0',
		'!.pluscontrol:3,70,mouseup,500',
		'!.databox:3,0,mouseleave,10',
		
		'.databox:2,200,mouseenter,10',
		'.databox:2,0,mouseleave,100',
		
		'.databox:1,200,mouseenter,10',
		'.databox:1,0,mouseleave,100',
		
		'.databox:0,200,mouseenter,10',
		'.pluscontrol:0,600',
		'!.pluscontrol:0,200,mousedown,0',
		'!.pluscontrol:0,120,mouseup,500',
		'!.databox:0,0,mouseleave,10',
		
		'.remarks,0,focus,0',
		'.remarks,0,write:Éleveur à revisiter courant mai.,200',
		'.remarks,0,blur,0',
		
		// Product choice
		
		'.titlecat:1,10',
		'!.titlecat:1,0,click,1',
		'?*#open-slider,30',
		'!.slider:1,500,mouseover,30',
		'#slider-container:1,20,mouseover,3000',
		'pause:1700',
		'.demoproduct:0,400',
		'pause:700',
		'!.demoproduct:0,0,click,400',
		'!.slider,1,mouseout,0',
		
		// FT DOCFDS Lightbox
		'?*.catbox img:0,2500',
		'!.catbox img:0,0,click,5500',
		'#Demo-tooltip-container,0',
		'#FT,1000',
		'*#DOCFDS,1300',
		'?*#lightbox-desc,3300',
		'*#close-lightbox,7000,click,1000',
		'?*.catbox img:0,0',
		
		// Packaging and prices
		'.packaging:0,2000',
		'pause:1700',
		'.packaging:1,200',
		'.packaging:2,200',
		'.packaging:3,200',
		'*.packaging:2,200,click,200',
		'?*!.packaging:1,0',
		
		'pause:1700',
		'.subconsforcalc:0,0',
		'pause:1700',
		'?*!.subconsforcalc:0,0',
		
		'pause:3500',
		'.unitprice:0,0,focus,0',
		'.unitprice:0,0,write:4.2,500',
		'*.unitprice:0,0,blur,0',
		'.unitprice:0,0',
		
		'pause:1700',
		'?*.titlecat:1,0',
		'pause:3400',
		'.titlecat:2,0,click,1000',
		'*.demoproduct:1,0,click,1000',
		
		'!.demopackaging:1,800',
		'!.demopackaging:1,0,click,1700',
		
		'pause:1700',
		'.unitprice:1,0,focus,0',
		'.unitprice:1,0,write:4.1,500',
		'.unitprice:1,0,blur,0',
		'.unitprice:1,0',
		
		// Top menu 1
		'!#backtotop,0,click,3500',
		'?*#navbar,500',
		'?*#topWidget,5000',
		'pause:3000',
		'?*!#topWidget,6000',
		'#save,0',
		'?*!#topWidget,6000',
		'#load,0',
		'?*!#topWidget,6000',
		'#unredo-container,0',
		
		// Print
		'?*!#topWidget,3000',
		'#print,0',
		'!#print,0,click,4500',
		'?*#print,0',
		'.sheetdate:0,7500',
		'*.sheetvisitdate,1000',
		'.sheetmade:0,1000',
		'.sheettitlecat:0,1000',
		'.sheettitlecat:1,1000',
		'.sheettotalBox,1000',
		'.estimate-maincontainer:1,3000',
		'?*.productoffering,100',
		'.productoffering,4000',
		'.sheetpic-container1:0,5000',
		'*.sheetpic-container1:1,2000',
		'?*.sheetpic-container1:2,2000',
		'.sheetlogofooterDistrib:1,2000',
		'*!#backtotop,9000,click,0',
		'?*#print,4000',
		// '?*#mailbox,4000',
		'?*#exit,5000',
		'*#exit,4500,click,1500',
		
		// Top menu 2
		'!#topWidget,0',
		'?*#search,0',
		'!#search,1000,click,4500',
		'#searchbox,0,focus,2000',
		'#searchbox,200,write:f,1500',
		'#searchbox,0,write:fi,0',
		'!#searchbox,0,keyup,0',
		'#searchbox,0,write:fil,0',
		'#searchbox,0,write:film,0',
		'*.resultbox:0,2500',
		'!.resultbox img:0,0,click,1000',
		'!#search,0,click,0',
		'*#lightbox-desc,0',
		'*#close-lightbox,4000,click,3000',
		'#search,0',
		'!#topWidget,0',
		'?*#viewswitcher,1000',
		
		'!#topWidget,4000',
		'?*#calendar,4000',
		'!#calendar,0,click,2000',
		'!#calendar,0,click,7000',
		'?*!#topWidget,0',
		'.flag:0,0',
		'!#currflag,0,click,1500',
		'!.flag:0,0,mouseleave,1000',
		
		// Right menu
		'?*!#topWidget,1000',
		'#rightmenuicon,0',
		'!#rightmenuicon,3000,mouseover,4500',
		'!#rightmenu-container,1000,mouseenter,0',
		'*.rightmenuli:0,1000,click,1000',
		'.rightmenuMainMenu:0,400',
		'.rightmenuMainMenu:3,400',
		'.rightmenuMainMenu:5,400',
		'.rightmenuli:0,2000,click,1500',
		// '?*.rightmenuli:1,2000,click,1300',
		
		// '.rightmenudocBox:0,1000',
		// '.rightmenudocBox:1,1000',
		// '.rightmenudocBox:2,1000',
		// '.rightmenudocBox:3,1000',
		// '?*.rightmenuli:1,2500,click,300',
		'?*.rightmenuli:2,0,click,1000',
		'#rightmenulogoImg,2000',
		'.rightmenuli:2,3000,click,2000',
		
		'?*.rightmenuli:3,2000,click,2300',
		'.currencyCoin:3,1000',
		'.currencyCoin:2,1000',
		'.currencyCoin:1,1000',
		'.currencyCoin:0,1000',
		'.rightmenuli:3,2000,click,1000',
		
		'?*.rightmenuli:4,2000,click,300',
		'?*.rightmenuOptionCheck:4,4000',
		'#rightmenuOptionBoxArrowsDown,5000',
		'*!#rightmenuOptionBoxArrowsDown,0,click,0',
		'#rightmenuOptionBoxArrowsDown,3000',
		'*!#rightmenuOptionBoxArrowsDown,1000,click,0',
		'!#rightmenuOptionBoxArrowsDown,1000,click,0',
		'!#rightmenuOptionBoxArrowsDown,1000,click,0',
		'.rightmenuli:4,5000,click,1000',
		'?*.rightmenuli:5,0,click,300',
		'.rightmenuVersion,3000',
		'.rightmenuli:5,6500,click,2000',
		'!#rightmenu-container,0,mouseleave,0',
		'?*#applogo,2500',
		'pause:7500',
		'*#applogo,2500',
		'#applogo,2000'
	];
	
}

function removeFileScripts( duration ) {
	
	// Remove all scripts
	setTimeout( function () {
		$( '.checkfile-script' ).remove();
	}, duration );
	
}

function showFlagMenu() {
	
	$( '#navbar' ).css( 'overflow', 'visible' );
	$( '.flag', '#flagbox' ).stop( 1, 1 ).slideDown( 250 );
	
	// Hide other ones to avoid layout issues between the both
	hideRightMenu( 1 );
	hideAddtocart( 1 );
}

function hideFlagMenuOnTimer( delay ) {
	
	clearTimeout( timer13 );
	timer13 = setTimeout( function () {
		$( '.flag', '#flagbox' ).not( '#currflag' ).slideUp( 200 );
	}, delay, function () {
		$( '#navbar' ).css( 'overflow', 'hidden' );
	} );
	
}

function languageModule() {
	
	var timerLang = 350;
	
	$( '#currflag', '#flagbox' )
		.on( 'click', function () {
			if ( $( '.flag' ).eq( 1 ).isVisible() ) {
				hideFlagMenuOnTimer( 1 );
			} else {
				showFlagMenu();
				hideFlagMenuOnTimer( 3500 );
			}
		} );
	$( '.flag', '#flagbox' )
		.on( 'mouseover', function () {
			clearTimeout( timer13 );
		} )
		.on( 'mouseleave', function () {
			hideFlagMenuOnTimer( 1000 );
		} )
		.not( '#currflag' ).on( 'click', function () {
		
		var flag = $( this ),
		    bkg  = $( '#UIcontainer' );
		
		hideTopWarning();
		$( '.flag', '#flagbox' ).not( '#currflag' ).hide();
		
		// Show background and apply change delay
		
		flagProcess = true;
		
		// Display waiting text
		$( '#message-container' ).addClass( 'inlineblock' );
		bkg
			.find( 'span' )
			.show()
			.text( warningText[ 6 * langScope + $.inArray( visibletooltip.substring( 3 ), languages ) ] )
			.next()
			.addClass( 'inlineblock' ).end().end()
			.fadeIn( timerLang / 2 );
		recordHistory( 6 );
		
		setTimeout( function () {
			
			country  = countrymenu[ flag.index() ];
			lang     = $.inArray( country.substring( 3 ), languages );
			language = languages[ lang ];
			
			appendTexts();
			findDistribLogoSrc();
			updateLanguages();
			
			flagProcess = false;
			
			fullCalc();
			setTimeout( bigFlagBounce, timerLang + 500 );
			bkg.delay( 300 ).fadeOut( timerLang );
			
		}, timerLang / 1.5 );
	} );
}

function updateLanguages() {
	
	cty  = $.inArray( country, countries );
	lang = $.inArray( countries[ cty ].substring( 3 ), languages );
	
	// Flag sort
	for ( var i = 0; i < countries.length; i++ ) {
		$( '.flag', '#flagbox' ).eq( i )
			.css( 'backgroundImage', 'url("' + imgFolder + SL + countries[ cty ] + '.png' + '")' )
			.attr( 'data-title', HA + countries[ cty ] );
		countrymenu[ i ] = countries[ cty ];
		cty++;
		cty *= (cty < countryScope);
	}
	
	updateDatePickerLang();
	
	appendOptions();
	
}

function bigFlagBounce( duration ) {
	
	duration = duration || 400;
	
	xFlag = $( '#currflag' ).offset().left;
	yFlag = $( '#currflag' ).offset().top;
	
	$( '#bigflag' )
		.attr( 'src', imgFolder + SL + country + '-big.png' )
		.show()
		.css( {
			left:  xFlag,
			top:   yFlag - 2,
			width: 30
		} )
		.animate( {
			left:  xFlag - 20,
			top:   yFlag - 20,
			width: 70
		}, duration )
		.animate( {
			left:  xFlag,
			top:   yFlag - 2,
			width: 30
		}, duration )
		.fadeOut( 1 );
	
}

function updateDatePickerLang() {
	
	// Retrieve language arrays and also current month from datepicker)
	var days      = $( '#contact-container' ).data( 'days' ).split( CO ),
	    months    = $( '#contact-container' ).data( 'months' ).split( CO ),
	    currmonth = $( '#contact-container' ).data( 'currmonth' );
	
	// Update days depending on modified language
	$( '.gldp .dow', '#contact-container' ).each( function ( index ) {
		$( this ).text( days[ index ].substr( 0, 2 ) );
	} );
	
	// Update months depending on modified language
	if ( currmonth ) {
		$( '.gldp .monyear span', '#contact-container' ).eq( 0 ).text( months[ currmonth ] );
	}
	
}

function resetDatePicker() {
	
	var position = $( '#contact-container' ).data( 'calendarPosition' ),
	    trigger;
	
	// Switch to Current month
	if ( position ) {
		if ( position > 0 ) {
			trigger = '.prev';
		} else {
			trigger = '.next';
		}
		
		for ( var i = 0; i < Math.abs( position ); i++ ) {
			$( '.gldp ' + trigger + '-arrow' ).click();
		}
	}
	
	// Select current day (or selected day if the same)
	var clickDay = $( '.gldp .today' );
	if ( !clickDay.length ) {
		clickDay = $( '.dpselected' );
	}
	clickDay.click();
	
}

function appendCategories() {
	
	var addAClass;
	
	$( '.slider', '#slider-container' ).each( function ( index ) {
		addAClass = (catText[ (langScope + 1) * index ] == 'old') ? SP + 'hidden oldcat' : N;
		$( '#categories' ).append( '<div class="cat"><div class="titlecat tooltipelement"/></div>' );
		// Set category background
		$( '.cat:last', '#categories' )
			.addClass( $( this ).attr( 'data-type' ) )
			.addClass( 'borderBottom' + addAClass )
			.find( '.titlecat' )
			.css( 'backgroundColor', $( '.cat:last', '#categories' ).css( 'color' ) ); // Set category title background
	} );
	// Do it after as some important info comes right after the class cat name
	$( '#categories' ).find( '.cat' ).addClass( 'sortable' );
	
	setCatMilkingType();
	
	// Check if slider has some products
	// Otherwise, always hide the corresponding category
	checkemptycattitles();
	
	// Append cat items
	$( '.titlecat', '#categories' ).after( '<div class="selectprod-container"><div class="selectproduct mediumtransition"/></div><div class="wastebin-container"><div class="wastebin"/></div>' );
	
}

function checkemptycattitles() {
	
	$( '#categories' ).data( 'emptycatnumbers', N );
	$( '.slider', '#slider-container' ).each( function ( index ) {
		if ( !$( this ).find( 'img' ).length ) {
			hideCategory( $( '.cat' ).eq( index ), null, 1 ); // 1 is to hide permanently
			$( this ).hide();
		}
	} );
	
}

function appendControls() {
	
	// controls need to be hiddent when
	$( '.datacat', '#databox-container' ).prepend( '<div class="controls mediumtransition"  data-html2canvas-ignore><div class="pluscontrol"/><div class="lesscontrol"/><div class="reset"/></div>' );
	
}

function appendDataValues( index ) {
	
	tankVolumeData = [
		// 	Tank volume		Recommended water volume
		900, 30,
		2500, 35,
		4700, 45,
		8500, 55,
		16500, 80,
		25500, 125
	];
	
	// refers to animals array
	databoxValue      = [];
	databoxValue[ 0 ] = [
		900, 3500, 30000, 100,		// Tank volume 	(min, default, max, increment)
		0, 0, 100, 1,				// Robots 		(min, default, max, increment)
		0, 12, 100, 1,				// Clusters		(min, default, max, increment)
		1, 60, 1000, 1				// Animals		(min, default, max, increment)
	];
	databoxValue[ 1 ] = [
		900, 2500, 30000, 100,		// Tank volume 		(min, default, max, increment)
		0, 0, 0, 0,					// No robots !		(min, default, max, increment)
		1, 16, 100, 1,					// Clusters			(min, default, max, increment)
		1, 300, 5000, 1				// Animals 			(min, default, max, increment)
	];
	databoxValue[ 2 ] = databoxValue[ 1 ].slice( 0 );
	
	if ( index === undefined ) { // First run
		$( '.databox', '#databox-container' ).find( 'span' ).each( function ( index ) {
			$( this ).text( databoxValue[ animal ][ 1 + index * 4 ] );
		} );
	} else {	// Target (reset 1 data)
		$( '.databox', '#databox-container' ).find( 'span' ).eq( index ).text( databoxValue[ animal ][ 1 + index * 4 ] );
	}
	updateData();
	updateDisplayData(); // for small data widget
	
}

function validateContact( fieldtocheck, realuser ) {
	
	var target = 0,
	    filter;
	// Base 2 number depending on field
	target += fieldtocheck.hasClass( 'email' );
	target += fieldtocheck.hasClass( 'phone' ) * 2;
	
	target = Math.log( target ) / Math.log( 2 );
	
	switch ( target ) {
		case 0:
			// mail filter
			filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
			break;
		case 1:
			// phone filter
			filter = /^[0-9-+. ]+$/;
			break;
	}
	
	// Determine all mails/phones (array) and validate each of them
	
	var multipleContactInfo = fieldtocheck.val().split( ';' ),
	    error               = 0,
	    contact;
	
	// Take into account possible ';' at the end, and remove empty element
	if ( !multipleContactInfo[ multipleContactInfo.length - 1 ] ) {
		multipleContactInfo.splice( -1, 1 );
	}
	
	for ( var i = 0; i < multipleContactInfo.length; i++ ) {
		contact = filter.test( multipleContactInfo[ i ] );
		error += !contact;
		// Save mail (i.e. target=0) in dataMailsource when OK
		if ( contact && !target ) {
			updateMailToSource( multipleContactInfo[ i ], 1 );
		}
	}
	
	if ( error || fieldtocheck.attr( 'id' ) == 'mailFrom' && multipleContactInfo.length > 1 ) {
		fieldtocheck.addClass( 'field-alert' );
		if ( realuser && warningType != 23 + target ) {
			showTopWarning( 23 + target, 200, 3000 );
		}
	} else {
		fieldtocheck.removeClass( 'field-alert' );
	}
	
}

function addRemoveSpecials( special, flag ) {
	
	// Add a special: 	 flag value must be 1
	// Remove a special: flag value must be 0
	
	$( '.slider', '#slider-container' ).find( 'li' ).each( function () {
		
		var targetProduct = $( this ),
		    targetSpecial = targetProduct.find( 'img' ).attr( 'data-specials' ),
		    specialData   = targetSpecial.indexOf( '(' );
		
		// E.g. restriction such as AOC TRAYOR OK for after milking
		if ( specialData >= 0 ) {
			// Cheks that category is within the scope
			specialData = targetSpecial.substring( specialData + 1, targetSpecial.length - 1 );
			catProduct  = targetProduct.closest( '.slider' ).attr( 'data-type' );
			specialData = catProduct.indexOf( specialData ) >= 0 ? 0 : -1;
		}
		
		// AOC
		// Add sticker and hide '+'
		if ( targetSpecial.substr( 0, 3 ) == 'AOC' && flag == 1 && country == 'FR-fr' && specialData == -1 ) {
			targetProduct
				.prepend( '<div class="specialAOC"/>' )
				.find( '.bxplus' ).hide();
		}
		// Remove sticker and show '+' if not yet selected
		if ( targetSpecial.substr( 0, 3 ) == 'AOC' && !flag ) {
			if ( !targetProduct.find( '.bxcheck:visible' ).length ) {
				if ( !targetProduct.find( '.bxforbid:visible' ).length ) {
					targetProduct.find( '.bxplus' ).show();
				}
				targetProduct.find( '.specialAOC' ).remove();
			}
		}
		
	} );
	
}

function appendSliderItems() {
	
	////////////////////////////////////////////////////////////////////////////////////////
	// Set here product range per category (E.g. #udderbeforem)
	// the subcategory and the exceptions ('!'):
	// 'PRODUCT}subcategory' used for calcs (appears above product name in slider)
	// ACTIFLASH!animal1animal2 = only when animal1 & animal2
	////////////////////////////////////////////////////////////////////////////////////////
	
	productRange = [
		"#biosecurity",
		"AGAKOK}footbath", "SEPTRIVET G}footbath", "GERMICIDAN FF PLUS}footbath",
		"#udderbeforem",
		"HYPRED QUICK SPRAY", "SPRAY 2A==", "PREFOAM +", "GLYCOLAC FOAM", "GLYCOLAC SPRAY", "GLYCOLAC DUO", "TRAYOR +", "BESTFOAM +", "WIPES LSA", "G-MIX POWER", "LIQUIM'IX", "LIQ-IO 2500", "LIQ-IO C", "TRAYOR", "TRAYOLINE", "NATIGREEN", "ANTI-GERM FRESH TRITEX",
		"PRATIC NF", "PREMOUSS NET", "HYPRODERM", "CHLONET", "STERITRAITE", "TOP'OUATE", "TRAY'OUATE", "TRAY'CLEAN", "DÉVIDOIR Ouate",
		"#clusters",
		"PERFO GRIF+", "DUOGRIFF", "ACTIFLASH 5+", "DES OXI-25",
		"#udderafterm",
		"HM VIR SPRAY", "NOVA TREMP'", "HM VIR FILM", "COSMETO'FLASH", "HYPRED QUICK SPRAY", "GLYCOLAC SPRAY", "GLYCOLAC DUO", "GLYCOLAC FILM", "TRAYOR +", "TRAYFILM +", "SPRAY 2A==", "DIP BLUE", "GOLDEN MIX", "SYN'ERGIX", "G-MIX", "POWER BLUE", "EXCEL'MIX", "TRAYMIX", "DIP-IO", "DERMADINE", "LIQ-IO", "IODIP",
		"DERMIODE", "IO-SPRAY", "IO-FILM", "TRAYOR", "TRAYOLINE", "TRAYDOU", "TRAYFILM", "COSMETOFILM", "TRAYDIP", "INTEGRAL", "HY-COSMETIC", "COSMADINE", "FILMADINE",
		"PROPISDERM", "NOVODIP", "FILMA'ZUR +", "PRATIC NF",
		"#betweenmilkings notGoatCat notSheepCat",
		"HYPRA'ZUR", "LAVINET", "DERMISAN +", "BOVIDERM +", "PROXYLAV",
		"#robotic notGoatCat notSheepCat",
		"ROBOSPRAY IODE", "ROBOSPRAY LACTIC", "HM VIR SPRAY", "NOVA TREMP'", "ROBOSPRAY SUPREME", "LIQ-IO 2500", "LIQ-IO 5500", "IODIP", "LIQ-IO C", "HYPRED QUICK SPRAY", "SPRAY 2A==",
		"TRAYOR", "TRAYOLINE", "ROBOSPRAY MIX", "PRATIC", "RS ACID", "RS ALCALIN", "TOP ACID", "BACTOGAL", "ADIROX", "CHLOROGAL", "ROBOCID", "ACIDE RBT", "ROBOLIN",
		"HYPROCLOR ED", "ACTIFLASH 5+", "PERFO GRIF+", "DUOGRIFF", "HYPRAL RBT",
		"#internalcircuits",
		"ROBOCID", "ACIDE RBT", "ROBOLIN", "D 10 ALCALIN", "D 10 ACIDE", "DIRECT'ACIDE", "RS ACIDE", "RS ALCALIN", "HYPRAL SP", "HYPRAL RBT", "INO 3X", "INO GUARD 100", "INO SAN",
		"HYPRAL ONE", "WASH", "DIRECT'BASE", "TOP CL EXTRA", "HYPROCLOR ED", "HYPRACID", "TOP ACID", "BACTOGAL",
		"ADIROX", "PENNGAR L.30", "PENNGAR NPH", "ACIDOGAL", "CHLOROGAL", "AOC-ADM", "REMINOX", "REMILIN", "MAXIGAL", "DES OXI-25",
		"GALORAN", "PENNGAR L.20", "PENNGAR L.X.", "EXOPENNGAR",
		"#milktank",
		"ROBOCID", "ACIDE RBT", "ROBOLIN", "D 10 ALCALIN", "D 10 ACIDE", "DIRECT'ACIDE", "RS ACIDE", "RS ALCALIN", "HYPRAL SP", "INO 3X", "INO GUARD 100", "INO SAN",
		"HYPRAL ONE", "HYPRAL RBT", "WASH", "DIRECT'BASE", "TOP CL EXTRA", "HYPROCLOR ED", "HYPRACID", "TOP ACID", "BACTOGAL",
		"ADIROX", "PENNGAR L.30", "PENNGAR NPH", "ACIDOGAL", "CHLOROGAL", "AOC-ADM", "REMINOX", "REMILIN", "MAXIGAL", "DES OXI-25",
		"GALORAN", "PENNGAR L.20", "PENNGAR L.X.", "EXOPENNGAR",
		"#surfaces",
		"HYPRED CLEAN +", "SANISURFACE +", "HYPRED FORCE 7", "HYPRELVA FOAM", "SANIPRO NET", "ANTI-GERM DT", "HD4", "CLEARZYM LT", "AGAVOX N", "EFFISAFE", "FUMAGRI COMFORT", "FUMAGRI HA SILO", "FOAM BASE", "SEPTRIVET G", "AGAKOK", "SANIKOK", "GERMICIDAN FF PLUS",
		"#paws notGoatCat notSheepCat",
		"PODOFEET", "SANIPATT +", "PA-FEET", "PODOCLEAN", "SANICLINE",
		"#vehicles",
		"AGRIMAT", "AGAVOX", "HD4n", "EFFISAFE", "AG-NET",
		"#otherproducts",
		"AGRIMAT", "FOAM BASE", "GERM DT", "NOVIRAL", "AG-NET", "AG-PULV", "AG-BAT", "AZUR", "RATICIDE",
		"#watertt",
		"AQUASEPT", "TABS", "ANTI-GERM'O", "ANTI-GERM AQUA", "CLOR'O", "SANICRISTAL", "STAB'O", "SANIKARST", "OXID'O", "INO PEROX EXTRA", "ACID'O", "Lessive de soude", "Kit bandelettes",
		"#accessories",
		"CUVE TRONIK", "LAVETTES", "GOBELET", "BACTOSPRAY", "PULVÉRISATEUR", "KIT SPRAY!goatsheep", "CM-TEST", "DÉVIDOIR", "SEAU", "Kit bandelettes", "CDN", "LESSIVE", "Extrait de Javel", "POMPE",
		"#controllers nocalculations",
		"KERSIA FOAMER", "QUICK SPRAY SYSTEM", "SPRAY 2A SYSTEM", "PREFOAM SYSTEM", "PERFO DOSE", "KERSIA WATER SYSTEM", "KIT PETIT RUMINANT", "TEAT SPRAY", "CAGE DTLG SPRAY",
		"#nutrition notGoatCat notSheepCat",
		"BOLIFAST", "BOLITRACE", "BOVIFORM", "HYDRYL", "BOLIFLASH", "BOLIDAYS", "HYDRAFEED", "HYDRAVO FRV 100", "DIAFEED", "ENERFEED", "COLOFEED",
		"#valorization",
		"HYPRASIL", "HYPRA'NAT GREEN", "HYPRA'NAT MAÏS", "CUVE TRONIK", "ENSIL",
		"#catalogue",
		"*"
	];
	
	var catSlider                                                        = -1,
	    catalog,
	    prodNo                                                           = 0, nbProd = 0,
	    bxcaptionapp = '<div class="bx-caption-app"/>', bxcaptionsubtype = '<div class="bx-caption-subtype"/>',
	    htmlX                                                            = N,
	    subtype;
	
	for ( var i = 0; i < productRange.length; i++ ) {
		
		// Detect subtype further data-subtype creation
		subtype = N;
		if ( productRange[ i ].indexOf( '}' ) > 0 ) {
			subtype           = productRange[ i ].split( '}' )[ 1 ];
			productRange[ i ] = productRange[ i ].split( '}' )[ 0 ];
		}
		
		// Filtering products: PRODUCT!cow means that it's only used for cows
		if ( productRange[ i ].indexOf( '!' ) > 0 ) {
			var animalOK      = (productRange[ i ].split( '!' )[ 1 ].indexOf( animalType ) >= 0);
			productRange[ i ] = productRange[ i ].split( '!' )[ 0 ];
			if ( !animalOK ) {
				if ( productRange[ i + 1 ][ 0 ] == HA ) {
					htmlX += '</ul>' + ED;
				}
				continue;
			}
		}

		// Allow a product to exactly match the defined name
		// Ex. SPRAY 2A and SPRAY 2A SYSTEM, SPRAY 2A will include SPRAY 2A SYSTEM by default
		// Sometime we don't want to include other product having the same prefix
		var matchExactName = false;
		if ( productRange[ i ].indexOf( '==' ) > 0 ) {
			matchExactName = true;
			productRange[ i ] = productRange[ i ].split( '==' )[ 0 ];
		}
		
		catalog = productRange[ i - 1 ] == HA + 'catalogue';
		
		for ( var j = 0; j < prodText.length; j += prodText.length / prodDataNumb ) {
			
			var addCaptions = N, addClass = N, ABSliderIcon = N, bxItemNotVisible = N, datasub = N;
			position        = prodText[ j ].toUpperCase().indexOf( productRange[ i ].toUpperCase() );
			
			//////////////////////////////////////////////////////////////////////
			// Search for product and add it to the slider
			// For the catalogue : takes all with the except. of hidden products
			//////////////////////////////////////////////////////////////////////
			
			if ( ((position >= 0 && !matchExactName) || (matchExactName && prodText[ j ].toUpperCase() == productRange[ i ].toUpperCase())) || (catalog && prodText[ j ] != hideProduct) ) {
				
				// Add info caption for some categories that mixes product types
				if ( 'Robotic systems|Plant biosecurity|Cleaning and disinfection of surfaces'.indexOf( catText[ 1 + (langScope + 1) * catSlider + 1 ] ) >= 0 ) {
					if ( subtype ) {
						datasub     = SP + 'data-subtype="' + subtype + '"';
						addCaptions = bxcaptionsubtype;
					} else {
						addCaptions = bxcaptionapp;
					}
				}
				
				if ( (catText[ 1 + (langScope + 1) * catSlider + 1 ]).indexOf( 'Udder' ) >= 0 ) {
					addCaptions = bxcaptionapp;
				}

				// We check if the product is still for sale and if it is compatible with the animal type
				// Otherwise, we hide it in the slider but keep it active for old estimates loaded
				if ( prodText[ j + 12 ] == 'old' || prodText[ j + 16 ].indexOf( animalType ) < 0 ) {
					bxItemNotVisible = SP + 'bxItemNotVisible';
				}
				
				// Products used for demo
				if ( prodNo < 2 && (prodText[ j ].indexOf( 'LIQ-IO 2500' ) >= 0) || prodText[ j ].indexOf( 'PERFO GRIF+' ) >= 0 ) {
					addClass = SP + 'demoproduct';
					prodNo++;
				}
				nbProd += (bxItemNotVisible ? 0 : 1);
				htmlX += '<li class="sliderImg' + bxItemNotVisible + addClass + '"><img alt="' + prodText[ j ] + '"' + datasub + '/>' + addCaptions + ABSliderIcon + '<div class="bxplus"/><div class="bxcheck"/><div class="bxforbid"/></li>';
				
			}
			
		}
		if ( productRange[ i ][ 0 ] == HA ) {
			catSlider++;
			htmlX += '<div class="slider slidertransition" data-type="' + productRange[ i ].substring( 1 ) + '"><div class="hide-slider"/><ul class="bxslider">';
			nbProd = 0;
		} else {
			if ( productRange[ i + 1 ] ) {
				// Close the slider
				if ( productRange[ i + 1 ][ 0 ] == HA ) {
					$( '#categories' ).find( '.titlecat' ).eq( catSlider ).attr( 'data-title', nbProd + SP + productText[ (nbProd > 1) * 1 ].split( CO )[ lang ] + SP + categText[ 0 ].split( CO )[ lang ] );
					htmlX += '</ul>' + ED;
				}
			} else {
				// Close the slider
				$( '#categories' ).find( '.titlecat' ).eq( catSlider ).attr( 'data-title', nbProd + SP + productText[ (nbProd > 1) * 1 ].split( CO )[ lang ] + SP + categText[ 0 ].split( CO )[ lang ] );
				htmlX += '</ul>' + ED;
			}
		}
		
	}
	
	$( '#slider-container' ).append( htmlX );
	
	// Append all needed data
	sliderAttrItems();
	
}

function sliderAttrItems() {
	
	$( '#slider-container' ).find( 'img' ).each( function () {
		position = $.inArray( this.alt, prodText );
		if ( position > -1 ) {
			$( this ).attr( {
				'data-type':     prodText[ position + 1 ],
				'data-cons':     prodText[ position + 2 ],
				'data-consRS':   prodText[ position + 3 ],
				'data-unit':     prodText[ position + 4 ],
				'data-doc':      prodText[ position + 5 ],
				'src':           imgFolder + SL + prodText[ position + 6 ],
				'data-title':    prodText[ position + 7 ],
				'data-pack':     prodText[ position + 8 ],
				'data-dens':     prodText[ position + 9 ],
				'data-packunit': prodText[ position + 10 ],
				'data-caption':  prodText[ position + 11 ],
				'data-old':      prodText[ position + 12 ],
				'data-calcmode': prodText[ position + 13 ],
				'data-specials': prodText[ position + 14 ],
				'data-youtube':  prodText[ position + 15 ],
				'data-SAP':      prodText[ position + 17 ],
				'data-AB':       prodText[ position + 18 ],
				'data-biocide':  prodText[ position + 19 ]
			} );
		}
	} );
	
}

function selectSliderItems() {
	
	// Remove sliders while 'hiding' the container (otherwise, we see the canisters been built)
	$( '#slider-container' ).addClass( 'outofscreen' ).find( '.slider' ).remove();
	
	appendSliderItems();
	hideOpenSlider( 0 );
	
	$( '#slider-container' ).find( '.bxslider' ).bxSlider();
	setElementsColors();
	updateCaptionsUp();
	updateABBxslider();
	specialCaptions();
	showOpenSlider();
	
	// Show slider back & returns sliders els (used in scanfile when change of animal)
	return $( '#slider-container' ).removeClass( 'outofscreen' ).find( '.bxslider' );
	
}

function specialCaptions() {
	
	$( '#slider-container' ).find( '.sliderImg' ).each( function () {
		if ( $( this ).find( 'img' )[ 0 ].alt == 'DELIVERY' ) {
			$( this ).find( '.bx-caption span' ).text( replaceCaptionText[ lang ] );
		}
	} );
	
}

function appendTexts() {
	
	lang = $.inArray( country.substring( 3 ), languages );
	
	// Splash text
	$( '#intro-text' ).html( rightmenuText[ 5 * langScope + lang ] + SP + versionShort + versiontest + NBSP + DH + NBSP + copyrightText + dataYear );
	
	// Layout text
	$( '.selectproduct', '#categories' ).text( selectproductText[ lang ] );
	$( '.catalogue', '#categories' ).find( '.selectproduct' ).text( selectcatproductText[ lang ] );
	
	$( '#infotitle' ).find( 'span' ).text( infotitleText[ lang ] );
	
	// rightmenu texts
	$( '.rightmenuli', '#rightmenu-container' ).each( function ( index ) {
		$( this ).find( 'span' ).text( rightmenuText[ index * langScope + lang ] );
	} );
	
	// Release in release sub li
	$( '#rightmenu-container' ).find( '.menu-release' )
		.next().find( 'span' )
		.text( rightmenuText[ $( '#rightmenu-container' ).find( '.rightmenuli' ).index( $( '#rightmenu-container' ).find( '.menu-release' ) ) * langScope + lang ] + SP + version.replace( DH, N ).replace( version.split( SP )[ version.split( SP ).length - 1 ], N ) );
	
	// Animal menu text
	$( '#Animal-App-version' ).text( rightmenuText[ 5 * langScope + lang ][ 0 ].toLowerCase() + SP + versionShort );
	
	// Volume unit for the tank
	$( '.volume, #milkrefunit', '#databox-container' ).text( 'ℓ' );
	
	// Choose text for packaging
	$( '.packagingcalc-container span', '#categories' ).each( function () {
		if ( $( this ).text() ) {
			$( this ).text( packagingchooseText[ lang ] );
		}
	} );
	
	// Months info text
	$( '#months' ).text( months + SP + monthsinfoText[ lang ] );
	
	// Wastebin text
	$( '.wastebin', '#categories' ).text( wastebinText[ lang ] );
	
	// Info when article can't be selected
	$( '.bxforbid', '#slider-container' ).attr( 'data-title', forbidText[ lang ] );
	
	// Go text
	$( '#go-boxcontainer' ).find( 'span' ).text( goText[ 0 ].split( CO )[ lang ] );
	$( '#goboxcheck-container' ).find( 'span' ).text( goText[ 1 ].split( CO )[ lang ] );
	$( '#goboxinfo' ).html( AS + goText[ 2 ].split( CO )[ lang ] );
	
	// Full screen Options text
	$( '#title-fullscreenoptions' ).text( rightmenuText[ lang + langScope * 4 ] );
	
	// Contact defaults
	$( '#contact' ).children().each( function ( index ) {
		// Only fill empty fields with defaults
		if ( $( this ).hasClass( 'noinputvalue' ) ) {
			$( this ).val( N );
		}
		$( this ).attr( 'value', contactdefaultText[ langScope * index + lang ] ).blur();
	} );
	
	// distributor info defaults
	distrib = $( '.remarks', '#info' );
	// Only fill empty fields with defaults
	if ( distrib.css( 'font-style' ) == 'italic' ) {
		distrib.val( N );
	}
	distrib.attr( 'value', distribremarksText[ lang ] ).blur();
	
	// milkref defaults
	$( '#milkreftitle' ).text( specialWindowsText[ lang + 21 * langScope ] );
	
	milkref = $( '#milkrefval' );
	// Only fill empty fields with defaults
	if ( milkref.css( 'font-style' ) == 'italic' ) {
		milkref.val( N );
	}
	milkref.attr( 'value', milkrefvalText[ lang ] ).blur();
	
	// widgets' titles
	for ( var i = 0; i < titlewidgetText.length; i += (langScope + 1) ) {
		var text = titlewidgetText[ i ];
		$( HA + text )
			.css( 'background', 'url(' + imgFolder + SL + text + '.svg) center center no-repeat' )
			.attr( 'data-title', titlewidgetText[ i + lang + 1 ] );
	}
	for ( i = 0; i < titlepricewidgetText.length; i += (langScope + 1) ) {
		var text2    = titlepricewidgetText[ i ],
		    prefix   = HA + text2,
		    toolText = titlepricewidgetText[ i + lang + 1 ];
		$( prefix + '-setPrices' ).addClass( 'tooltipelement' ).attr( 'data-title', toolText );
		if ( $( prefix + '-History' ).length ) {
			$( prefix + '-History' ).addClass( 'tooltipelement' ).attr( 'data-title', toolText );
		}
	}
	$( '#small-data-close' ).attr( 'data-title', titleanimalwidgetText[ 0 ].split( CO )[ lang ] );
	
	// databoxes' titles
	$( '.datacat', '#databox-container' ).find( 'img' ).each( function ( index ) {
		$( this ).attr( 'data-title', titledataBoxText[ lang + langScope * index ] );
	} );
	
	$( '#categories' ).find( '.catbox' ).each( function () {
		$( this ).find( '.box-youtube' ).attr( 'href', youTubeURL + youtubeLink( $( this ).find( '.imgbox' ).attr( 'data-youtube' ) ) );
	} );
	
	// Otherdata titles
	var animalInLang = findAttributesInArray( animalType, animalAttributes )[ animalAttributes[ 0 ].split( CO ).length - langScope + lang ].replace( /\t/g, N ).split( LI )[ 0 ].toLowerCase(),
	    myTitle;
	$( '#databox-subcont2' ).find( 'span' ).each( function ( index ) {
		myTitle = otherDataInfoText[ index ].split( CO )[ 1 + lang ].split( LI )[ 0 ];
		myTitle = myTitle.replace( '&IT', animalInLang );
		$( this ).text( myTitle ); // 1 because #ID is idx 0
		$( '.small-otherdata' ).eq( index ).find( 'span' ).eq( 0 ).html( otherDataInfoText[ index ].split( CO )[ 1 + lang ].split( LI )[ 1 ] );
	} );
	$( '.forfree span' ).text( disposalText[ lang ].split( LI )[ 0 ] );
	
	$( '#addfile' ).attr( 'data-title', newtabText[ lang ] );
	$( '#clonefile' ).attr( 'data-title', newtabText[ lang + langScope ] );
	
	// Sliders caption-up update
	updateCaptionsUp();
	
	// Empty categories (Mosaic products)
	if ( $( '#categories' ).data( 'emptycatnumbers' ) ) {
		emptycat = $( '#categories' ).data( 'emptycatnumbers' ).split( CO );
		$( '#categories' ).data( 'emptycattitles', N );
		for ( var j = 0; j < emptycat.length - 1; j++ ) {
			$( '#categories' ).data( 'emptycattitles', $( '#categories' ).data( 'emptycattitles' ) + catText[ 1 + lang + (langScope + 1) * emptycat[ j ] ].split( LI )[ 0 ] + SP + DH + SP );
		}
		// Truncate the end of the string to remove unnecessary ','
		$( '#categories' ).data( 'emptycattitles', $( '#categories' ).data( 'emptycattitles' ).slice( 0, -3 ) );
	}
	
	// New product
	updateABBxslider();
	$( '#lightbox-AB' ).text( ABText[ lang ] );
	$( '#lightbox-old' ).text( 'STOP' );
	
	// Months slider info text
	$( '#month-slider-info' ).find( 'span' ).text( infosliderText[ lang ] );
	
	// Search default text
	$( '#searchbox' )
		.val( N )
		.attr( 'value', searchdefaultText[ lang ] )
		.blur();
	
	// Lightbox texts
	$( '#FT' ).text( lightboxText[ lang ] );
	$( '#DOCFDS' ).text( lightboxText[ langScope + lang ] );
	
	// Date picker texts
	$( '#contact-container' )
		.data( 'days', datepickerdayText[ lang ] )
		.data( 'months', datepickermonthText[ lang ] );
	
	// Mosaic texts
	$( '#close-mosaic, #close-fullscreenoptions, #close-lightbox, #close-top-warning, #close-diagnostic' ).attr( 'data-title', specialWindowsText[ lang + langScope ] );
	$( '#mosaicprod-cat1' ).html( specialWindowsText[ lang + 4 * langScope ] + SP + CL + BR );
	$( '#mosaic-window-info' ).html( specialWindowsText[ lang + 5 * langScope ] );
	
	// Pricelist texts
	$( '#setPricesTitle' ).text( specialWindowsText[ lang + 6 * langScope ] );
	$( '#setPricesKilo' ).text( specialWindowsText[ lang + 7 * langScope ] );
	
	// History texts
	$( '#HistoryTitle' ).text( specialWindowsText[ lang + 8 * langScope ] );
	$( '#refresh-History' ).attr( 'data-title', specialWindowsText[ lang + 15 * langScope ] );
	
	// Diagnostic center
	$( '#title-diagnostic' ).text( searchDirectText[ 7 ].split( CO )[ 1 + lang ] );
	$( '#restart-diagnostic' ).text( diagtopicText[ 17 ].split( CO )[ lang ] );
	
	// Mail texts and titles
	for ( i = 0; i < 6; i++ ) {
		$( '.mailHeader', '#mail' ).eq( i ).text( mailText[ 3 + i ].split( CO )[ lang ] );
	}
	$( '#sendmail' ).text( mailText[ 9 ].split( CO )[ lang ] );
	$( '#sendmailtextinfo' ).text( mailText[ 0 ].split( CO )[ lang ] );
	$( '.erase-item' ).attr( 'data-title', mailText[ 12 ].split( CO )[ lang ] );
	$( '#mailFile' ).attr( 'data-title', mailText[ 14 ].split( CO )[ lang ] );
	$( '#pdfwarning' ).attr( 'data-title', specialWindowsText[ lang + 19 * langScope ] );
	
	//Categories
	$( '.titlecat', '#categories' ).each( function ( index ) {
		$( this ).html( catText[ 1 + lang + (langScope + 1) * index ].split( LI )[ 0 ] );
	} );
	
	// modalLT
	$( '#modalLT-title' ).text( modalLTText[ 0 ].split( CO )[ lang ] );
	$( '#modalLT' ).find( '.modalLT-label' ).each( function ( index ) {
		$( this ).text( modalLTText[ index + 1 ].split( CO )[ lang ] );
	} );
	$( '#modalLT-infocalc' ).attr( 'data-text', modalLTText[ 6 ].split( CO )[ lang ] );
	$( '#modalLT' ).find( '.modalLT-input-circ' ).attr( 'placeholder', modalLTText[ 7 ].split( CO )[ lang ] );
	$( '#modalLT' ).find( '.lactomeas' ).attr( 'placeholder', modalLTText[ 8 ].split( CO )[ lang ] );
	$( '#modalLT-reset' ).attr( 'data-title', titlepricewidgetText[ 1 + lang + 5 * (langScope + 1) ] );
	
	// Change desc in boxes
	$( '.productboxshortdesc', '#categories' ).each( function () {
		$( this ).html( shortenText( $( this ).parent().parent().find( 'img' ).attr( 'data-title' ).split( LI )[ lang ] ) );
	} );
	
	// Biocidal mention
	var bioM = biocideText[ $.inArray( country, countries ) ];
	$( '#biocide' ).text( bioM.replace( ES, N ).replace( '¿', N ) ); // country dependent
	$( '.box-biocide', '#categories' ).each( function () {
		$( this ).text( bioM.replace( '¿', N ).split( ES )[ 0 ] + MO )
			.attr( 'data-title', bioM.replace( ES, N ) );
	} );
	
	specialCaptions();
	
}

function textDatabaseSetup() {
	
	countries = ['FR-fr', 'EN-en', 'DE-de', 'ES-es', 'CH-de', 'CH-fr'];
	
	biocideText = [ // !! Biocide warning phrases depend on country not language
		"¿Utilisez les biocides avec précaution. Avant toute utilisation lisez l’étiquette et les informations concernant le produit.& Avant toute utilisation, assurez-vous que celle-ci est indispensable, notamment dans les lieux fréquentés par le grand public. Privilégiez chaque fois que possible les méthodes alternatives et les produits présentant le risque le plus faible pour la santé humaine et animale et pour l’environnement.",
		"¿Use biocides safely. Always read the label and product information before use.",
		"¿Biozidprodukte vorsichtig verwenden. Vor gebrauch stets etikett und produktinformationen lesen.",
		"¿Utilice los biocidas de forma segura. Lea siempre la etiqueta y la información sobre el biocida antes de usarlo.",
		"¿Biozide vorsichtig verwenden. Vor Gebrauch stets Etikett und Produktinformationen lesen",
		"¿Utilisez les produits biocides avec précaution. Avant toute utilisation, lisez l'étiquette et les informations concernant le produit."
	];
	
	animalAttributes = [
		// Bkg color, 	Bkg y-pos, 	Milkings per year	Collection Frq 		Water 		Name|Plural						Water/milking m³
		//																 per cluster
		"#00783F,		210,		730,				4,					6,			Vache|Vaches,Cow|Cows,,			0.01",
		"#00783F,		310,		730,				4,					4,			Chèvre|Chèvres,Goat|Goats,,		0.0055",
		"#00783F,		250,		400,				2,					4,			Brebis|Brebis,Sheep|Sheep,,		0.007"
	];
	
	selectproductText = [
		"Sélectionnez un produit ci-dessous",
		"Choose a product below",
		"Wähle ein Produkt unten aus",
		"Seleccione un producto"
	];
	
	selectcatproductText = [
		"Faites votre choix parmi la liste complète des produits/options disponibles",
		"Check out our product/option offering and choose the right product",
		"Schauen Sie sich unser Produktangebot/Options und wählen Sie das richtige Produkt",
		"Descubra nuestra oferta de productos/opciones y escoger el producto adecuado"
	];
	
	infotitleText = [
		"Données générales",
		"General data",
		"Allgemeine Daten",
		"Datos del sitio"
	];
	
	rightmenuText = [
		"Général",
		"Main",
		"General",
		"Principal",
		"Autres documentations",
		"Other documentations",
		"Weitere Dokumentationen",
		"Otras documentaciones",
		"Mon logo",
		"My logo",
		"Mein Logo",
		"Mi logo",
		"Devise",
		"Currency",
		"Währung",
		"Moneda",
		"Options",
		"Settings",
		"Optionen",
		"Opciones",
		"Version",
		"Release",
		"Version",
		"Versión"
	];
	
	// Application options
	// Titles
	optionheadText = [				// First string corresponds to icon filename
		"memory",					// 0
		"Mémoriser",
		"Store",
		"Speichern",
		"Guardar",
		"prices",					// 1
		"Prix",
		"Prices",
		"Preis",
		"Precios",
		"sheets",					// 2
		"Infos estimation",
		"Estimate info",
		"Schätzung",
		"Estimación",
		// "shipping",					// 3
		// "Livraison",
		// "Delivery",
		// "Lieferung",
		// "Entrega",
		"download",					// 4
		"Nom du fichier",
		"File name",
		"Dateinamen",
		"Nombre del archivo",
		"sound",					// 6
		"Sons",
		"Sound",
		"Geräusche",
		"Sonidos",
		// "email",					// 7
		// "Envoi par mail",
		// "Email",
		// "Mail",
		// "Correo electrónico",
		"help",						// 8
		"Aide",
		"Help",
		"Hilfe",
		"Ayuda",
		"mosaic-small",				// 9
		"Mosaïque Produits",
		"Product tile",
		"Produkte Fliesen",
		"Azulejos Productos",
		"play-demo",				// 10
		"Démo",
		"Demo",
		"Demo",
		"Demo",
		"advsettings",				// 11
		"Options avancées",
		"Advanced Settings",
		"Erweiterte Einstellungen",
		"Opciones especiales",
		"settings",					// 12
		"Autres options",
		"Other settings",
		"andere Optionen",
		"Otras opciones"
	];
	
	// Search menu direct link
	searchDirectText = [
		"#animalchoice,Choix de l'espèce,Species choice,Auswahl der Arten,Elección de especies",
		"#mosaicprod,Mosaïque produits,Products tile,Produkte Fliesen,Azulejos productos",
		"#estimate-demo,Démo,Demo,Demo,Demo",
		"#priceList,Liste de prix,Pricelist,Preisliste,Lista de precios",
		"#options,Options,Settings,Optionen,Opciones",
		"#rightmenulogoImg,Mon logo,My logo,Mein Logo,Mi logo",
		"#splash-version,Infos version µ,µ release info,Version µ info,Info versión µ",
		"#diagnostic,Diagnostic,Rescue center,Diagnose,Diagnóstico",
		"#history,Historique messages,Messages history,Geschichte Nachrichten,Historico de mensajes"
	];
	
	// Diag topic texts
	diagtopicText = [
		"Version,Release,Version,Versión",
		"Navigateur,Browser,Browser,Navegador",
		"Affichage,Display,Anzeige,Visualización",
		"Fenêtre,Window,Fenster,Ventana",
		"Mémorisation,Storage,Auswendiglernen,Memorización",
		"Logo,Logo,Logo,Logo",
		"Date,Date,Datum,Fecha",
		"Infos mail/tél.,E-mail/phone information,Mail/Tel info,Info de correo electrónico/tel",
		"Prix,Prices,Preiz,Precios",
		"Saisie,Input,Eingang,Entrada",
		"Aperçu avant impression,Print preview,Druckansicht,Vista previa de impresión",
		"Chargement fichier,Load file,Loading Datei,Cargando archivo",
		"Sauvegarde fichier,File Backup,File Backup,Copia de seguridad de archivos",
		"Nom fichier sauvegardé,Filename,Nennen Sie gespeicherte Datei,Nombre archivo guardado",
		"Gamme produits,Product range,Produktauswahl,Gama de productos",
		"Corriger,Fix,Richtig,Arreglar",
		"Tout corriger,Fix all,korrigieren Sie alle,Arreglar todo",
		"Revérifier,Check again,Klicken Sie hier,Compruebe de nuevo",
		"Télécharger,Download,Herunterladen,Descargar",
		"Copie de secours de la liste de prix,Pricelist backup,Sicherungskopie der aktuellen Preisliste,Copia de seguridad de la lista de precios",
		"Envoi par mail,Email,Mail,Correo electrónico",
		"Corriger,Fix,Reparieren,Arreglar"
	];
	
	// Diag explain texts
	diagexplainText = [
		"Vérification non réalisable,Couldn't check if a new version is available,Verification unmöglich,Verificación imposible",
		"Nouvelle version du logiciel disponible,New software version available,Neue Software-Version zur Verfügung,Nueva versión de software disponible",
		"Votre version logicielle est très ancienne. Version disponible,Your software version is very old. New version available,Ihre Software-Version ist sehr alt. Version erhältlich,Su versión del software es muy viejo. Versión disponible",
		"Safari ne permet pas de bénéficier de toutes les fonctionnalités,Use a different browser than Safari to benefit from all features,Verwenden Sie einen anderen Browser als Safari von allen Funktionen zu profitieren,Utilice un navegador diferente a Safari para beneficiarse de todas las características",
		"Navigateur en mode zoom avant,Browser zoom in mode,Browser vorne Zoom-Modus,Modo de zoom hacia adelante",
		"Navigateur en mode zoom arrière,Browser zoom out mode,Browser rückwärts Zoom-Modus,Modo de zoom hacia atrás",
		"Agrandissez la fenêtre pour un fonctionnement optimal,Maximize the window for optimal operation,Maximieren Sie das Fenster für den optimalen Betrieb,Maximizar la ventana para un funcionamiento óptimo",
		"Les paramètres de mémorisation ne sont pas optimaux,Storage settings are not optimal,Speichereinstellungen nicht optimal,Ajustes de almacenamiento no son óptimas",
		"Aucun logo trouvé,No logo found,Kein logo gefunden,Ningún logo encontró",
		"Un logo a été trouvé mais n'est pas pris en compte sur l'estimation finale,A logo was found&#44; but is not included on the final estimate,Ein Logo wurde festgestellt&#44; aber das Ende ist nicht in der Schätzung enthalten,Un logotipo fue encontrado&#44; pero no está incluido en la estimación final",
		"La date de contact/visite est postérieure à celle d'aujourd'hui,The date of contact/visit is later than today,Das Datum der Kontakt/Besuch später als heute,La fecha de contacto / visita es más tarde de hoy",
		"Format du mail ou du téléphone incorrect,Invalid Email or phone number,Ungültige E-Mail oder Telefon,Formato de E-mail o teléfono incorrectos",
		"Liste de prix activée&#44; mais &DT prix manquants,Active pricelist&#44; but &DT prices are missing,Aktive Preisliste aber &DT fehlende Preise,Lista de precios activa&#44; pero &DT precios faltantes",
		"Saisie de données ou de prix incomplète dans l'estimation en cours,Missing data in the current estimation,Mangel an Informationen über die aktuelle Schätzung,Falta información en la estimación actual",
		"Non activé,Disabled,Behindert,Discapacitado",
		"Erreur lors du dernier chargement,Error during the last loading process,Fehler bei der letzten Ladevorgang,Error durante el último proceso de carga",
		"Indisponible,Unavailable,Nicht verfügbar,Indisponible",
		"Erreur lors de la dernière sauvegarde,Error during the last saving process,Fehler bei der letzten Speichervorgang,Error durante el último proceso de archivo",
		"Le nom du fichier n'inclut pas de date,No date in filename,Der Dateiname enthält nicht Datum,El nombre del archivo no incluye la fecha",
		"La liste de prix n'a pas été sauvegardée,No pricelist backup,Die Preisliste wurde nicht gespeichert,La lista de precios no se ha guardado",
		"Gamme produits pouvant être complétée,Product range could be completed,Produktpalette abgeschlossen werden konnte,La gama de productos se pudo completar",
		"Bravo ! Tout semble &DTOK…,Congratulations! everything seems &DTfine…,Herzlichen Glückwunsch! Alles scheint OK,Felicidades todo parece casi &DTperfecto",
		"&DT source@ d'amélioration identifiée@,&DT thing@ could be improved,Einige Dinge&#44; die verbessert werden könnten,&DT cosa@ a mejorar",
		"presque,almost,fast,casi",
		"Envoi de mails impossible (temporaire ou dépendant du navigateur),Sending mail is impossible (temporary or browser dependent),Versenden unmöglich ist (vorübergehende oder Browser abhängig),Envío de correo es imposible ( temporal o depende del navegador)"
	];
	
	// Mail text
	mailText = [
		"Envoi du mail,Sending email,Senden von E-Mail,Enviando email",
		"Mail envoyé !,Mail sent!,Mail gesendet!,Correo enviado!",
		"!Échec de l'envoi du mail&#44; essayez de nouveau…,!Mail couldn't be sent&#44; try again later…,!Mail konnte nicht gesendet werden,!El correo no pudo ser enviado",
		"De,From,Von,De",
		"À…,To…,An…,Para…,",
		"Cc…,Cc…,Cc…,Cc…",
		"Cci…,Bcc…,Cci…,CCO…",
		"Objet :,Subject:,Betreff:,Asunto:",
		"Joint :,Attached:,Angefügt:,Adjunto:",
		"Envoyer,Send,Senden,Enviar",
		"o,B,B,B",
		"SUR,OF,/,/",
		"Supprimer,Remove,Löschen,Borrar",
		"Initialisation…,Initializing…,Initialisierung…,Inicialización…",
		"Cliquez pour afficher le PDF,Click for preview,Klicken Sie für die Vorschau,Haga clic para la vista previa"
	];
	
	// modalLT text
	modalLTText = [
		"Besoins en eau,Water requirements,,",
		"Lactoduc de traite,Lactoduc inlet,,",
		"Lactoduc d'évacuation,Lactoduc outlet,,",
		"Faisceaux trayeurs,Clusters,,",
		"Récipients mesureurs,Measuring containers,,",
		"Chambre de réception,Outlet Chamber,,",
		"&IT m² (surface totale) x 7.5&thinsp;ℓ&nbsp;&nbsp;☛&nbsp;&nbsp;&JT&thinsp;ℓ d\'eau,&IT m² (whole surface) x 7.5&thinsp;ℓ&nbsp;&nbsp;☛&nbsp;&nbsp;&JT&thinsp;ℓ of water,,",
		"Circ.,Circ.,,",
		"Nbre,Qty,,"
	];
	
	// modalVF text
	modalVFText = [
		"valorisation des graminés et légumineuses",
		"valorization of grasses and legumes",
		"Aufwertung von Gräsern und Hülsenfrüchten",
		"valorización de gramíneas y leguminosas",
		"valorisation du maïs",
		"corn valorization",
		"Verwertung von Mais",
		"valorización del maíz",
		"valorisation des graminés, légumineuses et du maïs en Agriculture Biologique",
		"valorization of grasses, legumes and maize in organic farming",
		"Verwertung von Gräsern, Hülsenfrüchten und Mais im ökologischen Landbau",
		"valorización de gramíneas, leguminosas y maíz en agricultura ecológica",
		"valorisation des graminés et du maïs de transition",
		"",
		"",
		"",
		"valorisation du maïs",
		"corn valorization",
		"Verwertung von Mais",
		"valorización del maíz",
		"valorisation du maïs",
		"corn valorization",
		"Verwertung von Mais",
		"valorización del maíz"
	];
	
	// modalVFNote text
	modalVFNoteText = [
		// "Modal1?,Modal2?,Modal3?,FR,GB,DE,SP"
		"0,0,0,1,0,0,Graminés : 4.5 T de MS (15 T brutes/ha à 30 de MS),,,",
		"1,0,1,0,0,0,Dérobées : 4.5 T de MS (15 T brutes/ha à 30 de MS),,,",
		"1,0,1,0,0,0,Prairies naturelles : 3.5 T de MS (12T brutes/ha à 30% de MS),,,",
		"1,0,1,0,0,0,Méteil : 9 T de MS (36 T brutes/ha à 25 de MS),,,",
		"0,1,1,0,1,1,Ensilage de maïs : 13 T de MS (40 T brutes à 33% de MS),,,",
		"0,1,1,0,1,1,Maïs epi : 6 T de MS ( 11 T brutes/ha à 55% de MS),,,",
		"0,1,1,0,1,1,Maïs grain humide : 5.2 T de MS (8 T brutes/ha à 65% de MS),,,",
		"1,0,1,0,0,0,Luzerne :  4.5 T de MS (16 T brutes/ha à 28% de MS),,,"
	];
	
	specificText = [
		"Lactoduc,Lactoduc,Lactoduc,Lactoduc",
		"Protocole,Protocol,Protokoll,Protocolo",
		"Détails,Details,Details,Detalles"
	];
	
	valorTable      = [];
	valorTable[ 1 ] = [
		"notvisible,notvisible,cut1 cut,merge,merge,merge,merge,cut2 cut,merge,merge,merge,merge,cut3 cut,merge,merge,merge,merge",
		"dosing1 dosing,averageTMS,surface surface1,harvest harvest1,TMSha TMSha1,yield yield1,dosenb dosenb1,surface surface2,harvest harvest2,TMSha TMSha2,yield yield2,dosenb dosenb2,surface surface3,harvest harvest3,TMSha TMSha3,yield yield3,dosenb dosenb3",
		"meadow,,,,,,,,,,,,,,,,",
		"catch,,,,,,,,,,,",
		"meslin,,,,,,",
	];
	
	valorTable[ 2 ] = [
		"dosing2 dosing,averageTMS,surface surface1,harvest harvest1,TMSha TMSha1,yield yield1,dosenb dosenb1",
		"cornsilage,,,,,,",
		"earsilage,,,,,,",
		"wetgrainsilage,,,,,,"
	];
	
	valorTable[ 3 ] = [
		"notvisible,notvisible,cut1 cut,merge,merge,merge,merge,cut2 cut,merge,merge,merge,merge,cut3 cut,merge,merge,merge,merge",
		"notvisible,averageTMS,surface surface1,harvest harvest1,TMSha TMSha1,yield yield1,dosenb dosenb1,surface surface2,harvest harvest2,TMSha TMSha2,yield yield2,dosenb dosenb2,surface surface3,harvest harvest3,TMSha TMSha3,yield yield3,dosenb dosenb3",
		"meadow,,,,,,,,,,,,,,,,",
		"catch,,,,,,,,,,,",
		"meslin,,,,,,",
		"cornsilage,,,,,,",
		"earsilage,,,,,,",
		"wetgrainsilage,,,,,,"
	];

	valorTable[ 4 ] = [
		"notvisible,notvisible,cut1 cut,merge,merge,merge,merge,cut2 cut,merge,merge,merge,merge,cut3 cut,merge,merge,merge,merge",
		"dosing3 dosing,averageTMS,surface surface1,harvest harvest1,TMSha TMSha1,yield yield1,dosenb dosenb1,surface surface2,harvest harvest2,TMSha TMSha2,yield yield2,dosenb dosenb2,surface surface3,harvest harvest3,TMSha TMSha3,yield yield3,dosenb dosenb3",
		"gramines,,,,,,,,,,,,,,,,",
		"corntransition,,,,,,",
	];

	valorTable[ 5 ] = [
		"dosing1 dosing,averageTMS,surface surface1,harvest harvest1,TMSha TMSha1,yield yield1,dosenb dosenb1",
		"cornsilage,,,,,,",
		"earsilage,,,,,,",
		"wetgrainsilage,,,,,,"
	];

	valorTable[ 6 ] = [
		"dosing4 dosing,averageTMS,surface surface1,harvest harvest1,TMSha TMSha1,yield yield1,dosenb dosenb1",
		"cornsilage,,,,,,",
		"earsilage,,,,,,",
		"wetgrainsilage,,,,,,"
	];
	
	valorTableText                     = [];
	valorTableText[ 'dosing1' ]        = "50t brutes<br>/sachet,50t/bag,,";
	valorTableText[ 'dosing2' ]        = "100t brutes<br>/sachet,100t/bag,,";
	valorTableText[ 'dosing3' ]        = "40t brutes<br>/sachet,40t/bag,,";
	valorTableText[ 'dosing4' ]        = "50t brutes<br>/sachet,50t/bag,,";
	valorTableText[ 'dosenb' ]         = "Nombre de doses,Doses numb,,";
	valorTableText[ 'cut1' ]           = "1re coupe,First cut,,";
	valorTableText[ 'cut2' ]           = "2de coupe,Second cut,,";
	valorTableText[ 'cut3' ]           = "3ème coupe,Third cut,,";
	valorTableText[ 'averageTMS' ]     = "Taux de MS moyen (%),Aver. TMS (%),,";
	// valorTableText['VFsurfaces']=		"Surface totale (ha/an),Surfaces (ha/y),,";
	valorTableText[ 'surface' ]        = "Surface (ha),Surface (ha),,";
	valorTableText[ 'yield' ]          = "Rendement brut par ha,Raw yield/ha,,";
	valorTableText[ 'harvest' ]        = "Type de<br>récolte,Harvest type,,";
	valorTableText[ 'TMSha' ]          = "Tonnes de MS/ha,TMS/ha,,";
	valorTableText[ 'meadow' ]         = "Prairies naturelles,Natural meadows,,";
	valorTableText[ 'catch' ]          = "Dérobées,Catch crops,,";
	valorTableText[ 'meslin' ]         = "Méteil,Meslin,,";
	valorTableText[ 'cornsilage' ]     = "Maïs ensilage,Corn silage,,";
	valorTableText[ 'earsilage' ]      = "Maïs épi,Ear silage,,";
	valorTableText[ 'wetgrainsilage' ] = "Maïs grain humide,Wet grain silage,,";
	valorTableText[ 'corntransition' ] = "Maïs de transition,Transition Corn,,";
	valorTableText[ 'gramines' ]       = "Graminés,Grasses,,";

	valorHarvestText = [
		"Enrubannage,Wrapping,Verpackung,Envase",
		"Ensilage,Ensilage,Silierung,Ensilado",
		"Boudin,Flange,Flansch,Brida"
	];
	
	productText = [
		"produit,product,Produkt,producto",
		"produits,products,Produkte,productos"
	]
	categText   = [
		"dans cette catégorie,in this category,in dieser Kategorie,en esta categoria"
	]
	
	// Speaks for itself
	mainmenuText = [
		// ID, country, lang1, lang2…
		"animalchoice,all,Choix de l'espèce,Species choice,Auswahl der Arten,Elección de especies",
		"mosaicprod,all,Mosaïque produits,Products tile,Produkte Fliesen,Azulejos Productos",
		"priceList,all,Liste de prix,Pricelist,Preisliste,Lista de precios",
		"history,all,Historique messages,Messages history,Geschichte Nachrichten,Historico de mensajes",
		"diagnostic,all,Diagnostic,Rescue center,Diagnose,Diagnóstico",
		"estimate-demo,fr,Démo,Demo,Demo,Demo",
		// "mosaiccreate,all,Créer une gamme,Create range,Neue Reihe,nueva gama",
		"app-reset,all,Réinitialiser Tout,Reset All,Zurücksetzen,Reinicializar Todo"
	];
	
	// Yes or No
	dialogText = [
		"oui,yes,ja,si",
		"non,no,nicht,no",
		"Êtes-vous sûr(e) de vouloir réinitialiser les données ?,Do you really want to reset data?,Sind Sie sicher?,Estás seguro?",
		"Voulez-vous vraiment supprimer définitivement ce(s) fichier(s) ?,Do you really want to permanently delete these/this file?,Wollen Sie wirklich um diese Dateien dauerhaft löschen?,Realmente desea eliminar permanentemente estos archivos?",
		"Êtes-vous sûr(e) de vouloir quitter ?,Do you really want to quit?,Sind Sie sicher?,Estás seguro?"
	];
	
	// saved item texts
	optiondetailsText = [];
	
	optiondetailsText.push( [
		// variable, country, checked, lang1, lang2,…
		"user,all,yes,enabled,Utilisateur,User,Benutzer,Usuario",
		"months,all,no,enabled,Période d'estimation,Estimation period,Zeitraum Schätzung,período de estimación",
		"country,all,yes,enabled,Pays,Country,Land,País",
		"currency,all,yes,enabled,Devise,Currency,Währung,Moneda"
	] );
	
	optiondetailsText.push( [
		// variable, country, checked, lang1, lang2,…
		"priceperkg,all,yes,enabled,Prix au kilo,Price per kg,Preis pro kg,Precio por kg",
		"tax,all,no,enabled,Prix TTC,Price including tax,Preis inklusive MwSt.,Precio IVA incluído",
		"autoprice,all,yes,enabled,Insertion prix auto,Auto price entry,Automatische Einfuhrpreise,Entrada automática del precio",
		"globaldiscount,all,no,enabled,Remise globale<br>(sur tous les produits),Overall discount<br>(for all products),Insgesamt Rabatt<br>(für alle Produkte),Descuento global<br>(sobre todos los productos)",
		"udderdiscount,all,no,enabled,Remise globale<br>hygiène mamelle,Overall discount<br>Udder hygiene,Insgesamt Rabatt<br>für Euterhygiene,Descuento global<br>higiene de la ubre",
		"pwdprices,all,no,enabled,Liste protégée par mot de passe,Password protected pricelist,Preisliste per Passwort geschützt,Lista de precios protegida con<br>una contraseña",
		"pricecheckplus,all,no,enabled,Vérification approfondie<br>du fichier chargé,In-depth file check,Eingehende Dateiprüfung,Control minucioso<br>del archivo"
	] );
	
	optiondetailsText.push( [
		// variable, country, checked, lang1, lang2,…
		"costGMilk,all,yes,enabled,Coût aux 1000 L de lait/an,Cost per 1000L milk/year,Kosten 1000L Milch/Jahr,Precio 1000L/año",
		"costDCM,all,yes,enabled,Coût par &S8/mois,Cost per &S8/month,Kosten pro &S8/Monat,Precio por &S8/mes",
		"costGDCM,all,yes,enabled,Coût global par &S8/mois,Global cost per &S8/month,Gesamtkosten pro &S8/Monat,Precio total por &S8/mes",
		"distriblogo,all,no,enabled,Mon logo,My logo,Mein Logo,Mi logo",
		"agreement,all,yes,enabled,« Bon pour accord »,&#34;Approval&#34;,&#34;zur Unterschrift&#34;,&#34;Valido para acuerdo&#34;",
		"lowresPDF,all,no,enabled,PDF basse résolution (taille réduite),Low resolution PDF (smaller size),PDF niedrige Auflösung (kleinere Größe),Baja resolución PDF (tamaño pequeño)"
	] );
	
	// optiondetailsText.push([
	// variable, country, checked, lang1, lang2,…
	// 	"shippingbottom,all,yes,enabled,Frais de livraison en dernier,Shipping costs at the bottom,Versandkosten immer unten,Gastos de envio en la parte inferior"
	// ]);
	
	optiondetailsText.push( [
		// variable, country, checked, lang1, lang2,…
		"filecontactdate,all,yes,enabled,Inclure la date de contact/visite,Add contact/visit date,Fügen Sie das Datum des Kontakt,Añadir fecha de contacto/visita",
		"filedate,all,no,enabled,Inclure la date du jour,Add today's date,Fügen Sie das aktuelle Datum,Añadir fecha actual"
	] );
	
	optiondetailsText.push( [
		// variable, country, checked, lang1, lang2,…
		"sound,all,yes,enabled,Activer les sons,Enable sounds,Aktivieren/Deaktivieren des Sounds,Activar los sonidos"
	] );
	
	// optiondetailsText.push([
	// variable, country, checked, lang1, lang2,… Cci…,Bcc…,Cci…,CCO…",
	// "copycci,all,no,enabled,Envoi systématique en copie<br>cachée à l'expéditeur,Auto Cci copy to sender,Senden systematische Cci an<br>den Absender,Envío de una CCO sistemática<br>al remitente"
	/*"mailfilerec,all,no,enabled,Enregistrement auto du fichier<br>dans la base de données après envoi,Auto Save file in the database after<br>sending,Dateien Automatisches Speichern<br>in der Datenbank nach dem Senden,Auto Guardar archivo en la base<br>de datos después de enviar"*/
	// ]);
	
	optiondetailsText.push( [
		// variable, country, checked, lang1, lang2,…
		"helpacidalk,all,yes,enabled,Assistance lors du choix des<br>acides et des alcalins,Help for choice of acid/alkali product,Hilfe Wahl Säure/Alkali Produkt,Ayuda producto ácido/alcalino",
		"tooltips,all,yes,enabled,Activer les info-bulles,Enable tooltips,Aktivieren Tooltips,Globos de ayuda",
		"contact,all,yes,enabled,Validation de l'adresse mail<br>et du numéro de téléphone,Email/phone validation,Validierung E-Mail/Telefon,Validación del correo electrónico/teléfono"
	] );
	
	optiondetailsText.push( [
		// variable, country, checked, lang1, lang2,…
		"productmosaic,all,yes,enabled,Info catégorie(s) vide(s),Empty category info,Leere Kategorie Warning,Información de categoría vacía",
		"oldprodmosaic,all,no,enabled,Afficher les anciens produits,Show old products,Alte Produkte anzeigen,Ver productos antiguos"
	] );
	
	optiondetailsText.push( [
		// variable, country, checked, lang1, lang2,…
		"nodemotooltips,FR-fr,no,enabled,Désactiver les info-bulles,Disable tooltips,Tooltips deaktivieren,desactivar los globos de ayuda",
		"demoloop,FR-fr,no,enabled,Jouer en boucle,Demo mode loop,Spielen Sie in Schleife,Jugar en loop",
		"demobig,FR-fr,yes,enabled,Grandes info-bulles,Big tooltips,Große Tooltips,Grandes globos de ayuda",
		"speeddemo,FR-fr,yes,enabled,Rapide,Quick,Schnell,Rápida"
	] );
	
	optiondetailsText.push( [
		// variable, country, checked, lang1, lang2,…
		"AOC,FR-fr,no,enabled,Zone AOC,,,",
		"statictabs,all,yes,enabled,Onglets toujours visibles,Tabs always shown,Tabs immer sichtbar,Más aquí siempre visibles",
		"skipintro,all,no,enabled,Passer l'intro,Skip Intro,skip Intro,Saltar Intro"
	] );
	
	optiondetailsText.push( [
		// variable, country, checked, lang1, lang2,…
		"breedingwidget,all,yes,enabled,Widget installation client,Customer site widget,Widget-Client-Installation,Widget instalación del criador",
		// "localdocs,all,yes,enabled,Répertorier uniquement les<br>documentations locales<br>(Autres documentations),Show only English documentation,Nur lokale Dokumentationen anzeigen,Mostrar solo su documentación nacional",
		"date,all,yes,enabled,Date du jour par défaut<br>(Lancement/nouvelle estimation),Today's date<br>(launch/new estimate),Aktuelles Datum (start),Fecha actual (inicio)",
		"calendar,all,no,enabled,Thème calendrier clair,Light calendar theme,Weiß calendar Thema,Blanca tema de calendario"
	] );
	
	// Special Texts
	replaceCaptionText = [
		"Livraison",
		"Delivery",
		"Lieferung",
		"Entrega"
	];
	
	// Consumption info texts
	perYear               = [
		"par an",
		"per year",
		"pro Jahr",
		"por año"
	];
	animalinfoText        = [
		"Consommation estimée par &IT & par an ≈ &AW ",	// &AW = Average weight
		"Average consumption per &IT/year≈ &AW ",
		"Durchschnittlicher Verbrauch per &IT/Jahr~&AW ",
		"Consumo estimado por &IT/año ≈ &AW "
	];
	nutriinfoText         = [
		"Consommation estimée par &IT ≈ &AW ",	// &AW = Average
		"Average consumption per &IT ≈ &AW ",
		"Durchschnittsverbrauch pro &IT ≈ &AW ",
		"Consumo estimado por &IT ≈ &AW "
	];
	modeInfoText          = [
		"Spray<br>Manu,Manual<br>Spray,,",
		"Spray<br>Auto,Spray<br>kit,,",
		"Mousse<br>Manu,Manual<br>Foam,,",
		"Mousse<br>auto,Auto<br>Foam,,",
		"Trempage,Dipping,,"
	];
	timebasedinfoText     = [
		"Consommation estimée par an ≈ &AW ",			// &AW = Average weight
		"Average consumption per year ≈ &AW ",
		"Durchschnittlicher Verbrauch per Jahr ~ &AW ",
		"Consumo estimado por año ≈ &AW "
	];
	sprayinfoText         = [
		"Consommation estimée par griffe ≈ &AW ",			// &AW = Average spray (ml)
		"Average consumption per cluster ≈ &AW ",
		"Durchschnittlicher Verbrauch pro Cluster ~ &AW ",
		"Consumo estimado por grupo ≈ &AW "
	];
	clustersinfoText      = [
		"Quantité d'eau requise par jour pour &C griffes ≈ &W l",
		"Average required water volume per day ≈ &W l",
		"Durchschnitliche Wassermenge/Tag ~ &W I",
		"Volumen de agua necesario al día ≈ &W l"
	];
	sprayText             = [
		"En spray",
		"Spray",
		"Sprühen",
		"Pulverizador"
	];
	packinfoText          = [
		"Diamètre :,Diameter:,Durchmesser:,Diámetro:"
	];
	lactoducinfoText      = [
		"Quantité d'eau requise par jour ≈ &W l",
		"Water volume required per day≈ &W l",
		"Wassermenge≈ &W I",
		"Cantidad de agua≈ &W l"
	];
	watercircuitsinfoText = [
		"Déterminer le volume d'eau nécessaire",
		"Calculate the amount of water required",
		"Berechnen Sie die benötigte Wassermenge",
		"Calcular la cantidad de agua requerida"
	];
	tankinfoText          = [
		"Quantité d'eau estimée ≈ &W l",
		"Estimated water volume ≈ &W l",
		"Geschätzte Wassermenge &W I",
		"Cantidad de agua estimada ≈ &W l"
	];
	robotinfoText         = [
		"Consommation estimée par robot ≈ &AW ",	// &AW = Average weight
		"Average consumption per robot ≈ &AW ",
		"Durchschnittlicher Verbrauch pro AMS ~ &AW ",
		"Consumo estimado por robot ≈ &AW "
	];
	robotinfo2Text        = [
		"Consommation estimée par robot (60 VL) ≈ &AW ",	// &AW = Average weight
		"Average consumption per robot (60 DC) ≈ &AW ",
		"Durchschnittlicher Verbrauch pro AMS (60 K) ~ &AW ",
		"Consumo estimado por robot (60 VL) ≈ &AW "
	];
	robotinfo3Text        = [
		"avant/après",
		"before/after",
		"vor/nach",
		"antes/después"
	];
	TABSinfoText          = [
		"Quantité estimée pour 1 m³ d'eau ≈ &C ",
		"Average quantity per m³ of water ≈ &C ",
		"Durchschnittliche Menge pro m³ Wasser ~ &C ",
		"Cantidad por m³ de agua ≈ &C "
	];
	TABSinfoText2         = [
		"Quantité estimée pour &C dans &Q m³ d'eau",
		"Average quantity for &C in &Q m³ of water",
		"Durchschnittliche Menge pro &Q m³ Wasser ~ &C",
		"Cantidad por &C en &Q m³ de agua"
	];
	concentrationinfoText = [
		"Concentration indicative ≈ &C ",
		"Average concentration ≈ &C ",
		"Durchschnittliche Konzentration ~ &C ",
		"Concentración media ≈ &C "
	];
	footbathinfoText      = [
		"Saisir le nombre de pédiluves et de chgts/an",
		"Please enter footbath qty and changes/year",
		"Geben Sie Fußbad Menge & Änderung/Jahr",
		"Ingresa la cantidad de baños & cambia/año"
	];
	pawinfoText           = [
		"Saisir volume pédiluve, nombres de passages et de mois",
		"Please enter footbath volume, crossings and months",
		"Geben Sie das Fußbadvolumen, Überfahrten & Monate ein",
		"Ingrese el volumen del baño de pies, cruces y meses"
	];
	pawinfoTextSpray      = [
		"Dosage : &C",
		"Dosing: &C",
		"Dosierung: &C",
		"Dosificación: &C"
	];
	valorinfoText         = [
		"Nbre de doses pour le traitement des surfaces",
		"Number of doses for surface treatment",
		"Anzahl der Dosen für die Oberflächenbehandlung",
		"Número de dosis para tratamiento de superficie"
	];
	surfaceDetailText     = [
		"Fréq/an,Freq/y,,",
		"Surface infirmerie,Infirmery,,",
		"Surface salle de traite,Milking parlour,,",
		"Surface laiterie,Dairy,,",
		"Surface nurserie,Nursery,,",
		"Autres,Other,,"
	];
	
	eauDouceText = [
		"Eau douce,Soft Water,,"
	];
	
	// Generic estimate upper texts (consumption & unit price)
	consforcalcText      = [
		"Estim.",
		"Estim.",
		"Schät.",
		"Estim."
	];
	packagingcalcText    = [
		"Proposition",
		"Offer",
		"Angebot",
		"Propuesta"
	];
	unitkgpriceText      = [
		"Prix kg HT",
		"Price (kg)",
		"Preis (kg)",
		"Precio (kg)"
	];
	unitkgpriceTaxText   = [
		"Prix kg TTC",
		"Price (kg)",
		"Preis (kg)",
		"Precio (kg)"
	];
	unitpriceText        = [
		"Prix U HT",
		"Unit price",
		"Stückpreis",
		"Precio U."
	];
	unitpriceTaxText     = [
		"Prix U TTC",
		"Unit price",
		"Stückpreis",
		"Precio U."
	];
	totalsumText         = [
		"Total HT",
		"Total",
		"Gesamt",
		"Total"
	];
	totalsumTaxText      = [
		"Total TTC",
		"Total",
		"Gesamt",
		"Total"
	];
	grandtotalsumText    = [
		"TOTAL GÉNÉRAL HT :",
		"GRAND TOTAL:",
		"Gesamtsumme:",
		"Total general:"
	];
	grandtotalsumTaxText = [
		"TOTAL GÉNÉRAL TTC :",
		"GRAND TOTAL:",
		"Gesamtsumme:",
		"Total general:"
	];
	totaldiscountText    = [
		"Total remise HT :",
		"Total discount:",
		"Rabatt gesamt:",
		"Descuento total:"
	];
	totaldiscountTaxText = [
		"Total remise TTC :",
		"Total discount:",
		"Rabatt gesamt:",
		"Descuento total:"
	];
	// Discount text
	discountText         = [
		"Remise",
		"Discount",
		"Nachlass",
		"Descuento"
	];
	// Discount text
	disposalText         = [
		"Mise à disposition|Mise à D.",
		"Free of charge|Free of C.",
		"Kostenlos",
		"Sin cargo"
	];
	
	// Choose text for packaging
	packagingchooseText = [
		"Choisir…",
		"Choose…",
		"wähle…",
		"Elegir…"
	];
	
	// Months info text
	monthsinfoText = [
		"mois",
		"months",
		"Monate",
		"meses"
	];
	
	// Wastebin text
	wastebinText = [
		"Supprimer tout",
		"Remove all",
		"Auswahl löschen",
		"Borrar todo"
	];
	
	// Eraser text
	eraserText = [
		"Supprimer le contenu de toutes les cellules",
		"Reset all data",
		"Alle Daten zurücksetzen",
		"Restablecer todos los datos"
	]
	
	// Go texts
	goText = [
		"Mot de passe,Password,Passwort,Contraseña",
		"Afficher,Show,Aufstecken,Mostrar",
		"Vérifiez que la touche « majuscule » n'est pas activée,Maybe turn off Caps Lock before entering your password,Sie sich&#44;dass Ihre Umschaltsperre /Feststelltaste (Caps Lock) deaktiviert ist,Verifique que no haya presionado accidentalmente la tecla Caps Lock"
	];
	
	// Info when article can't be selected
	forbidText = [
		"*Produit similaire déjà sélectionné",
		"*A similar purpose article is already chosen",
		"*Produkt für ähnliche Anwendung bereits ausgewählt",
		"*Un producto similar ya ha sido elegido"
	];
	
	// File info texts
	fileInfoText = [
		"fichier de prix",
		"price file",
		"preisdatei",
		"archivo de precios",
		"fichier d'une estimation",
		"estimate file",
		"datei eine Schätzung",
		"archivo de un estimación"
	];
	
	// Warning messages
	warningText = [
		"!Votre navigateur est incompatible avec les fonctions de sauvegarde/chargement de fichiers.",
		"!Your browser is not compatible with load/save features, please use a recent one.",
		"!Browser nicht für load/save Features geeignet, bitte wählen Sie eine aktuelle Version.",
		"!Su navegador no es compatible con las funciones de cargar/guardar características, por favor, utilice uno más reciente.",
		"Votre fichier &ITa bien été enregistré et se trouve dans le dossier spécifique « Téléchargements ».",
		"File &IThas been saved in the downloaded files folder.",
		"Die Datei &ITwurde im Download-Ordner gespeichert.",
		"Su archivo &ITse ha guardado en la carpeta de descargas.",
		"!Erreur lors de l'enregistrement du fichier.",
		"!An error has occured while saving the file.",
		"!Fehler beim Speichern der Datei.",
		"!Error al guardar el archivo.",
		"!Désolé, ce type de fichier n'est pas pris en charge.",
		"!Sorry, this file type is not permitted.",
		"!Dieser Datei-Typ ist nicht zulässig.",
		"!Disculpe, el tipo de archivo no está permitido.",
		"Les données enregistrées ont bien été importées.",
		"Successful Data Import!",
		"Datenimport erfolgreich abgeschlossen!",
		"La importación de datos se ha efectuado con éxito!",
		"!Erreur lors du chargement du fichier (&IT), les données récupérées sont peut-être erronées…",
		"!An error has occured while loading the file (&IT), data may be corrupted…",
		"!Fehler beim hochladen der Datei (&IT), Daten möglicherweise beschädigt…",
		"!Se ha producido un error al cargar el archivo (&IT), los datos podrían ser erróneos…",
		"Veuillez patienter…",
		"Please wait…",
		"Bitte warten…",
		"Espere por favor…",
		"Chargement en cours…",
		"Loading…",
		"Daten werden geladen…",
		"Cargando…",
		"Impression…",
		"Printing…",
		"drucken…",
		"Imprimiendo…",
		"!Un ou plusieurs conditionnements n'existent pas à la gamme.",
		"!One or several packaging are missing in the current product range.",
		"!Ein oder mehrere Gebinde fehlen in der aktuellen Produkt Zusammenstellung.",
		"!Uno o varios envases no existen en la gama de productos.",
		"La valeur a été ajustée pour correspondre au conditionnement.",
		"The value has been adjusted to match packaging.",
		"Wert wird den Packungsgrößen angepasst.",
		"El valor se ha ajustado para que coincida con el envase.",
		"<strong>Désolé, aucun logo trouvé.</strong><small><br><br>Pour faire apparaitre un logo revendeur JPG,PNG ou GIF, l'enregistrer dans le dossier 'logo', sous le nom 'logo'.</small>",
		"<strong>Sorry, no logo found.</strong><small><br><br>Reseller logo (JPG,PNG or GIF) must be located in 'logo' folder and named 'logo'.</small>",
		"<strong>Kein Logo vorhanden</strong><small>.<br><br>Logo von Vertriebspartner muss im ordner 'logo' abgelegt sein und der Name 'logo'.</small>",
		"<strong>Lo siento, ningún logo encontrado.</strong><small><br><br>Para que aparezca un logotipo (JPG, PNG o GIF), guárdelo en la carpeta 'logo' con el nombre 'logo'.</small>",
		"!Un ou plusieurs produits sont actuellement sélectionnés dans cette catégorie.",
		"!One or several products are currently selected in this category.",
		"!Ein oder mehrere Produkte sind derzeit in dieser Kategorie ausgewählt.",
		"!Uno o varios productos están seleccionados en este categoría.",
		"!Des articles incompatibles avec cette option ont déjà été sélectionnés !",
		"!Incompatible articles have already been selected!",
		"!Inkompatible Artikel sind bereits ausgewählt worden!",
		"¡Artículos incompatibles ya han sido seleccionados!",
		"Produits selon l'offre KERSIA standard.",
		"Standard KERSIA range.",
		"KERSIA Standardangebot.",
		"Productos KERSIA estándar.",
		"!Cette option ne peut être modifiée si des prix ont déjà été saisis.",
		"!This option can not be changed if some prices have already been entered.",
		"!Diese Option kann nicht geändert werden, wenn Preise bereits eingegeben wurden.",
		"!Esta opción no se puede cambiar (conflicto con los precios existentes).",
		"Type de prix modifié.",
		"Price type changed.",
		"Preis Typ geändert.",
		"El tipo de precio se ha cambiado.",
		"?L'application ne s'est pas correctement fermée : vous pouvez récupérer des données sauvegardées.",
		"?Application has closed unexpectedly but you can restore a previous version of the file.",
		"?Die Anwendung wurde nicht richtig geschlossen, aber Sie können die vorherigen Daten wiederherzustellen.",
		"?µ no fue bien cerrada, pero se puede recuperar los datos anteriores.",
		"Aucune modification n'a été apportée.",
		"No changes made",
		"Keine Änderungen vorgenommen",
		"No ha habido cambios",
		"?Bonjour, heureux de vous retrouver !",
		"?Hello, so glad to see you again!",
		"?Hallo, Willkommen zurück!",
		"?Hola, me alegro de verte!",
		"!Cette option ne peut être modifiée si des articles ont déjà été sélectionnés.",
		"!This option can not be changed if some products have already been selected.",
		"!Diese Option kann nicht geändert, wenn Einzelteile sind bereits ausgewählt worden sein.",
		"!Esta opción no se puede cambiar si los artículos ya han sido seleccionados.",
		"Aucune autre documentation trouvée.",
		"No additional documentation found.",
		"Keine andere Dokumentation.",
		"Ninguna otra documentación encontrada.",
		"!Le format de l'adresse email n'est pas valide, merci de vérifier votre saisie…",
		"!Please enter a valid email address in the corresponding field…",
		"!Bitte geben Sie eine gültige E-Mailadresse ein…",
		"!Por favor, debe introducir una dirección de correo electrónico válida…",
		"!Le format du téléphone n'est pas valide, merci de vérifier votre saisie…",
		"!Please enter a valid phone number in the corresponding field.",
		"!Bitte geben Sie eine gültige Telefonnummer an.",
		"!Por favor, debe introducir un teléfono válido.",
		"?Nouvelle estimation",
		"?New estimation",
		"?Neue Schätzung",
		"?Nueva estimación",
		"?À tout moment, vous pouvez appuyer sur « Échap » pour quitter le mode démo…",
		"?Demo running: press 'escape' to quit demo…",
		"?Demo: drücken Sie die Escape-Taste, um zu beenden…",
		"?Demo: pulse la tecla de escape para salir de la demo…",
		"?Démo terminée, merci à vous de l'avoir visionnée !",
		"?End of the demo. Thanks for watching!",
		"?Ende der Demo",
		"?Fin de la demo",
		"?Sortie du mode démo",
		"?Demo mode exit",
		"?Ende der Demo",
		"?Fin de la demo",
		"?µ a été réinitialisé.",
		"?µ has been reset.",
		"?µ zurückgesetzt wurde.",
		"?µ se ha restablecido.",
		"!Veuillez agrandir la taille de la fenêtre…",
		"!Please, expand the size of the window…",
		"!Bitte vergrößern Sie die Größe des Fensters…",
		"!Por favor, ampliar el tamaño de la ventana…",
		"Cette option ne sera activée qu'en présence d'une connexion Internet",
		"You must be online to enable this option.",
		"Diese Option wird in der Gegenwart von einer Internet-Verbindung aktiviert werden.",
		"Esta opción será activada en la presencia de una conexión a Internet.",
		"Une remise de &IT% a été appliquée à l'ensemble des produits.",
		"A &IT% discount has been applied to all products.",
		"Ein Rabatt von &IT% wurde auf alle Produkte angewendet.",
		"Un descuento de &IT% se ha aplicado sobre todos los productos",
		"Une remise spéciale hygiène mamelle de &IT% a été appliquée.",
		"An udder hygiene special &IT% discount has been applied.",
		"Eine spezielle Euterhygiene &IT% Rabatt angewendet wurde.",
		"Un descuento special Higiene de la ubre de &IT% se ha aplicado.",
		"Suppression de la remise appliquée à l'ensemble des produits.",
		"The discount applied to all products has been removed.",
		"Das Löschen der Rabatt auf alle Produkte angewendet.",
		"El descuento aplicado a todos los productos se ha eliminado.",
		"Suppression de la remise spéciale hygiène mamelle.",
		"The udder hygiene special discount has been removed.",
		"Die spezielle Euterhygiene Rabatt gelöscht wurde.",
		"El descuento especial higiene de la ubre ha sido borrado.",
		"!Erreur lors du chargement du fichier (&IT), les données n'ont pas été importées.",
		"!An error has occured while loading the file (&IT): data unchanged.",
		"!Fehler beim hochladen der Datei (&IT), die Daten wurden nicht importiert.",
		"!Se ha producido un error al cargar el archivo (&IT), los datos no han sido importados.",
		"Pensez à effectuer une sauvegarde disque du fichier de prix.",
		"Remember to perform a disk backup of the price file.",
		"Denken Sie daran, ein Disk-Backup der Preisdatei durchzuführen.",
		"Recuerde que debe hacer una copia de seguridad de los datos.",
		"Les prix ne seront plus saisis automatiquement.",
		"Prices will not be entered automatically.",
		"Die Preise werden nicht automatisch eingetragen werden.",
		"Los precios no se introducen automáticamente.",
		"?Une nouvelle version (&IT) est disponible ➤ cliquez ici pour la télécharger !",
		"?A new version (&IT) is available ➤ click here to download it!",
		"?Eine neue Version (&IT) ist verfügbar ➤ Klicken Sie hier, um zu aktualisieren!",
		"?Una nueva versión (&IT) está disponible ➤ clic aquí para actualizar!",
		"?Une nouvelle version d'µ (&IT) est disponible, contactez KERSIA pour obtenir un lien de téléchargement.",
		"?A new version (&IT) is available, please contact your local KERSIA office to upgrade.",
		"?Eine neue Version verfügbar ist, wenden Sie KERSIA zu aktualisieren µ.",
		"?Una nueva versión (&IT) está disponible, por favor póngase en contacto con nuestra oficina para actualizar µ.",
		"!Aucun prix n'a été saisi.",
		"!No price set.",
		"!Keine Preis eingegeben wurde.",
		"!No hay precio que haya introducido.",
		"?La date saisie est postérieure à celle d'aujourd'hui.",
		"?The date is greater than today.",
		"?Datum grösser als heute.",
		"?La fecha es mayor que el de hoy.",
		"!Désolé, aucune connexion internet n'a été détectée…",
		"!Sorry, no Internet connection was found…",
		"!keine Internet-Verbindung gefunden…",
		"!Lo siento, sin conexión a Internet encontrado…",
		"!Les champs « De » et « À… » doivent contenir une adresse…",
		"!Some email information is missing…",
		"!Sie müssen E-Mail- Informationen zu liefern…",
		"!Usted debe proporcionar la información de correo electrónico…",
		"µ redémarre…",
		"µ is starting up…",
		"µ startet neu…",
		"Se reinicia µ…",
		"!Désolé, l'envoi de mails semble impossible. Essayez ultérieurement et/ou avec un autre navigateur…",
		"!Sorry, sending email seems impossible. Try later and/or with another browser…",
		"!Es tut uns leid, E-Mails senden scheint unmöglich. Versuchen Sie es später und/oder mit einem anderen Browser…",
		"!Lo sentimos, el envío de correo electrónico parece imposible. Intente más tarde y/o con otro navegador",
		"Création du PDF en cours…",
		"Generating PDF file…",
		"Erzeugen pdf-Datei…",
		"Se está creando el archivo PDF…",
		"!Merci de rédiger un message afin de minimiser le risque d'être considéré comme spammeur…",
		"!Thanks for writing a message (antispam)",
		"!Dank für das Schreiben einer Nachricht (Anti-Spam)",
		"!Gracias por Redactar un mensaje (antispam)",
		"!Désolé, le nombre d'onglets ouverts est à son maximum…",
		"!Sorry, the maximum number of open files has been reached…",
		"!Die maximale Anzahl der offenen Dateien hat, erreicht ist…",
		"!Lo sentimos, se ha alcanzado el número máximo de archivos abiertos…",
		"!Désolé, utilisez Firefox, Chrome ou Opera pour bénéficier de cette fonctionnalité…",
		"!Sorry, Internet Explorer doesn't support this feature. Use Firefox, Chrome or Opera instead…",
		"!Aufgrund einer Einschränkung des Internet Explorer, ist diese Funktion nicht verfügbar. Verwenden Sie Firefox, Chrome oder Opera…",
		"!Lo sentimos, pero debido a una limitación de Internet Explorer, esta función no está disponible. Utilice Firefox, Chrome o Opera…",
		"?Veuillez lancer la démo avec µ en mode « bovins »",
		"?Please launch the demo with µ in cow mode",
		"?Bitte starten Sie die Demo im Kuhmodus",
		"?Inicie la demostración en modo vaca",
		"¿Fichier non trouvé",
		"¿File not found",
		"¿Leider wird die Datei zu fehlen",
		"¿El archivo falta",
		"?Voir dans la console la liste des fichiers non trouvés (&IT)",
		"?See in the console the list of files not found (&IT)",
		"?Siehe in der Konsole eine Liste von Dateien nicht gefunden (&IT)",
		"?Ver en la consola una lista de archivos que no se encuentra (&IT)",
		"Synchronisation réussie !",
		"Successful synchronization!",
		"erfolgreicher Synchronisation!",
		"Sincronización exitosa!",
		"!Aucun produit actuellement à la vente dans cette catégorie…",
		"!There are no products for sale in this category…",
		"!In dieser Kategorie sind derzeit keine zum Verkauf stehenden Produkte verfügbar…",
		"!No hay productos actualmente en venta en esta categoría…",
		"?Des problèmes ont été identifiés : cliquez ici pour effectuer un diagnostic complet…",
		"?Some problems were identified: click here to access rescue center…",
		"?Probleme wurden identifiziert: Klicken Sie hier, um eine vollständige Diagnose ausführen…",
		"?Algunos problemas se han identificado: haga clic aquí para ejecutar un diagnóstico completo…",
		"?Vous êtes en mode « création de gamme » ➤ cliquez sur les produits/conditionnements souhaités ➤ Sauvegardez/nommez ensuite votre liste",
		"?You're in 'create mode' ➤ click on products/packaging to select them ➤ Rename and save your list",
		"?Click on Produkte/em Verpackung speichern Sie Ihre  ➤ Liste auswählen",
		"?clic en los productos/envases para seleccionar ➤ Guarde su lista"
	];
	
	// Contact defaults
	contactdefaultText = [
		"Visite/contact", "Contact/visit", "Kontakt/Besuch", "Contacto/visita",
		"Établi par…", "Prepared by…", "Angelegt von…", "Elaborado por…",
		"Nom", "Name", "Name", "Nombre",
		"GAEC…", "Farming group…", "Landwirtschaftlicher Verband", "Grupo",
		"Nom Éleveur", "Breeder's name", "Name des Tierzüchters", "Nombre del criador",
		"adressemail@mail.fr", "mailaddress@mail.com", "Email Adresse@mail.com", "correo@mail.com",
		"06 01 02 03 04", "06 01 02 03 04", "06 01 02 03 04", "06 01 02 03 04",
		"Adresse", "Address", "Adresse", "Dirección",
		"Infos utiles…", "Useful info…", "Notizen", "Información importante"
	];
	
	// distributor info defaults
	distribremarksText = [
		"Remarques (n'apparaîtront pas sur l'estimation imprimée)",
		"Remarks (will not be printed on the estimate)",
		"Hinweise (werden nicht ausgedruckt)",
		"Observaciones (no se imprimirán)"
	];
	
	milkrefvalText = ["Qté", "Qty", "Menge", "Cantidad"];
	
	// widgets' titles
	titlewidgetText      = [
		"exit", "Fermer", "Close", "Zumachen", "Cerrar",
		"load", "Ouvrir fichier", "Open file", "offene Datei", "Abrir archivo",
		"save", "Enregistrer", "Save", "Sichern", "Guardar",
		"undo", "Annuler", "Undo", "Zurück", "Anular",
		"redo", "Rétablir", "Redo", "Weiter", "Rehacer",
		"print", "Imprimer", "Print", "Drucken", "Imprimir",
		"sound", "Activer/désactiver les sons", "Enable/disable sounds", "Aktivieren/deaktivieren des Sounds", "Activar/desactivar los sonidos",
		"mailbox", "Envoyer l'estimation par mail", "Send the estimation by mail", "Mail", "Correo electrónico",
		"calendar", "Ajuster la période (mois)", "Define period (months)", "Zeitraum", "Definir periodo",
		"search", "Rechercher", "Search", "Suche", "Buscar",
		"viewswitcher", "Vue restreinte", "Quick view", "Übersicht", "Vista rápida"
	];
	titlepricewidgetText = [
		"close", "Fermer", "Close", "Zumachen", "Cerrar",
		"load", "Ouvrir fichier", "Open file", "offene Datei", "Abrir archivo",
		"save", "Enregistrer", "Save", "Sichern", "Guardar",
		"missing", "Prix non renseignés", "Missing prices", "fehlende Preise", "Precios faltantes",
		"sort", "Trier par ordre alphabétique", "Sort alphabetically", "Alphabetisch", "Ordenar alfabéticamente",
		"clear", "Tout réinitialiser", "Clear all data", "Alle zurücksetzen", "Reiniciar todo"
	];
	for ( var i = 0; i < titlepricewidgetText.length; i++ ) {
		if ( i % (langScope + 1) ) {
			titlepricewidgetText[ i ] = '<' + titlepricewidgetText[ i ];
		}
	}
	titleanimalwidgetText = [
		"Masquer,Hide,Verbergen,Esconder"
	];
	
	// Databoxes' titles
	titledataBoxText = [
		"Volume du tank à lait", "Milk tank capacity", "Kapazität Milchtank", "Capacidad del tanque de leche",
		"Nombre de robots de traite", "Robotic systems", "Automatische Melksysteme", "Sistema de robots",
		"Nombre de postes (griffes)", "Clusters", "Melkplatz", "Pezoneras",
		"Nombre d'animaux", "Number of animals", "Anzahl der Tiere", "Número de animales"
	];
	
	// Other data
	otherDataInfoText = [
		// #ID,FR,EN,DE,SP (|abbreviation for small bottom left widget)
		"milkProd,Production laitière par &IT/an (L)|Production,Milk production per &IT/year (L)|Production,,",
		"heifers,Nombre de génisses/an|Génisses,Number of heifers/year|Heifers,,",
		"calvingAge,Âge au vêlage en mois|Age vêlage,Age at calving in months|Calving age,,",
		"grassHa,Nombre d'hectares d'herbe ensilés ou enrubannés|Ha Herbe,Number of hectares of grass silted or wrapped|Grass Ha,,",
		"cornHa,Nombre d'hectares de maïs ensilés|Ha Maïs,Number of hectares of corn silag|Corn Ha,,"
	];
	
	// Mosaic titles/other texts
	specialWindowsText = [
		"Afficher conditionnements",
		"Display packaging",
		"Verpackung",
		"Mostrar los envases",
		"Fermer",
		"Close",
		"Zumachen",
		"Cerrar",
		"À l'unité",
		"Sold singly",
		"Einzeln",
		"Por unidad",
		"produits",
		"products",
		"produkte",
		"productos",
		"Catégorie(s) sans produits",
		"Categories with no product",
		"Kategorien ohne Produkt",
		"Categoría(s) sin producto",
		"Faites glisser votre curseur vers le bas ou vers le haut pour faire défiler les tuiles",
		"Move the mouse pointer up or down to show hidden tiles",
		"Bewegen Sie den Mauszeiger nach oben oder unten, um versteckte Fliesen zeigen",
		"Mueve el ratón arriba o abajo para ver otros azulejos",
		"Liste de prix",
		"Pricelist",
		"Preisliste",
		"Lista de precios",
		"Prix au kilo",
		"Price per kg",
		"Preis pro kg",
		"Precio por kg",
		"Historique messages",
		"Messages log",
		"Historisch",
		"Historico",
		"Aucun élément trouvé…",
		"No item found…",
		"Keine Einträge gefunden…",
		"No items encontrado…",
		"Fichier|Fichiers",
		"File|Files",
		"Datei|Dateien",
		"Archivo|Archivos",
		"Corbeille",
		"Recycle Bin",
		"Papierkorb",
		"Papelera de reciclaje",
		"Fichiers avec prix",
		"Files with price",
		"Dateien, die mit Preis",
		"Archivos con precio",
		"Rechercher",
		"Search",
		"Suche",
		"Buscar",
		"Vider la corbeille",
		"Empty Recycle Bin",
		"Papierkorb leeren",
		"Vaciar papelera de reciclaje",
		"Rafraîchir",
		"Refresh",
		"Aktualisieren",
		"Actualizar",
		"Ajouter à cette catégorie",
		"Add to this category",
		"hinzufügen",
		"Añadir",
		"Préparer une solution mère à 3000 ppm de DCCNa, soit 60 pastilles/100 l et injecter à 0,8 ml/L via la pompe doseuse.",
		"Prepare a stock solution at 3000 ppm of DCCNa, ie 60 tabs per 100 l and inject at 0.8 ml/L via the dosing pump.",
		"Bereiten Sie eine Stammlösung mit 3000 ppm DCCNa vor, dh 60 Tabletten pro 100 l und injizieren Sie mit 0,8 ml/L über die Dosierpumpe.",
		"Prepare una solución madre a 3000 ppm de DCCNa, es decir, 60 pestañas por cada 100 l, e inyecte a 0,8 ml/L a través de la bomba de dosificación.",
		"pixels",
		"pixels",
		"Pixel",
		"píxeles",
		"PDF de taille réduite, de qualité moindre, afin d'accélerer son envoi par mail. Vous pouvez désactiver cette réduction via les options",
		"PDF with reduced file size (lower quality) in order to be sent quicker. Check the options to disable this reducing step",
		"Mit PDF-Dateigröße um reduziert (niedrigere Qualität) schneller gesendet werden soll. Überprüfen Sie die Optionen zum Deaktivieren dieser Schritt Reduzieren",
		"Reducción del tamaño del archivo PDF (de menor calidad) con el fin de enviar más rápido. Revise las opciones para desactivar esta reducción",
		"Gamme",
		"Range",
		"Produkt",
		"Linea",
		"Référence laitière",
		"Milk reference quantity",
		"Milch Referenzmenge",
		"Cantidad de referencia leche",
		"Ajouter à une ou plusieurs catégorie(s)",
		"Add to one or several categories",
		"hinzufügen",
		"Añadir",
	];
	
	newtabText = [
		"Nouvelle estimation",
		"New estimation",
		"Neue Schätzung",
		"Nueva estimación",
		"Cloner l'estimation",
		"Clone estimation",
		"Clone Schätzung",
		"Estimación Clone"
	];
	
	// New product
	ABText = [
		"AB", "OF", "öL", "AE"
	];
	
	// Copyright
	copyrightText = "©" + NBSP;
	
	// Months slider info text
	infosliderText = [
		"Ajustez la période de référence",
		"Set the estimation period",
		"Eingabe geschätzter Zeitraum",
		"Indique el periodo estimado"
	];
	
	// Search results limit alert
	searchresultsText = [
		"&R premiers résultats (sur &T)",
		"First &R results (of &T)",
		"Erstes &R Resultat (of &T)",
		"&R primeros resultados (sobre &T)"
	];
	
	// Search default text
	searchdefaultText = [
		"Mot clé, nom de produit…",
		"Keywords, product name…",
		"Stichwort, Produktname…",
		"Palabras clave, nombre de producto…"
	];
	
	// Window close text
	windowCloseText = [
		"Les données que vous avez saisies pourraient être perdues !!",
		"Data you have entered may not be saved!!",
		"Eingegebe Daten werden nicht gespeichert!!",
		"Los datos que has insertado podrían perderse!!"
	];
	
	// Add to cart
	addtocartnewText = [
		"1 nouvel article pris en compte",
		"1 new item taken into account",
		"1 neuer Artikel enthalten",
		"1 nuevo artículo incluido"
	];
	
	addtocartmodifiedText = [
		"1 article modifié",
		"1 modified item",
		"1 Produkt fit",
		"1 artículo modificado"
	];
	
	// Lightbox texts
	lightboxText = [
		"Fiche produit",
		"Product sheet",
		"Produktblatt",
		"Ficha producto",
		"FT/FDS",
		"TDS/MSDS",
		"TDS/MSDS",
		"TDS/MSDS"
	];
	
	// Date picker texts
	datepickerdayText   = [
		"lundi,mardi,mercredi,jeudi,vendredi,samedi,dimanche,",
		"monday,tuesday,wednesday,thursday,friday,saturday,sunday",
		"montag,dienstag,mittwoch,donnerstag,freitag,samstag,sonntag",
		"lunes,martes,miercoles,jueves,viernes,sabado,domingo",
		"aujourd'hui",
		"today",
		"heute",
		"hoy",
		"hier",
		"yesterday",
		"gestern",
		"ayer",
		"il y a une semaine ou plus…",
		"A week ago or more…",
		"gibt es eine Woche oder mehr…",
		"hay una semana o más…"
	];
	datepickermonthText = [
		"janvier,février,mars,avril,mai,juin,juillet,août,septembre,octobre,novembre,décembre",
		"january,february,march,april,may,june,july,august,september,october,november,december",
		"januar,februar,märz,april,mai,juni,juli,august,september,oktober,november,dezember",
		"enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre"
	];
	
	// Estimate sheet texts
	sheetText = [
		"Estimation du", "Estimate -", "Schätzung", "Estimación",
		"Effectuée par : &S1 (&S2)", "Prepared by: &S1 (&S2)", "Bereitgestellt von: &S1 (&S2)", "Realizado por: &S1 (&S2):",
		"Durée choisie :", "Selected period:", "Gewählter Zeitraum:", "Periodo seleccionado:",
		"Voir descriptifs produits en page", "See product detail on page", "Produktdetails auf Seite", "Ver detalles del producto en página",
		"&S4 griffe", "&S4 cluster", "&S4 Melkplatz", "&S4 pezonera",
		"&S5 robot", "&S5 robot", "&S5 Roboter", "&S5 Robot",
		"Votre installation : &S3 &S8", "Your breeding: &S3 &S8", "Sie halten: &S3 &S8", "Su instalación: &S3 &S8",
		"et un tank à lait de &S6 litres.", "and a &S6 litres milk tank", "und einen &S6 l Milchtank", "y un tanque de leche de &S6 litros",
		"Offre sur &S7", "Offer for &S7", "Angebot für &S7", "Oferta para &S7",
		"Estimation besoins annuels", "1 year needs estimation", "Geschätzter Jahresbedarf", "Necesidades est. para un año",
		"Produit", "Product", "Produktname", "Producto",
		"TOTAL GÉNÉRAL HT :", "GRAND TOTAL:", "Gesamtsumme:", "Total general:",
		"page &P1 sur &P2", "page &P1 of &P2", "Seite &P1 von &P2", "Pagina &P1 de &P2",
		"suite", "continued", "weiter", "Continue",
		"Les produits proposés", "Product overview", "Produktübersicht", "Nuestra oferta de productos",
		"catégories", "categories", "Kategorien", "Categorías",
		"note :", "note:", "Beachte:", "Nota:",
		"Offert", "Free", "kostenlos", "Oferta",
		"Total remise HT :", "Total discount:", "Gesamtrabatt:", "Descuento total:",
		"C/&S8/m", "C/&S8/m", "K/&S8/M", "P/&S8/m",
		"Bon pour accord", "Approval", "zur Unterschrift", "Valido para acuerdo",
		"Date", "Date", "Datum", "Fecha",
		"Signature", "Signature", "Unterschrift", "Firma",
		"Désignation", "Designation", "Bezeichnung", "Designación"
	];
	
	// Categories
	// The second part of the title (*) is for the estimate sheets
	catText = [
		"old", "Biosécurité du site", "Plant biosecurity", "Biosicherheit", "Bioseguridad",
		"act", "Hygiène de la mamelle en avant-traite", "Udder hygiene before milking", "Euterhygiene vor dem Melken", "Higiene de la ubre antes del ordeño",
		"act", "Désinfection des manchons trayeurs", "Clusters disinfection", "Melkplatzdesinfektion", "Desinfección de las pezoneras",
		"act", "Hygiène de la mamelle en après-traite", "Udder hygiene after milking", "Euterhygiene nach dem Melken", "Higiene de la ubre después del ordeño",
		"act", "Entre les traites", "Between milkings", "Zwischen den Entwürfen", "Entre los ordeños",
		"act", "Traite robotisée", "Robotic systems", "Melkroboter", "Sistema de robots",
		"act", "Nettoyage de la machine à traire", "Milking machine cleaning", "Reinigungsdurchgang", "Circuitos internos",
		"act", "Tank à lait", "Milk tank", "Milchtank", "Tanque de leche",
		"act", "Nettoyage et désinfection des surfaces", "Cleaning and disinfection of surfaces", "Reinigung und Desinfektion von Oberflächen", "Limpieza y desinfección de superficies",
		"act", "Hygiène des pattes", "Paw hygiene", "Hygiene der Pfoten", "Higiene de las patas",
		"act", "Hygiène des véhicules", "Vehicle hygiene", "Fahrzeughygiene", "higiene del vehículo",
		"old", "Hygiène locaux et matériels agricoles", "Various cleaning products", "Verschiedene Reinigungsprodukte", "Varios productos de higiene",
		"act", "Traitement de l'eau de boisson", "Water treatment", "Wasserbehandlung", "Tratamiento de aguas",
		"old", "Accessoires", "Accessories", "Zubehör", "Accesorios",
		"act", "Automates", "Controllers", "Steuerungen", "Controladores",
		"act", "Nutrition animale", "Animal nutrition", "Tierernährung", "Nutrición animal",
		"act", "Valorisation des fourrages", "Valorization of fodder", "Verwertung von Futter", "Valorización del forraje",
		"act", "Catalogue|OFFRES SPÉCIALES…", "Catalogue|SPECIAL OFFERS…", "Katalog|SPEZIALANGEBOT…", "Catálogo|OFERTAS ESPECIALES"
	];
	
	subCatText = [
		"footbath,pédiluves,footbath,Fußbad,Baño de pies",
		"hands,mains,hands,Hände,manos"
	];
	
	demoSequenceText = [
		"Suivez-moi !,Follow me!,,",
		"L'interface d'µ se divise en 3&nbsp;parties,,,",
		"La première est dédiée à la navigation et aux options&#44;<br>elle sera détaillée peu après…,,,",
		"La seconde centralise les informations générales<br>à renseigner…,,,",
		"Et la dernière regroupe les catégories relatives aux différents postes d'hygiène,,,",
		"Rentrons dans le vif du sujet…,,,",
		"Saisissez ici la date de la visite ou du contact,,,",
		"puis toutes les informations qui figureront sur l'estimation finale…,,,",
		"et ainsi de suite pour les autres champs…,,,",
		"Ajustez maintenant ici les paramètres<br>d'installation du client,,,",
		"Sélectionnez ensuite vos produits KERSIA,,,",
		"Accédez aux documents essentiels en 1&nbsp;clic sur le produit…,,,",
		"…ainsi qu'à la description courte,,,",
		"Choisissez votre conditionnement,,,",
		"Ajustez si nécessaire la consommation,,,",
		"Enfin&#44; saisissez le prix,,,",
		"Faites de même pour les autres catégories,,,",
		"La barre de menus est accessible en permanence et contient un widget central,,,",
		"Ce widget regroupe les fonctions principales d'µ,,,",
		"Sauvegardez votre estimation et créez un&nbsp;PDF,,,",
		"Chargez une estimation réalisée précédemment…,,,",
		"Annulez ou rétablissez une action,,,",
		"Imprimez ou prévisualisez votre estimation,,,",
		"L'estimation finale (PDF) est<br>généralement composée de 2 pages,,,",
		"La deuxième page reprend les photos et caractéristiques principales des produits choisis,,,",
		"…et comme pour les autres pages&#44; elle peut faire figurer<br>le logo du distributeur,,,",
		"Vous pouvez alors imprimer l'estimation…,,,",
		// "…l'envoyer par mail si vous êtes connecté(e) à Internet,,,",
		"ou quitter la prévisualisation pour&#44; par exemple&#44; affiner des paramètres,,,",
		"Vous avez également la possibilité<br>de lancer une recherche…,,,",
		"…de visualiser uniquement les catégories sélectionnées,,,",
		"…d'ajuster la période souhaitée<br>en faisant glisser le curseur,,,",
		"…de changer de pays ou de langue,,,",
		"Le menu de droite permet d'accéder à d'autres fonctionnalités…,,,",
		// "Affichez des brochures ou autres documents utiles,,,",
		"Visualisez le logo qui se trouvera sur l'estimation<br>(sous format jpg&#44; png ou gif),,,",
		"Modifiez la devise utilisée,,,",
		"Et paramétrez µ à votre guise,,,",
		"Par exemple en choisissant le type de prix (au kilo ou au bidon)…,,,",
		"Pour finir&#44; accédez ici à la version d'µ<br>et aux navigateurs compatibles…,,,",
		"…et découvrez bien d'autres fonctionnalités disponibles avec µ !…,,,",
		",,,"
	];
	
	closePopupText = {
		labelOk:     { fr: 'Ok', en: 'Ok', de: 'Ok', es: 'Ok' },
		labelCancel: { fr: 'Annuler', en: 'Cancel', de: 'Zurück', es: 'Anular' },
		title:       {
			fr: 'Êtes-vous sûr(e) de vouloir quitter ?',
			en: 'Do you really want to quit?',
			de: 'Sind Sie sicher?',
			es: 'Estás seguro?'
		}
	};
	
}

function docDatabaseSetup() {
	
	// Documents 	Multilanguages names ("fr,en,de,es,ch"…), #Generic filename
	rawdocText = [
		"Guide d'hygiène en production laitière,Hygiene guide for dairy production,Hygiene guide fur die milchproduktion,,#Dairy-Hygiene-Guide|pdf",
		",,,,Hygiene Ratgeber für Milchviebetriebe,Guide d'hygiène en élevage,#Breeding-Hygiene-Guide|pdf",
		",,,,Schwerpunkt Euterhygiene,Focus sur l'hygiène mamelle,#Udder-Hygiene-Focus|pdf",
		"Guide d'hygiène en traite robotisée,#Robot-Hygiene-Guide|pdf",
		"Guide d'hygiène en salle de traite,#Milking-Hygiene-Guide|pdf",
		"Programme Traite Robotisée av. générateur d'eau bouillante,#Robot-Prog-1|pdf",
		"Programme Traite Robotisée av. chauffe-eau classique,#Robot-Prog-2|pdf",
		"Guide de l'eau de boisson animale,,,,,Guide de l'eau de boisson animale,#Water-Guide|pdf"
	];
	
	// Converts array in a user-friendly array "name1,path1,thumb1","name2,path2,thumb2"…
	k = 0;
	
	for ( var i = 0; i < rawdocText.length; i++ ) {
		docSplit       = rawdocText[ i ].split( CO );
		docSplitLength = docSplit.length;
		genericFile    = docSplit[ docSplitLength - 1 ];
		for ( var j = 0; j < docSplitLength - 1; j++ ) {
			if ( docSplit[ j ] ) {
				docFilename  = docFolder + SL + countries[ j ] + SL + docTypes[ 0 ] + DH + genericFile.substring( 1 ).split( LI )[ 0 ] + DH + countries[ j ] + PO + genericFile.split( LI )[ 1 ];
				docThumbname = imgFolder + SL + thumbsFolder + SL + docTypes[ 0 ] + DH + genericFile.substring( 1 ).split( LI )[ 0 ] + DH + countries[ j ] + '.png';
				docInfo[ k ] = docSplit[ j ] + CO + docFilename + CO + docThumbname;
				k++;
			}
		}
	}
	
}

function productDatabaseSetup() {
	
	// Documents list
	docTypes = ['FP', 'DOCFDS'];
	
	//
	//Products: Name 								Type 				Consumption cow*goat*sheep										Robot 		Unit (nd is for not divisible)				Documents 														Image filename					Designation 																																																																																																																																								Packaging 						density 	Packaging unit									Application 																Old 	Calculation mode 	Specials 								youTube 								Animals 					SAP 															AB 		Biocide
	//																	between|after																kg* when canister/bucket price only
	// 																	ManS,AutoS,ManF,AutoF,Dipping
	prodText = [
		"DELIVERY", "#Delivery", "", "", "", "", "DELIVERY", "Frais de livraison directe|Shipping costs|Versandkosten|Gastos de envío", "", "", ",,,", "toutes,all,,", "old", "auto", "NAP", "", "cow,goat,sheep", "", "", "",
		"ANTI-GERM TRAYOR", "#Udder des", "3,7,1.8,3,3|3,7,1.8,3,3*1.5,3.5*1.64,3.78", "420|420", "kg,kg,kg,kg", "1,Trayor%20FR%20(avant%20et%20apr%C3%A8s).pdf?csf=1&e=m3A6jP", "ANTI-GERM-TRAYOR", "Désinfectant des trayons à base de biphényl-2-ol, prêt à l'emploi ● Agit en 30 secondes ● Riche en agents cosmétiques ● Utilisable en avant et en après-traite||Desinfektion der Zitzen auf Basis von Biphenyl-2-ol, gebrauchsfertig ● wirkt innerhalb 30 Sekunden ● Reich an kosmetischen Wirkstoffen ● kann vor und nach dem Melken angewendet werden|", "20,60,200,1000", "", "kg,kg,kg,kg", "hygiène mamelle*OPP,udder hygiene*OPP,,", "", "manual", "AOC(after)", "", "cow,goat,sheep", "018298,018295,018297,018296", "", "B",
		"GLYCOLAC DUO", "#Udder des", "3,7,1.8,3,3|3,7,1.8,3,3*1.5,3.5*1.64,3.78", "420|420", "kg,kg,kg,kg", "", "GLYCOLAC-DUO", "Désinfectant double usage, à base d’acide lactique et d’acide glycolique. S’utilise sur les trayons en mousse ou en spray, avant ou après la traite. Laisse la peau du trayon souple et adoucie après la désinfection.|||", "2,20,60,220", "", "kg,kg,kg,kg", "hygiène mamelle*Acides glycolique + lactique,udder hygiene*Glycolic + Lactic Acids,,", "", "manual", "AOC(after)", "", "cow,goat,sheep", "", "", "B",
		"TRAYOR +", "#Udder des", "3,7,1.8,3,3|3,7,1.8,3,3*1.5,3.5*1.64,3.78", "420|420", "kg,kg,kg,kg", "", "TRAYOR-+", "Désinfectant double usage, à base d’acide lactique et d’acide glycolique. S’utilise sur les trayons en mousse ou en spray, avant ou après la traite. Laisse la peau du trayon souple et adoucie après la désinfection.|||", "2,20,60,220", "", "kg,kg,kg,kg", "hygiène mamelle*Acides glycolique + lactique,udder hygiene*Glycolic + Lactic Acids,,", "", "manual", "AOC(after)", "", "cow,goat,sheep", "", "", "B",
		"TRAYOLINE", "#Udder des", "3,7,1.8,3,3|3,7,1.8,3,3*1.5,3.5*1.64,3.78", "420|420", "kg,kg,kg,kg", "", "TRAYOLINE", "Désinfectant des trayons à base de biphényl-2-ol, prêt à l'emploi ● Agit en 30 secondes ● Riche en agents cosmétiques ● Utilisable en avant et en après-traite||Desinfektion der Zitzen auf Basis von Biphenyl-2-ol, gebrauchsfertig ● wirkt innerhalb 30 Sekunden ● Reich an kosmetischen Wirkstoffen ● kann vor und nach dem Melken angewendet werden|", "20,60,200,1000", "", "kg,kg,kg,kg", "hygiène mamelle*OPP,udder hygiene*OPP,,", "", "manual", "AOC(after)", "", "cow,goat,sheep", "021417,021418,021416,026292", "", "B",
		"PREMOUSS NET", "#Udder des", ",,1.8,3", "", "kg,kg,kg,kg", "", "PREMOUSS-NET", "Prêt à l'emploi, Premouss net forme une mousse adhérente sur le trayon ● Son fort pouvoir détergent facilite le nettoyage du trayon en avant-traite ● Essuyage rapide et laisse la peau du trayon souple|||", "22,60", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "", "manual", "AOC(after)", "", "cow,goat,sheep", "012049,012050", "", "",
		"HYPRODERM", "#Udder des", "0", "", "kg,kg,kg,kg", "", "HYPRODERM", "Détergent utilisé en avant traite contenant des bases lavantes douces, dont la glycérine ● Il élimine les souillures du trayon sans agresser l'épiderme du trayon et favorise l'assouplissement de la peau ● À diluer à 0,5% dans un seau et y faire tremper les lavettes ● Utiliser une lavette par vache|||", "10,21,60,210", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "", "manual", "AOC(after)", "", "cow,goat,sheep", "005246,005253,005261,005257", "", "",
		"CHLONET", "#Udder des", "0", "", "kg,kg,kg,kg", "", "CHLONET", "Détergent utilisé en avant traite contenant des bases lavantes douces, dont la glycérine ● Il élimine les souillures du trayon sans agresser l'épiderme du trayon et favorise l'assouplissement de la peau ● À diluer à 0,5% dans un seau et y faire tremper les lavettes ● Utiliser une lavette par vache|||", "10", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "", "manual", "AOC(after)", "", "cow,goat,sheep", "003131", "", "",
		"NATIGREEN", "#Udder des", "3,7,1.8,3", "", "kg,kg,kg,kg", "", "NATIGREEN", "Désinfectant à base d'acide lactique ● Prêt à l'emploi, agit en 30 sec ● Il contient aussi des tensio-actifs pour le nettoyage du trayon et de la glycérine pour l'assouplissement de la peau ● À appliquer en mousse ou en pulvérisation, puis essuyer à l'aide d'un papier à usage unique ou d'une lavette|||", "20,60", "", "kg,kg,kg,kg", "hygiène mamelle*Acide lactique,udder hygiene*Lactic acid,,", "", "manual", "AOC(after)", "", "cow,goat,sheep", "026312,026313", "AB", "",
		"PREFOAM +", "#Udder des", ",,1.8,3", "", "kg,kg,kg,kg", "1,Prefoam%20+%20fr.pdf?csf=1&e=GmNQjE", "PREFOAM-+", "Désinfectant à base du complexe LSA® et de tensio-actifs, PREFOAM + est prêt à l'emploi ● Sa mousse est adhérente au trayon et s'essuie facilement à l'aide d'un papier à usage unique ou d'une lavette ● Laisse la peau du trayon propre, hydratée et assouplie|||", "2x2,10,20,60,200,1000", "", "kg,kg,kg,kg", "hygiène mamelle*LSA®,udder hygiene*LSA®,,", "", "manual", "AOC(after)", "", "cow,goat,sheep", "011660,002753,002762,002778,002773,011228", "AB", "B",
		"GLYCOLAC FOAM", "#Udder des", ",,1.8,3", "", "kg,kg,kg,kg", "", "GLYCOLAC-FOAM", "Désinfectant moussant à appliquer sur les trayons avant la traite, à base d’acide lactique et d’acide glycolique. Le produit s’essuie avec un papier à usage unique ou avec une lavette. Laisse la peau du trayon souple et adoucie.|||", "2,20,60,220", "", "kg,kg,kg,kg", "hygiène mamelle*Acides glycolique + lactique,udder hygiene*Glycolic + Lactic Acids,,", "", "manual", "AOC(after)", "", "cow,goat,sheep", "", "AB", "B",
		"BESTFOAM +", "#Udder des", ",,1.8,3", "", "kg,kg,kg,kg", "", "BESTFOAM-+", "Désinfectant à base du complexe LSA® et de tensio-actifs, BESTFOAM + est prêt à l'emploi ● Sa mousse est adhérente au trayon et s'essuie facilement à l'aide d'un papier à usage unique ou d'une lavette ● Laisse la peau du trayon propre, hydratée et assouplie|||", "20,60,200", "", "kg,kg,kg,kg", "hygiène mamelle*LSA®,udder hygiene*LSA®,,", "", "manual", "AOC(after)", "", "cow,goat,sheep", "002790,002791,016241", "AB", "B",
		"TRAYMIX ACTIV'", "#Udder des", "1.5", "", "kg,kg,kg,kg", "", "TRAYMIX-ACTIV'", "Produit de trempage épais, bleu et marquant sur le trayon ● Désinfectant puissant à base de dioxyde de chlore et d'acide lactique, le produit protège aussi les trayons grâce aux agent humectants, emollient et assouplissant présent dans la formule ● S'utilise après mélange 50/50 avec le TRAY MIX BASE|||", "2,21,62,228", "", "kg,kg,kg,kg", "hygiène mamelle*Dioxyde de chlore,udder hygiene*Chlorine dioxide,,", "", "manual", "", "", "cow", "017703,017701,017704,017702", "", "B",
		"TRAYMIX BASE", "#Udder des", "1.5", "", "kg,kg,kg,kg", "", "TRAYMIX-BASE", "Produit de trempage épais, bleu et marquant sur le trayon ● Désinfectant puissant à base de dioxyde de chlore et d'acide lactique, le produit protège aussi les trayons grâce aux agent humectants, emollient et assouplissant présent dans la formule ● S'utilise après mélange 50/50 avec le TRAY MIX ACTIV'|||", "2,19,58,212", "", "kg,kg,kg,kg", "hygiène mamelle*Dioxyde de chlore,udder hygiene*Chlorine dioxide,,", "", "manual", "", "", "cow", "017707,017705,017708,017706", "", "B",
		"PROPISDERM", "#Udder Des", "3", "", "kg,kg,kg,kg", "", "PROPISDERM", "Désinfectant à base de chlorhexidine, PROPISDERM est un produit de trempage épais prêt à l'emploi ● Il s'utilise sur le trayon après la traite et est enrichi en substances adoucissantes|||", "10,22,220", "", "kg,kg,kg,kg", "hygiène mamelle*Chlorhexidine,udder hygiene*Chlorhexidin,,", "", "manual", "", "", "cow", "003138,003144,003152", "AB", "B",
		"DIP-IO 2500", "#Udder Film", "3", "", "kg,kg,kg,kg", "1,Dip-io%202500%20FR.pdf?csf=1&e=jI055R", "DIP-IO-2500", "Solution épaisse à fort pouvoir cosmétique pour la désinfection des trayons en après-traite ● Contient 2500 ppm d'iode, sans gouttage ● A appliquer par trempage sur toute la longueur du trayon|||", "4x5,10,22,60,120,220,1000", "", "kg,kg,kg,kg", "hygiène mamelle*Iode,udder hygiene*Iodine,,", "", "manual", "", "", "cow", "012311,012312,012317,012315,012313,012314,012316", "AB", "B",
		"DIP-IO 5000", "#Udder Film", "3", "", "kg,kg,kg,kg", "1,Dip-io%205000%20FR.pdf?csf=1&e=V35V5y", "DIP-IO-5000", "Solution épaisse à fort pouvoir cosmétique pour la désinfection des trayons en après-traite ● Contient 5000 ppm d'iode, ses propriétés rhénologiques lui confèrent une bonne tenue sur le trayon sans gouttage ● A appliquer par trempage sur toute la longueur du trayon ● Idéal pour grand troupeau|||", "2,4x5,10,22,60,120,220,1000", "", "kg,kg,kg,kg", "hygiène mamelle*Iode,udder hygiene*Iodine,,", "", "manual", "", "", "cow", "013611,012391,012392,012389,012394,012393,012390,012395", "AB", "B",
		"DERMADINE", "#Udder Film", "3", "", "kg,kg,kg,kg", "", "DERMADINE", "Solution épaisse à fort pouvoir cosmétique pour la désinfection des trayons en après-traite ● Contient 5000 ppm d'iode, ses propriétés rhénologiques lui confèrent une bonne tenue sur le trayon sans gouttage ● A appliquer par trempage sur toute la longueur du trayon ● Idéal pour grand troupeau|||", "22,60,220", "", "kg,kg,kg,kg", "hygiène mamelle*Iode,udder hygiene*Iodine,,", "", "manual", "", "", "cow", "003571,003572,023830", "AB", "B",
		"LIQ-IO 2500", "#Udder Film", "3,7", "", "kg,kg,kg,kg", "1,Liq-io%202500%20FR.pdf?csf=1&e=QTlSNJ", "LIQ-IO-2500", "Liq-io 2500 est un désinfectant contenant 2500 ppm d'iode, enrichie en substances adoucissantes, émollientes et hydratantes|||", "4x5,10,22,60,120,200,1000", "", "kg,kg,kg,kg", "hygiène mamelle*Iode,udder hygiene*Iodine,,", "", "manual", "", "", "cow", "012801,012805,012807,012808,012806,012804,012803", "AB", "B",
		"LIQ-IO 5500", "#Udder Film", "3,7", "", "kg,kg,kg,kg", "1,Liq-io%205500%20FR.pdf?csf=1&e=zMvZE6", "LIQ-IO-5500", "Produit spray après-traite à haut pouvoir désinfectant et cosmétique ● Liq-io 5500 contient 5500 ppm d'iode et est enrichi en substances adoucissantes et hydratante pour la peau du trayon ● Produit prêt à l'emploi|||", "200,120,4x5,60,10,1000,22", "", "kg,kg,kg,kg", "hygiène mamelle*Iode,udder hygiene*Iodine,,", "", "manual", "", "", "cow,goat,sheep", "012876,012877,012878,012879,012880,012881,012882", "AB", "B",
		"IODIP", "#Udder Film", "3,7", "", "kg,kg,kg,kg", "", "IODIP", "Produit spray après-traite à haut pouvoir désinfectant et cosmétique ● Iodip contient 5500 ppm d'iode et est enrichi en substances adoucissantes et hydratante pour la peau du trayon ● Produit prêt à l'emploi|||", "22,60,200,1000", "", "kg,kg,kg,kg", "hygiène mamelle*Iode,udder hygiene*Iodine,,", "", "manual", "", "", "cow,goat,sheep", "005940,005942,005941,005943", "AB", "B",
		"LIQ-IO C", "#Udder des", "0", "", "kg,kg,kg,kg", "1,Liq-io%20C%20FR.pdf?csf=1&e=YoJGri", "LIQ-IO-C", "Désinfectant à base d'iode, concentré à diluer ● 25 000 ppm d'iode à diluer à 10 % (bactéricidie, levuricidie, algicidie) ou 20 % (pour action virucide supplémentaire) ● Contient différents agents cosmétiques (glycérine et lanoline)|||", "4x5,10,20,60,120,220,1000", "", "kg,kg,kg,kg", "hygiène mamelle*Iode,udder hygiene*Iodine,,", "", "manual", "", "", "cow", "012939,012943,012941,012945,012942,012940,012944", "AB", "B",
		"HY-COSMETIC", "#Udder des", "3", "", "kg,kg,kg,kg", "", "HY-COSMETIC", "Produit de trempage épais désinfectant et surgraissant à base d'acide lactique, molécule naturelle ● Prend soin de la peau du trayon ● Produit prêt à l'emploi, qui peut s'utiliser tout au long de l'année|||", "2,22,60,220", "", "kg,kg,kg,kg", "hygiène mamelle*Acide lactique,udder hygiene*Lactic acid,,", "", "manual", "", "", "cow", "014942,014021,015112,016861", "AB", "B",
		"COSMADINE", "#Udder des", "3", "", "kg,kg,kg,kg", "", "COSMADINE", "Produit de trempage épais désinfectant et surgraissant à base d'acide lactique, molécule naturelle ● Prend soin de la peau du trayon ● Produit prêt à l'emploi, qui peut s'utiliser tout au long de l'année|||", "22,60,220", "", "kg,kg,kg,kg", "hygiène mamelle*Acide lactique,udder hygiene*Lactic acid,,", "", "manual", "", "", "cow", "016441,016442,017822", "AB", "B",
		"FILMADINE", "#Udder des", "3", "", "kg,kg,kg,kg", "1,Filmadine%20FR.pdf?csf=1&e=0QrXwg", "FILMADINE", "Produit de trempage désinfectant, épais et surgraissant. A base d'acide lactique, molécule naturelle ● Prend soin de la peau du trayon ● Produit prêt à l'emploi, idéal pour les troupeaux à faible risque|||", "10,22,60,200", "", "kg,kg,kg,kg", "hygiène mamelle*Acide lactique,udder hygiene*Lactic acid,,", "", "manual", "", "", "cow", "003882,003899,003924,008683", "AB", "B",
		"HM VIR FILM", "#Udder Film", "3", "", "kg,kg,kg,kg", "1,HM%20VIR%20Film%20FR.pdf?csf=1&e=LwddFv", "HM-VIR-FILM", "Produit de trempage épais cosmétique et désinfectant à base de LSA® ● HM Vir Film contient de l'Aloe Vera reconnu pour ses vertus anti-inflammatoires, cicatrisantes et astringentes ● Le produit est efficace contre les germes responsables des mammites ● Prêt à l'emploi, il peut s'utiliser toute l'année|||", "2,10,22,60,220,1000", "", "kg,kg,kg,kg", "hygiène mamelle*LSA®,udder hygiene*LSA®,,", "", "manual", "", "", "cow", "004180,003502,004124,004135,004130,004140", "AB", "B",
		"GLYCOLAC FILM", "#Udder Film", "3", "", "kg,kg,kg,kg", "", "GLYCOLAC-FILM", "Produit barrière à utiliser après la traite à base d’acide lactique et d’acide glycolique. Laisse un film protecteur sur le trayon, qui s’enlève facilement à la traite suivante.|||", "2,22,60,220", "", "kg,kg,kg,kg", "hygiène mamelle*Acides glycolique + lactique,udder hygiene*Glycolic + Lactic Acids,,", "", "manual", "", "", "cow", "", "AB", "B",
		"TRAYFILM +", "#Udder Film", "3", "", "kg,kg,kg,kg", "", "TRAYFILM-+", "Produit barrière à utiliser après la traite à base d’acide lactique et d’acide glycolique. Laisse un film protecteur sur le trayon, qui s’enlève facilement à la traite suivante.|||", "2,22,60,220", "", "kg,kg,kg,kg", "hygiène mamelle*Acides glycolique + lactique,udder hygiene*Glycolic + Lactic Acids,,", "", "manual", "", "", "cow", "", "AB", "B",
		"COSMETO'FLASH", "#Udder Film", "3", "", "kg,kg,kg,kg", "", "COSMETO-FLASH", "Produit de trempage épais cosmétique et désinfectant à base de LSA® ● Cosmeto'Flash contient de l'Aloe Vera reconnu pour ses vertus anti-inflammatoires, cicatrisantes et astringentes ● Le produit est efficace contre les germes responsables des mammites ● Prêt à l'emploi, il peut s'utiliser toute l'année|||", "22,60,220", "", "kg,kg,kg,kg", "hygiène mamelle*LSA®,udder hygiene*LSA®,,", "", "manual", "", "", "cow", "004170,004171,007678", "AB", "B",
		"HM VIR FILM+", "#Udder Film", "3", "", "kg,kg,kg,kg", "1,HM%20VIR%20Film%20+%20FR.pdf?csf=1&e=0kzl94", "HM-VIR-FILM+", "Produit de trempage très marquant à base de LSA®, complexe actif et désinfectant très puissant ● HM Vir Film + contient également de l'Aloe Vera, reconnu pour ses vertus anti-inflammatoires, cicatrisantes et astringeantes ● Le produit vert laisse une très bonne marque sur les trayons ● Prêt à l'emploi|||", "4x5,10,22,60,120,220,1000", "", "kg,kg,kg,kg", "hygiène mamelle*LSA®,udder hygiene*LSA®,,", "", "manual", "", "", "cow", "025807,025809,025806,025812,025810,025811,025808", "AB", "B",
		"HM VIR SPRAY", "#Udder Film", "3,7", "420", "kg,kg,kg,kg", "", "HM-VIR-SPRAY", "Désinfectant à base du complexe LSA®, prêt à l'emploi ● Contient du propylène glycérol|||", "10,22,60,220,1000", "", "kg,kg,kg,kg", "hygiène mamelle*LSA®,udder hygiene*LSA®,,", "", "manual", "", "", "cow", "003442,003448,003457,003454,003460", "AB", "B",
		"NOVA TREMP'", "#Udder Film", "3,7", "420", "kg,kg,kg,kg", "", "NOVA-TREMP", "Désinfectant à base du complexe LSA®, prêt à l'emploi ● Contient du propylène glycérol|||", "22,60,220,1000", "", "kg,kg,kg,kg", "hygiène mamelle*LSA®,udder hygiene*LSA®,,", "", "manual", "", "", "cow", "003476,003478,003477,003479", "AB", "B",
		"HYPRED QUICK SPRAY", "#Udder des", "3,7*1.5,3.5*1.64,3.78", "420", "kg,kg,kg,kg", "1,Hypred%20Quick%20Spray%20fr.pdf?csf=1&e=nDwQ7e", "HYPRED-QUICK-SPRAY", "Désinfectant à base du complexe LSA®, prêt à l'emploi ● Désinfection « Flash » des trayons et de la base de la mamelle, agit en 30 secondes ● Enrichi en agents hydratants (propylène glycol, glycérine, allantoïne) et assouplisant ● Utilisable en avant et en après-traite|||", "4x5,10,22,60,220,1000", "", "kg,kg,kg,kg", "hygiène mamelle*LSA®,udder hygiene*LSA®,,", "", "manual", "", "", "cow,goat,sheep", "002798,002801,002811,002823,002820,002826", "AB", "B",
		"GLYCOLAC SPRAY", "#Udder des", "3,7*1.5,3.5*1.64,3.78", "420", "kg,kg,kg,kg", "", "GLYCOLAC-SPRAY", "Désinfectant pour les trayons à pulvériser, à base d’acide lactique et d’acide glycolique. Utilisation possible en robot ou traite conventionnelle, avant et après la traite.|||", "2,20,60,220", "", "kg,kg,kg,kg", "hygiène mamelle*Acides glycolique + lactique,udder hygiene*Glycolic + Lactic Acids,,", "", "manual", "", "", "cow,goat,sheep", "", "AB", "B",
		"SPRAY 2A", "#Udder des", "3,7*1.5,3.5*1.64,3.78", "420", "kg,kg,kg,kg", "", "SPRAY-2A", "Désinfectant à base du complexe LSA®, prêt à l'emploi ● Désinfection « Flash » des trayons et de la base de la mamelle, agit en 30 secondes ● Enrichi en agents hydratants (propylène glycol, glycérine, allantoïne) et assouplisant ● Utilisable en avant et en après-traite|||", "22,60,220,1000", "", "kg,kg,kg,kg", "hygiène mamelle*LSA®,udder hygiene*LSA®,,", "", "manual", "", "", "cow,goat,sheep", "002833,002835,002834,002836", "AB", "B",
		"DERMIODE", "#Udder des", "3", "", "kg,kg,kg,kg", "1,Hypred%20Quick%20Spray%20fr.pdf?csf=1&e=nDwQ7e", "DERMIODE", "Désinfectant à base d'iode, produit de trempage épais prêt à l'emploi ● Ses propriétés rhéologiques lui assure une bonne tenue sur le trayon, sans gouttage et donc sans perte de produit|||", "10,22,60,200", "", "kg,kg,kg,kg", "hygiène mamelle*Iode,udder hygiene*Iodine,,", "", "manual", "", "", "cow", "005426,005427,05428,013950", "AB", "B",
		"NOVODIP", "#Udder des", "3", "", "kg,kg,kg,kg", "", "NOVODIP", "Produit de trempage désinfectant utilisable après-traite. Combinaison d'acide lactique et de chlorhexidine pour une action rapide et une protection des trayons. Prêt à l'emploi|||", "22,60,220", "", "kg,kg,kg,kg", "hygiène mamelle*Chlorhexidine,udder hygiene*Chlorhexidin,,", "", "manual", "", "", "cow", "26873,29797,29798", "AB", "B",
		"FILMA'ZUR +", "#Udder des", "3", "", "kg,kg,kg,kg", "", "FILMA-ZUR-+", "Produit de trempage désinfectant utilisable après-traite. Combinaison d'acide lactique et de chlorhexidine pour une action rapide et une protection des trayons. Prêt à l'emploi|||", "22,60,220", "", "kg,kg,kg,kg", "hygiène mamelle*Chlorhexidine,udder hygiene*Chlorhexidin,,", "", "manual", "", "", "cow", "", "AB", "B",
		"DIP BLUE LT ACTIV'", "#Udder Des", "1.5", "", "kg,kg,kg,kg", "", "DIP-BLUE-LT-ACTIV'", "Produit à base de dioxyde de chlore et d'acide lactique, pour la désinfection des trayons par trempage après la traite ● Efficacité prouvée pendant 8 jours après le mélange ● S'utilise en mélange 50/50 avec le DIP BLUE LT BASE ● Enrichi en glycérine, le produit marque le trayon d'une couleur bleue|||", "23,62", "", "kg,kg,kg,kg", "hygiène mamelle*Dioxyde de chlore,udder hygiene*Chlorine dioxide,,", "", "manual", "", "", "cow", "016586,016587", "", "B",
		"DIP BLUE LT BASE", "#Udder Des", "1.5", "", "kg,kg,kg,kg", "", "DIP-BLUE-LT-BASE", "Produit à base de dioxyde de chlore et d'acide lactique, pour la désinfection des trayons par trempage après la traite ● Efficacité prouvée pendant 8 jours après le mélange ● S'utilise en mélange 50/50 avec le DIP BLUE LT ACTIV' ● Enrichi en glycérine, le produit marque le trayon d'une couleur bleue|||", "22,58", "", "kg,kg,kg,kg", "hygiène mamelle*Dioxyde de chlore,udder hygiene*Chlorine dioxide,,", "", "manual", "", "", "cow", "016591,016588", "", "B",
		"GOLDEN MIX ACTIV'", "#Udder Des", "1.5", "", "kg,kg,kg,kg", "1,Golden%20Mix%20FR.pdf?csf=1&e=56v92P", "GOLDEN-MIX-ACTIV'", "Produit à base de dioxyde de chlore et d'acide lactique, pour la désinfection des trayons après la traite ● S'utilise en mélange 50/50 avec le GOLDEN MIX BASE par trempage ● Enrichi en glycérine, coloration jaune sur le trayon|||", "2,10,23,62,229,1050", "", "kg,kg,kg,kg", "hygiène mamelle*Dioxyde de chlore,udder hygiene*Chlorine dioxide,,", "", "manual", "", "", "cow", "004929,004940,004954,004974,009175,005499", "", "B",
		"SYN'ERGIX ACTIV'", "#Udder Des", "1.5", "", "kg,kg,kg,kg", "", "SYNERGIX-ACTIV", "Produit à base de dioxyde de chlore et d'acide lactique, pour la désinfection des trayons après la traite ● S'utilise en mélange 50/50 avec le SYN'ERGIX BASE par trempage ● Enrichi en glycérine, coloration jaune sur le trayon|||", "2,10,23,62,229,1050", "", "kg,kg,kg,kg", "hygiène mamelle*Dioxyde de chlore,udder hygiene*Chlorine dioxide,,", "", "manual", "", "", "cow", "005511,005512,005513,006348", "", "B",
		"GOLDEN MIX BASE", "#Udder Des", "1.5", "", "kg,kg,kg,kg", "1,Golden%20Mix%20FR.pdf?csf=1&e=56v92P", "GOLDEN-MIX-BASE", "Produit à base de dioxyde de chlore et d'acide lactique, pour la désinfection des trayons après la traite ● S'utilise en mélange 50/50 avec le GOLDEN MIX ACTIV' par trempage ● Enrichi en glycérine, coloration jaune sur le trayon|||", "2,10,22,58,214,980", "", "kg,kg,kg,kg", "hygiène mamelle*Dioxyde de chlore,udder hygiene*Chlorine dioxide,,", "", "manual", "", "", "cow", "005518,005529,005544,005564,009176,005568", "", "B",
		"SYN'ERGIX BASE", "#Udder Des", "1.5", "", "kg,kg,kg,kg", "", "SYNERGIX-BASE", "Produit à base de dioxyde de chlore et d'acide lactique, pour la désinfection des trayons après la traite ● S'utilise en mélange 50/50 avec le SYN'ERGIX ACTIV' par trempage ● Enrichi en glycérine, coloration jaune sur le trayon|||", "2,10,22,58,214,980", "", "kg,kg,kg,kg", "hygiène mamelle*Dioxyde de chlore,udder hygiene*Chlorine dioxide,,", "", "manual", "", "", "cow", "005580,005581,005582,008190", "", "B",
		"G-MIX POWER ACTIV'", "#Udder des", "1.5,3.5,0.9,1.5|1.5,3.5,0.9,1.5", "", "kg,kg,kg,kg", "1,G-Mix%20Power%20fr.pdf?csf=1&e=o4cf1i", "G-MIX-POWER-ACTIV'", "Désinfectant avant et après la traite à base de dioxyde de chlore, à utiliser en mélange 50/50 avec G-MIX POWER BASE ● Application en mousse ou pulvérisation ● Enrichi en tensio-actif pour le nettoyage, glycérine et acide lactique pour leurs propriétés cosmétiques|||", "21,62,228", "", "kg,kg,kg,kg", "hygiène mamelle*Dioxyde de chlore,udder hygiene*Chlorine dioxide,,", "", "manual", "", "", "cow", "009423,009424,010215", "AB", "B",
		"LIQUIM'IX ACTIV'", "#Udder des", "1.5,3.5,0.9,1.5|1.5,3.5,0.9,1.5", "", "kg,kg,kg,kg", "", "LIQUIMIX-ACTIV", "Désinfectant avant et après la traite à base de dioxyde de chlore, à utiliser en mélange 50/50 avec LIQUIM'IX BASE ● Application en mousse ou pulvérisation ● Enrichi en tensio-actif pour le nettoyage, glycérine et acide lactique pour leurs propriétés cosmétiques|||", "21,62,228", "", "kg,kg,kg,kg", "hygiène mamelle*Dioxyde de chlore,udder hygiene*Chlorine dioxide,,", "", "manual", "", "", "cow", "010542,010543,013631", "AB", "B",
		"G-MIX POWER BASE", "#Udder des", "1.5,3.5,0.9,1.5|1.5,3.5,0.9,1.5", "", "kg,kg,kg,kg", "1,G-Mix%20Power%20fr.pdf?csf=1&e=o4cf1i", "G-MIX-POWER-BASE", "Désinfectant avant et après la traite à base de dioxyde de chlore, à utiliser en mélange 50/50 avec G-MIX POWER ACTIV' ● Application en mousse ou pulvérisation ● Enrichi en tensio-actif pour le nettoyage, glycérine et acide lactique pour leurs propriétés cosmétiques|||", "19,58,212", "", "kg,kg,kg,kg", "hygiène mamelle*Dioxyde de chlore,udder hygiene*Chlorine dioxide,,", "", "manual", "", "", "cow", "009425,009426,010214", "AB", "B",
		"LIQUIM'IX BASE", "#Udder des", "1.5,3.5,0.9,1.5|1.5,3.5,0.9,1.5", "", "kg,kg,kg,kg", "", "LIQUIMIX-BASE", "Désinfectant avant et après la traite à base de dioxyde de chlore, à utiliser en mélange 50/50 avec LIQUIM'IX ACTIV' ● Application en mousse ou pulvérisation ● Enrichi en tensio-actif pour le nettoyage, glycérine et acide lactique pour leurs propriétés cosmétiques|||", "19,58,212", "", "kg,kg,kg,kg", "hygiène mamelle*Dioxyde de chlore,udder hygiene*Chlorine dioxide,,", "", "manual", "", "", "cow", "010544,010545,013632", "AB", "B",
		"POWER BLUE MIX ACTIV'", "#Udder des", "1.5", "", "kg,kg,kg,kg", "1,Power%20Blue%20Mix%20FR.pdf?csf=1&e=uN0i24", "POWER-BLUE-MIX-ACTIV'", "Produit de trempage épais, bleu et marquant sur le trayon ● Désinfectant puissant à base de dioxyde de chlore et d'acide lactique, le produit protège aussi les trayons grâce aux agent humectants, emollient et assouplissant présent dans la formule ● S'utilise après mélange 50/50 avec le POWER BLUE MIX Base|||", "2,10,21,62,228", "", "kg,kg,kg,kg", "hygiène mamelle*Dioxyde de chlore,udder hygiene*Chlorine dioxide,,", "", "manual", "", "", "cow", "016535,016506,016505,016507,017332", "", "B",
		"EXCEL'MIX ACTIV'", "#Udder des", "1.5", "", "kg,kg,kg,kg", "", "EXCEL-MIX-ACTIV", "Produit de trempage épais, bleu et marquant sur le trayon ● Désinfectant puissant à base de dioxyde de chlore et d'acide lactique, le produit protège aussi les trayons grâce aux agent humectants, emollient et assouplissant présent dans la formule ● S'utilise après mélange 50/50 avec le EXCEL'MIX BASE|||", "2,10,21,62,228", "", "kg,kg,kg,kg", "hygiène mamelle*Dioxyde de chlore,udder hygiene*Chlorine dioxide,,", "", "manual", "", "", "cow", "", "", "B",
		"POWER BLUE MIX BASE", "#Udder des", "1.5", "", "kg,kg,kg,kg", "1,Power%20Blue%20Mix%20FR.pdf?csf=1&e=uN0i24", "POWER-BLUE-MIX-BASE", "Produit de trempage épais, bleu et marquant sur le trayon ● Désinfectant puissant à base de dioxyde de chlore et d'acide lactique, le produit protège aussi les trayons grâce aux agent humectants, emollient et assouplissant présent dans la formule ● S'utilise après mélange 50/50 avec le POWER BLUE MIX Activ|||", "2,10,19,58,212", "", "kg,kg,kg,kg", "hygiène mamelle*Dioxyde de chlore,udder hygiene*Chlorine dioxide,,", "", "manual", "", "", "cow", "016536,016508,016509,016510,017333", "", "B",
		"EXCEL'MIX BASE", "#Udder des", "1.5", "", "kg,kg,kg,kg", "", "EXCEL-MIX-BASE", "Produit de trempage épais, bleu et marquant sur le trayon ● Désinfectant puissant à base de dioxyde de chlore et d'acide lactique, le produit protège aussi les trayons grâce aux agent humectants, emollient et assouplissant présent dans la formule ● S'utilise après mélange 50/50 avec le EXCEL'MIX Activ'|||", "2,10,19,58,212", "", "kg,kg,kg,kg", "hygiène mamelle*Dioxyde de chlore,udder hygiene*Chlorine dioxide,,", "", "manual", "", "", "cow", "", "", "B",

		"ANTI-GERM TRAYDOU", "#Udder Soft", "3-4", "", "kg,kg,kg,kg", "", "ANTI-GERM-TRAYDOU", "Gel désinfectant des trayons en après-traite à base de biphényl-2-ol, prêt à l'emploi ● Ultra protecteur & longue durée ● Bonne visualisation – ne coule pas ● Très riche en agents cosmétiques (Aloe vera, huiles essentielles et vitamine E)||Desinfektionsgel für die Zitzen nach dem Melken auf Basis von Biphenyl-2-ol, gebrauchsfertig ● Hohe und lang anhaltende Schutzwirkung ● Schutz gut sichtbar - tropft nicht ● Reich an kosmetischen Wirkstoffen (Aloe vera, aetherische Öle und Vitamin E)|", "20,60,200", "", "kg,kg,kg,kg", "hygiène mamelle*OPP,udder hygiene*OPP,,", "", "manual", "", "", "cow", "", "", "B",
		"ANTI-GERM TRAYFILM", "#Udder Film", "3-4", "", "kg,kg,kg,kg", "", "ANTI-GERM-TRAYFILM", "Désinfectant des trayons en après-traite, filmogène, à base de biphényl-2-ol, prêt à l'emploi ● Film persistant jusqu'à la traite suivante et s'enlevant facilement ● Agit rapidement dès l'application ● Ne coule pas ● Riche en agents cosmétiques (Aloe vera, huiles essentielles et vitamine E)||Desinfektion der Zitzen nach dem Melken, Film bildend, auf Basis von Biphenyl-2-ol, gebrauchsfertig ● Schutzfilm bis zum nächsten Melken ● wirkt sofort nach der Anwendung ● Reich an kosmetischen Wirkstoffen (Aloe vera, aetherische Öle und Vitamin E)|", "20,60,200", "", "kg,kg,kg,kg", "hygiène mamelle*OPP,udder hygiene*OPP,,", "", "manual", "", "", "cow", "", "", "B",
		"COSMETOFILM", "#Udder Film", "3-4", "", "kg,kg,kg,kg", "", "COSMETOFILM", "Désinfectant des trayons en après-traite, filmogène, à base de biphényl-2-ol, prêt à l'emploi ● Film persistant jusqu'à la traite suivante et s'enlevant facilement ● Agit rapidement dès l'application ● Ne coule pas ● Riche en agents cosmétiques (Aloe vera, huiles essentielles et vitamine E)||Desinfektion der Zitzen nach dem Melken, Film bildend, auf Basis von Biphenyl-2-ol, gebrauchsfertig ● Schutzfilm bis zum nächsten Melken ● wirkt sofort nach der Anwendung ● Reich an kosmetischen Wirkstoffen (Aloe vera, aetherische Öle und Vitamin E)|", "20,60,200", "", "kg,kg,kg,kg", "hygiène mamelle*OPP,udder hygiene*OPP,,", "", "manual", "", "", "cow", "021414,021415,021413", "", "B",
		"ANTI-GERM TRAYDIP", "#Soft", "3-4", "", "kg,kg,kg,kg", "", "ANTI-GERM-TRAYDIP", "Gel désinfectant des trayons en après-traite à base de biphényl-2-ol, prêt à l'emploi ● Bonne visualisation – ne coule pas ● Contient de la glycérine et de l'allantoïne|||", "20,200", "", "kg,kg,kg,kg", "hygiène mamelle*OPP,udder hygiene*OPP,,", "", "manual", "", "", "cow", "", "", "B",
		"ANTI-GERM INTEGRAL", "#Udder Film", "3-4", "", "kg,kg,kg,kg", "", "ANTI-GERM-INTEGRAL", "Désinfectant des trayons en après-traite, filmogène, à base de biphényl-2-ol, prêt à l'emploi ● Film disparaissant avant la traite suivante pour faciliter le nettoyage des trayons ● Riche en agents cosmétiques (glycérine et allantoïne)|||", "10,20,60", "", "kg,kg,kg,kg", "hygiène mamelle*OPP,udder hygiene*OPP,,", "", "manual", "", "", "cow", "", "", "B",
		"ANTI-GERM STERIPIS", "#Udder ster", "1-1.5", "", "kg,kg,kg,kg", "", "ANTI-GERM-STERIPIS", "Pour le nettoyage et la désinfection des trayons, en pré-moussage, dilué à 50&nbsp;% ● Pour le nettoyage des trayons (méthode lavettes) et la décontamination des lavettes dilué à 0,5&nbsp;%||Zur Reinigung und Desinfektion der Zitzen: Als Schaum angewendet zu 50% verdünnen oder mit Lappen angewendet zu 0,5 % verdünnen|", "10,20", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "", "manual", "AOC", "", "cow", "", "", "B",
		"ANTI-GERM STERIPIS NF", "#Udder sternf", "0.5-1", "", "kg,kg,kg,kg", "", "ANTI-GERM-STERIPIS-NF", "Nettoyant/désinfectant économique pour les trayons ● S'utilise en moussage dilué à 50&nbsp;%|||", "10,20", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "old", "manual", "AOC", "", "cow", "", "", "B",
		"ANTI-GERM IO-SPRAY", "#Udder", "3-4", "250", "kg,kg,kg,kg", "", "ANTI-GERM-IO-SPRAY", "Désinfectant des trayons à base d'iode (2,7 g/kg), prêt à l'emploi ● Contient des agents protecteurs (glycérine et allantoïne)|||", "21,60,200", "", "kg,kg,kg,kg", "hygiène mamelle*Iode,udder hygiene*Iodine,,", "", "manual", "", "", "cow", "", "", "B",
		"ANTI-GERM IO-FILM", "#Udder Film", "3-4", "", "kg,kg,kg,kg", "", "ANTI-GERM-IO-FILM", "Gel désinfectant des trayons en après-traite à base d'iode (2,7 g/kg), prêt à l'emploi ● Contient des agents protecteurs (glycérine et allantoïne)||Desinfektionsgel für die Zitzen nach dem Melken auf Basis von Iod (2.7g/kg), gebrauchsfertig ● bildet weichen Film ● enthält schützende Wirkstoffe (Glyzerin und Allantoin)|", "21,60,200", "", "kg,kg,kg,kg", "hygiène mamelle*Iode,udder hygiene*Iodine,,", "", "manual", "", "", "cow", "", "", "B",
		"ANTI-GERM IOFILM", "#Udder Film", "2-3", "", "kg,kg,kg,kg", "", "ANTI-GERM-IOFILM", "Gel désinfectant des trayons en après-traite à base d'iode (>3 g/kg), prêt à l'emploi ● Film souple ● Contient des agents protecteurs (glycérine et allantoïne)||Desinfektionsgel für die Zitzen nach dem Melken auf Basis von Iod (>3 g / kg), gebrauchsfertig ● bildet weichen Film ● enthält schützende Wirkstoffe (Glyzerin und Allantoin)|", "10,60,200", "", "kg,kg,kg,kg", "hygiène mamelle*Iode,udder hygiene*Iodine,,", "", "manual", "", "", "cow", "", "", "B",
		"ANTI-GERM PRATIC", "#Udder", "3-4", "250", "kg,kg,kg,kg", "", "ANTI-GERM-PRATIC", "Désinfectant des trayons à base de biguanide ● Contient des agents protecteurs (glycérine et allantoïne)|||", "20,60,200", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "old", "manual", "", "", "cow", "", "", "B",
		"ANTI-GERM PRATIC NF", "#Udder", "3-4", "250", "kg,kg,kg,kg", "", "ANTI-GERM-PRATIC-NF", "Désinfectant des trayons en avant et après-traite à base de chlorhexidine ● Spécial robots de traite ● Contient des agents cosmétiques, adoucissants et hydratants|||", "20,60,200", "", "kg,kg,kg,kg", "hygiène mamelle*Chlorhexidine,udder hygiene*Chlorhexidin,,", "", "manual", "", "", "cow,goat,sheep", "", "", "B",
		"ANTI-GERM MAMOGEL", "#Udder", "2-3", "", "kg,kg,kg,kg", "", "ANTI-GERM-MAMOGEL", "Gel désinfectant à base de chlorhexidine ● Post-traite ●  Pour tous ruminants ●   économiques ●  Ne goutte pas ●  Contient des agents adoucissants et hydratants|||", "20,60,200", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "old", "manual", "", "", "cow", "", "", "B",
		
		"WIPES LSA", "#Udder wipes", "730*584", "", "lingettes,wipes,wipes,toallitas", "1,WIPES%20LSA%20FR.pdf?csf=1&e=goI6aP", "WIPES-LSA", "Lingettes désinfectantes impregnées d'un produit doux et désinfectant à base d'un complexe actif d'hydroxy-acides (LSA) assurant une bonne préparation des trayons avant la traite ● Bactéricide et levuricide ● Utiliser une lingette par vache ● Un pack = 2 bobines de 800 wipes|||", "1600", "", "carton(s) de &Q &P,&Q &P cardboard boxes,,", "hygiène mamelle*LSA®,udder hygiene*LSA®,,", "", "auto", "", "", "cow,goat,sheep", "003549", "AB", "B",
		"ANTI-GERM FRESH Tritex®", "#Udder wipes", "730*584", "", "lingettes,wipes,wipes,toallitas", "", "ANTI-GERM-FRESH-TRITEX", "Lingettes désinfectantes à base de Chlorhexidine ● Absence d'ammoniums quaternaires ● Adoucissent la peau grâce à la présence de glycérine ● Seau dévidoir/dévidoir translucide vendus séparément||Desinfizierende Feuchttücher auf Basis von Chlorhexidin ● Ohne Quaternär-Ammoniumverbindungen ● Macht die Haut weich dank Glyzerin ● Spender separat erhältlich|", "2000", "", "carton(s) de &Q &P,&Q &P cardboard boxes,,", "hygiène mamelle*Chlorhexidine,udder hygiene*Chlorhexidin,,", "", "auto", "AOC", "", "cow,goat,sheep", "", "", "",
		"ANTI-GERM SEPTIFLASH", "#Udder des", "3", "150|150", "compr.,tablets,Tabletten,tabletas", "", "ANTI-GERM-SEPTIFLASH", "Comprimés effervescents à base de DCCNa pour la désinfection des trayons ● Agit rapidement dès l'application ● 3 comprimés dans 5 litres d'eau ● Utilisable en avant et après-traite ● Boîte de 45 comprimés de 17 g||Brausetabletten auf Basis von DCCNa zur Desinfektion der Zitzen ● 3 Tabletten auf 5 Liter Wasser ● Kann vor und nach dem Melken angewendet werden ●Dose zu 45 Tabletten à 17 g|", "45", "", "boîte(s) de &Q &P,&Q &P boxes,,", "hygiène mamelle,udder hygiene,,", "old", "auto", "AOC(after)", "", "cow", "", "", "",
		"ANTI-GERM TRAYLAV", "#traylav", "1-1.5", "", "kg,kg,kg,kg", "", "ANTI-GERM-TRAYLAV", "Nettoyant/adoucissant des trayons en méthode lavettes en solution à 0,5&nbsp;% (eau tiède) ● Parfum agréable (pêche)||Zitzenreinigung vor dem melken mit der 0,5%ige anwendungslösung befeuchtetem eutertuch oder uterpapier reinigen ● angenehmen Duft (Pfirsich)|", "10,20", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "old", "manual", "", "", "cow", "", "", "",
		"ANTI-GERM STERITRAITE", "#soap", "1-1.5", "", "kg,kg,kg,kg", "", "ANTI-GERM-STERITRAITE", "Nettoyant/adoucissant des trayons en avant-traite en méthode lavettes ● Nettoyant/désinfectant des lavettes entre les traites ● Utiliser en solution à 0,5 % (eau tiède)|||", "10,20", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "", "manual", "AOC", "", "cow", "", "", "",
		"ANTI-GERM PROXYLAV", "#powderlav", "0.7", "", "kg,kg,kg,kg", "", "ANTI-GERM-PROXYLAV", "Poudre pour le nettoyage et la désinfection des lavettes à utiliser entre les traites ● Efficacité bactéricide selon la norme EN&nbsp;1276 ● Utilisable manuellement ou en machine ● Excellents résultats même en eau très dure ● Effet blanchissant|||", "9,16", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "old", "manual", "", "", "cow", "", "", "",
		"DERMISAN +", "#soap", "1.5", "", "kg,kg,kg,kg", "1,Dermisan%20+%20FR.pdf?csf=1&e=he4P9j", "DERMISAN-+", "Savon désinfectant pour les lavettes entre les traites et le nettoyage des trayons en avant-traite ● Sa formation à base de tensio-actifs non ioniques doux permet un nettoyage en douceur des trayons ● Faire tremper les lavettes entre les traites dans une solution avec 0,5% de DERMISAN +|||", "10,22,60,1000", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "", "manual", "", "", "cow", "005477,005483,005489,005491", "", "B",
		"BOVIDERM +", "#soap", "1.5", "", "kg,kg,kg,kg", "", "BOVIDERM-+", "Savon désinfectant pour les lavettes entre les traites et le nettoyage des trayons en avant-traite ● Sa formation à base de tensio-actifs non ioniques doux permet un nettoyage en douceur des trayons ● Faire tremper les lavettes entre les traites dans une solution avec 0,5% de BOVIDERM +|||", "10,22", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "", "manual", "", "", "cow", "005492,005493", "", "B",
		"HYPRA'ZUR", "#powderlav", "0.7", "", "kg,kg,kg,kg", "1,Hyprazur%20FR.pdf?csf=1&e=aVvOD7", "HYPRA'ZUR", "Poudre pour la désinfection des lavettes entre les traites à base d'acide péracétique ● Nettoie en profondeur et blanchie les lavettes ● Utilisation manuelle, en laissant tremper les lavettes dans un seau d'eau chaude avec du produit, ou à la machine à laver (lavage à 60°C)|||", "10,20,100x0.06", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "", "manual", "", "", "cow", "006011,006027,006028", "AB", "B",
		"LAVINET", "#powderlav", "0.7", "", "kg,kg,kg,kg", "", "LAVINET", "Poudre pour la désinfection des lavettes entre les traites à base d'acide péracétique ● Nettoie en profondeur et blanchie les lavettes ● Utilisation manuelle, en laissant tremper les lavettes dans un seau d'eau chaude avec du produit, ou à la machine à laver (lavage à 60°C)|||", "10,20", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "", "manual", "", "", "cow", "006033,008191", "AB", "B",
		"TOP'OUATE", "#Udder paper", "730", "", "feuilles,sheets,Blatter,hojas", "", "TOP-OUATE", "Ouate gaufrée pour l'essuyage des trayons ● 100&nbsp;% pure ouate de cellulose ● 2 bobines de 1000 feuilles (25 x 35&nbsp;cm) ● Double épaisseur (44 g/m²) ● Très résistant et très absorbant ● Fibres 100&nbsp;% biodégradables||Geprägtem Papiertuch zum Trocknen der Zitzen, 100&nbsp;% reine Zellulose ● 2 Rollen à 1000 Blatt(25 x 35 cm) ● Doppellagig (44&nbsp;g/m2) ● Widerstandsfähig und hohe Saugkraft ● 100 % biologisch abbaub|", "2000", "", "lot(s) de 2 bobines,lot(s) (2 rolls),,", "hygiène mamelle,udder hygiene,,", "", "auto", "", "", "cow", "", "", "",
		"TRAY'OUATE", "#Udder paper", "730", "", "feuilles,sheets,Blatter,hojas", "", "TRAY-OUATE", "Papier d'essuyage des trayons 100&nbsp;% pure ouate de cellulose ● 2 bobines de 1000 feuilles (25 x 35&nbsp;cm) ● Double épaisseur (44 g/m²) ● Très résistant et très absorbant ● Fibres 100&nbsp;% biodégradables||Papiertuch zum Trocknen der Zitzen, 100&nbsp;% reine Zellulose ● 2 Rollen à 1000 Blatt(25 x 35 cm) ● Doppellagig (44&nbsp;g/m2) ● Widerstandsfähig und hohe Saugkraft ● 100 % biologisch abbaubar|", "2000", "", "lot(s) de 2 bobines,lot(s) (2 rolls),,", "hygiène mamelle,udder hygiene,,", "", "auto", "", "", "cow", "", "", "",
		"TRAY'CLEAN", "#Udder paper", "730", "", "feuilles,sheets,Blatter,hojas", "", "TRAY-CLEAN", "Papier d'essuyage des trayons 100&nbsp;% pure ouate de cellulose ● 2 bobines de 1000 feuilles (25 x 35&nbsp;cm) ● Double épaisseur (37 g/m²) ● Résistant et absorbant ● Fibres 100&nbsp;% biodégradables||Papiertuch zum Trocknen der Zitzen, 100&nbsp;% reine Zellulose ● 2 Rollen à 1000 Blatt(25 x 35 cm) ● Doppellagig (37&nbsp;g/m2) ● Widerstandsfähig und saugfähig ● 100 % biologisch abbaubar|", "2000", "", "lot(s) de 2 bobines,lot(s) (2 rolls),,", "hygiène mamelle,udder hygiene,,", "", "auto", "", "", "cow", "", "", "",
		
		"ANTI-GERM TOP ACID", "#Acid", "0.5", "150", "kg,kg,kg,kg", "", "ANTI-GERM-TOP-ACID", "Acide détartrant à base d'acide phosphorique et sulfurique ● S'utilise en solution à partir de 0,5 % à une température initiale conseillée de 60°C|||", "25,70,240", "1.165", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "029291,029292,029293", "AB", "",
		"ACIDOGAL SUPER", "#Acid", "0.5", "150", "kg,kg,kg,kg", "", "ACIDOGAL-SUPER", "Détergent/détartrant acide concentré en acide phosphorique ● S'utilise en solution à partir de 0,5&nbsp;% à 55&nbsp;°C – 65&nbsp;°C||Alkalisches Desinfektionsmittel auf Basis von Natronlauge und Chlor ● wird in einer Verdünnung von 0.5% bei einer Temperatur von 55°C – 65 °C angewendet|", "24,225", "1.17", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow", "", "", "",
		"BACTOGAL NET", "#Alk", "0.5", "150", "kg,kg,kg,kg", "", "BACTOGAL-NET", "Alcalin chloré désinfectant enrichi en potasse ● Très forte capacité détérgente ● S'utilise en solution à partir de 0,5 % à une température initiale conseillée de 60°C|||", "25,65,220", "1.153", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "AOC", "", "cow,goat,sheep", "021960,021978,021953", "AB", "B",
		"CHLOROGAL PLUS", "#Alk", "0.5", "150", "kg,kg,kg,kg", "", "CHLOROGAL-PLUS", "Alcalin chloré désinfectant à base de soude et de potasse ● S'utilise en solution à partir de 0,5 % à une température initiale conseillée de 60°C|||", "24,70,225", "1.2", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "AOC", "", "cow,goat,sheep", "021961,021974,022055", "AB", "B",
		"ANTI-GERM ADIROX ACID", "#Acid", "0.5", "150", "kg,kg,kg,kg", "", "ANTI-GERM-ADIROX-ACID", "Acide détergent, détartrant, à base d'acide phospohorique et sulfurique ● S'utilise en solution à partir de 0,5 % à une température initiale conseillée de 60°C|||", "25,65,220", "1.12", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "026041,026039,026040", "AB", "",
		"ADIROX CHLORE", "#Alk", "0.5", "150", "kg,kg,kg,kg", "", "ADIROX-CHLORE", "Alcalin chloré désinfectant à base de soude ● S'utilise en solution à partir de 0,5 % à une température initiale conseillée de 60°C|||", "24,70,225", "1.145", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "AOC", "", "cow,goat,sheep", "021981 025619,021982 021983 025600,002205 025620,022030", "AB", "B",
		"PENNGAR L.30", "#Alk", "0.5", "150", "kg,kg,kg,kg", "", "PENNGAR-L-30", "Désinfectant alcalin à base de soude et de chlore ● S'utilise en solution à partir de 0,5&nbsp;% à 55&nbsp;°C – 65&nbsp;°C||Alkalisches Desinfektionsmittel auf Basis von Natronlauge und Chlor ● wird in einer Verdünnung von 0.5% bei einer Temperatur von 55°C – 65 °C angewendet|", "24,70", "1.15", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "old", "manual", "AOC", "", "cow", "", "", "",
		"PENNGAR AOC-ADM", "#DetAlk", "0.3", "150", "kg,kg,kg,kg", "", "PENNGAR-AOC-ADM", "Détergent alcalin non chloré à base de soude ● Spécial hautes températures ● S'utilise en solution à partir de 0,3&nbsp;% à 55&nbsp;°C – 95&nbsp;°C|||", "25,70,250", "1.23", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow", "", "", "",
		"ANTI-GERM REMINOX", "#MaxO", "0.3", "", "kg,kg,kg,kg", "", "ANTI-GERM-REMINOX", "Acide détergent, détartrant à base d'acide péracétique  ●  S'utilise en solution à 0,5 % à une température initiale conseillée de 60°C|||", "23", "1.069", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "016992 017367 023100", "AB", "B",
		"ANTI-GERM REMILIN", "#MaxL", "0.3", "", "kg,kg,kg,kg", "", "ANTI-GERM-REMILIN", "Détergent alcalin concentré à base de potasse et de soude ● Additifs séquestrants ●  S'utilise en solution à 0,3 % à partir de 50 °C|||", "23", "1.45", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "", "", "",
		"MAXIGAL BACTACID", "#MaxB", "0.2", "", "kg,kg,kg,kg", "", "MAXIGAL-BACTACID", "Détergent détartrant acide maxi concentré ● Mélange d'acides ● Substance active bactéricide ● Additifs tensio-actifs ● Dosage : 0,2 % à chaud (température stabilisée en circuit de 40 à 65&nbsp;°C)||Hoch konzentriertes, saures Entkalkungs- und Schmutzlösemittel ● Säuremischung ● Bakterizid ● Oberflächenwirksame Wirkstoffe ● Dosierung: 0,2 % bei einer stabile Temperatur im Kreislauf von 40 - 65 °C|", "25", "1.26", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "old", "manual", "", "", "cow", "", "", "",
		"MAXIGAL ALCALIN", "#MaxA", "0.2", "", "kg,kg,kg,kg", "", "MAXIGAL-ALCALIN", "Détergent alcalin maxi concentré ● Potasse et soude ● Additifs séquestrants ● Dosage : 0,2 % à chaud (température stabilisée en circuit de 40 à 65&nbsp;°C)||Hoch konzentriertes, alkalisches Schmutzlösemittel ● Kalium und Natronlauge ● Schmutzlösende Wirkstoffe ● Dosierung: 0,2 % bei einer stabile Temperatur im Kreislauf von 40 - 65 °C|", "25", "1.5", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "old", "manual", "", "", "cow", "", "", "",
		"GALORAN RY", "#Acid", "0.5", "150", "kg,kg,kg,kg", "", "GALORAN-RY", "Détartrant acide pour le nettoyage et la désincrustation du matériel de traite ● S'utilise en solution à 0,5 % à chaud (50 - 65&nbsp;°C)|||", "24,70,225", "1.21", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "old", "manual", "", "", "cow", "", "", "",
		"PENNGAR L.20", "#Alk", "0.5", "150", "kg,kg,kg,kg", "", "PENNGAR-L-20", "Alcalin désinfectant chloré à base de potasse ● Chlore très stable ● S'utilise en solution à partir de 0,5&nbsp;% à 55&nbsp;°C – 65&nbsp;°C|||", "25,70", "1.16", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "old", "manual", "", "", "cow", "", "", "",
		"PENNGAR L.X.", "#Acid", "0.5", "150", "kg,kg,kg,kg", "", "PENNGAR-L.X.", "Détartrant acide non moussant à base d'acide phosphorique et d'acide sulfurique ● S'utilise en solution à partir de 0,5 % à 55 °C – 65 °C|||", "24,65,225", "1.13", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow", "", "", "",
		"PENNGAR NPH", "#Acid", "0.5", "150", "kg,kg,kg,kg", "", "PENNGAR-NPH", "Nettoyant liquide acide oxygéné, non moussant ● Hauts pouvoirs nettoyant et détartrant ● S'utilise en solution à partir de 0,5 % à 55 °C – 65 °C|||", "24,200", "1.12", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow", "", "", "",
		"EXOPENNGAR D", "#Acid", "0.5", "150", "kg,kg,kg,kg", "", "EXOPENNGAR-D", "Détergent détartrant à base d'acide phosphorique très concentré ● S'utilise en solution à partir de 0,5&nbsp;% à 55&nbsp;°C – 65&nbsp;°C|||", "24,25,70,225", "1.16", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "old", "manual", "", "", "cow,goat,sheep", "", "", "",
		"ANTI-GERM ACTIFLASH", "#Udder MM Des", "0.5-1*4ml", "250", "kg,kg,kg,kg", "", "ANTI-GERM-ACTIFLASH", "Désinfectant à base d'acide peracétique et de peroxyde d'hydrogène ● Action désinfectante puissante ● Effet flash ● S'utilise en solution à 0,5&nbsp;% et à froid ● Utilisation possible par pulvérisation||Desinfektionsmittel auf Basis von Peressigsäure und Wasserstoffperoxyd● Stark desinfizierend ● wirkt sofort ● wird in einer Dosierung von 0,5 % in kaltem Wasser angewandt ● Kann auch versprüht werden|", "10,22,64,220", "1.08", "kg,kg,kg,kg", "brosses et manchons,brushes and cups,,", "old", "manual", "", "", "cow,goat,sheep", "", "", "B",
		"ACTIFLASH 5+", "#Udder MM Des", "0.5", "250", "kg,kg,kg,kg", "", "ACTIFLASH-5+", "Désinfection des manchons trayeurs à base d'acide péracétique et de peroxyde d'hydrogène ● Action rapide et efficace à basse température ● Dosage et application sur équipement, matériel ou surface par trempage ou pulvérisation|||", "10,24,60,230", "", "kg,kg,kg,kg", "brosses et manchons,brushes and cups,,", "", "manual", "", "", "cow,goat,sheep", "017861,017562,017862,017860", "AB", "B",
		"PERFO GRIF", "#Udder MM Des", "0.5", "250", "kg,kg,kg,kg", "", "PERFO-GRIF", "Désinfection des manchons trayeurs et des brosses de robot de traite à base d'acide péracétique ● Réduit les risques de contaminations croisées durant la traite ● Dosage et application par trempage ou pulvérisation|||", "10,24,60,210", "", "kg,kg,kg,kg", "brosses et manchons,brushes and cups,,", "old", "manual", "", "", "cow,goat", "005113,005117,005126,005124", "AB", "B",
		"PERFO GRIF+", "#Udder MM Des", "0.5", "250", "kg,kg,kg,kg", "1,Perfo%20Grif%20+%20fr.pdf?csf=1&e=7st4iT", "PERFO-GRIF+", "Désinfection des manchons trayeurs et des brosses de robot de traite à base d'acide péracétique et avec une concentration élevée en peroxyde d'hydrogène ● Réduit les risques de contaminations croisées durant la traite ● Dosage et application par trempage ou pulvérisation|||", "10,22,60,200", "", "kg,kg,kg,kg", "brosses et manchons,brushes and cups,,", "", "manual", "", "", "cow,goat,sheep", "016092,016094,016093,016091", "AB", "B",
		"DUOGRIFF", "#Udder MM Des", "0.5", "250", "kg,kg,kg,kg", "", "DUOGRIFF", "Désinfection des manchons trayeurs et des brosses de robot de traite à base d'acide péracétique et avec une concentration élevée en peroxyde d'hydrogène ● Réduit les risques de contaminations croisées durant la traite ● Dosage et application par trempage ou pulvérisation|||", "10,22,60,200", "", "kg,kg,kg,kg", "brosses et manchons,brushes and cups,,", "", "manual", "", "", "cow,goat,sheep", "017567,017569,017570,017568", "AB", "B",
		"ANTI-GERM DES OXI-25", "#Udder MM Des", "0.5-1", "250", "kg,kg,kg,kg", "", "ANTI-GERM-DES-OXI-25", "Désinfectant à base d'acide peracétique et de peroxyde d'hydrogène ● Action désinfectante puissante ● Effet flash ● S'utilise en solution à 0,5&nbsp;% et à froid ● Utilisation possible par pulvérisation||Desinfektionsmittel auf Basis von Peressigsäure und Wasserstoffperoxyd● Stark desinfizierend ● wirkt sofort ● wird in einer Dosierung von 0,5 % in kaltem Wasser angewandt ● Kann auch versprüht werden|", "22,220", "1.08", "kg,kg,kg,kg", "brosses et manchons,brushes and cups,,", "", "manual", "", "", "cow,goat,sheep", "", "", "",
		
		"D 10 ALCALIN", "#Alk", "0.5", "", "kg,kg,kg,kg", "", "D-10-ALCALIN", "Alcalin chloré désinfectant à base de soude ● S'utilise en solution à partir de 0,5 % à une température initiale conseillée de 60°C|||", "25,70,240", "1.17", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "005169 010069 023020,005171 023022,5170", "AB", "B",
		"D 10 ACIDE", "#Acid", "0.5", "", "kg,kg,kg,kg", "", "D-10-ACIDE", "Acide détartrant à base d'acide phosphorique, sulfurique, nitritque ● S'utilise en solution à partir de 0,5 % à une température initiale conseillée de 60°C|||", "25,70,240", "1.119", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "5164,14830,21575", "AB", "",
		"DIRECT'ACIDE", "#Acid", "0.5", "", "kg,kg,kg,kg", "", "DIRECT-ACIDE", "Acide détartrant à base d'acide phosphorique, sulfurique, nitritque ● S'utilise en solution à partir de 0,5 % à une température initiale conseillée de 60°C|||", "70,240", "1.119", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "005192,005191", "AB", "",
		"HYPRAL SP", "#Alk", "0.5", "", "kg,kg,kg,kg", "", "HYPRAL-SP", "Alcalin non chloré à base de potasse  ● Enrichi en tensio-actif ● S'utilise en solution à partir de 0,5 % à une température initiale conseillée de 50°C|||", "28,75,280", "1.3", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "5362,005365 010084,11224", "AB", "",
		"INO 3X", "#Acid", "0.05", "", "kg,kg,kg,kg", "", "INO-3X", "Acide détartrant concentré ● Utilisation en programmateur 3 phases ● A utiliser après le passage d'INO GUARD 100 et INO SAN ● S'utilise en solution à partir de 0,05% à 40°C pendant 5 minutes|||", "30,80", "1.46", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "005233 009086,005238 009089", "AB", "",
		"HYPRAL ONE", "#Alk", "0.5", "", "kg,kg,kg,kg", "", "HYPRAL-ONE", "Alcalin non chloré à base de soude ● Enrichi en tensio-actif ● S'utilise en solution à partir de 0,5 % à une température initiale conseillée de 50°C|||", "25", "1.334", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "014481", "AB", "",
		"HYPRAL RBT", "#Alk", "0.5", "150", "kg,kg,kg,kg", "", "HYPRAL-RBT", "Alcalin non chloré à base de soude ● Enrichi en tensio-actif ● S'utilise en solution à partir de 0,5 % à une température initiale conseillée de 50°C|||", "25,70,230", "1.334", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "5314,29287,5315", "AB", "",
		"WASH CLASSIC", "#Alk", "0.5", "", "kg,kg,kg,kg", "", "WASH-CLASSIC", "Alcalin chloré désinfectant à base de soude ● S'utilise en solution à partir de 0,5 % à une température initiale conseillée de 60°C|||", "24,70,225", "1.145", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "23870,23871,23872", "AB", "B",
		"DIRECT'BASE", "#Alk", "0.5", "", "kg,kg,kg,kg", "", "DIRECT-BASE", "Alcalin chloré désinfectant à base de soude ● S'utilise en solution à partir de 0,5 % à une température initiale conseillée de 60°C|||", "70,225", "1.145", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "005160,005159", "AB", "B",
		"INO GUARD 100", "#Alk", "0.2", "", "kg,kg,kg,kg", "", "INO-GUARD-100", "Alcalin non chloré concentré à base de soude et de potasse ● Utilisation en programmateur 3 phases ● A utiliser avec INO SAN et avant le passage d'INO 3X ● S'utilise en solution de 0,1 à 0,2% avec 0,1 à 0,2% d'INO SAN pendant 5 à 10 minutes à 65°C|||", "30,80", "1.418", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "5197,5201", "AB", "",
		"INO SAN", "#Alk", "0.2", "", "kg,kg,kg,kg", "", "INO-SAN", "Désinfectant concentré à base d'hypochlorite de sodium ● Utilisation en programmateur 3 phases● A utiliser avec INO GUARD 100 et avant le passage d'INO 3X ● S'utilise en solution de 0,1 à 0,2% avec 0,1 à 0,2% d'INO GUARD 100 pendant 5 à 10 minutes à 65°C|||", "27,70", "1.23", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "8166,8165", "AB", "B",
		"TOP CL EXTRA", "#Alk", "0.5", "", "kg,kg,kg,kg", "", "TOP-CL-EXTRA", "Alcalin chloré désinfectant enrichi en potasse ● Très forte capacité détérgente ● S'utilise en solution à partir de 0,5 % à une température initiale conseillée de 60°C|||", "25,65", "1.153", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "26932,26931", "AB", "B",
		"HYPRAL ED", "#Alk", "0.5", "", "kg,kg,kg,kg", "", "HYPRAL-ED", "Alcalin non chloré à base de soude ● Enrichi en tensio-actif ● S'utilise en solution à partir de 0,5 % à une température initiale conseillée de 50°C|||", "25,70,230", "1.334", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "14391,14393,14392", "AB", "",
		"HYPRACID", "#Acid", "0.5", "", "kg,kg,kg,kg", "", "HYPRACID", "Acide détartrant à base d'acide phosphorique et sulfurique ● S'utilise en solution à partir de 0,5 % à une température initiale conseillée de 60°C|||", "25,70,240,1200", "1.165", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "004437 023031,004453 023167,4448,4458", "AB", "",
		"HYPRACID ONE", "#Acid", "0.8", "", "kg,kg,kg,kg", "", "HYPRACID-ONE", "Acide désinfectant à base d'acide octanoïque et détergent gâce à l'acide méthane sulfonique ● S'utilise en solution à partir de 0,8 % pour une action bactéricide et 1,5% pour une action virucide à une température initiale conseillée de 60°C|||", "22,62,225", "1.09", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "8123,18150,18180", "AB", "B",
		
		"RS ACIDE", "#Acid", "0.5", "150", "kg,kg,kg,kg", "", "RS-ACIDE", "Acide adapté au robot de traite ● Uniquement à base d'acide phosphorique pour un respect optimal du matériel et une fort détergence associé à un détartrage efficace ● S'utilise en solution à 0,5 % à une température initiale conseillée > 75°C|||", "25,70,240", "1.157", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow", "", "AB", "",
		"RS ALCALIN", "#Alk", "0.5", "150", "kg,kg,kg,kg", "", "RS-ALCALIN", "Détergent très concentré en soude conçu pour les robots de traite ● S'utilise en solution à partir de 0,5&nbsp;% à 55&nbsp;°C – 95&nbsp;°C|||", "25,250", "1.334", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow", "", "", "",
		"ROBOSPRAY IODE", "#Acid", "0.5", "420", "kg,kg,kg,kg", "", "ROBOSPRAY-IODE", "Désinfectant à base d'iode, prêt à l'emploi  ● 5500 ppm d'iode ● Une des formules les plus concentrées du marché ● Contient différents agents cosmétiques (glycérine, sorbitol, lanoline)|||", "22,60,200,1000", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "", "manual", "", "", "cow", "3124,3126,3125,6346", "AB", "B",
		"ROBOSPRAY LACTIC", "#Acid", "0.5", "420", "kg,kg,kg,kg", "", "ROBOSPRAY-LACTIC", "Désinfectant à base d'acide lactique  ● Prêt à l'emploi  ●  Forte teneur en acide lactique (8 %) ● Contient de la glycérine|||", "22,60,220,1000", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "", "manual", "", "", "cow", "4745,4747,4746,8147", "AB", "B",
		"ROBOSPRAY SUPREME", "#Acid", "0.5", "420", "kg,kg,kg,kg", "", "ROBOSPRAY-SUPREME", "Désinfectant à base du complexe LSA® ● Prêt à l'emploi  ● Désinfection « Flash » des trayons et de la base de la mamelle, agit en 30 secondes  ● Enrichi en agents hydratants (propylène glycol, glycérine, allantoïne) et assouplissant|||", "22,60,220", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "", "manual", "", "", "cow", "2840,2842,2841", "AB", "B",
		"ROBOCID", "#Acid", "0.5", "150", "kg,kg,kg,kg", "", "ROBOCID", "Acide détergent, détartrant ● Contient uniquement de l'acide phosphorique ● Compatible avec les manchons et circuits silicone ● Utilisation en chauffe eau traditionnel et en générateur eau bouillante|||", "25,70,240", "1.157", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "4480,4482,4481", "AB", "",
		"ACIDE RBT", "#Acid", "0.5", "150", "kg,kg,kg,kg", "", "ACIDE-RBT", "Acide détergent, détartrant ● Contient uniquement de l'acide phosphorique ● Compatible avec les manchons et circuits silicone ● Utilisation en chauffe eau traditionnel et en générateur eau bouillante|||", "25,70,240", "1.157", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "010141,010142,010143", "AB", "",
		"ROBOLIN", "#Alk", "0.5", "150", "kg,kg,kg,kg", "", "ROBOLIN", "Alcalin non chloré détergent, anti-tarte ● Compatible avec les manchons et circuits silicone ● Utilisation en générateur eau bouillante|||", "25,70,230", "1.334", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow", "5318,5320,5319", "AB", "",
		"HYPROCLOR ED", "#Alk", "0.6", "150", "kg,kg,kg,kg", "", "HYPROCLOR-ED", "Alcalin chloré à base de soude ● Enrichi en tensio-actif ● S'utilise en solution à 0,6&nbsp;% à une température initiale conseillée de 60-70°C|||", "25,70,230,1200", "1.2", "kg,kg,kg,kg", "circuits internes,internal circuits,,", "", "manual", "", "", "cow,goat,sheep", "004489 023023,004505 023024,4500,004512 023030", "AB", "B",
		"ROBOSPRAY MIX ACTIV'", "#Acid", "0.5", "210", "kg,kg,kg,kg", "", "ROBOSPRAY-MIX-ACTIV'", "Désinfectant à base de dioxyde de chlore à mélanger à part égale avec le Robospray Mix Base ● Forte puissance de désinfection ● Efficacité démontréee jusqu'à 30 h après mélange|||", "21,62,228", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "", "manual", "", "", "cow", "10710,10709,10708", "AB", "B",
		"ROBOSPRAY MIX BASE", "#Alk", "0.5", "210", "kg,kg,kg,kg", "", "ROBOSPRAY-MIX-BASE", "Désinfectant à base de dioxyde de Chlore à mélanger à part égale avec le Robospray Mix Activ ● Forte puissance de désinfection ● Efficacité démontréee jusqu'à 30 h après mélange|||", "19,58,212", "", "kg,kg,kg,kg", "hygiène mamelle,udder hygiene,,", "", "manual", "", "", "cow", "10711,10712,10713", "AB", "B",
		
		"HYPRED CLEAN +", "#Nett Surf", "", "", "kg,kg,kg,kg", "", "HYPRED-CLEAN-+", "Nettoyage des surfaces en bâtiments d'élevage (sols et murs) ● Propriété detergente, moussante et mouillante ● S'utilise en additif à l'eau de pré-trempage, avant un nettoyage à haute pression, ou soit en utilisation classique en pulvérisation ou canon à mousse avant le nettoyage à haute pression|||", "10", "", "kg,kg,kg,kg", "nettoyage surfaces,surfaces cleaning,,", "", "manual", "", "", "cow,goat,sheep", "016185", "", "",
		"SANISURFACE +", "#Nett Surf", "", "", "kg,kg,kg,kg", "", "SANISURFACE-+", "Nettoyage des surfaces en bâtiments d'élevage (sols et murs) ● Propriété detergente, moussante et mouillante ● S'utilise en additif à l'eau de pré-trempage, avant un nettoyage à haute pression, ou soit en utilisation classique en pulvérisation ou canon à mousse avant le nettoyage à haute pression|||", "10", "", "kg,kg,kg,kg", "nettoyage surfaces,surfaces cleaning,,", "", "manual", "", "", "cow,goat,sheep", "015596", "", "",
		"HYPRED FORCE 7", "#Nett Surf", "", "", "kg,kg,kg,kg", "", "HYPRED-FORCE-7", "Désinfectant bactéricide, levuricide et virucide, ne contenant pas de formol, pour les locaux d'élevage, le matériel de transport et le matériel d'élevage ● S'utilise après le nettoyage des surfaces par pulvérisation basse pression ou application mousse|||", "4x5,10,22,60,220,1000", "", "kg,kg,kg,kg", "nettoyage surfaces,surfaces cleaning,,", "", "manual", "", "", "cow,goat,sheep", "003821,003825,003831,026525,003837,003835,003838,026568", "AB", "B",
		"HYPRELVA FOAM", "#Nett Surf", "", "", "kg,kg,kg,kg", "", "HYPRELVA-FOAM", "Nettoyage des bâtiments d'élevage, fort pouvoir dégraissant et désincrustant ● Détergent concentré pour le nettoyage de surfaces souillées en présence d'eaux dures : sols, murs, tapis, machines ● S'utilise en canon à mousse ● Rincage : eau à haute pression|||", "27", "", "kg,kg,kg,kg", "nettoyage surfaces,surfaces cleaning,,", "", "manual", "", "", "cow,goat,sheep", "013940", "", "",
		"SANIPRO NET", "#Nett Surf", "", "", "kg,kg,kg,kg", "", "SANIPRO-NET", "Nettoyage des bâtiments d'élevage, fort pouvoir dégraissant et désincrustant ● Détergent concentré pour le nettoyage de surfaces souillées en présence d'eaux dures : sols, murs, tapis, machines ● S'utilise en canon à mousse ● Rincage : eau à haute pression|||", "27,72", "", "kg,kg,kg,kg", "nettoyage surfaces,surfaces cleaning,,", "", "manual", "", "", "cow,goat,sheep", "026489,026490", "", "",
		"AGRIMAT", "#Nett Agri", "", "", "kg,kg,kg,kg", "", "AGRIMAT", "Nettoyant liquide alcalin moussant pour le nettoyage des véhicules et engins agricoles (carosseries, bâches, moteurs…) ainsi que des matériels et des bâtiments ● Particulièrement efficace pour l'élimination des graisses, taches de gazoles, films statiques et huiles minérales|||", "2,10,66,230", "", "kg,kg,kg,kg", "nettoyage externe,external cleaning,,", "", "manual", "", "c0Ftb0xU02Q,xPeXz3-vYlM,spoFMmKc4LU,", "cow,goat,sheep", "022214,021991,022060,022058", "", "",
		"ANTI-GERM FOAM BASE", "#Nett Mat", "1-4>2", "12", "kg,kg,kg,kg", "", "ANTI-GERM-FOAM-BASE", "Détergent alcalin applicable en mousse ou à pulvériser sur les surfaces|||", "12,25,250", "", "kg,kg,kg,kg", "nettoyage surfaces,surfaces cleaning,,", "old", "manual", "", "", "cow,goat,sheep", "", "", "",
		"ANTI-GERM DT", "#Nett Surf", "", "25", "kg,kg,kg,kg", "", "ANTI-GERM-DT", "Détergent liquide moussant pour bâtiments et matériels d'élevage ● Utilisé en mouillage des surfaces par circuits d'arroseurs, en trempage, en pulvérisation ou au lance-mousse ● Fort pouvoir détergent et mouillant, permettant des économies d'eau|||", "25,230", "", "kg,kg,kg,kg", "nettoyage surfaces,surfaces cleaning,,", "old", "manual", "", "", "cow,goat,sheep", "", "", "",
		"ANTI-GERM HD4", "#Des Surf", "1-4>2", "10", "kg,kg,kg,kg", "", "ANTI-GERM-HD4", "Détergent, désincrustant, dispersant/décontaminant bactéricide ● Auto-moussant ● Très bonnes propriétés désincrustantes, dégraissantes et détergentes ● Actif sur les graisses, les protéines ● Bactéricide TP3/TP4 et levuricide ● Sans ammonium quaternaire et biodégradable ● Nettoyage des locaux (mousse) et matériels (trempage)|||", "6,25,70,220", "", "kg,kg,kg,kg", "nettoyage surfaces,surfaces cleaning,,", "", "manual", "", "", "cow,goat,sheep", "", "", "",
		"ANTI-GERM HD4n", "#Nett Surf", "", "", "kg,kg,kg,kg", "", "ANTI-GERM-HD4n", "Détergent, désincrustant, désinfectant bactéricide et levuricide ● Forme une mousse compacte adhérente à toutes les surfaces, non-corrosif ● Pour la détergence : utilisable au pulvérisateur ou au lance-mousse ● Pour la détergence/désinfection : utilisable en trempage et en pulvérisation|||", "5,10,23,63,210", "", "kg,kg,kg,kg", "nett/dés. des surfaces,surface clean./disinf.,,", "", "manual", "", "", "cow,goat,sheep", "", "", "B",
		"CLEARZYM LT", "#Nett Surf", "", "", "kg,kg,kg,kg", "", "CLEARZYM-LT", "Détergent naturel tri-enzymatique moussant pour nettoyage des surfaces et utilisation en trempage ● Formulation spécialement étudiée pour obtenir des propriétés emulsifiantes et dispersantes très importantes ● Application en mousse ou trempage|||", "20", "", "kg,kg,kg,kg", "nettoyage surfaces,surfaces cleaning,,", "", "manual", "", "", "cow,goat,sheep", "", "", "",
		"AGAVOX N", "#Des Surf", "", "", "kg,kg,kg,kg", "", "AGAVOX-N", "Désinfectant en poudre bactéricide, levuricide et virucide, efficace en 5 minutes ● S'applique par trempage et pulvérisation sur les surfaces préalablement nettoyées|||", "1,10", "", "kg,kg,kg,kg", "dés. des surfaces,surf. disinfection,,", "", "manual", "", "", "cow,goat,sheep", "021935,017140", "AB", "B",
		"FUMAGRI EFFISAFE", "#Des Surf", "", "", "kg,kg,kg,kg", "", "FUMAGRI-EFFISAFE", "Produit liquide, désinfection des surfaces et élimination des bactéries, mycobactéries, moisissures et virus dans les locaux d'élevage ● Désinfection par pédiluve, des véhicules, par trempage ou par pulvérisation sur les surfaces ● Rincer à l'eau propre|||", "4x5,20,200,1000", "", "kg,kg,kg,kg", "dés. des surfaces,surf. disinfection,,", "", "manual", "", "", "cow,goat,sheep", "023918,021765,023968,023919", "", "B",
		"FUMAGRI COMFORT", "#Diff air", "", "", "kg,kg,kg,kg", "", "FUMAGRI-COMFORT", "Solution de diffusion aérienne sèche (Ultradiffusion) d'huiles essentielles naturelles sélectionnées pour leurs vertus apaisantes, anti-stress et stimulant les défenses naturelles ● Le produit est libéré dans le bâtiment en présence des animaux pour contribuer à leur bien-être dans les élevages ● Diffusion homogène et autonome|||", "12x0.06,12x0.025,6x0.375", "", "kg,kg,kg,kg", "Diffusion aérienne,Air diffusion,,", "", "manual", "", "", "cow,goat,sheep", "025717,025718,025719", "", "",
		"FUMAGRI HA SILO", "#Des Surf", "", "", "kg,kg,kg,kg", "", "FUMAGRI-HA-SILO", "Désinfection des surfaces par voies aériennes ● Elimine les bactéries et moisissures dans les silos d'aliments du bétail ● Le produit va libérer dans le volume à traiter hors présence de toute opérateur sa matière désinfectante|||", "40x0.02", "", "kg,kg,kg,kg", "dés. des surfaces,surf. disinfection,,", "", "manual", "", "", "cow,goat,sheep", "026133", "AB", "B",
		
		"PODOFEET MAX", "#Paws", "5", "", "kg,kg,kg,kg", "1,Podofeet%20Max%20fr.pdf?csf=1&e=ff1O4I", "PODOFEET-MAX", "Désinfectant bactéricide à base d'amine ● Produit marquant (bleu) pour le contrôle de l'application du produit sur les sabots ● Exempt d'ammonium quaternaire ou de sels de métaux ● Nettoyer préalablement les sabots ● Utilisable en spray ou en pédiluve à une concentration de 5%|||", "21,56,204", "", "kg,kg,kg,kg", "Hygiène pattes,paw hygiene,,", "", "manual", "spray|3,4,8", "", "cow", "17230 26189,18294 26190,18293 26486", "AB", "B",
		"SANIPATT +", "#Paws", "5", "", "kg,kg,kg,kg", "", "SANIPATT-+", "Désinfectant bactéricide à base d'amine. Produit marquant (bleu) pour le contrôle de l'application du produit sur les sabots. Exempt d'ammonium quaternaire ou de sels de métaux. Nettoyer préalablement les sabots. Utilisable en spray ou en pédiluve à une concentration de 5%.|||", "21,56,204", "", "kg,kg,kg,kg", "Hygiène pattes,paw hygiene,,", "", "manual", "spray|3,4,8", "", "cow", "018551,018552,029949", "AB", "B",
		"PODOCLEAN", "#Paws", "2", "", "kg,kg,kg,kg", "", "PODOCLEAN", "Produit détergent et mouillant, enrichi en tensio-actifs pour aider à décoller la matière organique sur les pattes ● Produit peu moussant pour faciliter l'usage en pédiluve ● Solution à 2% à utiliser en pédiluve|||", "22,59,220", "", "kg,kg,kg,kg", "Hygiène pattes,paw hygiene,,", "", "manual", "6,8,16", "", "cow", "17439,18547,18546", "AB", "",
		"SANICLINE", "#Paws", "2", "", "kg,kg,kg,kg", "", "SANICLINE", "Produit détergent et mouillant, enrichi en tensio-actifs pour aider à décoller la matière organique sur les pattes ● Produit peu moussant pour faciliter l'usage en pédiluve. Solution à 2% à utiliser en pédiluve.|||", "22,59,220", "", "kg,kg,kg,kg", "Hygiène pattes,paw hygiene,,", "", "manual", "6,8,16", "", "cow", "021704,021705,003738", "AB", "",
		"PA-FEET 5", "#Paws", "5", "", "kg,kg,kg,kg", "", "PA-FEET-5", "Désinfectant bactéricide à base d'acide péracétique ● Nettoyer préalablement les sabots ● Application en pédiluve à une concentration de 5%|||", "10,24,60,210", "", "kg,kg,kg,kg", "Hygiène pattes,paw hygiene,,", "", "manual", "3,4,8", "", "cow", "18460,18462,18463,18461", "AB", "B",
		"PA-FEET SURF", "#Paws", "5", "", "kg,kg,kg,kg", "", "PA-FEET-SURF", "Désinfectant bactéricide à base d'acide péracétique ● Formation d'une légère mousse à l'application pour une meilleure action ● Nettoyer préalablement les sabots ● Application en spray directement sur les pattes à une concentration de 5%|||", "23,60,230", "", "kg,kg,kg,kg", "Hygiène pattes,paw hygiene,,", "", "manual", "spray|3,4,8", "", "cow", "18465,18466,18464", "AB", "B",
		
		"GALOX AZUR", "#Des Ped", "", "", "kg,kg,kg,kg", "", "GALOX-AZUR", "Désinfectant bactéricide pour pédiluves à base d'ammoniums quaternaires et glutaraldéhyde ● Utlisable à 2 % ● Présence d'un indicateur coloré|||", "10,20,200", "", "kg,kg,kg,kg", "pédiluves,hoof/feet cleaning,,", "old", "manual", "", "", "cow", "", "", "",
		"ANTI-GERM NOVIRAL X3", "#Des Surf", "", "10", "kg,kg,kg,kg", "", "ANTI-GERM-NOVIRAL-X3", "Désinfectant de surface pour les matériels et locaux d'élevage à base d'ammoniums quaternaires et de glutaraldéhyde ● Efficace dès 10&nbsp;°C ● Bactéricidie : 0,1&nbsp;%, fongicidie : 1,5&nbsp;%, virucidie : 1,0&nbsp;% ● Utilisable en thermonébulisation||Desinfektionsmittel für Gebäude und Stalleinrichtungen auf Basis von Quaternär-Ammoniumverbindungen und Glutaraldehyd ● wirksam ab 10 °C ● Bakterizid bei 0,1 %, Fungizid bei 1,5 %, Viruzid bei 1,0 % ● Anwendbar auch bei Warmvernebelung|", "5,20,60,200", "", "kg,kg,kg,kg", "dés. des surfaces,surf. disinfection,,", "old", "manual", "", "", "cow", "", "", "",
		"GERMICIDAN FF PLUS", "#Des Surf", "0.75", "5", "kg,kg,kg,kg", "", "GERMICIDAN-FF-PLUS", "Désinfectant Premium pour les surfaces ● Efficace à 0,75&nbsp;% (Bactéries, virus et levures)|||", "5,10,23,60,200", "", "kg,kg,kg,kg", "dés. des surfaces,surf. disinfection,,", "old", "manual", "", "", "cow,goat,sheep", "", "", "",
		"AGAKOK 2.5", "#Des Surf", "2.5", "10", "kg,kg,kg,kg", "", "AGAKOK-2.5", "Désinfectant utilisable à 2,5&nbsp;% contre les cryptosporidies, les coccidies et Ascaris ● Virucide, bactéricide et fongicide à 2 % selon les dernières normes en vigueur EN ● S'utilise par pulvérisation sur les sols et les surfaces propres jusqu'à la limite de ruissellement ● S'applique facilement avec un canon mousse|||", "5,10", "", "kg,kg,kg,kg", "dés. des surfaces,surf. disinfection,,", "", "manual", "", "", "cow,goat,sheep", "", "", "",
		"SANIKOK", "#Des Surf", "2.5", "10", "kg,kg,kg,kg", "", "SANIKOK", "Désinfectant utilisable à 2,5&nbsp;% contre les cryptosporidies, les coccidies et Ascaris ● Virucide, bactéricide et fongicide à 2 % selon les dernières normes en vigueur EN ● S'utilise par pulvérisation sur les sols et les surfaces propres jusqu'à la limite de ruissellement ● S'applique facilement avec un canon mousse|||", "4x5,22", "", "kg,kg,kg,kg", "dés. des surfaces,surf. disinfection,,", "", "manual", "", "", "cow,goat,sheep", "023628,023627", "", "",
		"SEPTRIVET G", "#Des Surf", "0.1-2>2", "1", "kg,kg,kg,kg", "", "SEPTRIVET-G", "Désinfectant de surface (poudre granulée) à base de DCCNa ● Bactéricide, virucide, levuricide et fongicide ● Efficacité oxydante à faible concentration dès les basses températures|||", "1,2.5", "", "kg,kg,kg,kg", "dés. des surfaces,surf. disinfection,,", "old", "manual", "", "", "cow,goat,sheep", "", "", "",
		"ANTI-GERM SEPTRIVET", "#Des Surf", "1", "1", "compr.,tabs,Tab.,tabl.", "", "ANTI-GERM-SEPTRIVET", "Désinfectant de surface pour les matériels et locaux d'élevage à base de DCCNa ● Bactéricide, virucide et fongicide ● Comprimés effervescents rapidement solubles dans l'eau ● Efficace à froid||Desinfektionsmittel für Gebäude und Stalleinrichtungen auf Basis von DCCNa ● Bakterizid, Viruzid und Fungizid ● Brausetabletten für Wasser ● Kalt angewendet wirksam |", "100,285", "", "&P,&P,,", "dés. des surfaces,surf. disinfection,,", "old", "manual", "", "", "cow,goat,sheep", "", "", "",
		
		"AQUASEPT", "#Water TT", "0.48", "", "comprimés,tablets,Tabletten,tabletas", "", "AQUASEPT", "Comprimés effervescents à base de DCCNa pour la désinfection de l'eau de boisson animale ● 1 comprimé pour 1&nbsp;m³ d'eau ● Qualité pharmaceutique||Brausetabletten auf Basis von DCCNa zur Desinfektion von Trinkwasser für Tiere ● 1 Tablette auf 1000 Liter Wasser ● Pharma Qualität|", "60,285", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "traitement eau,water treatment,,", "", "pack", "", "", "cow,goat,sheep", "", "", "B",
		"AQUASEPT 80", "#Water TT", "1", "", "comprimés,tablets,Tabletten,tabletas", "", "AQUASEPT-80", "Comprimés effervescents à base de DCCNa pour la désinfection de l'eau de boisson animale ● 1 comprimé pour 80 l d'eau ● Qualité pharmaceutique||Brausetabletten auf Basis von DCCNa zur Desinfektion von Trinkwasser für Tiere ● 1 Tablette auf 80 Liter Wasser ● Pharma Qualität|", "300", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "traitement eau,water treatment,,", "", "auto", "", "", "goat,sheep", "", "", "B",
		"GERMICIDAN TABS", "#Water TT", "0.48", "", "comprimés,tablets,Tabletten,tabletas", "", "GERMICIDAN-TABS", "Comprimés effervescents à base de DCCNa pour la désinfection de l'eau de boisson animale ● 1 comprimé pour 1&nbsp;m³ d'eau ● Qualité pharmaceutique||Brausetabletten auf Basis von DCCNa zur Desinfektion von Trinkwasser für Tiere ● 1 Tablette auf 1000 Liter Wasser ● Pharma Qualität|", "60,285", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "traitement eau,water treatment,,", "", "pack", "", "", "cow,goat,sheep", "", "", "B",
		"ANTI-GERM'O", "#Water TT", "0.01", "", "kg,kg,kg,kg", "", "ANTI-GERM-O", "Désinfectant des eaux d'abreuvement à base de peroxyde d'hydrogène, d'acide orthophosphorique et d'acide sulfurique ● élimine le tartre et prévient la prolifération des biofilms|||", "25,70,230", "", "kg,kg,kg,kg", "traitement eau,water treatment,,", "", "manual", "", "", "cow,goat,sheep", "", "", "",
		"ANTI-GERM AQUA", "#Water TT", "0.01", "", "kg,kg,kg,kg", "", "ANTI-GERM-AQUA", "Désinfectant des eaux d'abreuvement à base de peroxyde d'hydrogène et d'acide orthophosphorique ● Abaisse le pH, élimine le tartre et prévient la prolifération des biofilms|||", "5,20,60,200", "", "kg,kg,kg,kg", "traitement eau,water treatment,,", "", "manual", "", "", "goat,sheep", "", "", "",
		"ANTI-GERM CLOR'O", "#Water TT", "0.0010-0.0025", "", "kg,kg,kg,kg", "", "ANTI-GERM-CLOR-O", "Spécialité alcaline pour la désinfection de l'eau par chloration ● Contient un inhibiteur de corrosion|||", "10,25", "1.2", "kg,kg,kg,kg", "traitement eau,water treatment,,", "", "manual", "", "", "cow,goat", "", "AB", "B",
		"SANICRISTAL", "#Water TT", "0.0010-0.0025", "", "kg,kg,kg,kg", "", "SANICRISTAL", "Spécialité alcaline pour la désinfection de l'eau par chloration. Contient un inhibiteur de corrosion|||", "25", "1.2", "kg,kg,kg,kg", "traitement eau,water treatment,,", "", "manual", "", "", "cow,goat", "022002", "AB", "B",
		"ANTI-GERM STAB'O", "#Water TT", "0.0005-0.0012", "", "kg,kg,kg,kg", "", "ANTI-GERM-STAB-O", "Additif stabilisant antitartre ● À utiliser en complément d'ANTI-GERM CLOR'O pour la désinfection de l'eau ● Dosage : ½ volume d'ANTI-GERM STAB'O pour 1 volume d'ANTI-GERM CLOR'O|||", "10", "1.17", "kg,kg,kg,kg", "traitement eau,water treatment,,", "", "manual", "", "", "cow,goat", "", "", "",
		"SANIKARST", "#Water TT", "0.0005-0.0012", "", "kg,kg,kg,kg", "", "SANIKARST", "Additif stabilisant antitartre. A utiliser en complément de Sanicristal pour la désinfection de l'eau. Dosage : 1/2 volume de Sanikarst pour un volume de Sanicristal. |||", "10", "1.17", "kg,kg,kg,kg", "traitement eau,water treatment,,", "", "manual", "", "", "cow,goat", "022003", "", "",
		"ANTI-GERM OXID'O", "#Water TT", "0.01", "", "kg,kg,kg,kg", "", "ANTI-GERM-OXID-O", "Désinfectant de l'eau de boisson animale ● À base de peroxyde d'hydrogène (50%) conforme EN902 (qualité alimentaire)|||", "6,24,72", "1.19", "kg,kg,kg,kg", "traitement eau,water treatment,,", "", "manual", "", "", "cow", "", "", "",
		"INO PEROX EXTRA", "#Water TT", "0.0075", "", "kg,kg,kg,kg", "", "INO-PEROX-EXTRA", "Assainissant des eaux de boisson exempt de métaux lourds, à base de péroxyde d'hydrogène (49,5%) ● Deux actions : nettoyage des canalisations et désinfection|||", "24,70,220", "1.19", "kg,kg,kg,kg", "traitement eau,water treatment,,", "", "manual", "", "", "cow", "16667,16668,16669", "AB", "B",
		"ANTI-GERM ACID'O", "#Water TT", "1", "", "kg,kg,kg,kg", "", "ANTI-GERM-ACID-O", "Permet d'abaisser rapidement le pH de l'eau afin qu'elle soit facilement consommable par les animaux|||", "30", "1.58", "kg,kg,kg,kg", "traitement eau,water treatment,,", "", "manual", "", "", "cow,goat", "", "", "",
		"Lessive de soude", "#Water TT", "1", "", "kg,kg,kg,kg", "", "LESSIVE-DE-SOUDE", "Concentration&nbsp;:&nbsp;30&nbsp;% ● Permet de rehausser le pH de l'eau de boisson ● Qualité alimentaire|||", "20,70,210", "1.33", "kg,kg,kg,kg", "traitement eau,water treatment,,", "", "manual", "", "", "cow,goat", "", "", "",
		"Kit bandelettes test chlore PX19531", "#Test", "1", "", "kit test,kit test,kit test,kit test", "", "TEST-CHLORE-PX19531", "Tube de 75 bandelettes test permettant la vérification de la concentration en chlore libre ● Gamme 0.5 - 20 ppm|||", "1", "", ",,,", "toutes,all,,", "", "auto", "", "", "cow,goat,sheep", "", "", "",
		"Kit bandelettes test chlore PX19532", "#Test", "1", "", "kit test,kit test,kit test,kit test", "", "TEST-CHLORE-PX19532", "Boîte de 50 bandelettes test permettant la vérification de la concentration en chlore libre ● Gamme 0 - 6 ppm|||", "1", "", ",,,", "toutes,all,,", "", "auto", "", "", "cow,goat,sheep", "", "", "",
		"Kit bandelettes test peroxyde PX19127", "#Test", "1", "", "kit test,kit test,kit test,kit test", "", "TEST-H2O2-PX19127", "Tube de 100 bandelettes test permettant la vérification de la concentration en peroxyde d'hydrogène ● Gamme 0.5 - 25 ppm|||", "1", "", ",,,", "toutes,all,,", "", "auto", "", "", "cow,goat,sheep", "", "", "",
		
		"AG-NET'", "#Nett Agri", "", "", "kg,kg,kg,kg", "", "AG-NET", "Shampoing pour véhicules et engins agricoles, multi-usages ● Laisse sur les surfaces un film brillant ● S'utilise en solution à 2 - 20&nbsp;% (dépendant de l'application)||Multifunktionelles Reinigungsmittel für Fahrzeuge und landwirtschaftliche Geräte ● gibt ein glänzendes Aussehen ● Dosierung von 2 - 20 % (je nach Anwendung - techn. Datenblatt konsultieren)|", "5,10", "", "kg,kg,kg,kg", "nettoyage externe,external cleaning,,", "", "manual", "", "", "cow", "", "", "",
		"AG-PULV'", "#Nett Mat", "", "", "kg,kg,kg,kg", "", "AG-PULV", "Nettoyage et protection de pulvérisateurs pour produits phytosanitaires ● Action protectrice pour les cultures ● Élimination des sulfonylurées et autres résidus ● Anti-encrassement|||", "5,10", "", "kg,kg,kg,kg", "protection pulvérisateurs,,,", "old", "manual", "", "", "cow", "", "", "",
		"AG-BAT'", "#Nett Bat", "", "", "kg,kg,kg,kg", "", "AG-BAT", "Démoussant liquide spécial toitures, façades, terrasses… ● Idéal pour restaurer les surfaces verdies par les mousses et les lichens ● Applicable sur de nombreux types de surfaces ● Limite les phénomènes d'infiltrations d'eau par les racines ● Restaure les supports traités|||", "5,10", "", "kg,kg,kg,kg", "démoussant liquide,,,", "old", "manual", "", "", "cow", "", "", "",
		"PAT'APPÂT RATICIDE", "#Raticide", "", "", ",,,", "", "PAT-APPAT-RATICIDE", "Souricide et raticide ● Appât hyper appètent et hydrofuge ● Pratique&nbsp;:&nbsp;400&nbsp;sachets pré-dosés et non dispersibles|||", "1", "", "seau(x),bucket(s),Eimer,cubo(s)", "raticide,rodenticide,,", "old", "auto", "", "", "cow", "", "", "",
		
		"LAVETTES microfibres gaufrées", "#Udder wipes MF", "1", "", "lavettes,wipes,Tücher,paños", "", "LAVETTES-MF-GAUFREES", "Lavettes microfibres d'aspect gaufré ● 32&nbsp;x&nbsp;35 cm ● Ourlets piqués sur 2 côtés ● Composition : polyester et coton ● Poids unitaire : 40&nbsp;g|32 x 35&nbsp;cm|32 x 35&nbsp;cm|32 x 35&nbsp;cm", "10", "", "sachet(s) de &Q &P,bag(s) of &Q &P,,,", "hygiène mamelle,udder hygiene,,", "old", "auto", "", "", "cow", "", "", "",
		"LAVETTES bouclées éponge", "#Udder wipes BE", "1", "", "lavettes,wipes,Tücher,paños", "", "LAVETTES-BOUCLEES-EPONGE", "32 x 32&nbsp;cm ● Coton majoritaire et autres fibres|||", "10", "", "sachet(s) de &Q &P,bag(s) of &Q &P,,,", "hygiène mamelle,udder hygiene,,", "old", "auto", "", "", "cow", "", "", "",
		"LAVETTES SUPER", "#Udder wipes SUP", "1", "", "lavettes,wipes,Tücher,paños", "", "LAVETTES-SUPER", "51 x 36&nbsp;cm ● Gaufrée synthétique||51 x 36 cm ● Synthetische Reinigungstücher|", "25", "", "sachet(s) de &Q &P,bag(s) of &Q &P,,,", "hygiène mamelle,udder hygiene,,", "old", "auto", "", "", "cow", "", "", "",
		
		"KIT SPRAY", "#Udder spray", "1", "", ",,,", "", "KIT-SPRAY", "Système de pulvérisation permettant une application du TRAYOR efficace, rapide et économique ● Bonne couverture|||", "1", "", ",,,", "hygiène mamelle,udder hygiene,,", "", "auto", "", "", "goat,sheep", "", "", "",
		"Pistolet KIT SPRAY", "#Udder spray", "1", "", ",,,", "", "Pistolet-Kit-Spray", "Avec buse inox et lance inox|||", "1", "", ",,,", "hygiène mamelle,udder hygiene,,", "", "auto", "", "", "goat", "", "", "",
		"Raccord tournant KIT SPRAY", "#Udder spray", "1", "", ",,,", "", "Raccord-tournant-Kit-Spray", "Pour une meilleure praticité d'utilisation|||", "1", "", ",,,", "hygiène mamelle,udder hygiene,,", "", "auto", "", "", "goat,sheep", "", "", "",
		"GOBELET MOUSSEUR", "#Udder cup1", "1", "", ",,,", "", "GOBELET-MOUSSEUR", "Démontable ● Plusieurs filtres pour une mousse onctueuse ● 250&nbsp;ml||Zerlegbarer Schaumbecher ● Mehrere Filter für einen weichen Schaum ● 250 ml|", "1", "", ",,,", "hygiène mamelle,udder hygiene,,", "old", "auto", "", "", "cow,goat", "", "", "",
		"GOBELET BACTO TREMPE", "#Udder cup2", "1", "", ",,,", "", "BACTO-TREMPE", "Anti-retour ● Adapté aux produits visqueux ● 250&nbsp;ml||Dippbecher mit Rücklaufschutz ● Angepasst für die Anwendung von viskosen Produkten ● 250 ml|", "1", "", ",,,", "hygiène mamelle,udder hygiene,,", "old", "auto", "", "", "cow,goat,sheep", "", "", "",
		"Réservoir gobelets", "#Udder cup", "1", "", ",,,", "", "RESERVOIR-GOBELETS", "Réservoir pour gobelets mousseur/trempeur sans bouchon  ● 250&nbsp;ml|||", "1", "", ",,,", "hygiène mamelle,udder hygiene,,", "old", "auto", "", "", "cow,goat,sheep", "", "", "",
		"BACTOSPRAY", "#Udder spray", "1", "", ",,,", "", "BACTOSPRAY-BOVINS-OVINS", "Spray pour les trayons|||", "1", "", ",,,", "hygiène mamelle,udder hygiene,,", "old", "auto", "", "", "cow,sheep", "", "", "",
		"PULVÉRISATEUR Bovins/Ovins", "#Udder spray", "1", "", ",,,", "", "PULV_RISATEUR-BOVINS-OVINS", "Spray pour les trayons ● Spécial bovins/ovins|||", "1", "", ",,,", "hygiène mamelle,udder hygiene,,", "", "auto", "", "", "cow,sheep", "", "", "",
		"PULVÉRISATEUR Caprins", "#Udder spray", "1", "", ",,,", "", "PULV_RISATEUR-CAPRINS", "Spray pour les trayons ● Spécial caprins|||", "1", "", ",,,", "hygiène mamelle,udder hygiene,,", "", "auto", "", "", "goat", "", "", "",
		"KIT ANTI-GERM CM-TEST", "#Udder cmt", "1", "", ",,,", "", "KIT-ANTI-GERM-CM-TEST", "Kit de dépistage des mammites par lecture immédiate ● Permet de connaître rapidement l'état sanitaire de votre troupeau ● Mallette de transport comprenant : 1 L de réactif ANTI-GERM CM-TEST, un flacon doseur et un plateau 4 alvéoles|||", "1", "", ",,,", "hygiène mamelle,udder hygiene,,", "", "auto", "", "", "cow", "", "", "",
		"DÉVIDOIR Ouate", "#Udder devO", "1", "", ",,,", "", "DEVIDOIR-OUATE", "Dévidoir hermétique (poussières, humidité, environnement peu propre…) ● Prédécoupage des feuilles ● Translucide||Spender für Trockentücher ● Durchsichtig |", "1", "", ",,,", "hygiène mamelle,udder hygiene,,", "", "auto", "", "", "cow", "", "", "",
		"DÉVIDOIR FRESH Tritex®", "#Udder devW", "1", "", ",,,", "", "DEVIDOIR-FRESH-TRITEX", "Dévidoir hermétique permettant de conserver une atmosphère humide ● Prédécoupage des lingettes ● Translucide||Spender für Feuchttücher ● Durchsichtig|", "1", "", ",,,", "hygiène mamelle,udder hygiene,,", "", "auto", "", "", "cow,goat,sheep", "", "", "",
		"SEAU FRESH Tritex®", "#Udder seaW", "1", "", ",,,", "", "SEAU-FRESH-TRITEX", "Seau de transport, hermétique, permettant de conserver une atmosphère humide ● Prédécoupage des lingettes|||", "1", "", ",,,", "hygiène mamelle,udder hygiene,,", "", "auto", "", "", "cow,goat,sheep", "", "", "",
		
		"HYPRASIL GREEN+", "#Valor", "1", "", "dose(s),dose(s),Dosen,dosis", "", "HYPRASIL-GREEN+", "Valorisateur pour ensilage et enrubannage de graminées et de légumineuses ●Contient des bactéries homo et hétéro fermentaires ● Action renforcée par la présence d'un complexe enzymatique ● 1 dose = un sachet de 70g pour 50 Tonnes brutes|||", "1", "", "sachet(s),bag(s),,", "valorisation,valorization,,", "", "auto", "", "", "cow,goat,sheep", "011451", "", "",
		"ENSIL'GREEN+", "#Valor", "1", "", "dose(s),dose(s),Dosen,dosis", "", "ENSIL-GREEN+", "Valorisateur des ensilages et enrubannages de graminées et légumineuses. Acidification rapide (Pediococcus pentosaceus) et réduction des pertes de matière sèche (Lactobacillus hilgardii, Lactobacillus buchneri). Activité renforcée par un complexe enzymatique (Xylanase et Beta-Glucanase) Une dose = un sachet de 100g|||", "1", "", "sachet(s),bag(s),,", "valorisation,valorization,,", "", "auto", "", "", "cow,goat,sheep", "015117", "", "",
		"HYPRASIL GREEN XL", "#Valor", "1", "", "dose(s),dose(s),Dosen,dosis", "", "HYPRASIL-GREEN-XL", "Valorisateur des ensilages et enrubannages de graminées et légumineuses ● Acidification rapide (Pediococcus pentosaceus) et réduction des pertes de matière sèche (Lactobacillus hilgardii, Lactobacillus buchneri) ● Activité renforcée par un complexe enzymatique (Xylanase et Beta-Glucanase) ● Une dose = un sachet de 100g|||", "1", "", "sachet(s),bag(s),,", "valorisation,valorization,,", "", "auto", "", "", "cow,goat,sheep", "", "", "",
		"HYPRASIL MAÏS+", "#Valor", "1", "", "dose(s),dose(s),Dosen,dosis", "0,ER_EmBWmMydPu6YCrw5YZWkB2GjwSm8kRYC3NZtrzfyeOA?e=XAuPJw", "HYPRASIL-MA_S+", "Valorisateur pour ensilage de maïs (maïs grain humide et maïs épis) ● Contient des bactéries homo et hétéro fermentaires ● Assure une plus grande stabilité du fourrage dans le temps ● 1 dose = un sachet de 100g pour 100 Tonnes brutes|||", "1", "", "sachet(s),bag(s),,", "valorisation,valorization,,", "", "auto", "", "", "cow,goat,sheep", "", "", "",
		"ENSIL'PROTECT+", "#Valor", "1", "", "dose(s),dose(s),Dosen,dosis", "", "ENSIL-PROTECT+", "Valorisateur des ensilages de maïs (maïs plante entière, maïs grain humide et maïs épis) augmentant la vitesse d'acidification (Pediococcus pentosaceus) et la stabilité du fourrage dans le temps : baisse du risque de contamination par les levures (Lactobacillus hilgardii, Lactobacillus buchneri). Une dose = un sachet de 100g|||", "1", "", "sachet(s),bag(s),,", "valorisation,valorization,,", "", "auto", "", "", "cow,goat,sheep", "031093", "", "",
		"HYPRASIL MAÏS XL", "#Valor", "1", "", "dose(s),dose(s),Dosen,dosis", "", "HYPRASIL-MA_S-XL", "Valorisateur des ensilages de maïs (maïs plante entière, maïs grain humide et maïs épis) augmentant la vitesse d'acidification (Pediococcus pentosaceus) et la stabilité du fourrage dans le temps : baisse du risque de contamination par les levures (Lactobacillus hilgardii, Lactobacillus buchneri) ● Une dose = un sachet de 100g|||", "1", "", "sachet(s),bag(s),,", "valorisation,valorization,,", "", "auto", "", "", "cow,goat,sheep", "", "", "",
		"HYPRASIL START", "#Valor", "1", "", "dose(s),dose(s),Dosen,dosis", "", "HYPRASIL-START", "Valorisateur des ensilages de graminées pour optimiser la valeur alimentaire du fourrage ● Accélération de l'acidification grâce à un complexe de bactéries lactiques homofermentaires : souche 'starter' (Pediococcus acidilactici) ● Améliore la conservation dans le temps, souche 'finisher' (Lactobacillus plantarum) ● Une dose = un sachet de 40g|||", "1", "", "sachet(s),bag(s),,", "valorisation,valorization,,", "", "auto", "", "", "cow,goat,sheep", "", "", "",
		"ENSIL'SPRING GR", "#Valor", "1", "", "dose(s),dose(s),Dosen,dosis", "", "ENSIL-SPRING-GR", "Valorisateur des ensilages de graminées pour optimiser la valeur alimentaire du fourrage. Accélération de l'acidification grâce à un complexe de bactéries lactiques homofermentaires : souche «starter» (Pediococcus acidilactici). Et améliore la conservation dans le temps, souche «finisher» (Lactobacillus plantarum).  Une dose = un sachet de 40g|||", "1", "", "sachet(s),bag(s),,", "valorisation,valorization,,", "", "auto", "", "", "cow,goat,sheep", "", "", "",
		"HYPRASIL DUO", "#Valor", "1", "", "dose(s),dose(s),Dosen,dosis", "0,EWJdWXrFWKVKuvJybuYzu7kBlWSUZmj4nR8IMm9CAFHSaw?e=euI4b6", "HYPRASIL-DUO", "Valorisateur certifié utilisable en Agriculture Biologique pour ensilage et enrubannage de graminées et de légumineuses, ensilage de maïs ● Bactéries homo et hétéro fermentaires et complexe enzymatique ● Herbe : 1 dose = un sachet de 100g pour 50 Tonnes brutes ● Maïs : 1 dose = un sachet de 100g pour 60 Tonnes brutes|||", "1", "", "sachet(s),bag(s),,", "valorisation,valorization,,", "", "auto", "", "", "cow,goat,sheep", "016482", "AB", "",
		"ENSIL'STAB", "#Valor", "1", "", "dose(s),dose(s),Dosen,dosis", "", "ENSIL-STAB", "Prémélange d'additifs pour l'ensilage destiné à améliorer la stabilité aérobie des ensilages de maïs et de maïs épis grâce à un complexe de bactéries (Lactobacillus buchneri). Utilisation du produit à l’ouverture du silo. Une dose = 50g pour traiter 50 tonnes de fourrage.|||", "1", "", "sachet(s),bag(s),,", "valorisation,valorization,,", "", "auto", "", "", "cow,goat,sheep", "016463", "", "",
		"ENSIL'MIX UAB", "#Valor", "1", "", "dose(s),dose(s),Dosen,dosis", "", "ENSIL-MIX-UAB", "Valorisateur certifié utilisable en Agriculture Biologique pour ensilages et enrubannages de graminées et de légumineuses, ensilage de maïs • Herbe : 1 dose = un sachet de 100g pour 50 Tonnes brutes • Maïs : 1 dose = un sachet de 100g pour 60 Tonnes brutes|||", "1", "", "sachet(s),bag(s),,", "valorisation,valorization,,", "", "auto", "", "", "cow,goat,sheep", "016568", "AB", "",
		"HYPRA'NAT GREEN", "#Valor", "1", "", "dose(s),dose(s),Dosen,dosis", "", "HYPRA-NAT-GREEN", "Valorisateur utilisable en Agriculture Biologique pour les ensilages et enrubannages de graminées et/ou légumineuses, Mélange de bactéries homo et hétérofermentaires et un complexe enzymatique pour acidifier et stabiliser le fourrage. (1 dose de 100 gr pour 50 tonnes brutes de fourrage)|||", "1", "", "sachet(s),bag(s),,", "valorisation,valorization,,", "", "auto", "", "", "cow,goat,sheep", "", "", "",
		"HYPRA'NAT MAÏS", "#Valor", "1", "", "dose(s),dose(s),Dosen,dosis", "", "HYPRA-NAT-MAIS", "Valorisateur utilisable en Agriculture Biologique pour les ensilages de maïs plante entière, maïs épis et maïs grain humide. Contient 1 bactérie acidifiante et le complexe stabilisant surpuissant L.Hilgardii CNCM I-4785 et L. Buchneri NCIMB 407688. (1dose de 50 gr pour 50 tonnes brutes de fourrage)|||", "1", "", "sachet(s),bag(s),,", "valorisation,valorization,,", "", "auto", "", "", "cow,goat,sheep", "", "", "",

		"BOLIFAST RUMEN", "#Nutri", "2", "", "bolus,bolus,Dosen,dosis", "", "BOLIFAST-RUMEN", "Bolus démarrage de la lactation : stimulation des fermentations ruminales, à base de levures et niacine. Formule effervescente ● Application : 1 dose le jour du vêlage|||", "12", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "auto", "VL,cow,kuh,vaca", "", "cow", "006351", "", "",
		"BOLIFAST PHYSIOLOGIC", "#Nutri", "2", "", "bolus,bolus,Dosen,dosis", "", "BOLIFAST-PHYSIOLOGIC", "Bolus démarrage de la lactation : soutien nutritionnel des fonctions hépatiques, à base de choline et méthionine rumino protégées. Formule effervescente ● Application : 1 dose 15 jours avant le vêlage|||", "12", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "auto", "VL,cow,kuh,vaca", "", "cow", "006381", "", "",
		"BOLITRACE BIOTIN +", "#Nutri", "2", "", "bolus,bolus,Dosen,dosis", "", "BOLITRACE-BIOTIN-+", "Bolus vaches taries : qualité des phanères, qualité du colostrum et vitalité du veau ● Apports pendant 120 jours (oligo éléments, vitamines A, D3, E, biotine) ●  Application : 2 bolus le jour du tarissement ou 3 mois avant vêlage|||", "20", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "auto", "VL,cow,kuh,vaca", "", "cow", "018152", "", "",
		"BOVIFORM BIOTIN +", "#Nutri", "2", "", "bolus,bolus,Dosen,dosis", "", "BOVIFORM-BIOTIN-+", "Bolus vaches taries : qualité des phanères, qualité du colostrum et vitalité du veau ● Apports pendant 120 jours (oligo éléments, vitamines A, D3, E, biotine) ●  Application : 2 bolus le jour du tarissement ou 3 mois avant vêlage|||", "20", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "auto", "VL,cow,kuh,vaca", "", "cow", "026630", "", "",
		"BOLIFLASH CALCIUM", "#Nutri", "2", "", "bolus,bolus,Dosen,dosis", "", "BOLIFLASH-CALCIUM", "Bolus limitant le risque de fièvre vitulaire : Assimilation très rapide, formes de calcium très assimilables (formiate et citrate) ● Formule effervescente ● Application : 1 dose jour du vêlage et 1 dose 12 h après|||", "12", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "auto", "VL,cow,kuh,vaca", "", "cow", "006390", "", "",
		"BOVIFORM CALCIUM", "#Nutri", "2", "", "bolus,bolus,Dosen,dosis", "", "BOVIFORM-CALCIUM", "Bolus limitant le risque de fièvre vitulaire : Assimilation très rapide, formes de calcium très assimilables (formiate et citrate) ● Formule effervescente ● Application : 1 dose jour du vêlage et 1 dose 12 h après|||", "20", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "auto", "VL,cow,kuh,vaca", "", "cow", "015747", "", "",
		"BOLIFLASH FERTIL", "#Nutri", "2", "", "bolus,bolus,Dosen,dosis", "", "BOLIFLASH-FERTIL", "Bolus fertilité : amélioration de l'expression des chaleurs et prépare à l'IA en une seule application, soutient de la préparation à l'oetrus et à la reproduction ● A base de bêta-carotène ● Application : 1 dose 45 à 80 jours après vêlage|||", "12", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "auto", "VL,cow,kuh,vaca", "", "cow", "006297", "", "",
		"BOLITRACE 240", "#Nutri", "1", "", "bolus,bolus,Dosen,dosis", "", "BOLITRACE-240", "Bolus génisses : soutien de la croissance, préparation à la reproduction, soutien des besoins liés à la gestation ● Apports pendant 240 jours (oligo éléments : Iode, Cobalt, Sélénium, Manganèse, Cuivre, Zinc) ● Application : 1 ou 2 bolus à la mise à l'herbe (1 bolus < 400 kg de poids vif, 2 bolus > 400 kg de poids vif)|||", "20", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "auto", "génisse,heifer,Färse,novilla", "", "cow", "015996", "", "",
		"BOLITRACE 90", "#Nutri", "2", "", "bolus,bolus,Dosen,dosis", "", "BOLITRACE-90", "Bolus vaches taries : qualité du colostrum et vitalité du veau ● Apports pendant 90 jours (oligo éléments, vitamines A, D3, E) ● Application : 2 bolus le jour du tarissement|||", "20", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "auto", "VL,cow,kuh,vaca", "", "cow", "015943", "", "",
		"BOLIDAYS CONTROL", "#Nutri", "2", "", "bolus,bolus,Dosen,dosis", "", "BOLIDAYS-CONTROL", "Bolus démarrage de lactation : accompagnement du métabolisme énergétique, aide à la reproduction ● Libération contrôlée des éléments : apports pendant 10 jours en 1 dose (L-Carnitine, Choline, Méthionine rumino-protégées) ● Application : 2 bolus le 1er jour de la lactation|||", "12", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "auto", "VL,cow,kuh,vaca", "", "cow", "", "", "",
		"BOVIFORM NORBIL", "#Nutri", "2", "", "bolus,bolus,Dosen,dosis", "", "BOVIFORM-NORBIL", "Bolus démarrage de lactation : accompagnement du métabolisme énergétique, aide à la reproduction ● Libération contrôlée des éléments : apports pendant 10 jours en 1 dose (L-Carnitine, Choline, Méthionine rumino-protégées) ● Application : 2 bolus le 1er jour de la lactation|||", "10", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "auto", "VL,cow,kuh,vaca", "", "cow", "", "", "",
		"HYDRAFEED", "#Nutri", "4", "", "sachet(s),bag(s),,", "", "HYDRAFEED", "Formule effervescente d'aide au démarrage du veau  (action protectrice) ● Transition alimentaire (entre colostrum et phase lactée), aide à la bonne hydratation en cas de troubles digestifs • Application : transition, 1 journée (2 repas/jr) - hydratation, 2 à 3 jours (2 repas/jr)|||", "16", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "auto", "veau,veal,kalbfleich,ternera", "", "cow", "009105", "", "",
		"HYDRYL", "#Nutri", "4", "", "sachet(s),bag(s),,", "", "HYDRYL", "Formule effervescente d'aide au démarrage du veau  (action protectrice) ● Transition alimentaire (entre colostrum et phase lactée), aide à la bonne hydratation en cas de troubles digestifs • Application : transition, 1 journée (2 repas/jr) - hydratation, 2 à 3 jours (2 repas/jr)|||", "20", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "auto", "veau,veal,kalbfleich,ternera", "", "cow", "", "", "",
		"HYDRAFEED GEL", "#Nutri", "1", "", "seringue(s),syringe(s),Dosen,dosis", "", "HYDRAFEED-GEL", "Aide au démarrage du veau (action protectrice) : aide à la bonne hydratation sans coupure de la phase lactée • Application : 1 seringue (en 4 repas sur 2 jours)|||", "6", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "auto", "veau,veal,kalbfleich,ternera", "", "cow", "011417", "", "",
		"DIAFEED", "#Nutri", "6", "", "sachet(s),bag(s),,", "", "DIAFEED", "Aide au démarrage du veau  (action renforcée) ● Action contre les troubles digestifs plus sévères (origines bactériennes, virales et parasitaires) nécessitant la protection de la muqueuse des parois intestinales ● Application : 3 jours (2 à 3 repas/jr)|||", "21", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "auto", "veau,veal,kalbfleich,ternera", "", "cow", "012175", "", "",
		"ENERFEED", "#Nutri", "1", "", "seringue(s),syringe(s),Dosen,dosis", "", "ENERFEED", "Solution préventive à la naissance du veau ● Coup de fouet énergétique, favorise la levée et le reflexe de succion, prévient la carence en Fer ● Application : 1 seringue dès la naissance|||", "12", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "auto", "veau,veal,kalbfleich,ternera", "", "cow", "011414", "", "",
		"COLOFEED", "#Nutri", "1", "", "seringue(s),syringe(s),Dosen,dosis", "", "COLOFEED", "Solution préventive à la naissance du veau ● Apport d'Immunoglobulines, soutien des fonctions immunitaires, apport en énergie, oligo-éléments et vitamine C ● Application : 1 seringue dès la naissance|||", "6", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "auto", "veau,veal,kalbfleich,ternera", "", "cow", "011413", "", "",
		"HYDRAVO FRV 100", "#Nutri", "8", "", "bolus,bolus,Dosen,dosis", "", "HYDRAVO-FRV-100", "Galet effervescent d'aide au démarrage du veau : transition alimentaire, aide à la bonne hydratation en cas de troubles digestifs • Application : 2 galets dans 2L d'eau chaude, 2 fois par jour pendant 2 à 3 jours|||", "14,56", "", "boîte(s) de &Q &P,boxes of &Q &P,,", "nutrition,nutrition,,", "", "pack", "veau,veal,kalbfleich,ternera", "", "cow", "", "", "",

		"KERSIA FOAMER SYSTEM", "#Controller", "1", "", "automate,controller,,", "", "KERSIA-FOAMER-SYSTEM", "Automate mousse pour la désinfection des trayons en avant-traite avec une application du produit régulière sur les 4 trayons de la mamelle ● Fonctionne avec un compresseur, branchez l'automate sur l'air comprimé et régler le débit d'air et de produit moussant pour obtenir une qualité de mousse optimale|||", "1", "", ",,,", "toutes,all,,", "", "auto", "", "", "cow", "", "", "",
		"KERSIA FOAMER - DESCENTE", "#Controller", "1", "", "automate,controller,,", "", "KERSIA-FOAMER-DESCENTE", "Descente supplémentaire pour automate KERSIA FOAMER SYSTEM|||", "1", "", ",,,", "toutes,all,,", "", "auto", "", "", "cow", "", "", "",
		"QUICK SPRAY SYSTEM", "#Controller", "1", "", "automate,controller,,", "", "QUICK-SPRAY-SYSTEM", "Automate de pulvérisation des trayons avant ou après la traite ● Fonctionne entièrement sur vide, sans utilisation d'électricité ● Pistolet sur tuyau en spirale rétractable, 21 m de ligne d'alimentation fournie ● Agrandissement possible par kits d'extension pour s'adapter à toute installation de traite et taille de troupeau|||", "1", "", ",,,", "toutes,all,,", "", "auto", "", "", "cow,goat,sheep", "", "", "",
		"TEAT SPRAY", "#Controller", "1", "", "automate,controller,,", "", "TEAT-SPRAY", "Automate de pulvérisation pour trayon en après-traite, adapté pour les élevages caprins et ovins ● Fonctionne en alimentation air comprimé ● Pistolet avec lance inox ● S’utilise avec des produits prêts à l’emploi|||", "1", "", ",,,", "toutes,all,,", "", "auto", "", "", "goat,sheep", "", "", "",
		"PREFOAM SYSTEM", "#Controller", "1", "", "automate,controller,,", "", "PREFOAM-SYSTEM", "Automate mousse pour la désinfection des trayons en avant-traite avec une application du produit régulière sur les 4 trayons de la mamelle ● Fonctionnement électrique avec une pompe à air intégrée ● Gobelets à remplir avant la traite|||", "1", "", ",,,", "toutes,all,,", "", "auto", "", "", "cow", "", "", "",
		"SPRAY 2A SYSTEM", "#Controller", "1", "", "automate,controller,,", "", "SPRAY-2A-SYSTEM", "Automate de pulvérisation des trayons avant ou après la traite. Fonctionne entièrement sur vide, sans utilisation d’électricité. Pistolet sur tuyau en spirale rétractable, 21 m de ligne d’alimentation fournie. Agrandissement possible par kits d’extension pour s’adapter à toute installation de traite et taille de troupeau|||", "1", "", ",,,", "toutes,all,,", "", "auto", "", "", "cow,goat,sheep", "", "", "",
		"PERFO DOSE", "#Controller", "1", "", "automate,controller,,", "", "PERFO-DOSE", "Automate de désinfections des manchons trayeurs ● Réduction de la transmission des pathogènes de la mammite d'une vache à l'autre ● L'automate est muni de composants et de joints spéciaux résistants à l'acide peracétique ● Equipé d'une pompe Dosatron|||", "1", "", ",,,", "toutes,all,,", "", "auto", "", "", "cow,goat,sheep", "", "", "",
		"KERSIA WATER SYSTEM", "#Controller", "1", "", "automate,controller,,", "", "KERSIA-WATER-SYSTEM", "L'automate KERSIA WATER SYSTEM est un ensemble de dosage spécifique pour la désinfection de l'eau de boisson en élevage ● Il permet un dosage proportionnel continu des produits désinfectants en fonction de la consommation d'eau ● Facile à poser, résistant aux produits purs (tête PVDF), il s’adapte aux tuyauteries de 25, 32 ou 40 mm|||", "25,32,40", "", ",,,", "toutes,all,,", "", "manual", "diameter", "", "cow,goat,sheep", "", "", "",
		"KIT PETIT RUMINANT", "#Controller", "1", "", "automate,controller,,", "", "KIT-PETIT-RUMINANT", "Kit de désinfection rapide des manchons trayeurs pour installation petits ruminants ● Réduction de la transmission des pathogènes d'un animal à l'autre. Réaliser une pression simultanée des manchons sur les buses de pulvérisation placées sur la platine ● Répéter l'opération entre chaque animal|||", "1", "", ",,,", "toutes,all,,", "", "auto", "", "", "goat,sheep", "", "", "",
		"CUVE TRONIK 120L", "#Controller", "1", "", "automate,controller,,", "", "CUVE-TRONIK-120L", "120L ● Cuve de stockage et d'application pour solution valorisateur de fourrage ● Equipée d'un système DPAE|||", "1", "", ",,,", "toutes,all,,", "", "auto", "", "", "cow,goat,sheep", "", "", "",
		"CUVE TRONIK 200L", "#Controller", "1", "", "automate,controller,,", "", "CUVE-TRONIK-200L", "200L ● Cuve de stockage et d'application pour solution valorisateur de fourrage ● Equipée d'un système DPAE|||", "1", "", ",,,", "toutes,all,,", "", "auto", "", "", "cow,goat,sheep", "", "", "",
		"CAGE DTLG SPRAY", "#Controller", "1", "", "automate,controller,,", "", "CAGE-DTLG-SPRAY", "● Cage de pulvérisation en sortie de traite pour troupeau caprin et ovin : utilisation du principe d'atomisation pour une meilleure couverture de la mamelle des chèvres et brebis ● Cage adaptable pour sortie roto et salle de traite classique|||", "1", "", ",,,", "toutes,all,,", "", "auto", "", "", "goat,sheep", "", "", "",
		
		"LESSIVE MÉNAGÈRE", "#Udder laund", "1", "", "kg*,kg*,kg*,kg*", "", "LESSIVE-MENAGERE", "Savons ● Tensio-actifs & polycarboxylates ● Disponible en seau de 18&nbsp;kg|||", "18", "", ",,,", "hygiène mamelle,udder hygiene,,", "", "auto", "", "", "cow", "", "", "",
		"Extrait de Javel", "#Udder laund", "1", "", "kg*,kg*,kg*,kg*", "", "EXTRAIT-DE-JAVEL", "Eau de javel très concentrée utilisée pour le blanchiment ● Concentration : env. 50° chlorométrique ou 13 % exprimé en chlore actif|||", "10,25", "", ",,,", "hygiène mamelle,udder hygiene,,", "", "manual", "", "", "cow", "", "", "",
		"ANIOS CDN", "#soap", "1", "", "kg*,kg*,kg*,kg*", "", "ANIOS-CDN", "Savon liquide bactéricide pour le lavage hygiénique des mains ● Disponible en 1&nbsp;kg & 5&nbsp;kg|||", "1,5", "", ",,,", "hygiène mamelle,udder hygiene,,", "old", "auto", "", "", "cow", "", "", "",
		"POMPE Bidons PX1904", "#Pump", "1", "", "pompes,pumps,pumps,bombas", "", "POMPE-PX1904", "Pompe doseuse pour bidons de 10 litres ● Dose 30 ml|||", "1", "", ",,,", "toutes,all,,", "old", "auto", "", "", "cow", "", "", "",
		"POMPE Bidons PX1910", "#Pump", "1", "", "pompes,pumps,pumps,bombas", "", "POMPE-PX1910", "Pompe doseuse pour bidons de 20 litres ● Dose 30 ml|||", "1", "", ",,,", "toutes,all,,", "old", "auto", "", "", "cow", "", "", "",
		"POMPE PX1948", "#Pump", "1", "", "pompes,pumps,pumps,bombas", "", "POMPE-PX1948", "Pompe doseuse pour fûts de 60 litres ● Dose 30 ml|||", "1", "", ",,,", "toutes,all,,", "old", "auto", "", "", "cow", "", "", "",
		"POMPE EP93/100 PX1911", "#Pump", "1", "", "pompes,pumps,pumps,bombas", "", "POMPE-PX1911", "Pompe pour fûts de 60 litres ● Dose 100 ml|||", "1", "", ",,,", "toutes,all,,", "old", "auto", "", "", "cow", "", "", "",
		"POMPE EP93/100 PX1939", "#Pump", "1", "", "pompes,pumps,pumps,bombas", "", "POMPE-PX1939", "Pompe pour fûts de de 200 litres ● Dose 100 ml|||", "1", "", ",,,", "toutes,all,,", "old", "auto", "", "", "cow", "", "", "",
		"POMPE VF CONTI PX1940", "#Pump", "1", "", "pompes,pumps,pumps,bombas", "", "POMPE-PX1940", "Pompe de transfert|||", "1", "", ",,,", "toutes,all,,", "old", "auto", "", "", "cow", "", "", "",
		"POMPE EZI-ACTION PX1951", "#Pump", "1", "", "pompes,pumps,pumps,bombas", "", "POMPE-PX1951", "Pompe gros débit avec sécurité enfants|||", "1", "", ",,,", "toutes,all,,", "old", "auto", "", "", "cow", "", "", ""
	];
	
	// Add extension to small image filenames
	prodDataNumb = (prodText.join( N ).match( /#/g )).length;
	for ( var i = 6; i < prodText.length; i += prodText.length / prodDataNumb ) {
		prodText[ i ] += smallImgExt;
	}
	
	// Replace ' ● ' with '&nbsp;●&nbsp;' in all designations to avoid non-consistent line breaks
	for ( var j = 7; j < prodText.length; j += prodText.length / prodDataNumb ) {
		prodText[ j ] = prodText[ j ].replace( new RegExp( ' ● ', 'g' ), '&nbsp;●&nbsp;' );
	}
	
}

function customRangeSetup() {
	
	customRange = [];
	
	///////////////////////////////////////////
	// Set here product range per customer
	///////////////////////////////////////////
	
	// Full ANTI-GERM range (0)
	
	customRange.push( [
		"NL3laMOcneCsaMYc", // anniversaire
		"TRAYOR",
		"PREMOUSS NET",
		"HYPRODERM",
		"NATIGREEN",
		"PREFOAM +",
		"G-MIX POWER ACTIV'",
		"G-MIX POWER BASE",
		"WIPES LSA",
		"HM VIR SPRAY",
		"DIP BLUE LT ACTIV'",
		"DIP BLUE LT BASE",
		"PROPISDERM",
		"GOLDEN MIX ACTIV'",
		"GOLDEN MIX BASE",
		"DIP-IO 2500",
		"DIP-IO 5000",
		"LIQ-IO 2500",
		"LIQ-IO 5500",
		"LIQ-IO C",
		"HY-COSMETIC",
		"FILMADINE",
		"HM VIR FILM",
		"HM VIR FILM+",
		"HYPRED QUICK SPRAY",
		"DERMIODE",
		"POWER BLUE MIX ACTIV'",
		"POWER BLUE MIX BASE",
		"NOVODIP",
		"TRAYMIX ACTIV'",
		"TRAYMIX BASE",
		"TRAYDOU",
		"TRAYFILM",
		"INTEGRAL",
		"TRAYLAV",
		"STERITRAITE",
		"SEPTIFLASH",
		"TRAYDIP",
		"PRATIC",
		"PRATIC NF",
		"MAMOGEL",
		"FRESH",
		"STERIPIS NF",
		"IO-SPRAY",
		"IO-FILM",
		"TOP'OUATE",
		"TRAY'OUATE",
		"TRAY'CLEAN",
		"PROXYLAV",
		"DERMISAN +",
		"HYPRA'ZUR",
		"TOP ACID",
		"BACTOGAL NET",
		"CHLOROGAL",
		"EXOPENNGAR",
		"ADIROX ACID",
		"ADIROX CHLORE",
		"L.20",
		"L.30",
		"AOC-ADM",
		"RS ACIDE",
		"RS ALCALIN",
		"ROBOSPRAY IODE",
		"ROBOSPRAY LACTIC",
		"ROBOSPRAY SUPREME",
		"ROBOCID",
		"ROBOLIN",
		"HYPROCLOR ED",
		"ROBOSPRAY MIX ACTIV'",
		"ROBOSPRAY MIX BASE",
		"REMINOX",
		"REMILIN",
		"MAXIGAL BACTACID",
		"MAXIGAL ALCALIN",
		"GALORAN RY",
		"D 10 ALCALIN",
		"D 10 ACIDE",
		"HYPRAL SP",
		"INO 3X",
		"HYPRAL ONE",
		"HYPRAL RBT",
		"WASH CLASSIC",
		"INO GUARD 100",
		"INO SAN",
		"TOP CL EXTRA",
		"HYPRAL ED",
		"HYPRACID",
		"HYPRACID ONE",
		"ACTIFLASH",
		"ACTIFLASH 5+",
		"PERFO GRIF",
		"PERFO GRIF+",
		"AGRIMAT",
		"FOAM BASE",
		"HYPRED CLEAN +",
		"HYPRED FORCE 7",
		"HYPRELVA FOAM",
		"ANTI-GERM DT",
		"ANTI-GERM HD4",
		"ANTI-GERM HD4n",
		"CLEARZYM LT",
		"AGAVOX N",
		"FUMAGRI EFFISAFE",
		"FUMAGRI COMFORT",
		"FUMAGRI HA SILO",
		"AGAKOK",
		"AG-NET",
		"AG-PULV",
		"AG-BAT",
		"NOVIRAL",
		"GERMICIDAN FF PLUS",
		"SEPTRIVET",
		"AZUR",
		"PODOFEET MAX",
		"PODOCLEAN",
		"PA-FEET 5",
		"PA-FEET SURF",
		"PAT'APPÂT",
		"AQUASEPT",
		"AQUASEPT 80",
		"TABS",
		"GERM'O",
		"ANTI-GERM AQUA",
		"CLOR'O",
		"STAB'O",
		"OXID'O",
		"INO PEROX EXTRA",
		"ACID'O",
		"Lessive de soude",
		"LAVETTES microfibres gaufrées",
		"LAVETTES bouclées éponge",
		"LAVETTES SUPER",
		"KIT SPRAY",
		"Pistolet KIT SPRAY",
		"Raccord tournant KIT SPRAY",
		"MOUSSEUR",
		"TREMPE",
		"Réservoir gobelets",
		"BACTOSPRAY",
		"PULVÉRISATEUR Bovins/Ovins",
		"PULVÉRISATEUR Caprins",
		"CM-TEST",
		"DÉVIDOIR Ouate",
		"DÉVIDOIR FRESH",
		"SEAU FRESH",
		"Kit bandelettes test chlore PX19531",
		"Kit bandelettes test chlore PX19532",
		"Kit bandelettes test peroxyde PX19127",
		"LESSIVE MÉNAGÈRE",
		"Extrait de Javel",
		"ANIOS CDN",
		"POMPE Bidons PX1904",
		"POMPE Bidons PX1910",
		"POMPE PX1948",
		"POMPE EP93/100 PX1911",
		"POMPE EP93/100 PX1939",
		"POMPE VF CONTI PX1940",
		"POMPE EZI-ACTION PX1951",
		"HYPRASIL GREEN XL",
		"HYPRASIL MAÏS XL",
		"HYPRASIL START",
		"BOLIFAST RUMEN",
		"BOLITRACE BIOTIN +",
		"BOLIFLASH CALCIUM",
		"BOLIFLASH FERTIL",
		"BOLITRACE 240",
		"BOLITRACE 90",
		"BOLIDAYS CONTROL",
		"HYDRAFEED",
		"DIAFEED",
		"ENERFEED",
		"COLOFEED",
		"KERSIA FOAMER SYSTEM",
		"KERSIA FOAMER - DESCENTE",
		"QUICK SPRAY SYSTEM",
		"TEAT SPRAY",
		"PREFOAM SYSTEM",
		"PERFO DOSE",
		"KERSIA WATER SYSTEM",
		"KIT PETIT RUMINANT",
		"CUVE TRONIK 120L",
		"CUVE TRONIK 200L",
		"CAGE DTLG SPRAY",
		"HYPRA'NAT GREEN",
		"HYPRA'NAT MAÏS",
		"GLYCOLAC FOAM",
		"GLYCOLAC DUO",
		"GLYCOLAC SPRAY",
		"TRAYOR +",
		"GLYCOLAC FILM",
		"TRAYFILM +"
	] );
	
	// NUTRIFORM (1)
	
	customRange.push( [
		"beKsO7K1pP==", // nuageux
		"IOFILM:10",
		"SEPTIFLASH",
		"STERIPIS:10",
		"TRAYDOU:10,20",
		"TRAYFILM:10",
		"TRAYOR:20",
		"ACIDOGAL:24",
		"ADIROX ACID:25",
		"ADIROX CHLORE:24",
		"ACTIFLASH:10",
		"CHLOROGAL:24",
		"MAXIGAL ALCALIN:25",
		"MAXIGAL BACTACID:25",
		"AGRIMAT:10,24",
		"ANTI-GERM DT:25",
		"NOVIRAL X3:10,20",
		"SEPTRIVET",
		"TREMPE",
		"MOUSSEUR",
		"DÉVIDOIR FRESH Tritex",
		"DÉVIDOIR Ouate",
		"ANTI-GERM FRESH",
		"LAVETTES SUPER",
		"LAVETTES microfibres gaufrées",
		"TRAY'OUATE",
		"TABS"
	] );
	
	// XR REPRO anc. Eliacoop (2)
	
	customRange.push( [
		"w4cjw4cwaVUloP==", // éléphant
		"TRAYOR:20",
		"TRAYDOU:20",
		"TRAYFILM:20",
		"TRAYLAV:20",
		"PROXYLAV:9",
		"STERITRAITE:20",
		"TRAYDIP:20",
		"PRATIC NF:20",
		"MAMOGEL:20",
		"FRESH Tritex:2000",
		"STERIPIS NF:20",
		"IO-SPRAY:21",
		"IO-FILM:21",
		"INTEGRAL:20",
		"TOP'OUATE:2000",
		"TOP ACID:25,220",
		"BACTOGAL NET:24,225",
		"CHLOROGAL PLUS:24,225",
		"ADIROX ACID:25",
		"ADIROX CHLORE:24",
		"REMINOX:23",
		"REMILIN:23",
		"GALORAN RY:24,225",
		"ACTIFLASH:10,22",
		"AGRIMAT:10",
		"HD4:25",
		"AGAKOK 2.5:10",
		"GERMICIDAN TABS:285",
		"ANTI-GERM'O:25,70",
		"LAVETTES microfibres gaufrées:10",
		"LAVETTES SUPER:25",
		"GOBELET MOUSSEUR",
		"GOBELET BACTO TREMPE",
		"Réservoir gobelets",
		"PULVÉRISATEUR Bovins/Ovins",
		"CM-TEST",
		"DÉVIDOIR Ouate",
		"SEAU FRESH Tritex"
	] );
	
	// CAP SEINE (3)
	
	customRange.push( [
		"N7UuNLs1w4s0OF==", // cacahuète
		"TRAYLAV:20",
		"TRAYOR:20,60,200",
		"TRAYDOU:200",
		"STERIPIS NF:20",
		"FRESH",
		"TRAY'OUATE",
		"PROXYLAV:9",
		"TRAYFILM:20,60",
		"ACTIFLASH:10,64",
		"INTEGRAL:20,60",
		"IO-SPRAY:60,200",
		"IO-FILM:21,60",
		"ADIROX ACID:65,220",
		"ADIROX CHLORE:70",
		"CHLOROGAL:225",
		"EXOPENNGAR:25,70",
		"PENNGAR L.20:25,70",
		"RS ACIDE:24",
		"RS ALCALIN:25",
		"TABS",
		"ANTI-GERM'O:230",
		/*"AQUA:20",*/
		"LAVETTES SUPER",
		"LAVETTES bouclées",
		"GOBELET MOUSSEUR",
		"GOBELET BACTO TREMPE",
		"BACTOSPRAY",
		"PULVÉRISATEUR Bovins/Ovins",
		"POMPE Bidons PX1910",
		"POMPE EP93/100 PX1911",
		"POMPE EP93/100 PX1939"
	] );
	
	// EPSYS (4)
	
	customRange.push( [
		"w4cwaLGcnd1c", // épiderme
		"TRAYOR:20,60",
		"TRAYDOU:20,60",
		"TRAYFILM:20,60",
		"TRAYLAV:10,20",
		"PROXYLAV:9,16",
		"STERITRAITE:20",
		"SEPTIFLASH",
		"TRAYDIP:20",
		"PRATIC:20,60",
		"PRATIC NF:20,60",
		"FRESH",
		"STERIPIS NF:10,20",
		"IO-FILM:10,21,60",
		"INTEGRAL:20,60",
		"TRAY'OUATE",
		"TRAY'CLEAN",
		"TOP ACID:25,70",
		"BACTOGAL NET",
		"CHLOROGAL",
		"ADIROX ACID:25,65",
		"ADIROX CHLORE:24,70",
		"AOC-ADM:25",
		"REMINOX",
		"REMILIN",
		"MAXIGAL BACTACID",
		"MAXIGAL ALCALIN",
		"GALORAN RY",
		"ACTIFLASH:10,22,64",
		"AGRIMAT",
		"FOAM BASE:12",
		"ANTI-GERM DT:25",
		"AZUR:10,20",
		"PAT'APPÂT",
		"AQUASEPT",
		"GERM'O:25,70",
		"LAVETTES microfibres gaufrées",
		"LAVETTES SUPER",
		"NOVIRAL:5,20",
		"MOUSSEUR",
		"TREMPE",
		"BACTOSPRAY",
		"PULVÉRISATEUR Bovins/Ovins",
		"CM-TEST",
		"DÉVIDOIR Ouate",
		"DÉVIDOIR FRESH",
		"SEAU FRESH",
		"LESSIVE MÉNAGÈRE",
		"ANIOS CDN:5",
		"POMPE Bidons PX1904",
		"POMPE Bidons PX1910",
		"POMPE PX1948",
		"POMPE EP93/100 PX1911",
		"POMPE EP93/100 PX1939",
		"POMPE VF CONTI PX1940"
	] );
	// DISCHAMPS (5)
	
	customRange.push( [
		"OVceaMGsbP==", // digital
		"TRAYOR:20,60",
		"TRAYDOU:20,60",
		"TRAYFILM:20,60",
		"TRAYLAV:20",
		"PROXYLAV:9,16",
		"STERITRAITE:20",
		"FRESH",
		"TRAY'OUATE",
		"ADIROX ACID:25,65",
		"ADIROX CHLORE:24,70",
		"AOC-ADM:25",
		"ACTIFLASH:22",
		"AQUASEPT",
		"GERM'O:25",
		"LAVETTES microfibres gaufrées",
		"LAVETTES SUPER",
		"MOUSSEUR",
		"TREMPE",
		"DÉVIDOIR Ouate",
		"DÉVIDOIR FRESH",
		"SEAU FRESH"
	] );
	
	// PIED NOIR (6)
	
	customRange.push( [
		"nVcuNMCzbw==", // picasso
		"TRAYOR:20,60,200",
		"TRAYDOU:20,60,200",
		"TRAYFILM:20,60,200",
		"IO-SPRAY",
		"IO-FILM:21,60",
		"TRAYLAV:20",
		"PROXYLAV:9,16",
		"SEPTIFLASH",
		"PRATIC:20,60,200",
		"PRATIC NF:20,60,200",
		"FRESH",
		"STERIPIS NF:20",
		"INTEGRAL:20,60",
		"TRAY'OUATE",
		"AGRIMAT:10",
		"NOVIRAL:20",
		"ANTI-GERM DT:25",
		"FOAM BASE:12",
		"TOP ACID:25,70,220",
		"CHLOROGAL",
		"ADIROX ACID:25,65,220",
		"ADIROX CHLORE:24,70,225",
		"RS ACIDE:24,225",
		"RS ALCALIN:25,250",
		"ACTIFLASH:10,22,220",
		"TABS",
		"GERM'O:25,70,230",
		"CLOR'O",
		"STAB'O",
		"MOUSSEUR",
		"TREMPE",
		"BACTOSPRAY",
		"PULVÉRISATEUR Bovins/Ovins",
		"LAVETTES microfibres gaufrées",
		"LAVETTES bouclées éponge",
		"DÉVIDOIR Ouate",
		"DÉVIDOIR FRESH",
		"SEAU FRESH",
		"ANIOS CDN",
		"POMPE Bidons PX1904",
		"POMPE Bidons PX1910",
		"POMPE PX1948",
		"POMPE EP93/100 PX1911",
		"POMPE EP93/100 PX1939",
		"POMPE VF CONTI PX1940"
	] );
	
	// ETS CHAYS (7)
	
	customRange.push( [
		"N7ssbMQgb73lNMF=", // championnat
		"TRAYDOU:20",
		"PROXYLAV:9,16",
		"TRAYFILM:20",
		"STERIPIS NF:20",
		"IO-FILM:21",
		"ADIROX ACID:25,65",
		"ADIROX CHLORE:24,70",
		"AOC-ADM:25",
		"PENNGAR L.20.:24",
		"ACTIFLASH:10,22",
		"AGRIMAT:10",
		"ANTI-GERM DT:6,25",
		"NOVIRAL:5",
		"GALOX AZUR:10,20",
		"AQUASEPT",
		"GERM'O:25,70",
		"LAVETTES SUPER",
		"LAVETTES microfibres gaufrées",
		"MOUSSEUR",
		"TREMPE",
		"PX19532",
		"PX19127"
	] );
	
	// Syndicat Interd. d'élevage (8)
	
	customRange.push( [
		"n7cvb73gOF==", // sidonie
		"TRAYOR:20,60",
		"TRAYDOU:20",
		"TRAYFILM:20",
		"TRAYLAV:10",
		"INTEGRAL:20",
		"FRESH",
		"RS ACIDE:24",
		"RS ALCALIN:25",
		"STERIPIS NF:10,20",
		"IO-SPRAY:10,21,60",
		"IO-FILM:21",
		"TRAY'OUATE",
		"TOP ACID:25,70,220",
		"CHLOROGAL:24,70,225",
		"ADIROX ACID:25,65",
		"ADIROX CHLORE:24,70",
		"AOC-ADM:70",
		"ACTIFLASH:10,22,64",
		"AGRIMAT:10",
		"LAVETTES bouclées éponge",
		"MOUSSEUR",
		"TREMPE",
		"DÉVIDOIR Ouate",
		"SEAU FRESH",
		"POMPE Bidons PX1904",
		"POMPE Bidons PX1910",
		"POMPE PX1948",
		"POMPE EP93/100 PX1911",
		"POMPE EP93/100 PX1939",
		"POMPE VF CONTI PX1940"
	] );
	
	// CEts Feuerstein (9)
	
	customRange.push( [
		"OdKcOVYsN7j=", // feedback
		"TRAYOR:20",
		"FRESH",
		"TRAYDOU:20",
		"TRAYFILM:20",
		"IO-FILM:21",
		"TOP'OUATE",
		"TRAY'OUATE",
		"ADIROX ACID:25",
		"ADIROX CHLORE:24",
		"ACTIFLASH:10",
		"AGRIMAT:10"
	] );
	
	// DISCHAMPS 2 (10)
	
	customRange.push( [
		"OVceaMGsbSX=", // digital2
		"TRAYOR:20,60",
		"TRAYDOU:20,60",
		"TRAYFILM:20,60",
		"PROXYLAV:9,16",
		"TRAYLAV:20",
		"STERITRAITE:20",
		"FRESH",
		"TRAY'OUATE",
		"TOP ACID:25,70",
		"AOC-ADM:25",
		"ACTIFLASH:22",
		"AQUASEPT",
		"GERM'O:25",
		"LAVETTES SUPER",
		"LAVETTES microfibres gaufrées",
		"MOUSSEUR",
		"TREMPE",
		"DÉVIDOIR Ouate",
		"DÉVIDOIR FRESH",
		"SEAU FRESH"
	] );
	
	// CECAB COOP DE BRONS (11)
	
	customRange.push( [
		"N7KyaMCc", // cerise
		"TRAYOR:20,60,200",
		"TRAYDOU:20,60,200",
		"TRAYFILM:20,60,200",
		"TRAYLAV:20",
		"FRESH",
		"ACTIFLASH:10,22,64,220",
		"SEPTIFLASH",
		"PRATIC:20,60,200",
		"PRATIC NF:20,60,200",
		"STERIPIS NF:20",
		"IO-SPRAY:21,60,200",
		"IO-FILM:21,60",
		"TRAY'OUATE",
		"ADIROX ACID:25,65,220",
		"ADIROX CHLORE:24,70,225",
		"RS ACIDE:24",
		"RS ALCALIN:25",
		"TABS",
		"GERM'O:70,230",
		"CLOR'O:25",
		"STAB'O:10",
		"OXID'O:24",
		"AGRIMAT:10",
		"FOAM BASE:12",
		"Lessive de soude:70",
		"MOUSSEUR",
		"TREMPE",
		"BACTOSPRAY",
		"PULVÉRISATEUR Bovins/Ovins",
		"DÉVIDOIR Ouate"
	] );
	
	// VETANIMAX (12)
	
	customRange.push( [
		"odKlOVUlO7J=", // vendange
		"TRAYOR:20,60,200",
		"TRAYDOU:20,60,200",
		"TRAYFILM:20,60,200",
		"TRAYLAV:20",
		"SEPTIFLASH",
		"FRESH",
		"STERIPIS NF:20",
		"IO-FILM:21,60",
		"TRAY'OUATE",
		"PROXYLAV:9",
		"ADIROX ACID",
		"ADIROX CHLORE",
		"ACTIFLASH:10,22,220",
		"FOAM BASE:12,25",
		"ANTI-GERM DT:25,230",
		"NOVIRAL:5,20,60,200",
		"AZUR:10,20,200",
		"TABS:285",
		"GERM'O:25,70,230",
		"CLOR'O:10,25",
		"STAB'O:10",
		"LAVETTES microfibres gaufrées",
		"LAVETTES bouclées éponge",
		"MOUSSEUR",
		"TREMPE",
		"BACTOSPRAY",
		"PULVÉRISATEUR Bovins/Ovins",
		"CM-TEST",
		"DÉVIDOIR Ouate",
		"DÉVIDOIR FRESH",
		"SEAU FRESH",
		"Kit bandelettes test chlore PX19531",
		"Kit bandelettes test chlore PX19532",
		"Kit bandelettes test peroxyde PX19127",
		"POMPE Bidons PX1904",
		"POMPE Bidons PX1910",
		"POMPE PX1948",
		"POMPE EP93/100 PX1911",
		"POMPE EP93/100 PX1939",
		"POMPE VF CONTI PX1940"
	] );
	
	// ALLIANCE ELEVAGE ARDENNES 	(13)
	// = ARDENNES CONSEIL ELEVAGE
	
	customRange.push( [
		"NLxwaVUtOMF=", // alphabet
		"TRAYOR:20,60",
		"TRAYDOU:20",
		"TRAYFILM:20",
		"PROXYLAV:9",
		"IO-SPRAY:60",
		"IO-FILM:10,21",
		"STERIPIS NF:10,20",
		"PROXYLAV:9",
		"FRESH",
		"ACTIFLASH:10,22,64",
		"BACTOGAL NET:24",
		"ADIROX ACID:25,65",
		"ADIROX CHLORE:24,70",
		"TOP ACID:25",
		"LAVETTES SUPER",
		"LAVETTES bouclées éponge"
	] );
	
	// SOUFFLET NUTRITION (14)
	
	customRange.push( [
		"n79jNLcyOF==", // solaire
		"TRAYOR:20,60",
		"TRAYDOU:20,60",
		"TRAYFILM:20,60",
		"TRAYLAV:20",
		"STERITRAITE:10,20",
		"PRATIC:20,60",
		"PRATIC NF:20,60",
		"IO-SPRAY:21,60",
		"IO-FILM:21,60",
		"TRAY'OUATE",
		"PROXYLAV:16",
		"BACTOGAL NET:24,70,225",
		"CHLOROGAL:24",
		"ADIROX ACID:25,65",
		"ADIROX CHLORE:24,70",
		"RS ACIDE:24",
		"RS ALCALIN:25",
		"GALORAN RY:24,70,225",
		"ACTIFLASH:10,22,64",
		"AZUR:10",
		"LAVETTES microfibres gaufrées",
		"GOBELET MOUSSEUR",
		"BACTO TREMPE"
	] );
	
	// LACTA-TRAITE (15)
	
	customRange.push( [
		"bVU0aMG1OVJ=", // latitude
		"TRAYOR",
		"TRAYDOU",
		"TRAYFILM",
		"TRAYLAV",
		"SEPTIFLASH",
		"TRAYDIP",
		"PRATIC",
		"PRATIC NF",
		"FRESH",
		"STERIPIS NF",
		"IO-SPRAY",
		"IO-FILM",
		"TRAY'OUATE",
		"PROXYLAV",
		"ADIROX ACID",
		"ADIROX CHLORE",
		"RS ACIDE",
		"RS ALCALIN",
		"ACTIFLASH",
		"AGRIMAT",
		"FOAM BASE",
		"TABS",
		"GERM'O",
		"CLOR'O",
		"STAB'O",
		"Lessive de soude",
		"LAVETTES bouclées éponge",
		"MOUSSEUR",
		"TREMPE",
		"BACTOSPRAY",
		"PULVÉRISATEUR Bovins/Ovins",
		"CM-TEST",
		"DÉVIDOIR Ouate",
		"DÉVIDOIR FRESH",
		"SEAU FRESH",
		"Kit bandelettes test chlore PX19532",
		"Kit bandelettes test peroxyde PX19127",
		"POMPE PX1904",
		"POMPE Bidons PX1910",
		"POMPE PX1948",
		"POMPE EP93/100 PX1911",
		"POMPE EP93/100 PX1939",
		"POMPE VF CONTI PX1940"
	] );
	
	// LACTA SERVICES (16)
	
	customRange.push( [
		"bVUloVKybdJ=", // lanterne
		"TRAYOR",
		"TRAYDOU",
		"TRAYFILM",
		"TRAYLAV",
		"SEPTIFLASH",
		"TRAYDIP",
		"PRATIC",
		"PRATIC NF",
		"FRESH",
		"STERIPIS NF",
		"IO-SPRAY",
		"IO-FILM",
		"TRAY'OUATE",
		"PROXYLAV",
		"ADIROX ACID",
		"ADIROX CHLORE",
		"RS ACIDE",
		"RS ALCALIN",
		"ACTIFLASH",
		"AGRIMAT",
		"FOAM BASE",
		"TABS",
		"GERM'O",
		"CLOR'O",
		"STAB'O",
		"Lessive de soude",
		"LAVETTES bouclées éponge",
		"MOUSSEUR",
		"TREMPE",
		"BACTOSPRAY",
		"PULVÉRISATEUR Bovins/Ovins",
		"CM-TEST",
		"DÉVIDOIR Ouate",
		"DÉVIDOIR FRESH",
		"SEAU FRESH",
		"Kit bandelettes test chlore PX19532",
		"Kit bandelettes test peroxyde PX19127",
		"POMPE Bidons PX1904",
		"POMPE Bidons PX1910",
		"POMPE PX1948",
		"POMPE EP93/100 PX1911",
		"POMPE EP93/100 PX1939",
		"POMPE VF CONTI PX1940"
	] );
	
	// GUEST range (i.e. 0 but no auto update)  (17)
	
	customRange.push( [
		"O8Kcn8F=", // guest
		"TRAYOR",
		"TRAYDOU",
		"TRAYFILM",
		"TRAYLAV",
		"STERITRAITE",
		"SEPTIFLASH",
		"TRAYDIP",
		"PRATIC",
		"PRATIC NF",
		"FRESH",
		"STERIPIS NF",
		"IO-SPRAY",
		"IO-FILM",
		"TOP'OUATE",
		"TRAY'OUATE",
		"TRAY'CLEAN",
		"PROXYLAV",
		"TOP ACID",
		"BACTOGAL NET",
		"CHLOROGAL",
		"ADIROX ACID",
		"ADIROX CHLORE",
		"AOC-ADM",
		"RS ACIDE",
		"RS ALCALIN",
		"REMINOX",
		"REMILIN",
		"GALORAN RY",
		"ACTIFLASH",
		"AGRIMAT",
		"FOAM BASE",
		"ANTI-GERM DT",
		"NOVIRAL",
		"SEPTRIVET",
		"AZUR",
		"PAT'APPÂT",
		"TABS",
		"GERM'O",
		"CLOR'O",
		"STAB'O",
		"OXID'O",
		"ACID'O",
		"Lessive de soude",
		"LAVETTES microfibres gaufrées",
		"LAVETTES bouclées éponge",
		"LAVETTES SUPER",
		"MOUSSEUR",
		"TREMPE",
		"BACTOSPRAY",
		"PULVÉRISATEUR Bovins/Ovins",
		"CM-TEST",
		"DÉVIDOIR Ouate",
		"DÉVIDOIR FRESH",
		"SEAU FRESH",
		"Kit bandelettes test chlore PX19531",
		"Kit bandelettes test chlore PX19532",
		"Kit bandelettes test peroxyde PX19127",
		"LESSIVE MÉNAGÈRE",
		"ANIOS CDN",
		"POMPE Bidons PX1904",
		"POMPE Bidons PX1910",
		"POMPE PX1948",
		"POMPE EP93/100 PX1911",
		"POMPE EP93/100 PX1939",
		"POMPE VF CONTI PX1940"
	] );
	
	// ORGEVAL (18)
	
	customRange.push( [
		"b8YgO7clOF==", // origine
		"TRAYOR:20,60,200,1000",
		"TRAYFILM:60",
		"INTEGRAL:20",
		"TRAYLAV:20",
		"PRATIC:20,60,200",
		"PRATIC NF:20,60,200",
		"STERIPIS NF:20",
		"FRESH",
		"IO-SPRAY:21,60,200",
		"IO-FILM:21,60",
		"TRAY'OUATE",
		"CHLOROGAL:225",
		"ADIROX ACID:25,65",
		"ADIROX CHLORE:24,70",
		"PENNGAR L.X.:225",
		"RS ACIDE:24,225",
		"RS ALCALIN:25,250",
		"REMINOX:23",
		"REMILIN:23",
		"ACTIFLASH:22,220",
		"FOAM BASE:12",
		"NOVIRAL:5",
		"TABS",
		"GERM'O:25,230",
		"CLOR'O:25",
		"STAB'O:10",
		"LAVETTES bouclées éponge",
		"MOUSSEUR",
		"TREMPE",
		"BACTOSPRAY",
		"PULVÉRISATEUR Bovins/Ovins",
		"CM-TEST",
		"SEAU FRESH",
		"Kit bandelettes test chlore PX19532",
		"Kit bandelettes test peroxyde PX19127",
		"POMPE Bidons PX1910",
		"POMPE EP93/100 PX1911",
		"POMPE EP93/100 PX1939",
		"POMPE EZI-ACTION PX1951"
	] );
	
	// Anjou Maine Céréales (19)
	
	customRange.push( [
		"NL3gbLUj", // animal
		"TRAYOR:20,60,200",
		"TRAYDOU:20,60",
		"TRAYFILM:20,60,200",
		"INTEGRAL:20",
		"TRAYLAV:10",
		"PRATIC:20",
		"PRATIC NF:20",
		"STERIPIS NF:10,20",
		"IO-SPRAY:21,60",
		"IO-FILM:10",
		"TRAY'OUATE",
		"PROXYLAV:9",
		"TOP ACID:25,70,220",
		"BACTOGAL NET:24,70,225",
		"ADIROX ACID:25,65",
		"ADIROX CHLORE:24,70",
		"AOC-ADM:25",
		"RS ACIDE:24,225",
		"RS ALCALIN:25,250",
		"GALORAN RY:24",
		"ACTIFLASH:10,22,220",
		"FOAM BASE:12",
		"CLOR'O:10",
		"STAB'O:10",
		"LAVETTES microfibres gaufrées",
		"LAVETTES bouclées éponge",
		"DÉVIDOIR Ouate",
		"SEAU FRESH",
		"POMPE EP93/100 PX1911",
		"POMPE VF CONTI PX1940"
	] );
	
	// NUTRIMAG (20)
	
	customRange.push( [
		"beKkw4cyaMU1OF==", // numérique
		"TRAYOR:20,60",
		"TRAYDOU:20,60",
		"TRAYFILM:20,60",
		"PROXYLAV:9",
		"TRAYDIP:20",
		"STERIPIS NF:10",
		"IO-FILM:21,60",
		"TOP'OUATE:2000",
		"ADIROX ACID:25,65",
		"ADIROX CHLORE:24,70",
		"RS ALCALIN:25",
		"ACTIFLASH:10",
		"GERMICIDAN TABS:285",
		"CLOR'O:25",
		"STAB'O:10",
		"LAVETTES SUPER:25",
		"LESSIVE MÉNAGÈRE:18"
	] );
	
	// SDF RAMETTE DESSART GAVAGE (21)
	
	customRange.push( [
		"ndU0aL9l", // ration
		"TRAYOR:20,60",
		"TRAYFILM:60",
		"SEPTIFLASH:45",
		"STERIPIS NF:20",
		"IO-SPRAY:60",
		"IO-FILM:60",
		"TRAY'OUATE:2000",
		"ACTIFLASH:22",
		"GERMICIDAN TABS:285",
		"ANTI-GERM'O:25,70,230",
		"CLOR'O:25",
		"STAB'O:10",
		"POMPE EP93/100 PX1911"
	] );
	
	// TECHNITRAITE FROID (22)
	
	customRange.push( [
		"oVKyndUzn7J=", // terrasse
		"TRAYOR:20,60,200,1000",
		"TRAYDOU:20,60,200",
		"TRAYFILM:20,60,200",
		"TRAYLAV:10,20",
		"PROXYLAV:9,16",
		"STERITRAITE:10,20",
		"SEPTIFLASH:45",
		"PRATIC:20,60,200",
		"PRATIC NF:20,60,200",
		"FRESH Tritex:2000",
		"STERIPIS NF:10,20",
		"IO-SPRAY:21,60,200",
		"IO-FILM:21,60,200",
		"INTEGRAL:10,20,60",
		"TRAY'OUATE:2000",
		"TOP ACID:25,70,220",
		"BACTOGAL NET:24,70,225",
		"CHLOROGAL PLUS:24,70,225",
		"ADIROX ACID:25,65,220",
		"ADIROX CHLORE:24,70,225",
		"ACTIFLASH:10,22,64,220",
		"FOAM BASE:12,25,250",
		"GALOX AZUR:10,20,200",
		"CLOR'O:10,25",
		"STAB'O:10",
		"LAVETTES microfibres gaufrées:10",
		"LAVETTES bouclées éponge:10",
		"GOBELET MOUSSEUR",
		"GOBELET BACTO TREMPE",
		"DÉVIDOIR FRESH Tritex",
		"POMPE PX1948",
		"POMPE EP93/100 PX1939",
		"POMPE VF CONTI PX1940"
	] );
	
	// COOPEL (23)
	
	customRange.push( [
		"N79uNF==", // coca
		"TRAYOR:20",
		"TRAYDOU:20",
		"TRAYFILM:20",
		"TRAYLAV:10",
		"PROXYLAV:9",
		"FRESH Tritex:2000",
		"IO-FILM:21",
		"TRAY'OUATE:2000",
		"ADIROX ACID:25,65",
		"ADIROX CHLORE:24,70",
		"CHLOROGAL:24",
		"TOP ACID:25",
		"ACTIFLASH:10,22",
		"AQUASEPT:285",
		"ANTI-GERM'O:25",
		"LAVETTES microfibres gaufrées:10",
		"GOBELET MOUSSEUR",
		"GOBELET BACTO TREMPE",
		"BACTOSPRAY",
		"PULVÉRISATEUR Bovins/Ovins",
		"DÉVIDOIR Ouate",
		"DÉVIDOIR FRESH Tritex",
		"SEAU FRESH Tritex",
		"Kit bandelettes test chlore PX19532",
		"Kit bandelettes test peroxyde PX19127"
	] );
	
	// XR REPRO CODELIA (24)
	
	customRange.push( [
		"N79loVKloF==", // contenu
		"TRAYOR:20",
		"TRAYDOU:20",
		"TRAYFILM:20",
		"TRAYLAV:10",
		"PROXYLAV:9",
		"IO-FILM:21",
		"TRAY'OUATE:2000",
		"ACTIFLASH:10",
		"AQUASEPT:285",
		"ANTI-GERM'O:25",
		"LAVETTES microfibres gaufrées:10",
		"GOBELET MOUSSEUR",
		"GOBELET BACTO TREMPE",
		"TOP ACID:25",
		"CHLOROGAL PLUS:24"
	] );
	
	// EDS (Eleveurs des Savoie) (25)
	
	customRange.push( [
		"OLx7aMB=", // elvis
		"TRAYOR:20,60",
		"TRAYDOU:20,60",
		"TRAYFILM:20,60",
		"TRAYLAV:10,20",
		"PROXYLAV:9",
		"STERITRAITE:20",
		"TRAYDIP:20",
		"PRATIC NF:20",
		"FRESH Tritex:2000",
		"STERIPIS NF:10,20",
		"IO-SPRAY:21",
		"IO-FILM:21",
		"TRAY'OUATE:2000",
		"TOP ACID:25,70,220",
		"BACTOGAL NET:24,70,225",
		"CHLOROGAL PLUS:24,70,225",
		"ADIROX ACID:65",
		"ADIROX CHLORE:70",
		"PENNGAR AOC-ADM:25",
		"GALORAN RY:24,70,225",
		"ACTIFLASH:10,22",
		"AGRIMAT:10",
		"FOAM BASE:12",
		"NOVIRAL X3:5",
		"GALOX AZUR:10,20",
		"AQUASEPT:285",
		"ANTI-GERM'O:25",
		"LAVETTES microfibres gaufrées:10",
		"LAVETTES SUPER:25",
		"GOBELET MOUSSEUR",
		"GOBELET BACTO TREMPE",
		"BACTOSPRAY",
		"PULVÉRISATEUR Bovins/Ovins",
		"KIT CM-TEST",
		"DÉVIDOIR Ouate",
		"DÉVIDOIR FRESH Tritex",
		"SEAU FRESH Tritex",
		"Kit bandelettes test chlore PX19532",
		"Kit bandelettes test peroxyde PX19127"
	] );
	
	// TERRENA (26)
	
	customRange.push( [
		"oVKyndUgbr==", // terrain
		"TRAYOR:20,60,200,1000",
		"TRAYFILM:20,60,200",
		"TRAYLAV:20",
		"SEPTIFLASH:45",
		"TRAYDIP:20",
		"PRATIC NF:20,60,200",
		"FRESH Tritex:2000",
		"STERIPIS NF:20",
		"IO-SPRAY:21,60,200",
		"TOP'OUATE:2000",
		"TRAY'CLEAN:2000",
		"TOP ACID:25,220",
		"BACTOGAL NET:24,225",
		"ADIROX ACID:25,65",
		"ADIROX CHLORE:24,70",
		"RS ACIDE:24,225",
		"RS ALCALIN:25,250",
		"ACTIFLASH:22,64,220",
		"FOAM BASE:12",
		"ANTI-GERM'O:25,70,230",
		"LAVETTES bouclées éponge:10",
		"GOBELET MOUSSEUR",
		"BACTOSPRAY",
		"PULVÉRISATEUR Bovins/Ovins",
		"DÉVIDOIR Ouate",
		"SEAU FRESH Tritex",
		"POMPE EP93/100 PX1939",
		"POMPE VF CONTI PX1940"
	] );
	
	// Laiterie Rians (27)
	
	customRange.push( [
		"ndc7NLoc", // rivage
		"TRAYOR:20",
		"TRAYDOU:20",
		"TRAYFILM:20",
		"TRAYLAV:10",
		"PROXYLAV:9",
		"PRATIC NF:20",
		"FRESH Tritex:2000",
		"IO-SPRAY:21",
		"IO-FILM:21",
		"TRAY'OUATE:2000",
		"ADIROX ACID:25",
		"ADIROX CHLORE:24",
		"RS ACIDE:24",
		"RS ALCALIN:25",
		"DES OXI-25:22",
		"PENNGAR NPH:24",
		"LAVETTES microfibres gaufrées:10",
		"GOBELET MOUSSEUR",
		"GOBELET BACTO TREMPE",
		"SEAU FRESH Tritex"
	] );
	
	// CEA LOZAY (28)
	
	customRange.push( [
		"N7KgbeG1ndJ=", // ceinture
		"TRAYOR:20,60,200",
		"TRAYDOU:20,60,200",
		"TRAYFILM:20,60,200",
		"PROXYLAV:9",
		"PRATIC NF:20,60,200",
		"IO-SPRAY:21,60,200",
		"TRAY'OUATE:2000",
		"PENNGAR L.30:24,70",
		"RS ACIDE:24,225",
		"RS ALCALIN:25,250",
		"PENNGAR L.X.:24,65,225",
		"ACTIFLASH:10,64,220",
		"ANTI-GERM'O:230",
		"HD4:6", // Sûr de cela ????????????????
		"AGAKOK:10",
		"AG-NET:5",
		"AG-PULV:5"
	] );
	
	// terre d'horizon (29)
	
	customRange.push( [
		"bV9gbeGsaL2=", // lointain
		"TRAYOR:20,60,200,1000",
		"TRAYDOU:20,60,200",
		"TRAYFILM:20,60,200",
		"TRAYLAV:10,20",
		"PROXYLAV:9",
		"STERITRAITE:10,20",
		"PRATIC NF:20,60,200",
		"MAMOGEL:20,60,200",
		"STERIPIS:10,20",
		"STERIPIS NF:10,20",
		"IO-SPRAY:21,60,200",
		"IO-FILM:21,60,200",
		"TRAY'OUATE:2000",
		"TRAY'CLEAN:2000",
		"ADIROX ACID:25,65,220",
		"ADIROX CHLORE:24,70,225",
		"PENNGAR AOC-ADM:25,70,250",
		"RS ACIDE:24,225",
		"RS ALCALIN:25,250",
		"ACTIFLASH:10,22,64,220",
		"FOAM BASE:12,25",
		"NOVIRAL X3:5,20",
		"LAVETTES microfibres gaufrées:10",
		"LAVETTES bouclées éponge:10",
		"Extrait de Javel:10,25"
	] );

	// Sanicoopa (30)
	customRange.push( [
		"n7UlaLCm", // sanico
		"CHLONET",
		"SPRAY 2A",
		"BESTFOAM",
		"LIQUIM'IX ACTIV'",
		"LIQUIM'IX BASE",
		"TRAYOLINE",
		"NATIGREEN",
		"FRESH",
		"TRAY'OUATE",
		"DUOGRIFF",
		"NOVA TREMP'",
		"SYN'ERGIX ACTIV'",
		"SYN'ERGIX BASE",
		"DERMADINE",
		"IODIP",
		"COSMADINE",
		"COSMETO'FLASH",
		"EXCEL'MIX ACTIV'",
		"EXCEL'MIX BASE",
		"FILMA'ZUR +",
		"COSMETOFILM",
		"BOVIDERM +",
		"LAVINET",
		"ACIDE RBT",
		"HYPRAL RBT",
		"DIRECT'ACIDE",
		"DIRECT'BASE",
		"INO 3X",
		"INO GUARD 100",
		"INO SAN",
		"HYPRACID ONE",
		"BACTOGAL NET",
		"SANISURFACE +",
		"HYPRED FORCE 7",
		"SANIPRO NET",
		"SANIKOK",
		"AGRIMAT",
		"AGAVOX",
		"HD4n",
		"EFFISAFE",
		"AG-NET",
		"GERMICIDAN TABS",
		"ANTI-GERM'O",
		"SANICRISTAL",
		"SANIKARST",
		"INO PEROX",
		"Kit bandelettes test chlore PX19531",
		"Kit bandelettes test chlore PX19532",
		"Kit bandelettes test peroxyde PX19127",
		"BOVIFORM BIOTIN +",
		"BOVIFORM CALCIUM",
		"BOVIFORM NORBIL",
		"HYDRYL",
		"HYDRAVO FRV 100",
		"ENSIL'GREEN+",
		"ENSIL'PROTECT+",
		"ENSIL'SPRING GR",
		"ENSIL'MIX UAB",
		"ENSIL'STAB",
		"SANIPATT +",
		"SANICLINE",
		"PA-FEET 5",
		"SPRAY 2A SYSTEM",
		"KERSIA FOAMER",
		"PREFOAM SYSTEM",
		"PERFO DOSE",
		"KERSIA WATER SYSTEM",
		"KIT PETIT RUMINANT",
		"TEAT SPRAY",
		"CAGE DTLG SPRAY",
		"HYDRAVO FRV 100"
	] );
	
	///////////////////////////////////////////////////
	// 1) Identify product position in official DB
	// 2) Change packaging if necessary
	///////////////////////////////////////////////////
	
	// Switch to default product range in case the
	// the range from the browser memory doesn't match
	// any existing range
	
	if ( customRange[ productRangeDB ] === undefined ) {
		productRangeDB     = 0;
		Optionproductrange = 0;
		setupLogo();
	}
	
	// Add transport option to all customers
	customRange[ productRangeDB ].splice( 1, 0, 'DELIVERY' );
	
	var matchProductIndex = [];
	
	for ( var i = 1; i < customRange[ productRangeDB ].length; i++ ) {
		
		targetProd = customRange[ productRangeDB ][ i ].split( CL )[ 0 ];
		targetCond = customRange[ productRangeDB ][ i ].split( CL )[ 1 ];
		
		var productfound = false;
		
		for ( var j = 0; j < prodText.length; j += prodText.length / prodDataNumb ) {
			
			// Search product in official Database
			position = prodText[ j ].indexOf( targetProd );
			
			if ( position >= 0 && !productfound ) {
				
				// Store prodtext index to sort
				matchProductIndex.push( j );
				
				// Change packaging
				if ( targetCond ) {
					prodText[ j + 8 ] = targetCond;
				}
				productfound = true;
				
			}
			
		}
		
	}
	
	//////////////////////////////////////////////////////////////////////
	// Now remove out of range products using matchProductIndex array
	//////////////////////////////////////////////////////////////////////
	
	for ( var k = 0; k < prodText.length; k += prodText.length / prodDataNumb ) {
		
		if ( $.inArray( k, matchProductIndex ) < 0 ) {
			
			// Change and save name so that it can't be further selected
			prodText[ k + 12 ] = prodText[ k ];
			prodText[ k ]      = hideProduct;
			
		}
		
	}
	
}

function setupLogo() {
	// Sanicoopa
	if (productRangeDB == 30) {
		$('#logo').attr('src', imgFolder + SL + 'logo-sanicoopa.png').addClass('sanicoopa');
	} else {
		$('#logo').attr('src', imgFolder + SL + 'logo-kersia.svg').removeClass('sanicoopa');
	}
}
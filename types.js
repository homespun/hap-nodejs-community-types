var inherits = require('util').inherits;
var Service, Characteristic;

module.exports = function(homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;

  var CommunityTypes = {};

  // Characteristics

  CommunityTypes.Timestamp = function() {
    Characteristic.call(this, "Timestamp", CommunityTypes.Timestamp.UUID);
    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.Timestamp.UUID = 'FF000001-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.Timestamp, Characteristic);

  CommunityTypes.AudioDataURL = function() {
    Characteristic.call(this, "Audio URL", CommunityTypes.AudioDataURL.UUID);
    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
    });
  };
  CommunityTypes.AudioDataURL.UUID = 'FF000002-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.AudioDataURL, Characteristic);

  CommunityTypes.VideoDataURL = function() {
    Characteristic.call(this, "Video URL", CommunityTypes.VideoDataURL.UUID);
    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
    });
  };
  CommunityTypes.VideoDataURL.UUID = 'FF000003-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.VideoDataURL, Characteristic);

  CommunityTypes.AudioVolume = function() {
    Characteristic.call(this, 'Audio Volume', CommunityTypes.AudioVolume.UUID);
    this.setProps({
      format: Characteristic.Formats.UINT8,
      unit: Characteristic.Units.PERCENTAGE,
      maxValue: 100,
      minValue: 0,
      minStep: 1,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.AudioVolume.UUID = '00001001-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.AudioVolume, Characteristic);

  CommunityTypes.Muting = function() {
    Characteristic.call(this, 'Muting', CommunityTypes.Muting.UUID);
    this.setProps({
      format: Characteristic.Formats.UINT8,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.Muting.UUID = '00001002-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.Muting, Characteristic);

  CommunityTypes.PlaybackState = function() {
    Characteristic.call(this, 'Playback State', CommunityTypes.PlaybackState.UUID);
    this.setProps({
      format: Characteristic.Formats.UINT8,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.PlaybackState.UUID = '00002001-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.PlaybackState, Characteristic);
  CommunityTypes.PlaybackState.PLAYING = 0;
  CommunityTypes.PlaybackState.PAUSED = 1;
  CommunityTypes.PlaybackState.STOPPED = 2;

  CommunityTypes.SkipForward = function() {
    Characteristic.call(this, 'Skip Forward', CommunityTypes.SkipForward.UUID);
    this.setProps({
      format: Characteristic.Formats.BOOL,
      perms: [Characteristic.Perms.WRITE]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.SkipForward.UUID = '00002002-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.SkipForward, Characteristic);

  CommunityTypes.SkipBackward = function() {
    Characteristic.call(this, 'Skip Backward', CommunityTypes.SkipBackward.UUID);
    this.setProps({
      format: Characteristic.Formats.BOOL,
      perms: [Characteristic.Perms.WRITE]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.SkipBackward.UUID = '00002003-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.SkipBackward, Characteristic);

  CommunityTypes.ShuffleMode = function() {
    Characteristic.call(this, 'Shuffle Mode', CommunityTypes.ShuffleMode.UUID);
    this.setProps({
      format: Characteristic.Formats.UINT8,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.ShuffleMode.UUID = '00002004-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.ShuffleMode, Characteristic);
  //NOTE: If GROUP or SET is not supported, accessories should coerce to ALBUM.
  // If ALBUM is not supported, coerce to ITEM.
  // In general, it is recommended for apps to only assume OFF, ITEM, and ALBUM
  // are supported unless it is known that the accessory supports other settings.
  CommunityTypes.ShuffleMode.OFF = 0;
  //NOTE: INDIVIDUAL is deprecated.
  CommunityTypes.ShuffleMode.ITEM = CommunityTypes.ShuffleMode.INDIVIDUAL = 1;
  CommunityTypes.ShuffleMode.GROUP = 2; // e.g. iTunes "Groupings"
  CommunityTypes.ShuffleMode.ALBUM = 3; // e.g. album or season
  CommunityTypes.ShuffleMode.SET = 4; // e.g. T.V. Series or album box set

  CommunityTypes.RepeatMode = function() {
    Characteristic.call(this, 'Repeat Mode', CommunityTypes.RepeatMode.UUID);
    this.setProps({
      format: Characteristic.Formats.UINT8,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.RepeatMode.UUID = '00002005-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.RepeatMode, Characteristic);
  CommunityTypes.RepeatMode.OFF = 0;
  CommunityTypes.RepeatMode.ONE = 1;
  CommunityTypes.RepeatMode.ALL = 2;

  CommunityTypes.PlaybackSpeed = function() {
    Characteristic.call(this, 'Playback Speed', CommunityTypes.PlaybackSpeed.UUID);
    this.setProps({
      format: Characteristic.Formats.FLOAT,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.PlaybackSpeed.UUID = '00002006-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.PlaybackSpeed, Characteristic);

  CommunityTypes.MediaCurrentPosition = function() {
    Characteristic.call(this, 'Media Current Position', CommunityTypes.MediaCurrentPosition.UUID);
    this.setProps({
      format: Characteristic.Formats.FLOAT, // In seconds
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.MediaCurrentPosition.UUID = '00002007-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaCurrentPosition, Characteristic);

  CommunityTypes.MediaItemName = function() {
    Characteristic.call(this, 'Media Name', CommunityTypes.MediaItemName.UUID);
    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.MediaItemName.UUID = '00003001-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaItemName, Characteristic);

  CommunityTypes.MediaItemAlbumName = function() {
    Characteristic.call(this, 'Media Album Name', CommunityTypes.MediaItemAlbumName.UUID);
    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.MediaItemAlbumName.UUID = '00003002-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaItemAlbumName, Characteristic);

  CommunityTypes.MediaItemArtist = function() {
    Characteristic.call(this, 'Media Artist', CommunityTypes.MediaItemArtist.UUID);
    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.MediaItemArtist.UUID = '00003003-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaItemArtist, Characteristic);

  CommunityTypes.MediaItemDuration = function() {
    Characteristic.call(this, 'Media Duration', CommunityTypes.MediaItemDuration.UUID);
    this.setProps({
      format: Characteristic.Formats.FLOAT, // In seconds
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.MediaItemDuration.UUID = '00003005-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaItemDuration, Characteristic);

  CommunityTypes.StillImage = function() {
    Characteristic.call(this, 'Still Image', CommunityTypes.StillImage.UUID);
    this.setProps({
      format: Characteristic.Formats.DATA,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.StillImage.UUID = '00004001-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.StillImage, Characteristic);

  // Also known as MIME type...
  CommunityTypes.MediaTypeIdentifier = function() {
    Characteristic.call(this, 'Media Type Identifier', CommunityTypes.MediaTypeIdentifier.UUID);
    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
    });
    this.value = null;
  };
  CommunityTypes.MediaTypeIdentifier.UUID = '00004002-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaTypeIdentifier, Characteristic);

  CommunityTypes.MediaWidth = function() {
    Characteristic.call(this, 'Media Width', CommunityTypes.MediaWidth.UUID);
    this.setProps({
      format: Characteristic.Formats.UINT32,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.MediaWidth.UUID = '00004003-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaWidth, Characteristic);

  CommunityTypes.MediaHeight = function() {
    Characteristic.call(this, 'Media Width', CommunityTypes.MediaHeight.UUID);
    this.setProps({
      format: Characteristic.Formats.UINT32,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.MediaHeight.UUID = '00004004-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaHeight, Characteristic);
  
// courtesy of https://gist.github.com/gomfunkel/b1a046d729757120907c
  CommunityTypes.Volts = function() {
    Characteristic.call(this, 'Volts', CommunityTypes.Volts.UUID);
    // V = value / 10
    this.setProps({
      format:   Characteristic.Formats.UINT16,
      unit:     "volts",
      minValue: 0,
      maxValue: 65535,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.Volts.UUID = 'E863F10A-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.Volts, Characteristic);

  CommunityTypes.Amperes = function() {
    Characteristic.call(this, 'Amperes', CommunityTypes.Amperes.UUID);
    // A = value / 100
    this.setProps({
      format:   Characteristic.Formats.UINT16,
      unit:     "amps",
      minValue: 0,
      maxValue: 65535,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.Amperes.UUID = 'E863F126-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.Amperes, Characteristic);

  CommunityTypes.Watts = function() {
    // aka "Consumption"
    Characteristic.call(this, 'Watts', CommunityTypes.Watts.UUID);
    // W = value / 10
    this.setProps({
      format:   Characteristic.Formats.UINT16,
      unit:     "watts",
      minValue: 0,
      maxValue: 65535,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.Watts.UUID = 'E863F10D-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.Watts, Characteristic);

  CommunityTypes.VoltAmpere = function() {
    Characteristic.call(this, 'Volt-Amperes', CommunityTypes.VoltAmpere.UUID);
    // VA = value / 10
    this.setProps({
      format:   Characteristic.Formats.UINT16,
      unit:     "VA",
      minValue: 0,
      maxValue: 65535,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.VoltAmpere.UUID = 'E863F110-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.VoltAmpere, Characteristic);

  CommunityTypes.KilowattHours = function() {
    // aka "Total Consumption"
    Characteristic.call(this, 'Kilowatt-Hours', CommunityTypes.KilowattHours.UUID);
    // kWh = value / 1000
    this.setProps({
      format:   Characteristic.Formats.UINT32,
      unit:     "kWh",
      minValue: 0,
      maxValue: 65535,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.KilowattHours.UUID = 'E863F10C-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.KilowattHours, Characteristic);

  CommunityTypes.KilowattVoltAmpereHour = function() {
    Characteristic.call(this, 'Kilovolt-Ampere-Hours', CommunityTypes.KilowattVoltAmpereHour.UUID);
    // kVAh = value / 1000
    this.setProps({
      format:   Characteristic.Formats.UINT32,
      unit:     "kVAh",
      minValue: 0,
      maxValue: 65535,
      minStep:  1,
      perms:    [ Characteristic.Perms.READ, Characteristic.Perms.NOTIFY ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.KilowattVoltAmpereHour.UUID = 'E863F127-079E-48FF-8F27-9C2605A29F52';
  inherits(CommunityTypes.KilowattVoltAmpereHour, Characteristic);

// courtesy of https://github.com/robi-van-kinobi/homebridge-cubesensors

  CommunityTypes.AtmosphericPressureLevel = function () {
    Characteristic.call(this, 'barometric pressure', CommunityTypes.AtmosphericPressureLevel.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT8,
      unit:     "mbar",
      minValue: 800,
      maxValue: 1200,
      minStep:  1,
      perms:    [
        Characteristic.Perms.READ,
        Characteristic.Perms.NOTIFY
      ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.AtmosphericPressureLevel.UUID = '28FDA6BC-9C2A-4DEA-AAFD-B49DB6D155AB';
  inherits(CommunityTypes.AtmosphericPressureLevel, Characteristic);

  CommunityTypes.NoiseLevel = function () {
    Characteristic.call(this, 'noise level', CommunityTypes.NoiseLevel.UUID);
    this.setProps({
      format:   Characteristic.Formats.UINT8,
      unit:     "dB",
      minValue: 0,
      maxValue: 200,
      minStep:  1,
      perms:    [
        Characteristic.Perms.READ,
        Characteristic.Perms.NOTIFY
      ]
    });
    this.value = this.getDefaultValue();
  };
  CommunityTypes.NoiseLevel.UUID = '2CD7B6FD-419A-4740-8995-E3BFE43735AB';
  inherits(CommunityTypes.NoiseLevel, Characteristic);

  // Services

  CommunityTypes.AudioDeviceService = function(displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.AudioDeviceService.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.AudioVolume);

    // Optional Characteristics
    this.addOptionalCharacteristic(CommunityTypes.Muting);
    this.addOptionalCharacteristic(Characteristic.Name);
  };
  CommunityTypes.AudioDeviceService.UUID = '00000001-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.AudioDeviceService, Service);

  CommunityTypes.PlaybackDeviceService = function(displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.PlaybackDeviceService.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.PlaybackState);

    // Optional Characteristics
    this.addOptionalCharacteristic(CommunityTypes.SkipForward);
    this.addOptionalCharacteristic(CommunityTypes.SkipBackward);
    this.addOptionalCharacteristic(CommunityTypes.ShuffleMode);
    this.addOptionalCharacteristic(CommunityTypes.RepeatMode);
    this.addOptionalCharacteristic(CommunityTypes.PlaybackSpeed);
    this.addOptionalCharacteristic(CommunityTypes.MediaCurrentPosition);
    this.addOptionalCharacteristic(CommunityTypes.MediaItemName);
    this.addOptionalCharacteristic(CommunityTypes.MediaItemAlbumName);
    this.addOptionalCharacteristic(CommunityTypes.MediaItemArtist);
    this.addOptionalCharacteristic(CommunityTypes.MediaItemDuration);
    this.addOptionalCharacteristic(Characteristic.Name);
    // Artwork characteristics...would be better reported in a separate service?
    this.addOptionalCharacteristic(CommunityTypes.StillImage);
    this.addOptionalCharacteristic(CommunityTypes.MediaTypeIdentifier);
    this.addOptionalCharacteristic(CommunityTypes.MediaWidth);
    this.addOptionalCharacteristic(CommunityTypes.MediaHeight);
  };
  CommunityTypes.PlaybackDeviceService.UUID = '00000002-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.PlaybackDeviceService, Service);

  // A media information service that has no playback controls, for e.g. DAB radio...
  CommunityTypes.MediaInformationService = function(displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.MediaInformationService.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.MediaItemName);

    // Optional Characteristics
    this.addOptionalCharacteristic(CommunityTypes.MediaItemAlbumName);
    this.addOptionalCharacteristic(CommunityTypes.MediaItemArtist);
    this.addOptionalCharacteristic(CommunityTypes.MediaItemDuration);
    this.addOptionalCharacteristic(CommunityTypes.MediaCurrentPosition);
    this.addOptionalCharacteristic(Characteristic.Name);
    // Artwork characteristics...would be better reported in a separate service?
    this.addOptionalCharacteristic(CommunityTypes.StillImage);
    this.addOptionalCharacteristic(CommunityTypes.MediaTypeIdentifier);
    this.addOptionalCharacteristic(CommunityTypes.MediaWidth);
    this.addOptionalCharacteristic(CommunityTypes.MediaHeight);
  };
  CommunityTypes.MediaInformationService.UUID = '00000003-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.MediaInformationService, Service);

  CommunityTypes.StillImageService = function(displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.StillImageService.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.StillImage);
    this.addCharacteristic(CommunityTypes.MediaTypeIdentifier);

    // Optional Characteristics
    this.addOptionalCharacteristic(CommunityTypes.MediaWidth);
    this.addOptionalCharacteristic(CommunityTypes.MediaHeight);
    this.addOptionalCharacteristic(Characteristic.Name);
  };
  CommunityTypes.StillImageService.UUID = '00000004-0000-1000-8000-135D67EC4377';
  inherits(CommunityTypes.StillImageService, Service);

  CommunityTypes.SecurityCameraService = function(displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.SecurityCameraService.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(CommunityTypes.StillImageService);
    this.addCharacteristic(CommunityTypes.MediaTypeIdentifier);

    // Optional Characteristics
    this.addOptionalCharacteristic(CommunityTypes.Timestamp);
    this.addOptionalCharacteristic(CommunityTypes.MediaWidth);
    this.addOptionalCharacteristic(CommunityTypes.MediaHeight);
    this.addOptionalCharacteristic(CommunityTypes.VideoDataURL);
    this.addOptionalCharacteristic(CommunityTypes.AudioDataURL);
    this.addOptionalCharacteristic(Characteristic.MotionDetected);
    this.addOptionalCharacteristic(Characteristic.StatusTampered);
    this.addOptionalCharacteristic(Characteristic.Name);
  };
  CommunityTypes.SecurityCameraService.UUID = '00000005-0000-1000-8000-135D67EC4377';

// courtesy of https://github.com/robi-van-kinobi/homebridge-cubesensors
  CommunityTypes.AtmosphericPressureSensor = function (displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.AtmosphericPressureSensor.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(Characteristic.AtmosphericPressureLevel);

    // Optional Characteristics
    this.addOptionalCharacteristic(Characteristic.StatusActive);
    this.addOptionalCharacteristic(Characteristic.StatusFault);
    this.addOptionalCharacteristic(Characteristic.StatusLowBattery);
    this.addOptionalCharacteristic(Characteristic.StatusTampered);
    this.addOptionalCharacteristic(Characteristic.Name);
  };
  CommunityTypes.AtmosphericPressureSensor.UUID = 'B77831FD-D66A-46A4-B66D-FD7EE8DFE3CE';
  inherits(CommunityTypes.AtmosphericPressureSensor, Service);

  CommunityTypes.NoiseLevelSensor = function (displayName, subtype) {
    Service.call(this, displayName, CommunityTypes.NoiseLevelSensor.UUID, subtype);

    // Required Characteristics
    this.addCharacteristic(Characteristic.NoiseLevel);

    // Optional Characteristics
    this.addOptionalCharacteristic(Characteristic.StatusActive);
    this.addOptionalCharacteristic(Characteristic.StatusFault);
    this.addOptionalCharacteristic(Characteristic.StatusLowBattery);
    this.addOptionalCharacteristic(Characteristic.StatusTampered);
    this.addOptionalCharacteristic(Characteristic.Name);
  };
  CommunityTypes.NoiseLevelSensor.UUID = '28FDA6BC-9C2A-4DEA-AAFD-B49DB6D155AB';
  inherits(CommunityTypes.NoiseLevelSensor, Service);

  return CommunityTypes;
};


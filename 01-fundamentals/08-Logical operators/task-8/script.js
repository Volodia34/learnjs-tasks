// Runs.
if (-1 || 0) alert( 'first' );

// Doesn't run
if (-1 && 0) alert( 'second' );

// so -1 && 1 executes first, giving us the chain:
if (null || -1 && 1) alert( 'third' );

interface TooltipOptions {
    text: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
}

/**
 * Initializes a tooltip with the given options.
 * 
 * @param {TooltipOptions} options - Tooltip options.
 */
function initializeTooltip(options: TooltipOptions): void {
    // Set default values for optional properties
    const { text, position = 'top', delay = 0 } = options;

    // Implementation for initializing the tooltip
    console.log(`Text: ${text}, Position: ${position}, Delay: ${delay}`);
}

// Example usage
initializeTooltip({ text: 'This is a tooltip', position: 'bottom', delay: 200 });

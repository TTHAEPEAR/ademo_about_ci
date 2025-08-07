import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Banner from './Banner';

describe('Banner Component', () => {
    it('renders correctly', () => {
        render(<Banner />);
        expect(screen.getByText(/banner/i)).toBeInTheDocument();
    });
    
    it('displays the correct title', () => {
        render(<Banner title="Welcome to the Homepage" />);
        expect(screen.getByText(/welcome to the homepage/i)).toBeInTheDocument();
    });
});
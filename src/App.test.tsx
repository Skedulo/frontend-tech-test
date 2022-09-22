import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';
import { QuestionOne } from './question-one/QuestionOne';
import { IDataService, Job } from "./common/types";

const data = [
  {
    name: 'Build a fence',
    start: '2018-09-01T10:00:00Z',
    end: '2018-09-01T11:00:00Z',
    location: 'Brisbane',
  },
  {
    name: 'Build a shed',
    start: '2018-09-01T10:15:00Z',
    end: '2018-09-01T11:00:00Z',
    location: 'Brisbane',
  },
  {
    name: 'Shield some wiring',
    start: '2018-09-01T09:00:00Z',
    end: '2018-09-01T13:00:00Z',
    location: 'Brisbane',
  },
  {
    name: 'Pick up a trailer',
    start: '2018-09-01T13:00:00Z',
    end: '2018-09-01T13:15:00Z',
    location: 'Brisbane',
  },
] as Job[];

const service: IDataService = {
  getJobsWithSearchTerm: (searchTerm: string) => {
    return Promise.resolve(
      data.filter(({ name }) => name.toLowerCase().includes(searchTerm))
    );
  },
  getJobs: () => {
    return Promise.resolve(data);
  },
};

describe('Skedulo tech test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('renders app', () => {
    render(<App />);
  });

  test('can search for data', async () => {
    const { getByLabelText } = render(<QuestionOne service={service} />);
    const input = getByLabelText(/search/i);
    fireEvent.input(input, { target: { value: 'build' } });

    await waitFor(async () => {
      expect(
        screen.getByText((node) => node.includes('Build a fence'))
      ).toBeInTheDocument();
      expect(
        screen.getByText((node) => node.includes('Build a shed'))
      ).toBeInTheDocument();
    });
  });
  test('only searches when more than 3 characters', async () => {
    const spyService = {
      getJobsWithSearchTerm: jest.fn(service.getJobsWithSearchTerm),
      getJobs: jest.fn(service.getJobs),
    };

    const { getByLabelText } = render(<QuestionOne service={spyService} />);
    const input = getByLabelText(/search/i);
    fireEvent.input(input, { target: { value: 'bu' } });

    jest.advanceTimersByTime(1000);
    const build = screen.queryByText((node) => node.includes('Build'));
    expect(build).not.toBeInTheDocument();
    expect(spyService.getJobsWithSearchTerm).not.toHaveBeenCalled();
    expect(spyService.getJobs).not.toHaveBeenCalled();
  });

  test('clears results when input clears', async () => {
    const { getByLabelText } = render(<QuestionOne service={service} />);
    const input = getByLabelText(/search/i);
    fireEvent.input(input, { target: { value: 'build' } });

    await waitFor(async () => {
      expect(
        screen.getByText((node) => node.includes('Build a fence'))
      ).toBeInTheDocument();
      expect(
        screen.getByText((node) => node.includes('Build a shed'))
      ).toBeInTheDocument();
    });

    fireEvent.input(input, { target: { value: '' } });
    await waitFor(async () => {
      expect(
        screen.queryByText((node) => node.includes('Build a fence'))
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText((node) => node.includes('Build a shed'))
      ).not.toBeInTheDocument();
    });
  });
});

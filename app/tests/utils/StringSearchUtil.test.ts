import { StringSearchUtil } from '../../typeScript/Utils/stringSearchUtil/index';

describe('StringSearchUtil', () => {
    describe('searchCriteria', () => {
        test('Should return true when search term is exists in criterions array', () => {
            const criterions = [
                'TypeScript',
                'JavaScript',
                'React',
                '.NET Core'
            ];
            const result = StringSearchUtil.searchCriteria(criterions, 'React')
            expect(result).toBe(true);
        });
        test('Should return true when there are multiple search terms exist', () => {
            const criterions = [
                'TypeScript',
                'JavaScript',
                'React',
                '.NET Core'
            ];
            const result = StringSearchUtil.searchCriteria(criterions, 'Basic TypeScript')
            expect(result).toBe(true);
        });
        test('Should return true when matching on different case', () => {
            const criterions = [
                'TypeScript',
                'JavaScript',
                'React',
                '.NET Core'
            ];
            const result = StringSearchUtil.searchCriteria(criterions, 'typescript')
            expect(result).toBe(true);
        });
        test('Should return false when search term are empty', () => {
            const criterions = [];
            const result = StringSearchUtil.searchCriteria(criterions, 'React')
            expect(result).toBe(false);
        });
    });
    describe('searchDoesNotExist', () => {
        test('Should return false if params are empty', () => {
            const result = StringSearchUtil.searchDoesNotExist();
            expect(result).toBe(false);
        });
        test('Should return false if search term already exists', () => {
            const result = StringSearchUtil.searchDoesNotExist('React', 'React');
            expect(result).toBe(false);
        });
        test('Should return true if search term does not already exist', () => {
            const result = StringSearchUtil.searchDoesNotExist('Vue', 'React');
            expect(result).toBe(true);
        });
        test('Should return false and ignore case difference', () => {
            const result = StringSearchUtil.searchDoesNotExist('typescript', 'TypeScript');
            expect(result).toBe(false);
        });
    })
    describe('combineSearchTerms', () => {
        test('Should return an empty string if params are empty', () => {
            const result = StringSearchUtil.combineSearchTerms();
            expect(result).toBe('');
        });
        test('Should return both existing and current search terms', () => {
            const result = StringSearchUtil.combineSearchTerms('React', '.NET Core');
            expect(result).toBe('React .NET Core');
        });
        test('Should return only existing if current search term is empty', () => {
            const result = StringSearchUtil.combineSearchTerms('React');
            expect(result).toBe('React');
        });
    })
    describe('removeSearchTerm', () => {
        test('Should return the existing value, without the term passed', () => {
            const existingSearch = '.NET Core React Angular';
            const result = StringSearchUtil.removeSearchTerm(existingSearch, 'React');
            expect(result).toBe('.NET Core Angular');
        });
        test('Should return the existing value, without the term passed when spaces', () => {
            const existingSearch = '.NET Core React Angular';
            const result = StringSearchUtil.removeSearchTerm(existingSearch, '.NET Core');
            expect(result).toBe('React Angular');
        })
    })
});
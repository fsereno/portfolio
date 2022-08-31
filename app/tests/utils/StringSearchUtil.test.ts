import { expect } from 'chai';
import { StringSearchUtil } from '../../typeScript/Utils/stringSearchUtil/index';

describe('StringSearchUtil', () => {
    describe('searchCriteria', () => {
        it('Should return true when search term is exists in criterions array', () => {
            const criterions = [
                'TypeScript',
                'JavaScript',
                'React',
                '.NET Core'
            ];
            const result = StringSearchUtil.searchCriteria(criterions, 'React')
            expect(result).to.equal(true);
        });
        it('Should return true when there are multiple search terms exist', () => {
            const criterions = [
                'TypeScript',
                'JavaScript',
                'React',
                '.NET Core'
            ];
            const result = StringSearchUtil.searchCriteria(criterions, 'Basic TypeScript')
            expect(result).to.equal(true);
        });
        it('Should return true when matching on different case', () => {
            const criterions = [
                'TypeScript',
                'JavaScript',
                'React',
                '.NET Core'
            ];
            const result = StringSearchUtil.searchCriteria(criterions, 'typescript')
            expect(result).to.equal(true);
        });
        it('Should return false when search term are empty', () => {
            const criterions = [];
            const result = StringSearchUtil.searchCriteria(criterions, 'React')
            expect(result).to.equal(false);
        });
    });
    describe('searchDoesNotExist', () => {
        it('Should return false if params are empty', () => {
            const result = StringSearchUtil.searchDoesNotExist();
            expect(result).to.equal(false);
        });
        it('Should return false if search term already exists', () => {
            const result = StringSearchUtil.searchDoesNotExist('React', 'React');
            expect(result).to.equal(false);
        });
        it('Should return true if search term does not already exist', () => {
            const result = StringSearchUtil.searchDoesNotExist('Vue', 'React');
            expect(result).to.equal(true);
        });
        it('Should return false and ignore case difference', () => {
            const result = StringSearchUtil.searchDoesNotExist('typescript', 'TypeScript');
            expect(result).to.equal(false);
        });
    })
    describe('combineSearchTerms', () => {
        it('Should return an empty string if params are empty', () => {
            const result = StringSearchUtil.combineSearchTerms();
            expect(result).to.equal('');
        });
        it('Should return both existing and current search terms', () => {
            const result = StringSearchUtil.combineSearchTerms('React', '.NET Core');
            expect(result).to.equal('React .NET Core');
        });
        it('Should return only existing if current search term is empty', () => {
            const result = StringSearchUtil.combineSearchTerms('React');
            expect(result).to.equal('React');
        });
    })
    describe('removeSearchTerm', () => {
        it('Should return the existing value, without the term passed', () => {
            const existingSearch = '.NET Core React Angular';
            const result = StringSearchUtil.removeSearchTerm(existingSearch, 'React');
            expect(result).to.equal('.NET Core Angular');
        });
        it('Should return the existing value, without the term passed when spaces', () => {
            const existingSearch = '.NET Core React Angular';
            const result = StringSearchUtil.removeSearchTerm(existingSearch, '.NET Core');
            expect(result).to.equal('React Angular');
        })
    })
});